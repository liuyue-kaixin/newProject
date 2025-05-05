System.register(["__unresolved_0"], function (_export, _context) {
  "use strict";

  var WordArray, Hasher, SHA1Algo, W, SHA1, HmacSHA1;

  _export("SHA1Algo", void 0);

  return {
    setters: [function (_unresolved_) {
      WordArray = _unresolved_.WordArray;
      Hasher = _unresolved_.Hasher;
    }],
    execute: function () {
      // Reusable object
      W = [];
      /**
       * SHA-1 hash algorithm.
       */

      _export("SHA1Algo", SHA1Algo = class SHA1Algo extends Hasher {
        _doReset() {
          this._hash = new WordArray([0x67452301, 0xefcdab89, 0x98badcfe, 0x10325476, 0xc3d2e1f0]);
        }

        _doProcessBlock(M, offset) {
          // Shortcut
          var H = this._hash.words; // Working variables

          var a = H[0];
          var b = H[1];
          var c = H[2];
          var d = H[3];
          var e = H[4]; // Computation

          for (var i = 0; i < 80; i += 1) {
            if (i < 16) {
              W[i] = M[offset + i] | 0;
            } else {
              var n = W[i - 3] ^ W[i - 8] ^ W[i - 14] ^ W[i - 16];
              W[i] = n << 1 | n >>> 31;
            }

            var t = (a << 5 | a >>> 27) + e + W[i];

            if (i < 20) {
              t += (b & c | ~b & d) + 0x5a827999;
            } else if (i < 40) {
              t += (b ^ c ^ d) + 0x6ed9eba1;
            } else if (i < 60) {
              t += (b & c | b & d | c & d) - 0x70e44324;
            } else
              /* if (i < 80) */
              {
                t += (b ^ c ^ d) - 0x359d3e2a;
              }

            e = d;
            d = c;
            c = b << 30 | b >>> 2;
            b = a;
            a = t;
          } // Intermediate hash value


          H[0] = H[0] + a | 0;
          H[1] = H[1] + b | 0;
          H[2] = H[2] + c | 0;
          H[3] = H[3] + d | 0;
          H[4] = H[4] + e | 0;
        }

        _doFinalize() {
          // Shortcuts
          var data = this._data;
          var dataWords = data.words;
          var nBitsTotal = this._nDataBytes * 8;
          var nBitsLeft = data.sigBytes * 8; // Add padding

          dataWords[nBitsLeft >>> 5] |= 0x80 << 24 - nBitsLeft % 32;
          dataWords[(nBitsLeft + 64 >>> 9 << 4) + 14] = Math.floor(nBitsTotal / 0x100000000);
          dataWords[(nBitsLeft + 64 >>> 9 << 4) + 15] = nBitsTotal;
          data.sigBytes = dataWords.length * 4; // Hash final blocks

          this._process(); // Return final computed hash


          return this._hash;
        }

        clone() {
          var clone = super.clone.call(this);
          clone._hash = this._hash.clone();
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
       *     var hash = CryptoJS.SHA1('message');
       *     var hash = CryptoJS.SHA1(wordArray);
       */


      _export("SHA1", SHA1 = Hasher._createHelper(SHA1Algo));
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
       *     var hmac = CryptoJS.HmacSHA1(message, key);
       */


      _export("HmacSHA1", HmacSHA1 = Hasher._createHmacHelper(SHA1Algo));
    }
  };
});
//# sourceMappingURL=79ae61e224afeb3c39152637c26b487f147ffedc.js.map