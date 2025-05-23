System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, RandomManager, _crd;

  _export("RandomManager", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "3e09eJBwfZBsLPqFszZLvMS", "RandomManager", undefined);

      /** 引擎 utils.ts 中有一些基础数学方法 */

      /** 随机管理 */
      _export("RandomManager", RandomManager = class RandomManager {
        constructor() {
          /** 是否运行在客户端环境 */
          this.isClient = true;

          /** 是否为全局伪随机 */
          this.isGlobal = false;
          this.random = null;
        }

        /** 随机数管理单例对象 */
        static get instance() {
          if (this._instance == null) {
            this._instance = new RandomManager();
            this._instance.random = Math.random;
          }

          return this._instance;
        }

        getRandom() {
          return this.isGlobal ? Math.random() : this.random();
        }
        /** 设置随机种子 */


        setSeed(seed) {
          if (this.isClient) {
            //注：seedrandom.min.js文件在Cocos Creator中导入为插件生效
            //@ts-ignore
            if (Math.seedrandom) {
              if (this.isGlobal) //@ts-ignore
                new Math.seedrandom(seed, {
                  global: true
                });else //@ts-ignore
                this.random = new Math.seedrandom(seed);
            }
          } else {
            var seedrandom = require('seedrandom');

            if (this.isGlobal) new seedrandom(seed, {
              global: true
            });else this.random = new seedrandom(seed);
          }
        }
        /**
         * 生成指定范围的随机浮点数
         * @param min   最小值
         * @param max   最大值
         * @param type  类型
         */


        getRandomFloat(min, max) {
          if (min === void 0) {
            min = 0;
          }

          if (max === void 0) {
            max = 1;
          }

          return this.getRandom() * (max - min) + min;
        }
        /**
         * 生成指定范围的随机整数
         * @param min   最小值
         * @param max   最大值
         * @param type  类型
         * @example
        var min = 1;
        var max = 10;
        // [min,max) 得到一个两数之间的随机整数,这个值不小于min（如果min不是整数的话，得到一个向上取整的 min），并且小于（但不等于）max  
        RandomManager.instance.getRandomInt(min, max, 1);
          // [min,max] 得到一个两数之间的随机整数，包括两个数在内,这个值比min大（如果min不是整数，那就不小于比min大的整数），但小于（但不等于）max
        RandomManager.instance.getRandomInt(min, max, 2);
          // (min,max) 得到一个两数之间的随机整数
        RandomManager.instance.getRandomInt(min, max, 3);
         */


        getRandomInt(min, max, type) {
          if (type === void 0) {
            type = 2;
          }

          min = Math.ceil(min);
          max = Math.floor(max);

          switch (type) {
            case 1:
              // [min,max) 得到一个两数之间的随机整数,这个值不小于min（如果min不是整数的话，得到一个向上取整的 min），并且小于（但不等于）max  
              return Math.floor(this.getRandom() * (max - min)) + min;

            case 2:
              // [min,max] 得到一个两数之间的随机整数，包括两个数在内,这个值比min大（如果min不是整数，那就不小于比min大的整数），但小于（但不等于）max
              return Math.floor(this.getRandom() * (max - min + 1)) + min;

            case 3:
              // (min,max) 得到一个两数之间的随机整数
              return Math.floor(this.getRandom() * (max - min - 1)) + min + 1;
          }

          return 0;
        }
        /**
         * 根据最大值，最小值范围生成随机数数组
         * @param min   最小值
         * @param max   最大值
         * @param n     随机个数
         * @param type  类型
         * @example
        var a = RandomManager.instance.getRandomByMinMaxList(50, 100, 5)
        console.log("随机的数字", a);
         */


        getRandomByMinMaxList(min, max, n) {
          var result = [];

          for (var i = 0; i < n; i++) {
            result.push(this.getRandomInt(min, max));
          }

          return result;
        }
        /**
         * 获取数组中随机对象
         * @param objects 对象数组
         * @param n 随机个数
         * @example
        var b = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        var r = RandomManager.instance.getRandomByObjectList(b, 5);
        console.log("原始的对象", b);
        console.log("随机的对象", r);
         */


        getRandomByObjectList(objects, n) {
          var temp = objects.slice();
          var result = [];

          for (var i = 0; i < n; i++) {
            var index = this.getRandomInt(0, objects.length, n);
            result.push(temp.splice(index, 1)[0]);
          }

          return result;
        }
        /**
         * 定和随机分配
         * @param n     随机数量
         * @param sum   随机元素合
         * @example
        var c = RandomManager.instance.getRandomBySumList(5, -100);
        console.log("定和随机分配", c);
         */


        getRandomBySumList(n, sum) {
          var residue = sum;
          var value = 0;
          var result = [];

          for (var i = 0; i < n; i++) {
            value = this.getRandomInt(0, residue, 3);

            if (i == n - 1) {
              value = residue;
            } else {
              residue -= value;
            }

            result.push(value);
          }

          return result;
        }

      });

      RandomManager._instance = void 0;

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=aba9034d740555148363234f7a5e25037f0cca30.js.map