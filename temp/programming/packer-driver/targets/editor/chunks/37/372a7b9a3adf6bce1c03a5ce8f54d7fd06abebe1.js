System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, BTreeNode, BehaviorTree, _crd, countUnnamed;

  function _reportPossibleCrUseOfBTreeNode(extras) {
    _reporterNs.report("BTreeNode", "./BTreeNode", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIControl(extras) {
    _reporterNs.report("IControl", "./IControl", _context.meta, extras);
  }

  _export("BehaviorTree", void 0);

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

      _cclegacy._RF.push({}, "22a91RP3fNG/rWWAXlmM4BT", "BehaviorTree", undefined);

      countUnnamed = 0;
      /** 行为树 */

      _export("BehaviorTree", BehaviorTree = class BehaviorTree {
        /** 是否已开始执行 */
        get started() {
          return this._started;
        }
        /**
         * 构造函数
         * @param node          根节点
         * @param blackboard    外部参数对象
         */


        constructor(node, blackboard) {
          this.title = void 0;

          /** 根节点 */
          this._root = void 0;

          /** 当前执行节点 */
          this._current = void 0;

          /** 是否已开始执行 */
          this._started = false;

          /** 外部参数对象 */
          this._blackboard = void 0;
          countUnnamed += 1;
          this.title = node.constructor.name + '(btree_' + countUnnamed + ')';
          this._root = node;
          this._blackboard = blackboard;
        }
        /** 设置行为逻辑中的共享数据 */


        setObject(blackboard) {
          this._blackboard = blackboard;
        }
        /** 执行行为树逻辑 */


        run() {
          if (this._started) {
            console.error(`行为树【${this.title}】未调用步骤，在最后一次调用步骤时有一个任务未完成`);
          }

          this._started = true;
          var node = BehaviorTree.getNode(this._root);
          this._current = node;
          node.setControl(this);
          node.start(this._blackboard);
          node.run(this._blackboard);
        }

        running(node) {
          this._started = false;
        }

        success() {
          this._current.end(this._blackboard);

          this._started = false;
        }

        fail() {
          this._current.end(this._blackboard);

          this._started = false;
        }
        /** ---------------------------------------------------------------------------------------------------- */


        static register(name, node) {
          this._registeredNodes.set(name, node);
        }

        static getNode(name) {
          var node = name instanceof (_crd && BTreeNode === void 0 ? (_reportPossibleCrUseOfBTreeNode({
            error: Error()
          }), BTreeNode) : BTreeNode) ? name : this._registeredNodes.get(name);

          if (!node) {
            throw new Error(`无法找到节点【${name}】，可能它没有注册过`);
          }

          return node;
        }

      });

      BehaviorTree._registeredNodes = new Map();

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=372a7b9a3adf6bce1c03a5ce8f54d7fd06abebe1.js.map