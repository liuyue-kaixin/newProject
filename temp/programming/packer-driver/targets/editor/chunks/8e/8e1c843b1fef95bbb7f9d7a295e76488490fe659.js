System.register(["__unresolved_0"], function (_export, _context) {
  "use strict";

  var BlockCipherMode, CFB;

  function generateKeystreamAndEncrypt(words, offset, blockSize, cipher) {
    const _words = words;
    let keystream; // Shortcut

    const iv = this._iv; // Generate keystream

    if (iv) {
      keystream = iv.slice(0); // Remove IV for subsequent blocks

      this._iv = undefined;
    } else {
      keystream = this._prevBlock;
    }

    cipher.encryptBlock(keystream, 0); // Encrypt

    for (let i = 0; i < blockSize; i += 1) {
      _words[offset + i] ^= keystream[i];
    }
  }
  /**
   * Cipher Feedback block mode.
   */


  _export("CFB", void 0);

  return {
    setters: [function (_unresolved_) {
      BlockCipherMode = _unresolved_.BlockCipherMode;
    }],
    execute: function () {
      _export("CFB", CFB = class CFB extends BlockCipherMode {});

      CFB.Encryptor = class extends CFB {
        processBlock(words, offset) {
          // Shortcuts
          const cipher = this._cipher;
          const {
            blockSize
          } = cipher;
          generateKeystreamAndEncrypt.call(this, words, offset, blockSize, cipher); // Remember this block to use with next block

          this._prevBlock = words.slice(offset, offset + blockSize);
        }

      };
      CFB.Decryptor = class extends CFB {
        processBlock(words, offset) {
          // Shortcuts
          const cipher = this._cipher;
          const {
            blockSize
          } = cipher; // Remember this block to use with next block

          const thisBlock = words.slice(offset, offset + blockSize);
          generateKeystreamAndEncrypt.call(this, words, offset, blockSize, cipher); // This block becomes the previous block

          this._prevBlock = thisBlock;
        }

      };
    }
  };
});
//# sourceMappingURL=8e1c843b1fef95bbb7f9d7a295e76488490fe659.js.map