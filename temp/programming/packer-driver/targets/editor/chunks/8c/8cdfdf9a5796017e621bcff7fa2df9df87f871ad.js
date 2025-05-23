System.register(["__unresolved_0", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var WordArray, Hasher, X64Word, SHA3Algo, RHO_OFFSETS, PI_INDEXES, ROUND_CONSTANTS, _x, _y, t, newX, newY, x, y, LFSR, i, roundConstantMsw, roundConstantLsw, j, bitPosition, T, i, SHA3, HmacSHA3;

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

      for (i = 0; i < 25; i += 1) {
        T[i] = X64Word.create();
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
          const state = this._state;

          for (let i = 0; i < 25; i += 1) {
            state[i] = new X64Word();
          }

          this.blockSize = (1600 - 2 * this.cfg.outputLength) / 32;
        }

        _doProcessBlock(M, offset) {
          // Shortcuts
          const state = this._state;
          const nBlockSizeLanes = this.blockSize / 2; // Absorb

          for (let i = 0; i < nBlockSizeLanes; i += 1) {
            // Shortcuts
            let M2i = M[offset + 2 * i];
            let M2i1 = M[offset + 2 * i + 1]; // Swap endian

            M2i = (M2i << 8 | M2i >>> 24) & 0x00ff00ff | (M2i << 24 | M2i >>> 8) & 0xff00ff00;
            M2i1 = (M2i1 << 8 | M2i1 >>> 24) & 0x00ff00ff | (M2i1 << 24 | M2i1 >>> 8) & 0xff00ff00; // Absorb message into state

            const lane = state[i];
            lane.high ^= M2i1;
            lane.low ^= M2i;
          } // Rounds


          for (let round = 0; round < 24; round += 1) {
            // Theta
            for (let x = 0; x < 5; x += 1) {
              // Mix column lanes
              let tMsw = 0;
              let tLsw = 0;

              for (let y = 0; y < 5; y += 1) {
                const lane = state[x + 5 * y];
                tMsw ^= lane.high;
                tLsw ^= lane.low;
              } // Temporary values


              const Tx = T[x];
              Tx.high = tMsw;
              Tx.low = tLsw;
            }

            for (let x = 0; x < 5; x += 1) {
              // Shortcuts
              const Tx4 = T[(x + 4) % 5];
              const Tx1 = T[(x + 1) % 5];
              const Tx1Msw = Tx1.high;
              const Tx1Lsw = Tx1.low; // Mix surrounding columns

              const tMsw = Tx4.high ^ (Tx1Msw << 1 | Tx1Lsw >>> 31);
              const tLsw = Tx4.low ^ (Tx1Lsw << 1 | Tx1Msw >>> 31);

              for (let y = 0; y < 5; y += 1) {
                const lane = state[x + 5 * y];
                lane.high ^= tMsw;
                lane.low ^= tLsw;
              }
            } // Rho Pi


            for (let laneIndex = 1; laneIndex < 25; laneIndex += 1) {
              let tMsw;
              let tLsw; // Shortcuts

              const lane = state[laneIndex];
              const laneMsw = lane.high;
              const laneLsw = lane.low;
              const rhoOffset = RHO_OFFSETS[laneIndex]; // Rotate lanes

              if (rhoOffset < 32) {
                tMsw = laneMsw << rhoOffset | laneLsw >>> 32 - rhoOffset;
                tLsw = laneLsw << rhoOffset | laneMsw >>> 32 - rhoOffset;
              } else
                /* if (rhoOffset >= 32) */
                {
                  tMsw = laneLsw << rhoOffset - 32 | laneMsw >>> 64 - rhoOffset;
                  tLsw = laneMsw << rhoOffset - 32 | laneLsw >>> 64 - rhoOffset;
                } // Transpose lanes


              const TPiLane = T[PI_INDEXES[laneIndex]];
              TPiLane.high = tMsw;
              TPiLane.low = tLsw;
            } // Rho pi at x = y = 0


            const T0 = T[0];
            const state0 = state[0];
            T0.high = state0.high;
            T0.low = state0.low; // Chi

            for (let x = 0; x < 5; x += 1) {
              for (let y = 0; y < 5; y += 1) {
                // Shortcuts
                const laneIndex = x + 5 * y;
                const lane = state[laneIndex];
                const TLane = T[laneIndex];
                const Tx1Lane = T[(x + 1) % 5 + 5 * y];
                const Tx2Lane = T[(x + 2) % 5 + 5 * y]; // Mix rows

                lane.high = TLane.high ^ ~Tx1Lane.high & Tx2Lane.high;
                lane.low = TLane.low ^ ~Tx1Lane.low & Tx2Lane.low;
              }
            } // Iota


            const lane = state[0];
            const roundConstant = ROUND_CONSTANTS[round];
            lane.high ^= roundConstant.high;
            lane.low ^= roundConstant.low;
          }
        }

        _doFinalize() {
          // Shortcuts
          const data = this._data;
          const dataWords = data.words;
          const nBitsLeft = data.sigBytes * 8;
          const blockSizeBits = this.blockSize * 32; // Add padding

          dataWords[nBitsLeft >>> 5] |= 0x1 << 24 - nBitsLeft % 32;
          dataWords[(Math.ceil((nBitsLeft + 1) / blockSizeBits) * blockSizeBits >>> 5) - 1] |= 0x80;
          data.sigBytes = dataWords.length * 4; // Hash final blocks

          this._process(); // Shortcuts


          const state = this._state;
          const outputLengthBytes = this.cfg.outputLength / 8;
          const outputLengthLanes = outputLengthBytes / 8; // Squeeze

          const hashWords = [];

          for (let i = 0; i < outputLengthLanes; i += 1) {
            // Shortcuts
            const lane = state[i];
            let laneMsw = lane.high;
            let laneLsw = lane.low; // Swap endian

            laneMsw = (laneMsw << 8 | laneMsw >>> 24) & 0x00ff00ff | (laneMsw << 24 | laneMsw >>> 8) & 0xff00ff00;
            laneLsw = (laneLsw << 8 | laneLsw >>> 24) & 0x00ff00ff | (laneLsw << 24 | laneLsw >>> 8) & 0xff00ff00; // Squeeze state to retrieve hash

            hashWords.push(laneLsw);
            hashWords.push(laneMsw);
          } // Return final computed hash


          return new WordArray(hashWords, outputLengthBytes);
        }

        clone() {
          const clone = super.clone.call(this);
          clone._state = this._state.slice(0);
          const state = clone._state;

          for (let i = 0; i < 25; i += 1) {
            state[i] = state[i].clone();
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
//# sourceMappingURL=8cdfdf9a5796017e621bcff7fa2df9df87f871ad.js.map