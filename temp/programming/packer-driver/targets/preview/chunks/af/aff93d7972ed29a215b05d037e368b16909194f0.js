System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Camera, Component, ResolutionPolicy, UITransform, _decorator, math, screen, view, oops, _dec, _class, _crd, ccclass, menu, GUI;

  function _reportPossibleCrUseOfoops(extras) {
    _reporterNs.report("oops", "../Oops", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Camera = _cc.Camera;
      Component = _cc.Component;
      ResolutionPolicy = _cc.ResolutionPolicy;
      UITransform = _cc.UITransform;
      _decorator = _cc._decorator;
      math = _cc.math;
      screen = _cc.screen;
      view = _cc.view;
    }, function (_unresolved_2) {
      oops = _unresolved_2.oops;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "9461cd/dGNEGK5I5J24xY6L", "GUI", undefined);
      /*
       * @Author: dgflash
       * @Date: 2021-07-03 16:13:17
       * @LastEditors: dgflash
       * @LastEditTime: 2023-01-19 14:52:40
       */


      __checkObsolete__(['Camera', 'Component', 'ResolutionPolicy', 'UITransform', '_decorator', 'math', 'screen', 'view']);

      ({
        ccclass,
        menu
      } = _decorator);
      /** 游戏界面屏幕自适应管理 */

      _export("GUI", GUI = (_dec = ccclass('GUI'), _dec(_class = class GUI extends Component {
        constructor() {
          super(...arguments);

          /** 界面层矩形信息组件 */
          this.transform = void 0;

          /** 游戏二维摄像机 */
          this.camera = void 0;

          /** 是否为竖屏显示 */
          this.portrait = void 0;

          /** 竖屏设计尺寸 */
          this.portraitDrz = null;

          /** 横屏设计尺寸 */
          this.landscapeDrz = null;
        }

        onLoad() {
          this.init();
        }
        /** 初始化引擎 */


        init() {
          this.transform = this.getComponent(UITransform);
          this.camera = this.getComponentInChildren(Camera);

          if (view.getDesignResolutionSize().width > view.getDesignResolutionSize().height) {
            this.landscapeDrz = view.getDesignResolutionSize();
            this.portraitDrz = new math.Size(this.landscapeDrz.height, this.landscapeDrz.width);
          } else {
            this.portraitDrz = view.getDesignResolutionSize();
            this.landscapeDrz = new math.Size(this.portraitDrz.height, this.portraitDrz.width);
          }

          this.resize();
        }
        /** 游戏画布尺寸变化 */


        resize() {
          var dr;

          if (view.getDesignResolutionSize().width > view.getDesignResolutionSize().height) {
            dr = this.landscapeDrz;
          } else {
            dr = this.portraitDrz;
          }

          var s = screen.windowSize;
          var rw = s.width;
          var rh = s.height;
          var finalW = rw;
          var finalH = rh;

          if (rw / rh > dr.width / dr.height) {
            // 如果更长，则用定高
            finalH = dr.height;
            finalW = finalH * rw / rh;
            this.portrait = false;
          } else {
            // 如果更短，则用定宽
            finalW = dr.width;
            finalH = finalW * rh / rw;
            this.portrait = true;
          } // 手工修改canvas和设计分辨率，这样反复调用也能生效。


          view.setDesignResolutionSize(finalW, finalH, ResolutionPolicy.UNKNOWN);
          this.transform.width = finalW;
          this.transform.height = finalH;
          (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
            error: Error()
          }), oops) : oops).log.logView(dr, "设计尺寸");
          (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
            error: Error()
          }), oops) : oops).log.logView(s, "屏幕尺寸");
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=aff93d7972ed29a215b05d037e368b16909194f0.js.map