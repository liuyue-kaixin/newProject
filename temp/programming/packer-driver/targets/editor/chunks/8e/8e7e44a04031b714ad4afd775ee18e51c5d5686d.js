System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, ObjectUtil, _crd;

  _export("ObjectUtil", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "86827QLFSRM7Zojsx0WqWuQ", "ObjectUtil", undefined);

      /*
       * @Author: dgflash
       * @Date: 2022-07-26 15:29:57
       * @LastEditors: dgflash
       * @LastEditTime: 2022-09-02 12:07:54
       */

      /** 对象工具 */
      _export("ObjectUtil", ObjectUtil = class ObjectUtil {
        /**
         * 判断指定的值是否为对象
         * @param value 值
         */
        static isObject(value) {
          return Object.prototype.toString.call(value) === '[object Object]';
        }
        /**
         * 深拷贝
         * @param target 目标
         */


        static deepCopy(target) {
          if (target == null || typeof target !== 'object') {
            return target;
          }

          let result = null;

          if (target instanceof Date) {
            result = new Date();
            result.setTime(target.getTime());
            return result;
          }

          if (target instanceof Array) {
            result = [];

            for (let i = 0, length = target.length; i < length; i++) {
              result[i] = this.deepCopy(target[i]);
            }

            return result;
          }

          if (target instanceof Object) {
            result = {};

            for (const key in target) {
              if (target.hasOwnProperty(key)) {
                result[key] = this.deepCopy(target[key]);
              }
            }

            return result;
          }

          console.warn(`不支持的类型：${result}`);
        }
        /**
         * 拷贝对象
         * @param target 目标
         */


        static copy(target) {
          return JSON.parse(JSON.stringify(target));
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=8e7e44a04031b714ad4afd775ee18e51c5d5686d.js.map