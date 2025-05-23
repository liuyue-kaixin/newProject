System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, StringUtil, _crd;

  _export("StringUtil", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "aa8435LSBtAR5HPsje6IJ2w", "StringUtil", undefined);

      /** 字符串工具 */
      _export("StringUtil", StringUtil = class StringUtil {
        /** 获取一个唯一标识的字符串 */
        static guid() {
          var guid = "";

          for (var i = 1; i <= 32; i++) {
            var n = Math.floor(Math.random() * 16.0).toString(16);
            guid += n;
            if (i == 8 || i == 12 || i == 16 || i == 20) guid += "-";
          }

          return guid;
        }
        /**
         * 转美式计数字符串
         * @param value 数字
         * @example
         * 123456789 = 123,456,789
         */


        static numberTotPermil(value) {
          return value.toLocaleString();
        }
        /** 
         * 转英文单位计数
         * @param value 数字
         * @param fixed 保留小数位数
         * @example
         * 12345 = 12.35K
         */


        static numberToThousand(value, fixed) {
          if (fixed === void 0) {
            fixed = 2;
          }

          var k = 1000;
          var sizes = ['', 'K', 'M', 'G'];

          if (value < k) {
            return value.toString();
          } else {
            var i = Math.floor(Math.log(value) / Math.log(k));
            var r = value / Math.pow(k, i);
            return r.toFixed(fixed) + sizes[i];
          }
        }
        /** 
         * 转中文单位计数
         * @param value 数字
         * @param fixed 保留小数位数
         * @example
         * 12345 = 1.23万
         */


        static numberToTenThousand(value, fixed) {
          if (fixed === void 0) {
            fixed = 2;
          }

          var k = 10000;
          var sizes = ['', '万', '亿', '万亿'];

          if (value < k) {
            return value.toString();
          } else {
            var i = Math.floor(Math.log(value) / Math.log(k));
            return (value / Math.pow(k, i)).toFixed(fixed) + sizes[i];
          }
        }
        /**
         * 时间格式化
         * @param date  时间对象
         * @param fmt   格式化字符(yyyy-MM-dd hh:mm:ss S)
         */


        static format(date, fmt) {
          var o = {
            "M+": date.getMonth() + 1,
            // 月份 
            "d+": date.getDate(),
            // 日 
            "h+": date.getHours(),
            // 小时 
            "m+": date.getMinutes(),
            // 分 
            "s+": date.getSeconds(),
            // 秒 
            "q+": Math.floor((date.getMonth() + 3) / 3),
            // 季度 
            "S": date.getMilliseconds() // 毫秒 

          };

          if (/(y+)/.test(fmt)) {
            fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
          }

          for (var k in o) {
            if (new RegExp("(" + k + ")").test(fmt)) {
              fmt = fmt.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length));
            }
          }

          return fmt;
        }
        /**
         * "," 分割字符串成数组
         * @param str 字符串
         */


        static stringToArray1(str) {
          if (str == "") {
            return [];
          }

          return str.split(",");
        }
        /** 
         * "|" 分割字符串成数组 
         * @param str 字符串
         */


        static stringToArray2(str) {
          if (str == "") {
            return [];
          }

          return str.split("|");
        }
        /** 
         * ":" 分割字符串成数组
         * @param str 字符串
         */


        static stringToArray3(str) {
          if (str == "") {
            return [];
          }

          return str.split(":");
        }
        /** 
         * ";" 分割字符串成数组 
         * @param str 字符串
         */


        static stringToArray4(str) {
          if (str == "") {
            return [];
          }

          return str.split(";");
        }
        /**
         * 字符串截取
         * @param str     字符串
         * @param n       截取长度
         * @param showdot 是否把截取的部分用省略号代替
         */


        static sub(str, n, showdot) {
          if (showdot === void 0) {
            showdot = false;
          }

          var r = /[^\x00-\xff]/g;

          if (str.replace(r, "mm").length <= n) {
            return str;
          }

          var m = Math.floor(n / 2);

          for (var i = m; i < str.length; i++) {
            if (str.substr(0, i).replace(r, "mm").length >= n) {
              if (showdot) {
                return str.substr(0, i) + "...";
              } else {
                return str.substr(0, i);
              }
            }
          }

          return str;
        }
        /**
         * 计算字符串长度，中文算两个字节
         * @param str 字符串
         */


        static stringLen(str) {
          var realLength = 0,
              len = str.length,
              charCode = -1;

          for (var i = 0; i < len; i++) {
            charCode = str.charCodeAt(i);
            if (charCode >= 0 && charCode <= 128) realLength += 1;else realLength += 2;
          }

          return realLength;
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=ccfb4d36138fc601be460502e8b422045af6f1bf.js.map