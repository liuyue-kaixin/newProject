System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, BTreeNode, Task, _crd;

  function _reportPossibleCrUseOfBTreeNode(extras) {
    _reporterNs.report("BTreeNode", "./BTreeNode", _context.meta, extras);
  }

  _export("Task", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      BTreeNode = _unresolved_2.BTreeNode;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "95087QhEU1G1LWnM2D7haTQ", "Task", undefined);
      /*
       * @Author: dgflash
       * @Date: 2022-06-21 12:05:14
       * @LastEditors: dgflash
       * @LastEditTime: 2022-07-20 11:43:20
       */


      /** 任务行为节点 */
      _export("Task", Task = class Task extends (_crd && BTreeNode === void 0 ? (_reportPossibleCrUseOfBTreeNode({
        error: Error()
      }), BTreeNode) : BTreeNode) {
        run(blackboard) {}

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=7ce1ae81b555091bd068592affb059984c75db28.js.map