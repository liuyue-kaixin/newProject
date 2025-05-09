System.register(["__unresolved_0"], function (_export, _context) {
  "use strict";

  var WordArray, Hasher, SHA256Algo, H, K, isPrime, getFractionalBits, n, nPrime, W, SHA256, HmacSHA256;

  _export("SHA256Algo", void 0);

  return {
    setters: [function (_unresolved_) {
      WordArray = _unresolved_.WordArray;
      Hasher = _unresolved_.Hasher;
    }],
    execute: function () {
      // Initialization and round constants tables
      H = [];
      K = []; // Compute constants

      isPrime = n => {
        var sqrtN = Math.sqrt(n);

        for (var factor = 2; factor <= sqrtN; factor += 1) {
          if (!(n % factor)) {
            return false;
          }
        }

        return true;
      };

      getFractionalBits = n => (n - (n | 0)) * 0x100000000 | 0;

      n = 2;
      nPrime = 0;

      while (nPrime < 64) {
        if (isPrime(n)) {
          if (nPrime < 8) {
            H[nPrime] = getFractionalBits(n ** (1 / 2));
          }

          K[nPrime] = getFractionalBits(n ** (1 / 3));
          nPrime += 1;
        }

        n += 1;
      } // Reusable object


      W = [];
      /**
       * SHA-256 hash algorithm.
       */

      _export("SHA256Algo", SHA256Algo = class SHA256Algo extends Hasher {
        _doReset() {
          this._hash = new WordArray(H.slice(0));
        }

        _doProcessBlock(M, offset) {
          // Shortcut
          var _H = this._hash.words; // Working variables

          var a = _H[0];
          var b = _H[1];
          var c = _H[2];
          var d = _H[3];
          var e = _H[4];
          var f = _H[5];
          var g = _H[6];
          var h = _H[7]; // Computation

          for (var i = 0; i < 64; i += 1) {
            if (i < 16) {
              W[i] = M[offset + i] | 0;
            } else {
              var gamma0x = W[i - 15];
              var gamma0 = (gamma0x << 25 | gamma0x >>> 7) ^ (gamma0x << 14 | gamma0x >>> 18) ^ gamma0x >>> 3;
              var gamma1x = W[i - 2];
              var gamma1 = (gamma1x << 15 | gamma1x >>> 17) ^ (gamma1x << 13 | gamma1x >>> 19) ^ gamma1x >>> 10;
              W[i] = gamma0 + W[i - 7] + gamma1 + W[i - 16];
            }

            var ch = e & f ^ ~e & g;
            var maj = a & b ^ a & c ^ b & c;
            var sigma0 = (a << 30 | a >>> 2) ^ (a << 19 | a >>> 13) ^ (a << 10 | a >>> 22);
            var sigma1 = (e << 26 | e >>> 6) ^ (e << 21 | e >>> 11) ^ (e << 7 | e >>> 25);
            var t1 = h + sigma1 + ch + K[i] + W[i];
            var t2 = sigma0 + maj;
            h = g;
            g = f;
            f = e;
            e = d + t1 | 0;
            d = c;
            c = b;
            b = a;
            a = t1 + t2 | 0;
          } // Intermediate hash value


          _H[0] = _H[0] + a | 0;
          _H[1] = _H[1] + b | 0;
          _H[2] = _H[2] + c | 0;
          _H[3] = _H[3] + d | 0;
          _H[4] = _H[4] + e | 0;
          _H[5] = _H[5] + f | 0;
          _H[6] = _H[6] + g | 0;
          _H[7] = _H[7] + h | 0;
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
       *     var hash = CryptoJS.SHA256('message');
       *     var hash = CryptoJS.SHA256(wordArray);
       */


      _export("SHA256", SHA256 = Hasher._createHelper(SHA256Algo));
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
       *     var hmac = CryptoJS.HmacSHA256(message, key);
       */


      _export("HmacSHA256", HmacSHA256 = Hasher._createHmacHelper(SHA256Algo));
    }
  };
});
//# sourceMappingURL=77b31ef29502dc554c79248f62ada4ef0a9316d6.js.map