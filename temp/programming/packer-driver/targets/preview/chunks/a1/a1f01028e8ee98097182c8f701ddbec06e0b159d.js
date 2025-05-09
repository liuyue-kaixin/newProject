System.register(["__unresolved_0"], function (_export, _context) {
  "use strict";

  var BlockCipherMode, CFB;

  function generateKeystreamAndEncrypt(words, offset, blockSize, cipher) {
    var _words = words;
    var keystream; // Shortcut

    var iv = this._iv; // Generate keystream

    if (iv) {
      keystream = iv.slice(0); // Remove IV for subsequent blocks

      this._iv = undefined;
    } else {
      keystream = this._prevBlock;
    }

    cipher.encryptBlock(keystream, 0); // Encrypt

    for (var i = 0; i < blockSize; i += 1) {
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
          var cipher = this._cipher;
          var {
            blockSize
          } = cipher;
          generateKeystreamAndEncrypt.call(this, words, offset, blockSize, cipher); // Remember this block to use with next block

          this._prevBlock = words.slice(offset, offset + blockSize);
        }

      };
      CFB.Decryptor = class extends CFB {
        processBlock(words, offset) {
          // Shortcuts
          var cipher = this._cipher;
          var {
            blockSize
          } = cipher; // Remember this block to use with next block

          var thisBlock = words.slice(offset, offset + blockSize);
          generateKeystreamAndEncrypt.call(this, words, offset, blockSize, cipher); // This block becomes the previous block

          this._prevBlock = thisBlock;
        }

      };
    }
  };
});
//# sourceMappingURL=a1f01028e8ee98097182c8f701ddbec06e0b159d.js.map