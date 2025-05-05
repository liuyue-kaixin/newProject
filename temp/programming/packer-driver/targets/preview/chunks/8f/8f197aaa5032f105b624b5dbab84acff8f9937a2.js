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
          var _data = data; // Shortcut

          var blockSizeBytes = blockSize * 4; // Pad

          _data.clamp();

          _data.sigBytes += blockSizeBytes - (data.sigBytes % blockSizeBytes || blockSizeBytes);
        },

        unpad(data) {
          var _data = data; // Shortcut

          var dataWords = _data.words; // Unpad

          for (var i = _data.sigBytes - 1; i >= 0; i -= 1) {
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
//# sourceMappingURL=8f197aaa5032f105b624b5dbab84acff8f9937a2.js.map