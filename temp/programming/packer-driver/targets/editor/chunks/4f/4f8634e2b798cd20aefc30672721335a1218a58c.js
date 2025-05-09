System.register(["__unresolved_0"], function (_export, _context) {
  "use strict";

  var BlockCipherMode, OFB;

  _export("OFB", void 0);

  return {
    setters: [function (_unresolved_) {
      BlockCipherMode = _unresolved_.BlockCipherMode;
    }],
    execute: function () {
      /**
       * Output Feedback block mode.
       */
      _export("OFB", OFB = class OFB extends BlockCipherMode {});

      OFB.Encryptor = class extends OFB {
        processBlock(words, offset) {
          const _words = words; // Shortcuts

          const cipher = this._cipher;
          const {
            blockSize
          } = cipher;
          const iv = this._iv;
          let keystream = this._keystream; // Generate keystream

          if (iv) {
            this._keystream = iv.slice(0);
            keystream = this._keystream; // Remove IV for subsequent blocks

            this._iv = undefined;
          }

          cipher.encryptBlock(keystream, 0); // Encrypt

          for (let i = 0; i < blockSize; i += 1) {
            _words[offset + i] ^= keystream[i];
          }
        }

      };
      OFB.Decryptor = OFB.Encryptor;
    }
  };
});
//# sourceMappingURL=4f8634e2b798cd20aefc30672721335a1218a58c.js.map