System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, GameComponent, _dec, _class, _class2, _crd, ccclass, property, CCComp;

  function _reportPossibleCrUseOfGameComponent(extras) {
    _reporterNs.report("GameComponent", "./GameComponent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfecs(extras) {
    _reporterNs.report("ecs", "../../libs/ecs/ECS", _context.meta, extras);
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
      GameComponent = _unresolved_2.GameComponent;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "dd207fiyGJLf5r+bkiMgwdt", "CCComp", undefined);
      /*
       * @Author: dgflash
       * @Date: 2021-11-11 19:05:32
       * @LastEditors: dgflash
       * @LastEditTime: 2022-09-06 17:20:51
       */


      __checkObsolete__(['_decorator']);

      ({
        ccclass,
        property
      } = _decorator);
      /** 
       * 游戏显示对象组件
       * 
       * 功能介绍：
       * 1. 对象拥有 cc.Component 组件功能与 ecs.Comp 组件功能
       * 2. 对象自带全局事件监听、释放、发送全局消息功能
       * 3. 对象管理的所有节点摊平，直接通过节点名获取cc.Node对象
       * 
       * 应用场景
       * 1. 网络游戏，优先有数据对象，然后创建视图对象，当释放视图组件时，部分场景不希望释放数据对象
       * 
       * @example
      @ccclass('RoleViewComp')
      @ecs.register('RoleView', false)
      export class RoleViewComp extends CCComp {
          @property({ type: sp.Skeleton, tooltip: '角色动画' })
          spine: sp.Skeleton = null!;
      
          onLoad(){
              
          }
      }
       */

      _export("CCComp", CCComp = (_dec = ccclass('CCComp'), _dec(_class = (_class2 = class CCComp extends (_crd && GameComponent === void 0 ? (_reportPossibleCrUseOfGameComponent({
        error: Error()
      }), GameComponent) : GameComponent) {
        constructor() {
          super(...arguments);
          this.canRecycle = void 0;
          this.ent = void 0;
        }

      }, _class2.tid = -1, _class2.compName = void 0, _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=7fa7095a04c761639c8dcb30358560385ae8b0fb.js.map