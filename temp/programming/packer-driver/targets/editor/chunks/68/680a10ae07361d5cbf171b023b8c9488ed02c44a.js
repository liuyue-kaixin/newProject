System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, LayerItem, LayerUtil, _crd;

  _export({
    LayerItem: void 0,
    LayerUtil: void 0
  });

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "b7a864Zpb5N4Zm7onWE1i9D", "LayerUtil", undefined);

      /*
       * @Author: dgflash
       * @Date: 2022-09-01 18:00:28
       * @LastEditors: dgflash
       * @LastEditTime: 2022-09-02 12:05:38
       */

      /** 游戏摄像机层数据 */
      __checkObsolete__(['Node']);

      _export("LayerItem", LayerItem = class LayerItem {
        get value() {
          return this._value;
        }

        get name() {
          return this._name;
        }

        get mask() {
          return 1 << this._value;
        }

        constructor(value, name) {
          this._value = void 0;
          this._name = void 0;
          this._value = value;
          this._name = name;
        }

      });
      /***
       * 游戏摄像机层管理工具
       */


      _export("LayerUtil", LayerUtil = class LayerUtil {
        /**
         * 设置节点层
         * @param item 层数据
         * @param node 节点
         */
        static setNodeLayer(item, node) {
          node.layer = item.mask;
          node.children.forEach(n => {
            n.layer = item.mask;
            LayerUtil.setNodeLayer(item, n);
          });
        }

      });

      /** 地图对象层 */
      LayerUtil.MAP = new LayerItem(0, 'MAP');

      /** 替身对象层 */
      LayerUtil.AVATAR = new LayerItem(1, 'AVATAR');
      LayerUtil.IGNORE_RAYCAST = new LayerItem(20, 'IGNORE_RAYCAST');
      LayerUtil.GIZMOS = new LayerItem(21, 'GIZMOS');

      /** 编辑器对象层 */
      LayerUtil.EDITOR = new LayerItem(22, 'EDITOR');

      /** 三维对象层 */
      LayerUtil.UI_3D = new LayerItem(23, 'UI_3D');
      LayerUtil.SCENE_GIZMO = new LayerItem(24, 'SCENE_GIZMO');

      /** 二维对象层 */
      LayerUtil.UI_2D = new LayerItem(25, 'UI_2D');

      /** 引擎分析工具层 */
      LayerUtil.PROFILTER = new LayerItem(28, 'PROFILTER');

      /** 默认对象层 */
      LayerUtil.DEFAULT = new LayerItem(30, 'DEFAULT');

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=680a10ae07361d5cbf171b023b8c9488ed02c44a.js.map