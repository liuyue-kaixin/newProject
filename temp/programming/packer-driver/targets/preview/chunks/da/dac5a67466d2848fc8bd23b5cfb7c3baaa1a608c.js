System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, BehaviorTree, BTreeNode, Decorator, _crd;

  function _reportPossibleCrUseOfBehaviorTree(extras) {
    _reporterNs.report("BehaviorTree", "./BehaviorTree", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBTreeNode(extras) {
    _reporterNs.report("BTreeNode", "./BTreeNode", _context.meta, extras);
  }

  _export("Decorator", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      BehaviorTree = _unresolved_2.BehaviorTree;
    }, function (_unresolved_3) {
      BTreeNode = _unresolved_3.BTreeNode;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "0455agxsbxHlYleJPDpJX3l", "Decorator", undefined);
      /*
       * @Author: dgflash
       * @Date: 2022-06-21 12:05:14
       * @LastEditors: dgflash
       * @LastEditTime: 2022-07-20 14:05:02
       */


      /** 
       * 装饰器是条件语句只能附加在其他节点上并且定义所附加的节点是否执行 
       * 如果装饰器是true 它所在的子树会被执行，如果是false 所在的子树不会被执行
       */
      _export("Decorator", Decorator = class Decorator extends (_crd && BTreeNode === void 0 ? (_reportPossibleCrUseOfBTreeNode({
        error: Error()
      }), BTreeNode) : BTreeNode) {
        constructor(node) {
          super();
          this.node = void 0;
          if (node) this.node = (_crd && BehaviorTree === void 0 ? (_reportPossibleCrUseOfBehaviorTree({
            error: Error()
          }), BehaviorTree) : BehaviorTree).getNode(node);
        }

        setNode(node) {
          this.node = (_crd && BehaviorTree === void 0 ? (_reportPossibleCrUseOfBehaviorTree({
            error: Error()
          }), BehaviorTree) : BehaviorTree).getNode(node);
        }

        start() {
          this.node.setControl(this);
          this.node.start();
          super.start();
        }

        end() {
          this.node.end();
        }

        run(blackboard) {
          this.node.run(blackboard);
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=dac5a67466d2848fc8bd23b5cfb7c3baaa1a608c.js.map