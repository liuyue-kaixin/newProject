System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, error, instantiate, oops, Notify, ViewParams, DelegateComponent, LayerUI, LayerNotify, _crd, ToastPrefabPath;

  function _reportPossibleCrUseOfoops(extras) {
    _reporterNs.report("oops", "../../Oops", _context.meta, extras);
  }

  function _reportPossibleCrUseOfNotify(extras) {
    _reporterNs.report("Notify", "../prompt/Notify", _context.meta, extras);
  }

  function _reportPossibleCrUseOfViewParams(extras) {
    _reporterNs.report("ViewParams", "./Defines", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDelegateComponent(extras) {
    _reporterNs.report("DelegateComponent", "./DelegateComponent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLayerUI(extras) {
    _reporterNs.report("LayerUI", "./LayerUI", _context.meta, extras);
  }

  _export("LayerNotify", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      error = _cc.error;
      instantiate = _cc.instantiate;
    }, function (_unresolved_2) {
      oops = _unresolved_2.oops;
    }, function (_unresolved_3) {
      Notify = _unresolved_3.Notify;
    }, function (_unresolved_4) {
      ViewParams = _unresolved_4.ViewParams;
    }, function (_unresolved_5) {
      DelegateComponent = _unresolved_5.DelegateComponent;
    }, function (_unresolved_6) {
      LayerUI = _unresolved_6.LayerUI;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "da14ax+B2xNsL2taQFOh7we", "LayerNotify", undefined);
      /*
       * @Author: dgflash
       * @Date: 2022-08-15 10:06:47
       * @LastEditors: dgflash
       * @LastEditTime: 2022-09-02 13:44:12
       */


      __checkObsolete__(['error', 'instantiate', 'Node', 'Prefab']);

      ToastPrefabPath = 'common/prefab/notify';
      /*
       * 滚动消息提示层
       */

      _export("LayerNotify", LayerNotify = class LayerNotify extends (_crd && LayerUI === void 0 ? (_reportPossibleCrUseOfLayerUI({
        error: Error()
      }), LayerUI) : LayerUI) {
        /**
         * 显示toast
         * @param content 文本表示
         * @param useI18n 是否使用多语言
         */
        show(content, useI18n) {
          var viewParams = new (_crd && ViewParams === void 0 ? (_reportPossibleCrUseOfViewParams({
            error: Error()
          }), ViewParams) : ViewParams)();
          viewParams.uuid = this.getUuid(ToastPrefabPath);
          viewParams.prefabPath = ToastPrefabPath;
          viewParams.params = {
            content: content,
            useI18n: useI18n
          };
          viewParams.callbacks = {};
          viewParams.valid = true;
          this.ui_nodes.set(viewParams.uuid, viewParams);
          this.load(viewParams);
        }

        load(viewParams) {
          // 获取预制件资源
          (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
            error: Error()
          }), oops) : oops).res.load(viewParams.prefabPath, (err, res) => {
            if (err) {
              error(err);
            }

            let childNode = instantiate(res);
            viewParams.node = childNode;
            let comp = childNode.addComponent(_crd && DelegateComponent === void 0 ? (_reportPossibleCrUseOfDelegateComponent({
              error: Error()
            }), DelegateComponent) : DelegateComponent);
            comp.viewParams = viewParams;
            this.createNode(viewParams);
          });
        }

        createNode(viewParams) {
          let childNode = super.createNode(viewParams);
          let toastCom = childNode.getComponent(_crd && Notify === void 0 ? (_reportPossibleCrUseOfNotify({
            error: Error()
          }), Notify) : Notify);
          childNode.active = true;
          toastCom.toast(viewParams.params.content, viewParams.params.useI18n);
          return childNode;
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=6e49911626d02e4e3071cc3744493bc706cb0130.js.map