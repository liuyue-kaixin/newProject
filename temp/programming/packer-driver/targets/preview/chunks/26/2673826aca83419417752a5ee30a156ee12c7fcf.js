System.register(["__unresolved_0", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var WordArray, Hasher, X64Word, SHA3Algo, RHO_OFFSETS, PI_INDEXES, ROUND_CONSTANTS, _x, _y, t, newX, newY, x, y, LFSR, i, roundConstantMsw, roundConstantLsw, j, bitPosition, T, _i, SHA3, HmacSHA3;

  _export("SHA3Algo", void 0);

  return {
    setters: [function (_unresolved_) {
      WordArray = _unresolved_.WordArray;
      Hasher = _unresolved_.Hasher;
    }, function (_unresolved_2) {
      X64Word = _unresolved_2.X64Word;
    }],
    execute: function () {
      // Constants tables
      RHO_OFFSETS = [];
      PI_INDEXES = [];
      ROUND_CONSTANTS = []; // Compute Constants
      // Compute rho offset constants

      _x = 1;
      _y = 0;

      for (t = 0; t < 24; t += 1) {
        RHO_OFFSETS[_x + 5 * _y] = (t + 1) * (t + 2) / 2 % 64;
        newX = _y % 5;
        newY = (2 * _x + 3 * _y) % 5;
        _x = newX;
        _y = newY;
      } // Compute pi index constants


      for (x = 0; x < 5; x += 1) {
        for (y = 0; y < 5; y += 1) {
          PI_INDEXES[x + 5 * y] = y + (2 * x + 3 * y) % 5 * 5;
        }
      } // Compute round constants


      LFSR = 0x01;

      for (i = 0; i < 24; i += 1) {
        roundConstantMsw = 0;
        roundConstantLsw = 0;

        for (j = 0; j < 7; j += 1) {
          if (LFSR & 0x01) {
            bitPosition = (1 << j) - 1;

            if (bitPosition < 32) {
              roundConstantLsw ^= 1 << bitPosition;
            } else
              /* if (bitPosition >= 32) */
              {
                roundConstantMsw ^= 1 << bitPosition - 32;
              }
          } // Compute next LFSR


          if (LFSR & 0x80) {
            // Primitive polynomial over GF(2): x^8 + x^6 + x^5 + x^4 + 1
            LFSR = LFSR << 1 ^ 0x71;
          } else {
            LFSR <<= 1;
          }
        }

        ROUND_CONSTANTS[i] = X64Word.create(roundConstantMsw, roundConstantLsw);
      } // Reusable objects for temporary values


      T = [];

      for (_i = 0; _i < 25; _i += 1) {
        T[_i] = X64Word.create();
      }
      /**
       * SHA-3 hash algorithm.
       */


      _export("SHA3Algo", SHA3Algo = class SHA3Algo extends Hasher {
        constructor(cfg) {
          /**
           * Configuration options.
           *
           * @property {number} outputLength
           *   The desired number of bits in the output hash.
           *   Only values permitted are: 224, 256, 384, 512.
           *   Default: 512
           */
          super(Object.assign({
            outputLength: 512
          }, cfg));
        }

        _doReset() {
          this._state = [];
          var state = this._state;

          for (var _i2 = 0; _i2 < 25; _i2 += 1) {
            state[_i2] = new X64Word();
          }

          this.blockSize = (1600 - 2 * this.cfg.outputLength) / 32;
        }

        _doProcessBlock(M, offset) {
          // Shortcuts
          var state = this._state;
          var nBlockSizeLanes = this.blockSize / 2; // Absorb

          for (var _i3 = 0; _i3 < nBlockSizeLanes; _i3 += 1) {
            // Shortcuts
            var M2i = M[offset + 2 * _i3];
            var M2i1 = M[offset + 2 * _i3 + 1]; // Swap endian

            M2i = (M2i << 8 | M2i >>> 24) & 0x00ff00ff | (M2i << 24 | M2i >>> 8) & 0xff00ff00;
            M2i1 = (M2i1 << 8 | M2i1 >>> 24) & 0x00ff00ff | (M2i1 << 24 | M2i1 >>> 8) & 0xff00ff00; // Absorb message into state

            var lane = state[_i3];
            lane.high ^= M2i1;
            lane.low ^= M2i;
          } // Rounds


          for (var round = 0; round < 24; round += 1) {
            // Theta
            for (var _x2 = 0; _x2 < 5; _x2 += 1) {
              // Mix column lanes
              var tMsw = 0;
              var tLsw = 0;

              for (var _y2 = 0; _y2 < 5; _y2 += 1) {
                var _lane = state[_x2 + 5 * _y2];
                tMsw ^= _lane.high;
                tLsw ^= _lane.low;
              } // Temporary values


              var Tx = T[_x2];
              Tx.high = tMsw;
              Tx.low = tLsw;
            }

            for (var _x3 = 0; _x3 < 5; _x3 += 1) {
              // Shortcuts
              var Tx4 = T[(_x3 + 4) % 5];
              var Tx1 = T[(_x3 + 1) % 5];
              var Tx1Msw = Tx1.high;
              var Tx1Lsw = Tx1.low; // Mix surrounding columns

              var _tMsw = Tx4.high ^ (Tx1Msw << 1 | Tx1Lsw >>> 31);

              var _tLsw = Tx4.low ^ (Tx1Lsw << 1 | Tx1Msw >>> 31);

              for (var _y3 = 0; _y3 < 5; _y3 += 1) {
                var _lane2 = state[_x3 + 5 * _y3];
                _lane2.high ^= _tMsw;
                _lane2.low ^= _tLsw;
              }
            } // Rho Pi


            for (var laneIndex = 1; laneIndex < 25; laneIndex += 1) {
              var _tMsw2 = void 0;

              var _tLsw2 = void 0; // Shortcuts


              var _lane3 = state[laneIndex];
              var laneMsw = _lane3.high;
              var laneLsw = _lane3.low;
              var rhoOffset = RHO_OFFSETS[laneIndex]; // Rotate lanes

              if (rhoOffset < 32) {
                _tMsw2 = laneMsw << rhoOffset | laneLsw >>> 32 - rhoOffset;
                _tLsw2 = laneLsw << rhoOffset | laneMsw >>> 32 - rhoOffset;
              } else
                /* if (rhoOffset >= 32) */
                {
                  _tMsw2 = laneLsw << rhoOffset - 32 | laneMsw >>> 64 - rhoOffset;
                  _tLsw2 = laneMsw << rhoOffset - 32 | laneLsw >>> 64 - rhoOffset;
                } // Transpose lanes


              var TPiLane = T[PI_INDEXES[laneIndex]];
              TPiLane.high = _tMsw2;
              TPiLane.low = _tLsw2;
            } // Rho pi at x = y = 0


            var T0 = T[0];
            var state0 = state[0];
            T0.high = state0.high;
            T0.low = state0.low; // Chi

            for (var _x4 = 0; _x4 < 5; _x4 += 1) {
              for (var _y4 = 0; _y4 < 5; _y4 += 1) {
                // Shortcuts
                var _laneIndex = _x4 + 5 * _y4;

                var _lane4 = state[_laneIndex];
                var TLane = T[_laneIndex];
                var Tx1Lane = T[(_x4 + 1) % 5 + 5 * _y4];
                var Tx2Lane = T[(_x4 + 2) % 5 + 5 * _y4]; // Mix rows

                _lane4.high = TLane.high ^ ~Tx1Lane.high & Tx2Lane.high;
                _lane4.low = TLane.low ^ ~Tx1Lane.low & Tx2Lane.low;
              }
            } // Iota


            var _lane5 = state[0];
            var roundConstant = ROUND_CONSTANTS[round];
            _lane5.high ^= roundConstant.high;
            _lane5.low ^= roundConstant.low;
          }
        }

        _doFinalize() {
          // Shortcuts
          var data = this._data;
          var dataWords = data.words;
          var nBitsLeft = data.sigBytes * 8;
          var blockSizeBits = this.blockSize * 32; // Add padding

          dataWords[nBitsLeft >>> 5] |= 0x1 << 24 - nBitsLeft % 32;
          dataWords[(Math.ceil((nBitsLeft + 1) / blockSizeBits) * blockSizeBits >>> 5) - 1] |= 0x80;
          data.sigBytes = dataWords.length * 4; // Hash final blocks

          this._process(); // Shortcuts


          var state = this._state;
          var outputLengthBytes = this.cfg.outputLength / 8;
          var outputLengthLanes = outputLengthBytes / 8; // Squeeze

          var hashWords = [];

          for (var _i4 = 0; _i4 < outputLengthLanes; _i4 += 1) {
            // Shortcuts
            var lane = state[_i4];
            var laneMsw = lane.high;
            var laneLsw = lane.low; // Swap endian

            laneMsw = (laneMsw << 8 | laneMsw >>> 24) & 0x00ff00ff | (laneMsw << 24 | laneMsw >>> 8) & 0xff00ff00;
            laneLsw = (laneLsw << 8 | laneLsw >>> 24) & 0x00ff00ff | (laneLsw << 24 | laneLsw >>> 8) & 0xff00ff00; // Squeeze state to retrieve hash

            hashWords.push(laneLsw);
            hashWords.push(laneMsw);
          } // Return final computed hash


          return new WordArray(hashWords, outputLengthBytes);
        }

        clone() {
          var clone = super.clone.call(this);
          clone._state = this._state.slice(0);
          var state = clone._state;

          for (var _i5 = 0; _i5 < 25; _i5 += 1) {
            state[_i5] = state[_i5].clone();
          }

          return clone;
        }

      });
      /**
       * Shortcut function to the hasher's object interface.
       *
       * @param {WordArray|string} message The message to hash.
       *
       * @return {WordArray} The hash.
       *
       * @static
       *
       * @example
       *
       *     var hash = CryptoJS.SHA3('message');
       *     var hash = CryptoJS.SHA3(wordArray);
       */


      _export("SHA3", SHA3 = Hasher._createHelper(SHA3Algo));
      /**
       * Shortcut function to the HMAC's object interface.
       *
       * @param {WordArray|string} message The message to hash.
       * @param {WordArray|string} key The secret key.
       *
       * @return {WordArray} The HMAC.
       *
       * @static
       *
       * @example
       *
       *     var hmac = CryptoJS.HmacSHA3(message, key);
       */


      _export("HmacSHA3", HmacSHA3 = Hasher._createHmacHelper(SHA3Algo));
    }
  };
});
//# sourceMappingURL=2673826aca83419417752a5ee30a156ee12c7fcf.js.map