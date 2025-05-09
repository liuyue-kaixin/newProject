System.register(["__unresolved_0", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var WordArray, ZeroPadding, Iso97971;
  return {
    setters: [function (_unresolved_) {
      WordArray = _unresolved_.WordArray;
    }, function (_unresolved_2) {
      ZeroPadding = _unresolved_2.ZeroPadding;
    }],
    execute: function () {
      /**
       * ISO/IEC 9797-1 Padding Method 2.
       */
      _export("Iso97971", Iso97971 = {
        pad(data, blockSize) {
          // Add 0x80 byte
          data.concat(WordArray.create([0x80000000], 1)); // Zero pad the rest

          ZeroPadding.pad(data, blockSize);
        },

        unpad(data) {
          const _data = data; // Remove zero padding

          ZeroPadding.unpad(_data); // Remove one more byte -- the 0x80 byte

          _data.sigBytes -= 1;
        }

      });
    }
  };
});
//# sourceMappingURL=a3a9a65b32e4cab3551af31125bcbae37a7a007a.js.map