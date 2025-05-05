System.register([], function (_export, _context) {
  "use strict";

  var AnsiX923;
  return {
    setters: [],
    execute: function () {
      /**
       * ANSI X.923 padding strategy.
       */
      _export("AnsiX923", AnsiX923 = {
        pad(data, blockSize) {
          const _data = data; // Shortcuts

          const dataSigBytes = _data.sigBytes;
          const blockSizeBytes = blockSize * 4; // Count padding bytes

          const nPaddingBytes = blockSizeBytes - dataSigBytes % blockSizeBytes; // Compute last byte position

          const lastBytePos = dataSigBytes + nPaddingBytes - 1; // Pad

          _data.clamp();

          _data.words[lastBytePos >>> 2] |= nPaddingBytes << 24 - lastBytePos % 4 * 8;
          _data.sigBytes += nPaddingBytes;
        },

        unpad(data) {
          const _data = data; // Get number of padding bytes from last byte

          const nPaddingBytes = _data.words[_data.sigBytes - 1 >>> 2] & 0xff; // Remove padding

          _data.sigBytes -= nPaddingBytes;
        }

      });
    }
  };
});
//# sourceMappingURL=7764690e18a4750450e6036ebb2c42d2b2ec65dc.js.map