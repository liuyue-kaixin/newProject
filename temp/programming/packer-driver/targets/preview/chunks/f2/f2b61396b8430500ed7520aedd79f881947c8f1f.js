System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, GroupItem, PhysicsUtil, _crd;

  _export({
    GroupItem: void 0,
    PhysicsUtil: void 0
  });

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "c1584nuvI9HtJ5IHcmFEBzR", "PhysicsUtil", undefined);

      /*
       * @Author: dgflash
       * @Date: 2022-07-21 17:30:59
       * @LastEditors: dgflash
       * @LastEditTime: 2022-09-02 14:40:28
       */

      /** 物理分组数据 */
      __checkObsolete__(['Node']);

      _export("GroupItem", GroupItem = class GroupItem {
        /** 分组值 */
        get value() {
          return this._value;
        }

        /** 分组名 */
        get name() {
          return this._name;
        }
        /** 碰撞掩码 */


        get mask() {
          return 1 << this._value;
        }
        /**
         * 构造函数
         * @param value 分组值
         * @param name  分组名
         */


        constructor(value, name) {
          this._value = void 0;
          this._name = void 0;
          this._value = value;
          this._name = name;
        }

      });
      /***
       * 为了方便使用，将编辑器中的物理分组定义到代码。如果编辑器中有修改，确保同步到这里。
       */


      _export("PhysicsUtil", PhysicsUtil = class PhysicsUtil {
        static setNodeLayer(item, node) {
          node.layer = item.mask;
          node.children.forEach(n => {
            n.layer = item.mask;
            PhysicsUtil.setNodeLayer(item, n);
          });
        }

      });

      /** 默认物理分组 */
      PhysicsUtil.DEFAULT = new GroupItem(0, 'DEFAULT');

      /** 能通过屏幕触摸中发出的射线检查到的游戏对象 */
      PhysicsUtil.GAME_OBJECT_SELECT = new GroupItem(1, 'GAME_OBJECT_SELECT');

      /** 玩家自己 */
      PhysicsUtil.GAME_OWNER = new GroupItem(2, 'GAME_OWNER');

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=f2b61396b8430500ed7520aedd79f881947c8f1f.js.map