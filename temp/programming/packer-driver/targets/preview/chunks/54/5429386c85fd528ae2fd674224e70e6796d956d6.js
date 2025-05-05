System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, BehaviorTree, BTreeNode, BranchNode, _crd;

  function _reportPossibleCrUseOfBehaviorTree(extras) {
    _reporterNs.report("BehaviorTree", "./BehaviorTree", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBTreeNode(extras) {
    _reporterNs.report("BTreeNode", "./BTreeNode", _context.meta, extras);
  }

  _export("BranchNode", void 0);

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

      _cclegacy._RF.push({}, "beafaDMsw9FCbGDpLVmMfa1", "BranchNode", undefined);
      /*
       * @Author: dgflash
       * @Date: 2022-06-21 12:05:14
       * @LastEditors: dgflash
       * @LastEditTime: 2022-07-20 13:58:32
       */


      /** 复合节点 */
      _export("BranchNode", BranchNode = class BranchNode extends (_crd && BTreeNode === void 0 ? (_reportPossibleCrUseOfBTreeNode({
        error: Error()
      }), BTreeNode) : BTreeNode) {
        constructor(nodes) {
          super();

          /** 子节点数组 */
          this.children = void 0;

          /** 当前任务索引 */
          this._actualTask = void 0;

          /** 正在运行的节点 */
          this._runningNode = void 0;
          this._nodeRunning = void 0;

          /** 外部参数对象 */
          this._blackboard = void 0;
          this.children = nodes || [];
        }

        start() {
          this._actualTask = 0;
          super.start();
        }

        run(blackboard) {
          if (this.children.length == 0) {
            // 没有子任务直接视为执行失败
            this._control.fail();
          } else {
            this._blackboard = blackboard;
            this.start();

            if (this._actualTask < this.children.length) {
              this._run();
            }
          }

          this.end();
        }
        /** 执行当前节点逻辑 */


        _run(blackboard) {
          var node = (_crd && BehaviorTree === void 0 ? (_reportPossibleCrUseOfBehaviorTree({
            error: Error()
          }), BehaviorTree) : BehaviorTree).getNode(this.children[this._actualTask]);
          this._runningNode = node;
          node.setControl(this);
          node.start(this._blackboard);
          node.run(this._blackboard);
        }

        running(node) {
          this._nodeRunning = node;

          this._control.running(node);
        }

        success() {
          this._nodeRunning = null;

          this._runningNode.end(this._blackboard);
        }

        fail() {
          this._nodeRunning = null;

          this._runningNode.end(this._blackboard);
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=5429386c85fd528ae2fd674224e70e6796d956d6.js.map