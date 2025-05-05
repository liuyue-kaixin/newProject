System.register(["__unresolved_0", "cc", "cc/env", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10", "__unresolved_11"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, DEBUG, EffectSingleCase, ecs, VM, HttpRequest, NetManager, Config, MessageManager, ResLoader, Logger, RandomManager, StorageManager, oops, _crd, version;

  function _reportPossibleCrUseOfEffectSingleCase(extras) {
    _reporterNs.report("EffectSingleCase", "../libs/animator-effect/EffectSingleCase", _context.meta, extras);
  }

  function _reportPossibleCrUseOfecs(extras) {
    _reporterNs.report("ecs", "../libs/ecs/ECS", _context.meta, extras);
  }

  function _reportPossibleCrUseOfECSRootSystem(extras) {
    _reporterNs.report("ECSRootSystem", "../libs/ecs/ECSSystem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLanguageManager(extras) {
    _reporterNs.report("LanguageManager", "../libs/gui/language/Language", _context.meta, extras);
  }

  function _reportPossibleCrUseOfVM(extras) {
    _reporterNs.report("VM", "../libs/model-view/ViewModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHttpRequest(extras) {
    _reporterNs.report("HttpRequest", "../libs/network/HttpRequest", _context.meta, extras);
  }

  function _reportPossibleCrUseOfNetManager(extras) {
    _reporterNs.report("NetManager", "../libs/network/NetManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfConfig(extras) {
    _reporterNs.report("Config", "../module/config/Config", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAudioManager(extras) {
    _reporterNs.report("AudioManager", "./common/audio/AudioManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMessageManager(extras) {
    _reporterNs.report("MessageManager", "./common/event/MessageManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfResLoader(extras) {
    _reporterNs.report("ResLoader", "./common/loader/ResLoader", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLogger(extras) {
    _reporterNs.report("Logger", "./common/log/Logger", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRandomManager(extras) {
    _reporterNs.report("RandomManager", "./common/random/RandomManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStorageManager(extras) {
    _reporterNs.report("StorageManager", "./common/storage/StorageManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTimerManager(extras) {
    _reporterNs.report("TimerManager", "./common/timer/TimerManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameManager(extras) {
    _reporterNs.report("GameManager", "./game/GameManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLayerManager(extras) {
    _reporterNs.report("LayerManager", "./gui/layer/LayerManager", _context.meta, extras);
  }

  _export("oops", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_ccEnv) {
      DEBUG = _ccEnv.DEBUG;
    }, function (_unresolved_2) {
      EffectSingleCase = _unresolved_2.EffectSingleCase;
    }, function (_unresolved_3) {
      ecs = _unresolved_3.ecs;
    }, function (_unresolved_4) {
      VM = _unresolved_4.VM;
    }, function (_unresolved_5) {
      HttpRequest = _unresolved_5.HttpRequest;
    }, function (_unresolved_6) {
      NetManager = _unresolved_6.NetManager;
    }, function (_unresolved_7) {
      Config = _unresolved_7.Config;
    }, function (_unresolved_8) {
      MessageManager = _unresolved_8.MessageManager;
    }, function (_unresolved_9) {
      ResLoader = _unresolved_9.ResLoader;
    }, function (_unresolved_10) {
      Logger = _unresolved_10.Logger;
    }, function (_unresolved_11) {
      RandomManager = _unresolved_11.RandomManager;
    }, function (_unresolved_12) {
      StorageManager = _unresolved_12.StorageManager;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "cbae5wzfSZGzZMuyeAetSfg", "Oops", undefined);
      /*
       * @Author: dgflash
       * @Date: 2022-02-11 09:32:47
       * @LastEditors: dgflash
       * @LastEditTime: 2023-08-21 15:19:56
       */


      /** 框架版本号 */
      _export("version", version = "1.1.5");
      /** 框架核心模块访问入口 */


      _export("oops", oops = class oops {}); // 引入oops全局变量以方便调试


      /** ----------核心模块---------- */

      /** 日志管理 */
      oops.log = _crd && Logger === void 0 ? (_reportPossibleCrUseOfLogger({
        error: Error()
      }), Logger) : Logger;

      /** 游戏配置 */
      oops.config = new (_crd && Config === void 0 ? (_reportPossibleCrUseOfConfig({
        error: Error()
      }), Config) : Config)();

      /** 全局消息 */
      oops.message = (_crd && MessageManager === void 0 ? (_reportPossibleCrUseOfMessageManager({
        error: Error()
      }), MessageManager) : MessageManager).Instance;

      /** 随机工具 */
      oops.random = (_crd && RandomManager === void 0 ? (_reportPossibleCrUseOfRandomManager({
        error: Error()
      }), RandomManager) : RandomManager).instance;

      /** 本地存储 */
      oops.storage = new (_crd && StorageManager === void 0 ? (_reportPossibleCrUseOfStorageManager({
        error: Error()
      }), StorageManager) : StorageManager)();

      /** 游戏时间管理 */
      oops.timer = void 0;

      /** 游戏音乐管理 */
      oops.audio = void 0;

      /** 二维界面管理 */
      oops.gui = void 0;

      /** 三维游戏世界管理 */
      oops.game = void 0;

      /** 资源管理 */
      oops.res = new (_crd && ResLoader === void 0 ? (_reportPossibleCrUseOfResLoader({
        error: Error()
      }), ResLoader) : ResLoader)();

      /** ----------可选模块---------- */

      /** 多语言模块 */
      oops.language = void 0;

      /** 动画特效对象池管理器 */
      oops.pool = (_crd && EffectSingleCase === void 0 ? (_reportPossibleCrUseOfEffectSingleCase({
        error: Error()
      }), EffectSingleCase) : EffectSingleCase).instance;

      /** HTTP */
      oops.http = new (_crd && HttpRequest === void 0 ? (_reportPossibleCrUseOfHttpRequest({
        error: Error()
      }), HttpRequest) : HttpRequest)();

      /** WebSocket */
      oops.tcp = new (_crd && NetManager === void 0 ? (_reportPossibleCrUseOfNetManager({
        error: Error()
      }), NetManager) : NetManager)();

      /** ECS */
      oops.ecs = new (_crd && ecs === void 0 ? (_reportPossibleCrUseOfecs({
        error: Error()
      }), ecs) : ecs).RootSystem();

      /** MVVM */
      oops.mvvm = _crd && VM === void 0 ? (_reportPossibleCrUseOfVM({
        error: Error()
      }), VM) : VM;

      if (DEBUG) {
        //@ts-ignore
        window.oops = oops;
      }

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=daf6d749ec77514e6ac668150a108c3d178f7172.js.map