System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, RegexUtil, _crd;

  _export("RegexUtil", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "dec9bVPigFCmKy5NVk+0y7h", "RegexUtil", undefined);

      /*
       * @Author: dgflash
       * @Date: 2022-07-26 15:29:57
       * @LastEditors: dgflash
       * @LastEditTime: 2022-09-02 12:08:25
       */

      /** 正则工具 */
      _export("RegexUtil", RegexUtil = class RegexUtil {
        /**
         * 判断字符是否为双字节字符（如中文字符）
         * @param string 原字符串
         */
        static isDoubleWord(string) {
          return /[^\x00-\xff]/.test(string);
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=5182ef551b4dad0732b432ff26f334a13c88eee5.js.map