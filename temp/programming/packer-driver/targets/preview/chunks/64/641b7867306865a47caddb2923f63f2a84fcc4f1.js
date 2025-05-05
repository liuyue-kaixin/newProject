System.register(["__unresolved_0"], function (_export, _context) {
  "use strict";

  var BlockCipher, AESAlgo, _SBOX, INV_SBOX, _SUB_MIX_0, _SUB_MIX_1, _SUB_MIX_2, _SUB_MIX_3, INV_SUB_MIX_0, INV_SUB_MIX_1, INV_SUB_MIX_2, INV_SUB_MIX_3, d, i, x, xi, _i, sx, x2, x4, x8, t, RCON, AES;

  _export("AESAlgo", void 0);

  return {
    setters: [function (_unresolved_) {
      BlockCipher = _unresolved_.BlockCipher;
    }],
    execute: function () {
      // Lookup tables
      _SBOX = [];
      INV_SBOX = [];
      _SUB_MIX_0 = [];
      _SUB_MIX_1 = [];
      _SUB_MIX_2 = [];
      _SUB_MIX_3 = [];
      INV_SUB_MIX_0 = [];
      INV_SUB_MIX_1 = [];
      INV_SUB_MIX_2 = [];
      INV_SUB_MIX_3 = []; // Compute lookup tables
      // Compute double table

      d = [];

      for (i = 0; i < 256; i += 1) {
        if (i < 128) {
          d[i] = i << 1;
        } else {
          d[i] = i << 1 ^ 0x11b;
        }
      } // Walk GF(2^8)


      x = 0;
      xi = 0;

      for (_i = 0; _i < 256; _i += 1) {
        // Compute sbox
        sx = xi ^ xi << 1 ^ xi << 2 ^ xi << 3 ^ xi << 4;
        sx = sx >>> 8 ^ sx & 0xff ^ 0x63;
        _SBOX[x] = sx;
        INV_SBOX[sx] = x; // Compute multiplication

        x2 = d[x];
        x4 = d[x2];
        x8 = d[x4]; // Compute sub bytes, mix columns tables

        t = d[sx] * 0x101 ^ sx * 0x1010100;
        _SUB_MIX_0[x] = t << 24 | t >>> 8;
        _SUB_MIX_1[x] = t << 16 | t >>> 16;
        _SUB_MIX_2[x] = t << 8 | t >>> 24;
        _SUB_MIX_3[x] = t; // Compute inv sub bytes, inv mix columns tables

        t = x8 * 0x1010101 ^ x4 * 0x10001 ^ x2 * 0x101 ^ x * 0x1010100;
        INV_SUB_MIX_0[sx] = t << 24 | t >>> 8;
        INV_SUB_MIX_1[sx] = t << 16 | t >>> 16;
        INV_SUB_MIX_2[sx] = t << 8 | t >>> 24;
        INV_SUB_MIX_3[sx] = t; // Compute next counter

        if (!x) {
          xi = 1;
          x = xi;
        } else {
          x = x2 ^ d[d[d[x8 ^ x2]]];
          xi ^= d[d[xi]];
        }
      } // Precomputed Rcon lookup


      RCON = [0x00, 0x01, 0x02, 0x04, 0x08, 0x10, 0x20, 0x40, 0x80, 0x1b, 0x36];
      /**
       * AES block cipher algorithm.
       */

      _export("AESAlgo", AESAlgo = class AESAlgo extends BlockCipher {
        _doReset() {
          var t; // Skip reset of nRounds has been set before and key did not change

          if (this._nRounds && this._keyPriorReset === this._key) {
            return;
          } // Shortcuts


          this._keyPriorReset = this._key;
          var key = this._keyPriorReset;
          var keyWords = key.words;
          var keySize = key.sigBytes / 4; // Compute number of rounds

          this._nRounds = keySize + 6;
          var nRounds = this._nRounds; // Compute number of key schedule rows

          var ksRows = (nRounds + 1) * 4; // Compute key schedule

          this._keySchedule = [];
          var keySchedule = this._keySchedule;

          for (var ksRow = 0; ksRow < ksRows; ksRow += 1) {
            if (ksRow < keySize) {
              keySchedule[ksRow] = keyWords[ksRow];
            } else {
              t = keySchedule[ksRow - 1];

              if (!(ksRow % keySize)) {
                // Rot word
                t = t << 8 | t >>> 24; // Sub word

                t = _SBOX[t >>> 24] << 24 | _SBOX[t >>> 16 & 0xff] << 16 | _SBOX[t >>> 8 & 0xff] << 8 | _SBOX[t & 0xff]; // Mix Rcon

                t ^= RCON[ksRow / keySize | 0] << 24;
              } else if (keySize > 6 && ksRow % keySize === 4) {
                // Sub word
                t = _SBOX[t >>> 24] << 24 | _SBOX[t >>> 16 & 0xff] << 16 | _SBOX[t >>> 8 & 0xff] << 8 | _SBOX[t & 0xff];
              }

              keySchedule[ksRow] = keySchedule[ksRow - keySize] ^ t;
            }
          } // Compute inv key schedule


          this._invKeySchedule = [];
          var invKeySchedule = this._invKeySchedule;

          for (var invKsRow = 0; invKsRow < ksRows; invKsRow += 1) {
            var _ksRow = ksRows - invKsRow;

            if (invKsRow % 4) {
              t = keySchedule[_ksRow];
            } else {
              t = keySchedule[_ksRow - 4];
            }

            if (invKsRow < 4 || _ksRow <= 4) {
              invKeySchedule[invKsRow] = t;
            } else {
              invKeySchedule[invKsRow] = INV_SUB_MIX_0[_SBOX[t >>> 24]] ^ INV_SUB_MIX_1[_SBOX[t >>> 16 & 0xff]] ^ INV_SUB_MIX_2[_SBOX[t >>> 8 & 0xff]] ^ INV_SUB_MIX_3[_SBOX[t & 0xff]];
            }
          }
        }

        encryptBlock(M, offset) {
          this._doCryptBlock(M, offset, this._keySchedule, _SUB_MIX_0, _SUB_MIX_1, _SUB_MIX_2, _SUB_MIX_3, _SBOX);
        }

        decryptBlock(M, offset) {
          var _M = M; // Swap 2nd and 4th rows

          var t = _M[offset + 1];
          _M[offset + 1] = _M[offset + 3];
          _M[offset + 3] = t;

          this._doCryptBlock(_M, offset, this._invKeySchedule, INV_SUB_MIX_0, INV_SUB_MIX_1, INV_SUB_MIX_2, INV_SUB_MIX_3, INV_SBOX); // Inv swap 2nd and 4th rows


          t = _M[offset + 1];
          _M[offset + 1] = _M[offset + 3];
          _M[offset + 3] = t;
        }

        _doCryptBlock(M, offset, keySchedule, SUB_MIX_0, SUB_MIX_1, SUB_MIX_2, SUB_MIX_3, SBOX) {
          var _M = M; // Shortcut

          var nRounds = this._nRounds; // Get input, add round key

          var s0 = _M[offset] ^ keySchedule[0];
          var s1 = _M[offset + 1] ^ keySchedule[1];
          var s2 = _M[offset + 2] ^ keySchedule[2];
          var s3 = _M[offset + 3] ^ keySchedule[3]; // Key schedule row counter

          var ksRow = 4; // Rounds

          for (var round = 1; round < nRounds; round += 1) {
            // Shift rows, sub bytes, mix columns, add round key
            var _t = SUB_MIX_0[s0 >>> 24] ^ SUB_MIX_1[s1 >>> 16 & 0xff] ^ SUB_MIX_2[s2 >>> 8 & 0xff] ^ SUB_MIX_3[s3 & 0xff] ^ keySchedule[ksRow];

            ksRow += 1;

            var _t2 = SUB_MIX_0[s1 >>> 24] ^ SUB_MIX_1[s2 >>> 16 & 0xff] ^ SUB_MIX_2[s3 >>> 8 & 0xff] ^ SUB_MIX_3[s0 & 0xff] ^ keySchedule[ksRow];

            ksRow += 1;

            var _t3 = SUB_MIX_0[s2 >>> 24] ^ SUB_MIX_1[s3 >>> 16 & 0xff] ^ SUB_MIX_2[s0 >>> 8 & 0xff] ^ SUB_MIX_3[s1 & 0xff] ^ keySchedule[ksRow];

            ksRow += 1;

            var _t4 = SUB_MIX_0[s3 >>> 24] ^ SUB_MIX_1[s0 >>> 16 & 0xff] ^ SUB_MIX_2[s1 >>> 8 & 0xff] ^ SUB_MIX_3[s2 & 0xff] ^ keySchedule[ksRow];

            ksRow += 1; // Update state

            s0 = _t;
            s1 = _t2;
            s2 = _t3;
            s3 = _t4;
          } // Shift rows, sub bytes, add round key


          var t0 = (SBOX[s0 >>> 24] << 24 | SBOX[s1 >>> 16 & 0xff] << 16 | SBOX[s2 >>> 8 & 0xff] << 8 | SBOX[s3 & 0xff]) ^ keySchedule[ksRow];
          ksRow += 1;
          var t1 = (SBOX[s1 >>> 24] << 24 | SBOX[s2 >>> 16 & 0xff] << 16 | SBOX[s3 >>> 8 & 0xff] << 8 | SBOX[s0 & 0xff]) ^ keySchedule[ksRow];
          ksRow += 1;
          var t2 = (SBOX[s2 >>> 24] << 24 | SBOX[s3 >>> 16 & 0xff] << 16 | SBOX[s0 >>> 8 & 0xff] << 8 | SBOX[s1 & 0xff]) ^ keySchedule[ksRow];
          ksRow += 1;
          var t3 = (SBOX[s3 >>> 24] << 24 | SBOX[s0 >>> 16 & 0xff] << 16 | SBOX[s1 >>> 8 & 0xff] << 8 | SBOX[s2 & 0xff]) ^ keySchedule[ksRow];
          ksRow += 1; // Set output

          _M[offset] = t0;
          _M[offset + 1] = t1;
          _M[offset + 2] = t2;
          _M[offset + 3] = t3;
        }

      });

      AESAlgo.keySize = 256 / 32;
      /**
       * Shortcut functions to the cipher's object interface.
       *
       * @example
       *
       *     var ciphertext = CryptoJS.AES.encrypt(message, key, cfg);
       *     var plaintext  = CryptoJS.AES.decrypt(ciphertext, key, cfg);
       */

      _export("AES", AES = BlockCipher._createHelper(AESAlgo));
    }
  };
});
//# sourceMappingURL=641b7867306865a47caddb2923f63f2a84fcc4f1.js.map