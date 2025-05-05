System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _crd, Config;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "30590MX/qJKgaC8t0Gc5xmh", "Config", undefined);

      _export("Config", Config = {
        demoIdx: 0,
        totalNum: 0,
        isRotate: false,
        //开启旋转(精确碰撞)
        maxSpeed: 1.0,
        //模拟世界速度
        maxNum: 2000,
        //最大总个数
        sphere: 0.0,
        //shpere 比例
        box: 0.5 //box 比例

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=d9b7dc8d295b416669444bf0e58f396b719027b6.js.map