System.register(["__unresolved_0", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var X64Word, X64WordArray, SHA512Algo, SHA384Algo, SHA384, HmacSHA384;

  _export("SHA384Algo", void 0);

  return {
    setters: [function (_unresolved_) {
      X64Word = _unresolved_.X64Word;
      X64WordArray = _unresolved_.X64WordArray;
    }, function (_unresolved_2) {
      SHA512Algo = _unresolved_2.SHA512Algo;
    }],
    execute: function () {
      /**
       * SHA-384 hash algorithm.
       */
      _export("SHA384Algo", SHA384Algo = class SHA384Algo extends SHA512Algo {
        _doReset() {
          this._hash = new X64WordArray([new X64Word(0xcbbb9d5d, 0xc1059ed8), new X64Word(0x629a292a, 0x367cd507), new X64Word(0x9159015a, 0x3070dd17), new X64Word(0x152fecd8, 0xf70e5939), new X64Word(0x67332667, 0xffc00b31), new X64Word(0x8eb44a87, 0x68581511), new X64Word(0xdb0c2e0d, 0x64f98fa7), new X64Word(0x47b5481d, 0xbefa4fa4)]);
        }

        _doFinalize() {
          const hash = super._doFinalize.call(this);

          hash.sigBytes -= 16;
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
       *     var hash = CryptoJS.SHA384('message');
       *     var hash = CryptoJS.SHA384(wordArray);
       */


      _export("SHA384", SHA384 = SHA512Algo._createHelper(SHA384Algo));
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
       *     var hmac = CryptoJS.HmacSHA384(message, key);
       */


      _export("HmacSHA384", HmacSHA384 = SHA512Algo._createHmacHelper(SHA384Algo));
    }
  };
});
//# sourceMappingURL=8aff65bd5464c1b91b0328a8529b86019431a514.js.map