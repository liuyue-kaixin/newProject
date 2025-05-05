System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, ArrayUtil, _crd;

  _export("ArrayUtil", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "4613b2zY/dMSaGPBGo6eti3", "ArrayUtil", undefined);

      /*
       * @Author: dgflash
       * @Date: 2021-08-11 16:41:12
       * @LastEditors: dgflash
       * @LastEditTime: 2022-09-02 14:50:57
       */

      /** 数组工具 */
      _export("ArrayUtil", ArrayUtil = class ArrayUtil {
        /**
         * 数组去重，并创建一个新数组返回
         * @param arr  源数组
         */
        static noRepeated(arr) {
          var res = [arr[0]];

          for (var i = 1; i < arr.length; i++) {
            var repeat = false;

            for (var j = 0; j < res.length; j++) {
              if (arr[i] == res[j]) {
                repeat = true;
                break;
              }
            }

            if (!repeat) {
              res.push(arr[i]);
            }
          }

          return res;
        }
        /**
         * 复制二维数组
         * @param array 目标数组 
         */


        static copy2DArray(array) {
          var newArray = [];

          for (var i = 0; i < array.length; i++) {
            newArray.push(array[i].concat());
          }

          return newArray;
        }
        /**
         * Fisher-Yates Shuffle 随机置乱算法
         * @param array 目标数组
         */


        static fisherYatesShuffle(array) {
          var count = array.length;

          while (count) {
            var index = Math.floor(Math.random() * count--);
            var temp = array[count];
            array[count] = array[index];
            array[index] = temp;
          }

          return array;
        }
        /**
         * 混淆数组
         * @param array 目标数组
         */


        static confound(array) {
          var result = array.slice().sort(() => Math.random() - .5);
          return result;
        }
        /**
         * 数组扁平化
         * @param array 目标数组
         */


        static flattening(array) {
          for (; array.some(v => Array.isArray(v));) {
            // 判断 array 中是否有数组
            array = [].concat.apply([], array); // 压扁数组
          }

          return array;
        }
        /** 删除数组中指定项 */


        static removeItem(array, item) {
          var temp = array.concat();

          for (var i = 0; i < temp.length; i++) {
            var value = temp[i];

            if (item == value) {
              array.splice(i, 1);
              break;
            }
          }
        }
        /**
         * 合并数组
         * @param array1 目标数组1
         * @param array2 目标数组2
         */


        static combineArrays(array1, array2) {
          var newArray = [...array1, ...array2];
          return newArray;
        }
        /**
         * 获取随机数组成员
         * @param array 目标数组
         */


        static getRandomValueInArray(array) {
          var newArray = array[Math.floor(Math.random() * array.length)];
          return newArray;
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=f4b7fc692d67efe210b61e68285bc1d2528f09d4.js.map