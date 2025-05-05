System.register(["cc", "cc/env"], function (_export, _context) {
  "use strict";

  var _cclegacy, buildTimeConstants, BuildTimeConstants, _crd, keys;

  _export("BuildTimeConstants", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_ccEnv) {
      buildTimeConstants = _ccEnv;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "21a39/4HchJdJkSQKKKkLh9", "BuildTimeConstants", undefined);
      /*
       * @Author: dgflash
       * @Date: 2021-07-03 16:13:17
       * @LastEditors: dgflash
       * @LastEditTime: 2022-08-02 14:25:27
       */


      keys = Object.keys(buildTimeConstants).sort();
      /* 游戏运行环境 */

      _export("BuildTimeConstants", BuildTimeConstants = class BuildTimeConstants {
        constructor() {
          const keyNameMaxLen = keys.reduce((len, key) => Math.max(len, key.length), 0);
          var enviroment = `${keys.map(key => {
            const value = buildTimeConstants[key];
            const valueRep = typeof value === 'boolean' ? value ? 'true' : 'false' : value;
            return `\n${key.padStart(keyNameMaxLen, ' ')} : ${valueRep}`;
          })}`;
          console.log(enviroment);
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=3701a3a5e2247b24da8ead400897c7a6a1640405.js.map