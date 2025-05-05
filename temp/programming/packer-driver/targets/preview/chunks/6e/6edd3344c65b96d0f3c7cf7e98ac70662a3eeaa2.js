System.register(["__unresolved_0"], function (_export, _context) {
  "use strict";

  var BlockCipherMode, ECB;

  _export("ECB", void 0);

  return {
    setters: [function (_unresolved_) {
      BlockCipherMode = _unresolved_.BlockCipherMode;
    }],
    execute: function () {
      /**
       * Electronic Codebook block mode.
       */
      _export("ECB", ECB = class ECB extends BlockCipherMode {});

      ECB.Encryptor = class extends ECB {
        processBlock(words, offset) {
          this._cipher.encryptBlock(words, offset);
        }

      };
      ECB.Decryptor = class extends ECB {
        processBlock(words, offset) {
          this._cipher.decryptBlock(words, offset);
        }

      };
    }
  };
});
//# sourceMappingURL=6edd3344c65b96d0f3c7cf7e98ac70662a3eeaa2.js.map