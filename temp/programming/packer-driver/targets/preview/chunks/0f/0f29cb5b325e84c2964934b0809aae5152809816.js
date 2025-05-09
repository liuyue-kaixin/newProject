System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10", "__unresolved_11"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Component, Game, JsonAsset, Node, _decorator, director, game, screen, sys, LanguageManager, BuildTimeConstants, GameConfig, GameQueryConfig, oops, version, AudioManager, EventMessage, TimerManager, GameManager, GUI, LayerManager, _dec, _dec2, _class, _descriptor, _descriptor2, _crd, ccclass, property, isInited, Root;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfLanguageManager(extras) {
    _reporterNs.report("LanguageManager", "../libs/gui/language/Language", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBuildTimeConstants(extras) {
    _reporterNs.report("BuildTimeConstants", "../module/config/BuildTimeConstants", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameConfig(extras) {
    _reporterNs.report("GameConfig", "../module/config/GameConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameQueryConfig(extras) {
    _reporterNs.report("GameQueryConfig", "../module/config/GameQueryConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfoops(extras) {
    _reporterNs.report("oops", "./Oops", _context.meta, extras);
  }

  function _reportPossibleCrUseOfversion(extras) {
    _reporterNs.report("version", "./Oops", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAudioManager(extras) {
    _reporterNs.report("AudioManager", "./common/audio/AudioManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventMessage(extras) {
    _reporterNs.report("EventMessage", "./common/event/EventMessage", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTimerManager(extras) {
    _reporterNs.report("TimerManager", "./common/timer/TimerManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameManager(extras) {
    _reporterNs.report("GameManager", "./game/GameManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGUI(extras) {
    _reporterNs.report("GUI", "./gui/GUI", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLayerManager(extras) {
    _reporterNs.report("LayerManager", "./gui/layer/LayerManager", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Component = _cc.Component;
      Game = _cc.Game;
      JsonAsset = _cc.JsonAsset;
      Node = _cc.Node;
      _decorator = _cc._decorator;
      director = _cc.director;
      game = _cc.game;
      screen = _cc.screen;
      sys = _cc.sys;
    }, function (_unresolved_2) {
      LanguageManager = _unresolved_2.LanguageManager;
    }, function (_unresolved_3) {
      BuildTimeConstants = _unresolved_3.BuildTimeConstants;
    }, function (_unresolved_4) {
      GameConfig = _unresolved_4.GameConfig;
    }, function (_unresolved_5) {
      GameQueryConfig = _unresolved_5.GameQueryConfig;
    }, function (_unresolved_6) {
      oops = _unresolved_6.oops;
      version = _unresolved_6.version;
    }, function (_unresolved_7) {
      AudioManager = _unresolved_7.AudioManager;
    }, function (_unresolved_8) {
      EventMessage = _unresolved_8.EventMessage;
    }, function (_unresolved_9) {
      TimerManager = _unresolved_9.TimerManager;
    }, function (_unresolved_10) {
      GameManager = _unresolved_10.GameManager;
    }, function (_unresolved_11) {
      GUI = _unresolved_11.GUI;
    }, function (_unresolved_12) {
      LayerManager = _unresolved_12.LayerManager;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "90b9cOmlmBCnpCpEpgvdrQr", "Root", undefined);
      /*
       * @Author: dgflash
       * @Date: 2021-07-03 16:13:17
       * @LastEditors: dgflash
       * @LastEditTime: 2023-08-28 10:02:57
       */


      __checkObsolete__(['Component', 'Game', 'JsonAsset', 'Node', '_decorator', 'director', 'game', 'screen', 'sys']);

      ({
        ccclass,
        property
      } = _decorator);
      isInited = false;
      /** 框架显示层根节点 */

      _export("Root", Root = (_dec = property({
        type: Node,
        tooltip: "游戏层"
      }), _dec2 = property({
        type: Node,
        tooltip: "界面层"
      }), (_class = class Root extends Component {
        constructor() {
          super(...arguments);

          /** 游戏层节点 */
          _initializerDefineProperty(this, "game", _descriptor, this);

          /** 界面层节点 */
          _initializerDefineProperty(this, "gui", _descriptor2, this);

          /** 持久根节点 */
          this.persistRootNode = null;
        }

        onLoad() {
          if (!isInited) {
            isInited = true; // 注：这里是规避cc3.8在编辑器模式下运行时，关闭游戏会两次初始化报错

            console.log("Oops Framework v" + (_crd && version === void 0 ? (_reportPossibleCrUseOfversion({
              error: Error()
            }), version) : version));
            this.enabled = false;
            var config_name = "config";
            (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
              error: Error()
            }), oops) : oops).res.load(config_name, JsonAsset, () => {
              var config = (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
                error: Error()
              }), oops) : oops).res.get(config_name);
              (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
                error: Error()
              }), oops) : oops).config.btc = new (_crd && BuildTimeConstants === void 0 ? (_reportPossibleCrUseOfBuildTimeConstants({
                error: Error()
              }), BuildTimeConstants) : BuildTimeConstants)();
              (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
                error: Error()
              }), oops) : oops).config.query = new (_crd && GameQueryConfig === void 0 ? (_reportPossibleCrUseOfGameQueryConfig({
                error: Error()
              }), GameQueryConfig) : GameQueryConfig)();
              (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
                error: Error()
              }), oops) : oops).config.game = new (_crd && GameConfig === void 0 ? (_reportPossibleCrUseOfGameConfig({
                error: Error()
              }), GameConfig) : GameConfig)(config);
              (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
                error: Error()
              }), oops) : oops).http.server = (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
                error: Error()
              }), oops) : oops).config.game.httpServer; // Http 服务器地址

              (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
                error: Error()
              }), oops) : oops).http.timeout = (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
                error: Error()
              }), oops) : oops).config.game.httpTimeout; // Http 请求超时时间

              (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
                error: Error()
              }), oops) : oops).storage.init((_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
                error: Error()
              }), oops) : oops).config.game.localDataKey, (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
                error: Error()
              }), oops) : oops).config.game.localDataIv); // 初始化本地存储加密

              game.frameRate = (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
                error: Error()
              }), oops) : oops).config.game.frameRate; // 初始化每秒传输帧数

              this.enabled = true;
              this.init();
              this.run();
            });
          }
        }

        update(dt) {
          (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
            error: Error()
          }), oops) : oops).ecs.execute(dt);
        }
        /** 初始化游戏界面 */


        initGui() {}
        /** 初始化游戏业务模块 */


        initEcsSystem() {}
        /** 加载完引擎配置文件后执行 */


        run() {}

        init() {
          // 创建持久根节点
          this.persistRootNode = new Node("PersistRootNode");
          director.addPersistRootNode(this.persistRootNode); // 创建音频模块

          (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
            error: Error()
          }), oops) : oops).audio = this.persistRootNode.addComponent(_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
            error: Error()
          }), AudioManager) : AudioManager);
          (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
            error: Error()
          }), oops) : oops).audio.load(); // 创建时间模块

          (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
            error: Error()
          }), oops) : oops).timer = this.persistRootNode.addComponent(_crd && TimerManager === void 0 ? (_reportPossibleCrUseOfTimerManager({
            error: Error()
          }), TimerManager) : TimerManager);
          (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
            error: Error()
          }), oops) : oops).language = new (_crd && LanguageManager === void 0 ? (_reportPossibleCrUseOfLanguageManager({
            error: Error()
          }), LanguageManager) : LanguageManager)();
          (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
            error: Error()
          }), oops) : oops).game = new (_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
            error: Error()
          }), GameManager) : GameManager)(this.game);
          (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
            error: Error()
          }), oops) : oops).gui = new (_crd && LayerManager === void 0 ? (_reportPossibleCrUseOfLayerManager({
            error: Error()
          }), LayerManager) : LayerManager)(this.gui);
          this.initGui();
          this.initEcsSystem();
          (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
            error: Error()
          }), oops) : oops).ecs.init(); // 游戏显示事件

          game.on(Game.EVENT_SHOW, () => {
            (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
              error: Error()
            }), oops) : oops).log.logView("【系统】游戏前台显示");
            (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
              error: Error()
            }), oops) : oops).timer.load(); // 平台不需要在退出时精准计算时间，直接暂时游戏时间

            (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
              error: Error()
            }), oops) : oops).audio.resumeAll();
            director.resume();
            game.resume();
            (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
              error: Error()
            }), oops) : oops).message.dispatchEvent((_crd && EventMessage === void 0 ? (_reportPossibleCrUseOfEventMessage({
              error: Error()
            }), EventMessage) : EventMessage).GAME_ENTER);
          }); // 游戏隐藏事件

          game.on(Game.EVENT_HIDE, () => {
            (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
              error: Error()
            }), oops) : oops).log.logView("【系统】游戏切到后台");
            (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
              error: Error()
            }), oops) : oops).timer.save(); // 平台不需要在退出时精准计算时间，直接暂时游戏时间

            (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
              error: Error()
            }), oops) : oops).audio.pauseAll();
            director.pause();
            game.pause();
            (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
              error: Error()
            }), oops) : oops).message.dispatchEvent((_crd && EventMessage === void 0 ? (_reportPossibleCrUseOfEventMessage({
              error: Error()
            }), EventMessage) : EventMessage).GAME_EXIT);
          }); // 游戏尺寸修改事件

          var c_gui = this.gui.addComponent(_crd && GUI === void 0 ? (_reportPossibleCrUseOfGUI({
            error: Error()
          }), GUI) : GUI);

          if (sys.isMobile == false) {
            screen.on("window-resize", () => {
              (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
                error: Error()
              }), oops) : oops).log.logView("【系统】游戏画布尺寸变化");
              c_gui.resize();
              (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
                error: Error()
              }), oops) : oops).message.dispatchEvent((_crd && EventMessage === void 0 ? (_reportPossibleCrUseOfEventMessage({
                error: Error()
              }), EventMessage) : EventMessage).GAME_RESIZE);
            }, this);
            screen.on("fullscreen-change", () => {
              (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
                error: Error()
              }), oops) : oops).log.logView("【系统】游戏全屏显示");
            }, this);
          }

          screen.on("orientation-change", () => {
            (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
              error: Error()
            }), oops) : oops).log.logView("【系统】游戏旋转屏幕");
          }, this);
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class.prototype, "game", [_dec], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "gui", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class)));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=0f29cb5b325e84c2964934b0809aae5152809816.js.map