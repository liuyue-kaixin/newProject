System.register([], function (_export, _context) {
  "use strict";

  var ZeroPadding;
  return {
    setters: [],
    execute: function () {
      /**
       * Zero padding strategy.
       */
      _export("ZeroPadding", ZeroPadding = {
        pad(data, blockSize) {
          const _data = data; // Shortcut

          const blockSizeBytes = blockSize * 4; // Pad

          _data.clamp();

          _data.sigBytes += blockSizeBytes - (data.sigBytes % blockSizeBytes || blockSizeBytes);
        },

        unpad(data) {
          const _data = data; // Shortcut

          const dataWords = _data.words; // Unpad

          for (let i = _data.sigBytes - 1; i >= 0; i -= 1) {
            if (dataWords[i >>> 2] >>> 24 - i % 4 * 8 & 0xff) {
              _data.sigBytes = i + 1;
              break;
            }
          }
        }

      });
    }
  };
});
//# sourceMappingURL=d34db4920d0e7a7048884a0886e00ae6159c4b09.js.map