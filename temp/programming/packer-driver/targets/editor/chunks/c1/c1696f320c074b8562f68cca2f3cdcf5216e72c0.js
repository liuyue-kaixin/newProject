System.register(["__unresolved_0", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var WordArray, SHA256Algo, SHA224Algo, SHA224, HmacSHA224;

  _export("SHA224Algo", void 0);

  return {
    setters: [function (_unresolved_) {
      WordArray = _unresolved_.WordArray;
    }, function (_unresolved_2) {
      SHA256Algo = _unresolved_2.SHA256Algo;
    }],
    execute: function () {
      /**
       * SHA-224 hash algorithm.
       */
      _export("SHA224Algo", SHA224Algo = class SHA224Algo extends SHA256Algo {
        _doReset() {
          this._hash = new WordArray([0xc1059ed8, 0x367cd507, 0x3070dd17, 0xf70e5939, 0xffc00b31, 0x68581511, 0x64f98fa7, 0xbefa4fa4]);
        }

        _doFinalize() {
          const hash = super._doFinalize.call(this);

          hash.sigBytes -= 4;
          return hash;
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
       *     var hash = CryptoJS.SHA224('message');
       *     var hash = CryptoJS.SHA224(wordArray);
       */


      _export("SHA224", SHA224 = SHA256Algo._createHelper(SHA224Algo));
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
       *     var hmac = CryptoJS.HmacSHA224(message, key);
       */


      _export("HmacSHA224", HmacSHA224 = SHA256Algo._createHmacHelper(SHA224Algo));
    }
  };
});
//# sourceMappingURL=c1696f320c074b8562f68cca2f3cdcf5216e72c0.js.map