System.register(["__unresolved_0", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var CipherParams, Hex, HexFormatter;
  return {
    setters: [function (_unresolved_) {
      CipherParams = _unresolved_.CipherParams;
    }, function (_unresolved_2) {
      Hex = _unresolved_2.Hex;
    }],
    execute: function () {
      _export("HexFormatter", HexFormatter = {
        /**
         * Converts the ciphertext of a cipher params object to a hexadecimally encoded string.
         *
         * @param {CipherParams} cipherParams The cipher params object.
         *
         * @return {string} The hexadecimally encoded string.
         *
         * @static
         *
         * @example
         *
         *     var hexString = CryptoJS.format.Hex.stringify(cipherParams);
         */
        stringify(cipherParams) {
          return cipherParams.ciphertext.toString(Hex);
        },

        /**
         * Converts a hexadecimally encoded ciphertext string to a cipher params object.
         *
         * @param {string} input The hexadecimally encoded string.
         *
         * @return {CipherParams} The cipher params object.
         *
         * @static
         *
         * @example
         *
         *     var cipherParams = CryptoJS.format.Hex.parse(hexString);
         */
        parse(input) {
          const ciphertext = Hex.parse(input);
          return CipherParams.create({
            ciphertext
          });
        }

      });
    }
  };
});
//# sourceMappingURL=c66e2572b3e4d2750309b0977394bf5bc726371d.js.map