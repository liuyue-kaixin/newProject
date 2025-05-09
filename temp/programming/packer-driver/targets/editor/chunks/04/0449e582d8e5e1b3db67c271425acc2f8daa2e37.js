System.register(["__unresolved_0"], function (_export, _context) {
  "use strict";

  var BlockCipherMode, CTR;

  _export("CTR", void 0);

  return {
    setters: [function (_unresolved_) {
      BlockCipherMode = _unresolved_.BlockCipherMode;
    }],
    execute: function () {
      /**
       * Counter block mode.
       */
      _export("CTR", CTR = class CTR extends BlockCipherMode {});

      CTR.Encryptor = class extends CTR {
        processBlock(words, offset) {
          const _words = words; // Shortcuts

          const cipher = this._cipher;
          const {
            blockSize
          } = cipher;
          const iv = this._iv;
          let counter = this._counter; // Generate keystream

          if (iv) {
            this._counter = iv.slice(0);
            counter = this._counter; // Remove IV for subsequent blocks

            this._iv = undefined;
          }

          const keystream = counter.slice(0);
          cipher.encryptBlock(keystream, 0); // Increment counter

          counter[blockSize - 1] = counter[blockSize - 1] + 1 | 0; // Encrypt

          for (let i = 0; i < blockSize; i += 1) {
            _words[offset + i] ^= keystream[i];
          }
        }

      };
      CTR.Decryptor = CTR.Encryptor;
    }
  };
});
//# sourceMappingURL=0449e582d8e5e1b3db67c271425acc2f8daa2e37.js.map