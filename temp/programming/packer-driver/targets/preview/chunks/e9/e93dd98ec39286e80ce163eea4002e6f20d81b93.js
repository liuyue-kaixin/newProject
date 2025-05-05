System.register(["__unresolved_0"], function (_export, _context) {
  "use strict";

  var StreamCipher, RC4Algo, RC4DropAlgo, RC4, RC4Drop;

  function generateKeystreamWord() {
    // Shortcuts
    var S = this._S;
    var i = this._i;
    var j = this._j; // Generate keystream word

    var keystreamWord = 0;

    for (var n = 0; n < 4; n += 1) {
      i = (i + 1) % 256;
      j = (j + S[i]) % 256; // Swap

      var t = S[i];
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
          var key = this._key;
          var keyWords = key.words;
          var keySigBytes = key.sigBytes; // Init sbox

          this._S = [];
          var S = this._S;

          for (var i = 0; i < 256; i += 1) {
            S[i] = i;
          } // Key setup


          for (var _i = 0, j = 0; _i < 256; _i += 1) {
            var keyByteIndex = _i % keySigBytes;
            var keyByte = keyWords[keyByteIndex >>> 2] >>> 24 - keyByteIndex % 4 * 8 & 0xff;
            j = (j + S[_i] + keyByte) % 256; // Swap

            var t = S[_i];
            S[_i] = S[j];
            S[j] = t;
          } // Counters


          this._j = 0;
          this._i = this._j;
        }

        _doProcessBlock(M, offset) {
          var _M = M;
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
        constructor() {
          super(...arguments);
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


          for (var i = this.cfg.drop; i > 0; i -= 1) {
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
//# sourceMappingURL=e93dd98ec39286e80ce163eea4002e6f20d81b93.js.map