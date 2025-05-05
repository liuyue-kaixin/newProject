System.register(["__unresolved_0", "cc"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, TreeNode, UIMap, _crd;

  function _reportPossibleCrUseOfLayerManager(extras) {
    _reporterNs.report("LayerManager", "./LayerManager", _context.meta, extras);
  }

  _export("UIMap", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "1bd03ggtItIIajoqd0I4VGL", "UIMap", undefined);
      /*
       * @Author: dgflash
       * @Date: 2022-06-14 19:35:16
       * @LastEditors: dgflash
       * @LastEditTime: 2022-09-02 13:27:20
       */


      /** 界面关系树节点 */
      TreeNode = class TreeNode {
        constructor() {
          this.id = void 0;

          /** 父节点编号 */
          this.pid = void 0;

          /** 父节点 */
          this.parent = null;

          /** 子节点 */
          this.child = [];

          /** 界面名 */
          this.name = void 0;

          /** 界面代号（用于同一界面有多条路径时） */
          this.panel = void 0;
        }

      };
      /** 用于树形结构两节点之间的寻路功能 */

      _export("UIMap", UIMap = class UIMap {
        constructor() {
          /** UI层级管理器 */
          this.manager = void 0;

          /** 界面节点树 */
          this.nodes = new Map();
        }

        /** 创建UI关系树 */
        init(manager, data) {
          this.manager = manager; // 解析数据

          for (var key in data) {
            var d = data[key];
            var n = new TreeNode();
            n.id = parseInt(key);
            n.pid = d.parent;
            n.name = d.name;
            n.panel = d.panel;
            this.nodes.set(n.id, n);
          } // 设置节点关系


          this.nodes.forEach((value, key) => {
            value.parent = this.nodes.get(value.pid);
            if (value.parent) value.parent.child.push(value);
          });
        }
        /**
         * 树节点寻路
         * @param startId 起始节点编号
         * @param endId   结束节点编号
         * @returns 
         */


        pathFinding(startId, endId) {
          var start = this.nodes.get(startId);
          var end = this.nodes.get(endId);
          var close = this.findUp(start);
          var open = this.findUp(end);
          close.forEach(value => {
            this.manager.remove(value.id, true);
          });
          open.forEach(value => {
            this.manager.open(value.id);
          });
          return {
            paths_close: close,
            paths_open: open
          };
        }
        /** 向上寻找子节点直到根节点停止，并返回节点路径数组 */


        findUp(start) {
          var paths = [];
          var current = start;

          while (current.parent != null) {
            // 父级为空时为根节点
            paths.push(current);
            current = current.parent;
          }

          return paths;
        }
        /** 释放所有节点 */


        release() {
          this.nodes.clear();
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=3238a79232655a8f94500e7c5c1409e316967781.js.map