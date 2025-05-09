System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, BranchNode, Priority, _crd;

  function _reportPossibleCrUseOfBranchNode(extras) {
    _reporterNs.report("BranchNode", "./BranchNode", _context.meta, extras);
  }

  _export("Priority", void 0);

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

      _cclegacy._RF.push({}, "f7555DSpj9LbYpRDi8/UKdN", "Priority", undefined);
      /*
       * @Author: dgflash
       * @Date: 2022-06-21 12:05:14
       * @LastEditors: dgflash
       * @LastEditTime: 2022-07-20 14:08:10
       */


      /** 优先 */
      _export("Priority", Priority = class Priority extends (_crd && BranchNode === void 0 ? (_reportPossibleCrUseOfBranchNode({
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

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=982b345df73984e4e46cf6e0e039b341766547e1.js.map