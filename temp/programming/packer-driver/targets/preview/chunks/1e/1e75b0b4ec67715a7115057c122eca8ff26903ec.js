System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, LanguageData, _crd;

  _export("LanguageData", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "27fb3sjD81JlIP2KFTSWUp4", "LanguageData", undefined);

      /*
       * @Author: dgflash
       * @Date: 2022-02-11 09:31:52
       * @LastEditors: dgflash
       * @LastEditTime: 2023-08-22 16:37:40
       */
      _export("LanguageData", LanguageData = class LanguageData {
        /** 
         * 通过多语言关键字获取语言文本 
         * 
         * 注：
         * 
         * 1、先获取language/json中的配置数据，如果没有者获取config/game/Language配置表中的多语言数据
         * 
         * 2、config/game/Language配置表可选使用，不用时不创建同名配置表即可
         * 
         * 3、config/game/Language配置表使用oops-plugin-excel-to-json插件生成，点击项目根目录下载update-oops-plugin-framework.bat或update-oops-plugin-framework.sh脚本下载插件
         */
        static getLangByID(labId) {
          var text = this.json[labId];

          if (text) {
            return text;
          }

          if (this.excel) {
            var record = this.excel[labId];

            if (record) {
              return record[this.current];
            }
          }

          return labId;
        }

      });

      /** 当前语言 */
      LanguageData.current = "";

      /** 语言JSON配置数据 */
      LanguageData.json = {};

      /** 语言EXCEL中的配置数据 */
      LanguageData.excel = null;

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=1e75b0b4ec67715a7115057c122eca8ff26903ec.js.map