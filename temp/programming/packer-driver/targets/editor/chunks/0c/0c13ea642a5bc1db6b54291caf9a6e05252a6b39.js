System.register(["__unresolved_0", "cc", "cc/env", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, DynamicAtlasManager, _decorator, macro, profiler, DEBUG, JSB, oops, Root, ecs, Initialize, UIConfigData, smc, _dec, _class, _crd, ccclass, property, Main;

  function _reportPossibleCrUseOfoops(extras) {
    _reporterNs.report("oops", "../../extensions/oops-plugin-framework/assets/core/Oops", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRoot(extras) {
    _reporterNs.report("Root", "../../extensions/oops-plugin-framework/assets/core/Root", _context.meta, extras);
  }

  function _reportPossibleCrUseOfecs(extras) {
    _reporterNs.report("ecs", "../../extensions/oops-plugin-framework/assets/libs/ecs/ECS", _context.meta, extras);
  }

  function _reportPossibleCrUseOfInitialize(extras) {
    _reporterNs.report("Initialize", "./game/initialize/Initialize", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIConfigData(extras) {
    _reporterNs.report("UIConfigData", "./game/common/config/GameUIConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfsmc(extras) {
    _reporterNs.report("smc", "./game/common/ecs/SingletonModuleComp", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      DynamicAtlasManager = _cc.DynamicAtlasManager;
      _decorator = _cc._decorator;
      macro = _cc.macro;
      profiler = _cc.profiler;
    }, function (_ccEnv) {
      DEBUG = _ccEnv.DEBUG;
      JSB = _ccEnv.JSB;
    }, function (_unresolved_2) {
      oops = _unresolved_2.oops;
    }, function (_unresolved_3) {
      Root = _unresolved_3.Root;
    }, function (_unresolved_4) {
      ecs = _unresolved_4.ecs;
    }, function (_unresolved_5) {
      Initialize = _unresolved_5.Initialize;
    }, function (_unresolved_6) {
      UIConfigData = _unresolved_6.UIConfigData;
    }, function (_unresolved_7) {
      smc = _unresolved_7.smc;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "0eec0s4qrZF7onPlYBrD+y+", "Main", undefined);
      /*
       * @Author: dgflash
       * @Date: 2021-07-03 16:13:17
       * @LastEditors: dgflash
       * @LastEditTime: 2023-01-19 15:28:28
       */


      __checkObsolete__(['DynamicAtlasManager', '_decorator', 'macro', 'profiler']);

      ({
        ccclass,
        property
      } = _decorator);
      macro.CLEANUP_IMAGE_CACHE = false;
      DynamicAtlasManager.instance.enabled = true;
      DynamicAtlasManager.instance.maxFrameSize = 512;

      _export("Main", Main = (_dec = ccclass('Main'), _dec(_class = class Main extends (_crd && Root === void 0 ? (_reportPossibleCrUseOfRoot({
        error: Error()
      }), Root) : Root) {
        start() {
          if (DEBUG) profiler.showStats();
        }

        run() {
          (_crd && smc === void 0 ? (_reportPossibleCrUseOfsmc({
            error: Error()
          }), smc) : smc).initialize = (_crd && ecs === void 0 ? (_reportPossibleCrUseOfecs({
            error: Error()
          }), ecs) : ecs).getEntity(_crd && Initialize === void 0 ? (_reportPossibleCrUseOfInitialize({
            error: Error()
          }), Initialize) : Initialize);

          if (JSB) {
            (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
              error: Error()
            }), oops) : oops).gui.toast("热更新后新程序的提示");
          }
        }

        initGui() {
          (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
            error: Error()
          }), oops) : oops).gui.init(_crd && UIConfigData === void 0 ? (_reportPossibleCrUseOfUIConfigData({
            error: Error()
          }), UIConfigData) : UIConfigData);
        }

        async initEcsSystem() {// oops.ecs.add(new EcsPositionSystem())
          // oops.ecs.add(new EcsAccountSystem());
          // oops.ecs.add(new EcsRoleSystem());
          // oops.ecs.add(new EcsInitializeSystem());
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=0c13ea642a5bc1db6b54291caf9a6e05252a6b39.js.map