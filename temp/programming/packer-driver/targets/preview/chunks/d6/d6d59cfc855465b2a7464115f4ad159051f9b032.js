System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, JsonOb, _crd, OP, types, OAM;

  _export("JsonOb", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "000b00Lx19Ke4hAFc9/Qlnh", "JsonOb", undefined);

      /*
       * @Author: dgflash
       * @Date: 2022-09-01 18:00:28
       * @LastEditors: dgflash
       * @LastEditTime: 2022-09-06 17:18:05
       */

      /**
       * 实现动态绑定的核心部分，
       * 每次修改属性值，都会调用对应函数，并且获取值的路径
       */
      OP = Object.prototype;
      types = {
        obj: '[object Object]',
        array: '[object Array]'
      };
      OAM = ['push', 'pop', 'shift', 'unshift', 'sort', 'reverse', 'splice'];
      /**
       * 实现属性拦截的类
       */

      _export("JsonOb", JsonOb = class JsonOb {
        constructor(obj, callback) {
          this._callback = void 0;

          if (OP.toString.call(obj) !== types.obj && OP.toString.call(obj) !== types.array) {
            console.error('请传入一个对象或数组');
          }

          this._callback = callback;
          this.observe(obj);
        }

        /**对象属性劫持 */
        observe(obj, path) {
          if (OP.toString.call(obj) === types.array) {
            this.overrideArrayProto(obj, path);
          } // @ts-ignore  注：避免API生成工具报错


          Object.keys(obj).forEach(key => {
            var self = this; // @ts-ignore

            var oldVal = obj[key];
            var pathArray = path && path.slice();

            if (pathArray) {
              pathArray.push(key);
            } else {
              pathArray = [key];
            }

            Object.defineProperty(obj, key, {
              get: function get() {
                return oldVal;
              },
              set: function set(newVal) {
                //cc.log(newVal);
                if (oldVal !== newVal) {
                  if (OP.toString.call(newVal) === '[object Object]') {
                    self.observe(newVal, pathArray);
                  }

                  self._callback(newVal, oldVal, pathArray);

                  oldVal = newVal;
                }
              }
            }); // @ts-ignore

            if (OP.toString.call(obj[key]) === types.obj || OP.toString.call(obj[key]) === types.array) {
              // @ts-ignore
              this.observe(obj[key], pathArray);
            }
          }, this);
        }
        /**
         * 对数组类型进行动态绑定
         * @param array 
         * @param path 
         */


        overrideArrayProto(array, path) {
          // 保存原始 Array 原型  
          var originalProto = Array.prototype; // 通过 Object.create 方法创建一个对象，该对象的原型是Array.prototype  

          var overrideProto = Object.create(Array.prototype);
          var self = this;
          var result; // 遍历要重写的数组方法  

          OAM.forEach(method => {
            Object.defineProperty(overrideProto, method, {
              value: function value() {
                var oldVal = this.slice(); //调用原始原型上的方法  

                result = originalProto[method].apply(this, arguments); //继续监听新数组  

                self.observe(this, path);

                self._callback(this, oldVal, path);

                return result;
              }
            });
          }); // 最后 让该数组实例的 __proto__ 属性指向 假的原型 overrideProto  

          array['__proto__'] = overrideProto;
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=d6d59cfc855465b2a7464115f4ad159051f9b032.js.map