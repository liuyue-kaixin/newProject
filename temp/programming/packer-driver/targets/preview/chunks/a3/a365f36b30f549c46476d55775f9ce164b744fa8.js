System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Component, _decorator, oops, _dec, _class, _crd, ccclass, DelegateComponent;

  function _reportPossibleCrUseOfoops(extras) {
    _reporterNs.report("oops", "../../Oops", _context.meta, extras);
  }

  function _reportPossibleCrUseOfViewParams(extras) {
    _reporterNs.report("ViewParams", "./Defines", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Component = _cc.Component;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      oops = _unresolved_2.oops;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "d8f1fGRD7dBzIeBSkOpd/Py", "DelegateComponent", undefined);
      /*
       * @Author: dgflash
       * @Date: 2022-09-01 18:00:28
       * @LastEditors: dgflash
       * @LastEditTime: 2023-01-09 11:55:03
       */


      __checkObsolete__(['Component', 'Node', '_decorator']);

      ({
        ccclass
      } = _decorator);
      /** 窗口事件触发组件 */

      _export("DelegateComponent", DelegateComponent = (_dec = ccclass('DelegateComponent'), _dec(_class = class DelegateComponent extends Component {
        constructor() {
          super(...arguments);

          /** 视图参数 */
          this.viewParams = null;
        }

        /** 窗口添加 */
        add() {
          // 触发窗口组件上添加到父节点后的事件
          this.applyComponentsFunction(this.node, "onAdded", this.viewParams.params);

          if (typeof this.viewParams.callbacks.onAdded === "function") {
            this.viewParams.callbacks.onAdded(this.node, this.viewParams.params);
          }
        }
        /** 删除节点，该方法只能调用一次，将会触发onBeforeRemoved回调 */


        remove(isDestroy) {
          if (this.viewParams.valid) {
            // 触发窗口组件上移除之前的事件
            this.applyComponentsFunction(this.node, "onBeforeRemove", this.viewParams.params); //  通知外部对象窗口组件上移除之前的事件（关闭窗口前的关闭动画处理）

            if (typeof this.viewParams.callbacks.onBeforeRemove === "function") {
              this.viewParams.callbacks.onBeforeRemove(this.node, () => {
                this.removed(this.viewParams, isDestroy);
              });
            } else {
              this.removed(this.viewParams, isDestroy);
            }
          }
        }
        /** 窗口组件中触发移除事件与释放窗口对象 */


        removed(viewParams, isDestroy) {
          viewParams.valid = false;

          if (typeof viewParams.callbacks.onRemoved === "function") {
            viewParams.callbacks.onRemoved(this.node, viewParams.params);
          }

          if (isDestroy) {
            this.node.destroy(); // 释放界面相关资源

            (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
              error: Error()
            }), oops) : oops).res.release(viewParams.prefabPath);
          } else {
            this.node.removeFromParent();
          }
        }

        onDestroy() {
          // 触发窗口组件上窗口移除之后的事件
          this.applyComponentsFunction(this.node, "onRemoved", this.viewParams.params); // 通知外部对象窗口移除之后的事件
          // if (typeof this.viewParams.callbacks!.onRemoved === "function") {
          //     this.viewParams.callbacks!.onRemoved(this.node, this.viewParams.params);
          // }

          this.viewParams = null;
        }

        applyComponentsFunction(node, funName, params) {
          for (var i = 0; i < node.components.length; i++) {
            var component = node.components[i];
            var func = component[funName];

            if (func) {
              func.call(component, params);
            }
          }
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=a365f36b30f549c46476d55775f9ce164b744fa8.js.map