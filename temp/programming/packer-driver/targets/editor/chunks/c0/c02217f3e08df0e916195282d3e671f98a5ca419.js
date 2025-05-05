System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, BranchNode, Selector, _crd;

  function _reportPossibleCrUseOfBranchNode(extras) {
    _reporterNs.report("BranchNode", "./BranchNode", _context.meta, extras);
  }

  _export("Selector", void 0);

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

      _cclegacy._RF.push({}, "90470XqT/FGHo/PRQktLcYy", "Selector", undefined);
      /*
       * @Author: dgflash
       * @Date: 2022-06-21 12:05:14
       * @LastEditors: dgflash
       * @LastEditTime: 2022-07-20 14:05:40
       */


      /** 
       * 逻辑或关系
       * 只要子节点有一个返回true，则停止执行其它子节点，并且Selector返回true。如果所有子节点都返回false，则Selector返回false。
       */
      _export("Selector", Selector = class Selector extends (_crd && BranchNode === void 0 ? (_reportPossibleCrUseOfBranchNode({
        error: Error()
      }), BranchNode) : BranchNode) {
        success() {
          super.success();

          this._control.success();
        }

        fail() {
          super.fail();
          this._actualTask += 1;

          if (this._actualTask < this.children.length) {
            this._run(this._blackboard);
          } else {
            this._control.fail();
          }
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
//# sourceMappingURL=c02217f3e08df0e916195282d3e671f98a5ca419.js.map