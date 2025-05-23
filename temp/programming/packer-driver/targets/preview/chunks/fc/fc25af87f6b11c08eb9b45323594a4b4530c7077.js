System.register(["__unresolved_0"], function (_export, _context) {
  "use strict";

  var WordArray, parseLoop, Base64;
  return {
    setters: [function (_unresolved_) {
      WordArray = _unresolved_.WordArray;
    }],
    execute: function () {
      parseLoop = (base64Str, base64StrLength, reverseMap) => {
        var words = [];
        var nBytes = 0;

        for (var i = 0; i < base64StrLength; i += 1) {
          if (i % 4) {
            var bits1 = reverseMap[base64Str.charCodeAt(i - 1)] << i % 4 * 2;
            var bits2 = reverseMap[base64Str.charCodeAt(i)] >>> 6 - i % 4 * 2;
            var bitsCombined = bits1 | bits2;
            words[nBytes >>> 2] |= bitsCombined << 24 - nBytes % 4 * 8;
            nBytes += 1;
          }
        }

        return WordArray.create(words, nBytes);
      };
      /**
       * Base64 encoding strategy.
       */


      _export("Base64", Base64 = {
        /**
         * Converts a word array to a Base64 string.
         *
         * @param {WordArray} wordArray The word array.
         *
         * @return {string} The Base64 string.
         *
         * @static
         *
         * @example
         *
         *     const base64String = CryptoJS.enc.Base64.stringify(wordArray);
         */
        stringify(wordArray) {
          // Shortcuts
          var {
            words,
            sigBytes
          } = wordArray;
          var map = this._map; // Clamp excess bits

          wordArray.clamp(); // Convert

          var base64Chars = [];

          for (var i = 0; i < sigBytes; i += 3) {
            var byte1 = words[i >>> 2] >>> 24 - i % 4 * 8 & 0xff;
            var byte2 = words[i + 1 >>> 2] >>> 24 - (i + 1) % 4 * 8 & 0xff;
            var byte3 = words[i + 2 >>> 2] >>> 24 - (i + 2) % 4 * 8 & 0xff;
            var triplet = byte1 << 16 | byte2 << 8 | byte3;

            for (var j = 0; j < 4 && i + j * 0.75 < sigBytes; j += 1) {
              base64Chars.push(map.charAt(triplet >>> 6 * (3 - j) & 0x3f));
            }
          } // Add padding


          var paddingChar = map.charAt(64);

          if (paddingChar) {
            while (base64Chars.length % 4) {
              base64Chars.push(paddingChar);
            }
          }

          return base64Chars.join('');
        },

        /**
         * Converts a Base64 string to a word array.
         *
         * @param {string} base64Str The Base64 string.
         *
         * @return {WordArray} The word array.
         *
         * @static
         *
         * @example
         *
         *     const wordArray = CryptoJS.enc.Base64.parse(base64String);
         */
        parse(base64Str) {
          // Shortcuts
          var base64StrLength = base64Str.length;
          var map = this._map;
          var reverseMap = this._reverseMap;

          if (!reverseMap) {
            this._reverseMap = [];
            reverseMap = this._reverseMap;

            for (var j = 0; j < map.length; j += 1) {
              reverseMap[map.charCodeAt(j)] = j;
            }
          } // Ignore padding


          var paddingChar = map.charAt(64);

          if (paddingChar) {
            var paddingIndex = base64Str.indexOf(paddingChar);

            if (paddingIndex !== -1) {
              base64StrLength = paddingIndex;
            }
          } // Convert


          return parseLoop(base64Str, base64StrLength, reverseMap);
        },

        _map: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/='
      });
    }
  };
});
//# sourceMappingURL=fc25af87f6b11c08eb9b45323594a4b4530c7077.js.map