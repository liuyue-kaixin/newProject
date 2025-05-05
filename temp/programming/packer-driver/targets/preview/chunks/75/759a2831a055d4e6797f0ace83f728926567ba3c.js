System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, oops, ecs, CCVMParentComp, GameEvent, UIID, smc, _dec, _dec2, _class, _crd, ccclass, property, LoadingViewComp;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _reportPossibleCrUseOfoops(extras) {
    _reporterNs.report("oops", "../../../../../extensions/oops-plugin-framework/assets/core/Oops", _context.meta, extras);
  }

  function _reportPossibleCrUseOfecs(extras) {
    _reporterNs.report("ecs", "../../../../../extensions/oops-plugin-framework/assets/libs/ecs/ECS", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCCVMParentComp(extras) {
    _reporterNs.report("CCVMParentComp", "../../../../../extensions/oops-plugin-framework/assets/module/common/CCVMParentComp", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameEvent(extras) {
    _reporterNs.report("GameEvent", "../../common/config/GameEvent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIID(extras) {
    _reporterNs.report("UIID", "../../common/config/GameUIConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfsmc(extras) {
    _reporterNs.report("smc", "../../common/ecs/SingletonModuleComp", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      oops = _unresolved_2.oops;
    }, function (_unresolved_3) {
      ecs = _unresolved_3.ecs;
    }, function (_unresolved_4) {
      CCVMParentComp = _unresolved_4.CCVMParentComp;
    }, function (_unresolved_5) {
      GameEvent = _unresolved_5.GameEvent;
    }, function (_unresolved_6) {
      UIID = _unresolved_6.UIID;
    }, function (_unresolved_7) {
      smc = _unresolved_7.smc;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "92429ykTnxFCrcGyW58JWjj", "LoadingViewComp", undefined);
      /*
       * @Author: dgflash
       * @Date: 2021-07-03 16:13:17
       * @LastEditors: dgflash
       * @LastEditTime: 2022-08-29 13:37:08
       */


      __checkObsolete__(['_decorator']);

      ({
        ccclass,
        property
      } = _decorator);
      /** 游戏资源加载 */

      _export("LoadingViewComp", LoadingViewComp = (_dec = ccclass('LoadingViewComp'), _dec2 = (_crd && ecs === void 0 ? (_reportPossibleCrUseOfecs({
        error: Error()
      }), ecs) : ecs).register('LoadingView', false), _dec(_class = _dec2(_class = class LoadingViewComp extends (_crd && CCVMParentComp === void 0 ? (_reportPossibleCrUseOfCCVMParentComp({
        error: Error()
      }), CCVMParentComp) : CCVMParentComp) {
        constructor() {
          super(...arguments);

          /** VM 组件绑定数据 */
          this.data = {
            /** 加载资源当前进度 */
            finished: 0,

            /** 加载资源最大进度 */
            total: 0,

            /** 加载资源进度比例值 */
            progress: "0",

            /** 加载流程中提示文本 */
            prompt: ""
          };
          this.progress = 0;
        }

        reset() {
          setTimeout(() => {
            // 关闭加载界面
            (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
              error: Error()
            }), oops) : oops).gui.remove((_crd && UIID === void 0 ? (_reportPossibleCrUseOfUIID({
              error: Error()
            }), UIID) : UIID).Loading); // 打开游戏主界面（自定义逻辑）

            (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
              error: Error()
            }), oops) : oops).gui.open((_crd && UIID === void 0 ? (_reportPossibleCrUseOfUIID({
              error: Error()
            }), UIID) : UIID).Demo);
          }, 500);
        }

        start() {
          // if (!sys.isNative) {
          this.enter(); // }
        }

        enter() {
          this.addEvent();
          this.loadRes();
        }

        addEvent() {
          this.on((_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
            error: Error()
          }), GameEvent) : GameEvent).LoginSuccess, this.onHandler, this);
        }

        onHandler(event, args) {
          switch (event) {
            case (_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
              error: Error()
            }), GameEvent) : GameEvent).LoginSuccess:
              // 加载流程结束，移除加载提示界面
              this.ent.remove(LoadingViewComp);
              break;
          }
        }
        /** 加载资源 */


        loadRes() {
          var _this = this;

          return _asyncToGenerator(function* () {
            _this.data.progress = 0;
            yield _this.loadCustom();

            _this.loadGameRes();
          })();
        }
        /** 加载游戏本地JSON数据（自定义内容） */


        loadCustom() {
          // 加载游戏本地JSON数据的多语言提示文本
          this.data.prompt = "加载中"; //oops.language.getLangByID("loading_load_json");

          return new Promise( /*#__PURE__*/_asyncToGenerator(function* (resolve, reject) {
            resolve(null);
          }));
        }
        /** 加载初始游戏内容资源 */


        loadGameRes() {
          // 加载初始游戏内容资源的多语言提示文本
          // this.data.prompt = oops.language.getLangByID("loading_load_game");
          (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
            error: Error()
          }), oops) : oops).res.loadDir("gui", this.onProgressCallback.bind(this), this.onCompleteCallback.bind(this));
        }
        /** 加载进度事件 */


        onProgressCallback(finished, total, item) {
          this.data.finished = finished;
          this.data.total = total;
          var progress = finished / total;

          if (progress > this.progress) {
            this.progress = progress;
            this.data.progress = (progress * 100).toFixed(2);
          }
        }
        /** 加载完成事件 */


        onCompleteCallback() {
          // 获取用户信息的多语言提示文本
          // this.data.prompt = oops.language.getLangByID("loading_load_player");
          // 初始化帐号模块
          (_crd && smc === void 0 ? (_reportPossibleCrUseOfsmc({
            error: Error()
          }), smc) : smc).account.connect();
          this.reset();
        }

      }) || _class) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=759a2831a055d4e6797f0ace83f728926567ba3c.js.map