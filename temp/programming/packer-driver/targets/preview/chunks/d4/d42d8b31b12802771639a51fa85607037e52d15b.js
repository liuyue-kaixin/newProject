System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, ecs, Account, InitResComp, _dec, _class, _crd, Initialize;

  function _reportPossibleCrUseOfecs(extras) {
    _reporterNs.report("ecs", "../../../../extensions/oops-plugin-framework/assets/libs/ecs/ECS", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAccount(extras) {
    _reporterNs.report("Account", "../account/Account", _context.meta, extras);
  }

  function _reportPossibleCrUseOfInitResComp(extras) {
    _reporterNs.report("InitResComp", "./bll/InitRes", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      ecs = _unresolved_2.ecs;
    }, function (_unresolved_3) {
      Account = _unresolved_3.Account;
    }, function (_unresolved_4) {
      InitResComp = _unresolved_4.InitResComp;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "ffbceQs6Z9IoI5z6mt1avMw", "Initialize", undefined);
      /*
       * @Author: dgflash
       * @Date: 2021-11-11 17:45:23
       * @LastEditors: dgflash
       * @LastEditTime: 2022-08-01 13:49:35
       */


      /**
       * 游戏进入初始化模块
       * 1、热更新
       * 2、加载默认资源
       */
      _export("Initialize", Initialize = (_dec = (_crd && ecs === void 0 ? (_reportPossibleCrUseOfecs({
        error: Error()
      }), ecs) : ecs).register('Initialize'), _dec(_class = class Initialize extends (_crd && ecs === void 0 ? (_reportPossibleCrUseOfecs({
        error: Error()
      }), ecs) : ecs).Entity {
        constructor() {
          super(...arguments);

          /** 帐号管理 */
          this.account = null;
        }

        init() {
          // 帐号模块为初始化模块的子实体对象
          this.account = (_crd && ecs === void 0 ? (_reportPossibleCrUseOfecs({
            error: Error()
          }), ecs) : ecs).getEntity(_crd && Account === void 0 ? (_reportPossibleCrUseOfAccount({
            error: Error()
          }), Account) : Account);
          this.addChild(this.account); // 初始化游戏公共资源

          this.add(_crd && InitResComp === void 0 ? (_reportPossibleCrUseOfInitResComp({
            error: Error()
          }), InitResComp) : InitResComp);
        }

      }) || _class)); // export class EcsInitializeSystem extends ecs.System {
      //     constructor() {
      //         super();
      //         this.add(new InitResSystem());
      //     }
      // }


      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=d42d8b31b12802771639a51fa85607037e52d15b.js.map