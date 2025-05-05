System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, BranchNode, Sequence, _crd;

  function _reportPossibleCrUseOfBranchNode(extras) {
    _reporterNs.report("BranchNode", "./BranchNode", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBTreeNode(extras) {
    _reporterNs.report("BTreeNode", "./BTreeNode", _context.meta, extras);
  }

  _export("Sequence", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      BranchNode = _unresolved_2.BranchNode;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "1ef80bgYZBPXqCDIpzHpbBJ", "Sequence", undefined);
      /*
       * @Author: dgflash
       * @Date: 2022-06-21 12:05:14
       * @LastEditors: dgflash
       * @LastEditTime: 2022-07-20 14:05:22
       */


      /** 
       * 逻辑与关系
       * 只要有一个子节点返回false，则停止执行其它子节点，并且Sequence返回false。如果所有子节点都返回true，则Sequence返回true。
       */
      _export("Sequence", Sequence = class Sequence extends (_crd && BranchNode === void 0 ? (_reportPossibleCrUseOfBranchNode({
        error: Error()
      }), BranchNode) : BranchNode) {
        constructor(nodes) {
          super(nodes);
        }

        success() {
          super.success();
          this._actualTask += 1;

          if (this._actualTask < this.children.length) {
            this._run(this._blackboard);
          } else {
            this._control.success();
          }
        }

        fail() {
          super.fail();

          this._control.fail();
        }

        _run(blackboard) {
          if (this._nodeRunning) {
            this._nodeRunning.run(this._blackboard);
          } else {
            super._run();
          }
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=b9b9bf0cfc44c91860fdd4e5bbb10e7397efc954.js.map