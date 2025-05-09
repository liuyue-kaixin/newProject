System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, native, sys, PlatformUtil, _crd;

  _export("PlatformUtil", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      native = _cc.native;
      sys = _cc.sys;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "c08229jnmdPP5vR721N6GG9", "PlatformUtil", undefined);
      /*
       * @Date: 2021-08-14 16:17:03
       * @LastEditors: dgflash
       * @LastEditTime: 2022-09-02 14:39:03
       */


      /** 平台数据 */
      __checkObsolete__(['native', 'sys']);

      _export("PlatformUtil", PlatformUtil = class PlatformUtil {
        /** 是否为安卓系统 */
        static isNativeAndroid() {
          if (typeof native == "undefined") return false;
          if (sys.isNative && sys.platform === sys.Platform.ANDROID) return true;
          return false;
        }
        /** 是否为苹果系统 */


        static isNativeIOS() {
          if (typeof native == "undefined") return false;
          if (sys.isNative && sys.os === sys.OS.IOS) return true;
          return false;
        }
        /** 获取平台名 */


        static getPlateform() {
          if (this.isNativeAndroid()) return 'android';else if (this.isNativeIOS()) return 'ios';else return 'h5';
        } // static isIOSWebview() {
        //     //@ts-ignore
        //     if (window.webkit && window.webkit.messageHandlers && window.webkit.messageHandlers.sdkLoginOut)
        //         return true
        //     else
        //         return false
        // }


      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=9452db36d79484ca212af53dca4fd03bf0ceb428.js.map