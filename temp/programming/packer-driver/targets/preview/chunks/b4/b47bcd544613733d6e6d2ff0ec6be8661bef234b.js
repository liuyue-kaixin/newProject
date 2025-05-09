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
          var _data = data; // Shortcuts

          var dataSigBytes = _data.sigBytes;
          var blockSizeBytes = blockSize * 4; // Count padding bytes

          var nPaddingBytes = blockSizeBytes - dataSigBytes % blockSizeBytes; // Compute last byte position

          var lastBytePos = dataSigBytes + nPaddingBytes - 1; // Pad

          _data.clamp();

          _data.words[lastBytePos >>> 2] |= nPaddingBytes << 24 - lastBytePos % 4 * 8;
          _data.sigBytes += nPaddingBytes;
        },

        unpad(data) {
          var _data = data; // Get number of padding bytes from last byte

          var nPaddingBytes = _data.words[_data.sigBytes - 1 >>> 2] & 0xff; // Remove padding

          _data.sigBytes -= nPaddingBytes;
        }

      });
    }
  };
});
//# sourceMappingURL=b47bcd544613733d6e6d2ff0ec6be8661bef234b.js.map