System.register(["__unresolved_0", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var Base, WordArray, SHA1Algo, HMAC, PBKDF2Algo, PBKDF2;

  _export("PBKDF2Algo", void 0);

  return {
    setters: [function (_unresolved_) {
      Base = _unresolved_.Base;
      WordArray = _unresolved_.WordArray;
    }, function (_unresolved_2) {
      SHA1Algo = _unresolved_2.SHA1Algo;
    }, function (_unresolved_3) {
      HMAC = _unresolved_3.HMAC;
    }],
    execute: function () {
      /**
       * Password-Based Key Derivation Function 2 algorithm.
       */
      _export("PBKDF2Algo", PBKDF2Algo = class PBKDF2Algo extends Base {
        /**
         * Initializes a newly created key derivation function.
         *
         * @param {Object} cfg (Optional) The configuration options to use for the derivation.
         *
         * @example
         *
         *     const kdf = CryptoJS.algo.PBKDF2.create();
         *     const kdf = CryptoJS.algo.PBKDF2.create({ keySize: 8 });
         *     const kdf = CryptoJS.algo.PBKDF2.create({ keySize: 8, iterations: 1000 });
         */
        constructor(cfg) {
          super();
          /**
           * Configuration options.
           *
           * @property {number} keySize The key size in words to generate. Default: 4 (128 bits)
           * @property {Hasher} hasher The hasher to use. Default: SHA1
           * @property {number} iterations The number of iterations to perform. Default: 1
           */

          this.cfg = Object.assign(new Base(), {
            keySize: 128 / 32,
            hasher: SHA1Algo,
            iterations: 1
          }, cfg);
        }
        /**
         * Computes the Password-Based Key Derivation Function 2.
         *
         * @param {WordArray|string} password The password.
         * @param {WordArray|string} salt A salt.
         *
         * @return {WordArray} The derived key.
         *
         * @example
         *
         *     const key = kdf.compute(password, salt);
         */


        compute(password, salt) {
          // Shortcut
          var {
            cfg
          } = this; // Init HMAC

          var hmac = HMAC.create(cfg.hasher, password); // Initial values

          var derivedKey = WordArray.create();
          var blockIndex = WordArray.create([0x00000001]); // Shortcuts

          var derivedKeyWords = derivedKey.words;
          var blockIndexWords = blockIndex.words;
          var {
            keySize,
            iterations
          } = cfg; // Generate key

          while (derivedKeyWords.length < keySize) {
            var block = hmac.update(salt).finalize(blockIndex);
            hmac.reset(); // Shortcuts

            var blockWords = block.words;
            var blockWordsLength = blockWords.length; // Iterations

            var intermediate = block;

            for (var i = 1; i < iterations; i += 1) {
              intermediate = hmac.finalize(intermediate);
              hmac.reset(); // Shortcut

              var intermediateWords = intermediate.words; // XOR intermediate with block

              for (var j = 0; j < blockWordsLength; j += 1) {
                blockWords[j] ^= intermediateWords[j];
              }
            }

            derivedKey.concat(block);
            blockIndexWords[0] += 1;
          }

          derivedKey.sigBytes = keySize * 4;
          return derivedKey;
        }

      });
      /**
       * Computes the Password-Based Key Derivation Function 2.
       *
       * @param {WordArray|string} password The password.
       * @param {WordArray|string} salt A salt.
       * @param {Object} cfg (Optional) The configuration options to use for this computation.
       *
       * @return {WordArray} The derived key.
       *
       * @static
       *
       * @example
       *
       *     var key = CryptoJS.PBKDF2(password, salt);
       *     var key = CryptoJS.PBKDF2(password, salt, { keySize: 8 });
       *     var key = CryptoJS.PBKDF2(password, salt, { keySize: 8, iterations: 1000 });
       */


      _export("PBKDF2", PBKDF2 = (password, salt, cfg) => PBKDF2Algo.create(cfg).compute(password, salt));
    }
  };
});
//# sourceMappingURL=072fdb0c74951cb49f610691f4cef94cb56c5366.js.map