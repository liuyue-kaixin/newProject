System.register(["__unresolved_0", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var Base, WordArray, MD5Algo, EvpKDFAlgo, EvpKDF;

  _export("EvpKDFAlgo", void 0);

  return {
    setters: [function (_unresolved_) {
      Base = _unresolved_.Base;
      WordArray = _unresolved_.WordArray;
    }, function (_unresolved_2) {
      MD5Algo = _unresolved_2.MD5Algo;
    }],
    execute: function () {
      /**
       * This key derivation function is meant to conform with EVP_BytesToKey.
       * www.openssl.org/docs/crypto/EVP_BytesToKey.html
       */
      _export("EvpKDFAlgo", EvpKDFAlgo = class EvpKDFAlgo extends Base {
        /**
         * Initializes a newly created key derivation function.
         *
         * @param {Object} cfg (Optional) The configuration options to use for the derivation.
         *
         * @example
         *
         *     const kdf = CryptoJS.algo.EvpKDF.create();
         *     const kdf = CryptoJS.algo.EvpKDF.create({ keySize: 8 });
         *     const kdf = CryptoJS.algo.EvpKDF.create({ keySize: 8, iterations: 1000 });
         */
        constructor(cfg) {
          super();
          /**
           * Configuration options.
           *
           * @property {number} keySize The key size in words to generate. Default: 4 (128 bits)
           * @property {Hasher} hasher The hash algorithm to use. Default: MD5
           * @property {number} iterations The number of iterations to perform. Default: 1
           */

          this.cfg = Object.assign(new Base(), {
            keySize: 128 / 32,
            hasher: MD5Algo,
            iterations: 1
          }, cfg);
        }
        /**
         * Derives a key from a password.
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
          let block; // Shortcut

          const {
            cfg
          } = this; // Init hasher

          const hasher = cfg.hasher.create(); // Initial values

          const derivedKey = WordArray.create(); // Shortcuts

          const derivedKeyWords = derivedKey.words;
          const {
            keySize,
            iterations
          } = cfg; // Generate key

          while (derivedKeyWords.length < keySize) {
            if (block) {
              hasher.update(block);
            }

            block = hasher.update(password).finalize(salt);
            hasher.reset(); // Iterations

            for (let i = 1; i < iterations; i += 1) {
              block = hasher.finalize(block);
              hasher.reset();
            }

            derivedKey.concat(block);
          }

          derivedKey.sigBytes = keySize * 4;
          return derivedKey;
        }

      });
      /**
       * Derives a key from a password.
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
       *     var key = CryptoJS.EvpKDF(password, salt);
       *     var key = CryptoJS.EvpKDF(password, salt, { keySize: 8 });
       *     var key = CryptoJS.EvpKDF(password, salt, { keySize: 8, iterations: 1000 });
       */


      _export("EvpKDF", EvpKDF = (password, salt, cfg) => EvpKDFAlgo.create(cfg).compute(password, salt));
    }
  };
});
//# sourceMappingURL=275a3009a66bcf780ea75385757d34fdf4515463.js.map