System.register(["__unresolved_0"], function (_export, _context) {
  "use strict";

  var StreamCipher, RabbitAlgo, S, C_, G, Rabbit;

  function nextState() {
    // Shortcuts
    var X = this._X;
    var C = this._C; // Save old counter values

    for (var i = 0; i < 8; i += 1) {
      C_[i] = C[i];
    } // Calculate new counter values


    C[0] = C[0] + 0x4d34d34d + this._b | 0;
    C[1] = C[1] + 0xd34d34d3 + (C[0] >>> 0 < C_[0] >>> 0 ? 1 : 0) | 0;
    C[2] = C[2] + 0x34d34d34 + (C[1] >>> 0 < C_[1] >>> 0 ? 1 : 0) | 0;
    C[3] = C[3] + 0x4d34d34d + (C[2] >>> 0 < C_[2] >>> 0 ? 1 : 0) | 0;
    C[4] = C[4] + 0xd34d34d3 + (C[3] >>> 0 < C_[3] >>> 0 ? 1 : 0) | 0;
    C[5] = C[5] + 0x34d34d34 + (C[4] >>> 0 < C_[4] >>> 0 ? 1 : 0) | 0;
    C[6] = C[6] + 0x4d34d34d + (C[5] >>> 0 < C_[5] >>> 0 ? 1 : 0) | 0;
    C[7] = C[7] + 0xd34d34d3 + (C[6] >>> 0 < C_[6] >>> 0 ? 1 : 0) | 0;
    this._b = C[7] >>> 0 < C_[7] >>> 0 ? 1 : 0; // Calculate the g-values

    for (var _i = 0; _i < 8; _i += 1) {
      var gx = X[_i] + C[_i]; // Construct high and low argument for squaring

      var ga = gx & 0xffff;
      var gb = gx >>> 16; // Calculate high and low result of squaring

      var gh = ((ga * ga >>> 17) + ga * gb >>> 15) + gb * gb;
      var gl = ((gx & 0xffff0000) * gx | 0) + ((gx & 0x0000ffff) * gx | 0); // High XOR low

      G[_i] = gh ^ gl;
    } // Calculate new state values


    X[0] = G[0] + (G[7] << 16 | G[7] >>> 16) + (G[6] << 16 | G[6] >>> 16) | 0;
    X[1] = G[1] + (G[0] << 8 | G[0] >>> 24) + G[7] | 0;
    X[2] = G[2] + (G[1] << 16 | G[1] >>> 16) + (G[0] << 16 | G[0] >>> 16) | 0;
    X[3] = G[3] + (G[2] << 8 | G[2] >>> 24) + G[1] | 0;
    X[4] = G[4] + (G[3] << 16 | G[3] >>> 16) + (G[2] << 16 | G[2] >>> 16) | 0;
    X[5] = G[5] + (G[4] << 8 | G[4] >>> 24) + G[3] | 0;
    X[6] = G[6] + (G[5] << 16 | G[5] >>> 16) + (G[4] << 16 | G[4] >>> 16) | 0;
    X[7] = G[7] + (G[6] << 8 | G[6] >>> 24) + G[5] | 0;
  }
  /**
   * Rabbit stream cipher algorithm
   */


  _export("RabbitAlgo", void 0);

  return {
    setters: [function (_unresolved_) {
      StreamCipher = _unresolved_.StreamCipher;
    }],
    execute: function () {
      // Reusable objects
      S = [];
      C_ = [];
      G = [];

      _export("RabbitAlgo", RabbitAlgo = class RabbitAlgo extends StreamCipher {
        constructor() {
          super(...arguments);
          this.blockSize = 128 / 32;
          this.ivSize = 64 / 32;
        }

        _doReset() {
          // Shortcuts
          var K = this._key.words;
          var {
            iv
          } = this.cfg; // Swap endian

          for (var i = 0; i < 4; i += 1) {
            K[i] = (K[i] << 8 | K[i] >>> 24) & 0x00ff00ff | (K[i] << 24 | K[i] >>> 8) & 0xff00ff00;
          } // Generate initial state values


          this._X = [K[0], K[3] << 16 | K[2] >>> 16, K[1], K[0] << 16 | K[3] >>> 16, K[2], K[1] << 16 | K[0] >>> 16, K[3], K[2] << 16 | K[1] >>> 16];
          var X = this._X; // Generate initial counter values

          this._C = [K[2] << 16 | K[2] >>> 16, K[0] & 0xffff0000 | K[1] & 0x0000ffff, K[3] << 16 | K[3] >>> 16, K[1] & 0xffff0000 | K[2] & 0x0000ffff, K[0] << 16 | K[0] >>> 16, K[2] & 0xffff0000 | K[3] & 0x0000ffff, K[1] << 16 | K[1] >>> 16, K[3] & 0xffff0000 | K[0] & 0x0000ffff];
          var C = this._C; // Carry bit

          this._b = 0; // Iterate the system four times

          for (var _i2 = 0; _i2 < 4; _i2 += 1) {
            nextState.call(this);
          } // Modify the counters


          for (var _i3 = 0; _i3 < 8; _i3 += 1) {
            C[_i3] ^= X[_i3 + 4 & 7];
          } // IV setup


          if (iv) {
            // Shortcuts
            var IV = iv.words;
            var IV_0 = IV[0];
            var IV_1 = IV[1]; // Generate four subvectors

            var i0 = (IV_0 << 8 | IV_0 >>> 24) & 0x00ff00ff | (IV_0 << 24 | IV_0 >>> 8) & 0xff00ff00;
            var i2 = (IV_1 << 8 | IV_1 >>> 24) & 0x00ff00ff | (IV_1 << 24 | IV_1 >>> 8) & 0xff00ff00;
            var i1 = i0 >>> 16 | i2 & 0xffff0000;
            var i3 = i2 << 16 | i0 & 0x0000ffff; // Modify counter values

            C[0] ^= i0;
            C[1] ^= i1;
            C[2] ^= i2;
            C[3] ^= i3;
            C[4] ^= i0;
            C[5] ^= i1;
            C[6] ^= i2;
            C[7] ^= i3; // Iterate the system four times

            for (var _i4 = 0; _i4 < 4; _i4 += 1) {
              nextState.call(this);
            }
          }
        }

        _doProcessBlock(M, offset) {
          var _M = M; // Shortcut

          var X = this._X; // Iterate the system

          nextState.call(this); // Generate four keystream words

          S[0] = X[0] ^ X[5] >>> 16 ^ X[3] << 16;
          S[1] = X[2] ^ X[7] >>> 16 ^ X[5] << 16;
          S[2] = X[4] ^ X[1] >>> 16 ^ X[7] << 16;
          S[3] = X[6] ^ X[3] >>> 16 ^ X[1] << 16;

          for (var i = 0; i < 4; i += 1) {
            // Swap endian
            S[i] = (S[i] << 8 | S[i] >>> 24) & 0x00ff00ff | (S[i] << 24 | S[i] >>> 8) & 0xff00ff00; // Encrypt

            _M[offset + i] ^= S[i];
          }
        }

      });
      /**
       * Shortcut functions to the cipher's object interface.
       *
       * @example
       *
       *     var ciphertext = CryptoJS.Rabbit.encrypt(message, key, cfg);
       *     var plaintext  = CryptoJS.Rabbit.decrypt(ciphertext, key, cfg);
       */


      _export("Rabbit", Rabbit = StreamCipher._createHelper(RabbitAlgo));
    }
  };
});
//# sourceMappingURL=10ca2115e932d7a53509f6db863fdfe3bf12dc54.js.map