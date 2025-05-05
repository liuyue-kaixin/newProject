System.register(["__unresolved_0", "cc"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, BTreeNode, _crd;

  function _reportPossibleCrUseOfIControl(extras) {
    _reporterNs.report("IControl", "./IControl", _context.meta, extras);
  }

  _export("BTreeNode", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "f0aeepAwndJP7wlpP6QKx06", "BTreeNode", undefined);
      /*
       * @Author: dgflash
       * @Date: 2022-06-21 12:05:14
       * @LastEditors: dgflash
       * @LastEditTime: 2022-07-20 14:04:44
       */


      /** 行为树节点 */
      _export("BTreeNode", BTreeNode = class BTreeNode {
        constructor() {
          this._control = void 0;
          this.title = void 0;
          this.title = this.constructor.name;
        }

        start(blackboard) {}

        end(blackboard) {}

        setControl(control) {
          this._control = control;
        }

        running(blackboard) {
          this._control.running(this);
        }

        success() {
          this._control.success();
        }

        fail() {
          this._control.fail();
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=fda000f82c7d67ca5ea5303fe49ad7e49195ad06.js.map