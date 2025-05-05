System.register(["__unresolved_0"], function (_export, _context) {
  "use strict";

  var StreamCipher, RC4Algo, RC4DropAlgo, RC4, RC4Drop;

  function generateKeystreamWord() {
    // Shortcuts
    const S = this._S;
    let i = this._i;
    let j = this._j; // Generate keystream word

    let keystreamWord = 0;

    for (let n = 0; n < 4; n += 1) {
      i = (i + 1) % 256;
      j = (j + S[i]) % 256; // Swap

      const t = S[i];
      S[i] = S[j];
      S[j] = t;
      keystreamWord |= S[(S[i] + S[j]) % 256] << 24 - n * 8;
    } // Update counters


    this._i = i;
    this._j = j;
    return keystreamWord;
  }
  /**
   * RC4 stream cipher algorithm.
   */


  _export({
    RC4Algo: void 0,
    RC4DropAlgo: void 0
  });

  return {
    setters: [function (_unresolved_) {
      StreamCipher = _unresolved_.StreamCipher;
    }],
    execute: function () {
      _export("RC4Algo", RC4Algo = class RC4Algo extends StreamCipher {
        _doReset() {
          // Shortcuts
          const key = this._key;
          const keyWords = key.words;
          const keySigBytes = key.sigBytes; // Init sbox

          this._S = [];
          const S = this._S;

          for (let i = 0; i < 256; i += 1) {
            S[i] = i;
          } // Key setup


          for (let i = 0, j = 0; i < 256; i += 1) {
            const keyByteIndex = i % keySigBytes;
            const keyByte = keyWords[keyByteIndex >>> 2] >>> 24 - keyByteIndex % 4 * 8 & 0xff;
            j = (j + S[i] + keyByte) % 256; // Swap

            const t = S[i];
            S[i] = S[j];
            S[j] = t;
          } // Counters


          this._j = 0;
          this._i = this._j;
        }

        _doProcessBlock(M, offset) {
          const _M = M;
          _M[offset] ^= generateKeystreamWord.call(this);
        }

      });

      RC4Algo.keySize = 256 / 32;
      RC4Algo.ivSize = 0;
      /**
       * Shortcut functions to the cipher's object interface.
       *
       * @example
       *
       *     var ciphertext = CryptoJS.RC4.encrypt(message, key, cfg);
       *     var plaintext  = CryptoJS.RC4.decrypt(ciphertext, key, cfg);
       */

      _export("RC4", RC4 = StreamCipher._createHelper(RC4Algo));
      /**
       * Modified RC4 stream cipher algorithm.
       */


      _export("RC4DropAlgo", RC4DropAlgo = class RC4DropAlgo extends RC4Algo {
        constructor(...args) {
          super(...args);
          /**
           * Configuration options.
           *
           * @property {number} drop The number of keystream words to drop. Default 192
           */

          Object.assign(this.cfg, {
            drop: 192
          });
        }

        _doReset() {
          super._doReset.call(this); // Drop


          for (let i = this.cfg.drop; i > 0; i -= 1) {
            generateKeystreamWord.call(this);
          }
        }

      });
      /**
       * Shortcut functions to the cipher's object interface.
       *
       * @example
       *
       *     var ciphertext = CryptoJS.RC4Drop.encrypt(message, key, cfg);
       *     var plaintext  = CryptoJS.RC4Drop.decrypt(ciphertext, key, cfg);
       */


      _export("RC4Drop", RC4Drop = StreamCipher._createHelper(RC4DropAlgo));
    }
  };
});
//# sourceMappingURL=5c8afcffb2e7bff2849e4c2d606b22c7880437d0.js.map