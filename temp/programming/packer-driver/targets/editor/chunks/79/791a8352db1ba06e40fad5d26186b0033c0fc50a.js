System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, BlockInputEvents, Layers, LayerUI, LayerPopUp, _crd;

  function _reportPossibleCrUseOfPopViewParams(extras) {
    _reporterNs.report("PopViewParams", "./Defines", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIConfig(extras) {
    _reporterNs.report("UIConfig", "./LayerManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLayerUI(extras) {
    _reporterNs.report("LayerUI", "./LayerUI", _context.meta, extras);
  }

  _export("LayerPopUp", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      BlockInputEvents = _cc.BlockInputEvents;
      Layers = _cc.Layers;
    }, function (_unresolved_2) {
      LayerUI = _unresolved_2.LayerUI;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "25d07BQBCFADaSsh/I3GrTX", "LayerPopup", undefined);
      /*
       * @Date: 2021-11-24 16:08:36
       * @LastEditors: dgflash
       * @LastEditTime: 2022-09-02 13:44:28
       */


      __checkObsolete__(['BlockInputEvents', 'Layers']);

      /*
       * 弹窗层，允许同时弹出多个窗口，弹框参数可以查看 PopViewParams
       */
      _export("LayerPopUp", LayerPopUp = class LayerPopUp extends (_crd && LayerUI === void 0 ? (_reportPossibleCrUseOfLayerUI({
        error: Error()
      }), LayerUI) : LayerUI) {
        constructor(name) {
          super(name);
          this.black = void 0;
          this.init();
        }

        init() {
          this.layer = Layers.Enum.UI_2D;
          this.black = this.addComponent(BlockInputEvents);
          this.black.enabled = false;
        }
        /**
         * 添加一个预制件节点到PopUp层容器中，该方法将返回一个唯一uuid来标识该操作节点
         * @param prefabPath 预制件路径
         * @param params     传给组件onAdded、onRemoved方法的参数。
         * @param popParams  弹出界面的设置定义，详情见PopViewParams
         */


        add(config, params, popParams) {
          this.black.enabled = true;
          return super.add(config, params, popParams);
        }

        remove(prefabPath, isDestroy) {
          super.remove(prefabPath, isDestroy);
          this.setBlackDisable();
        }

        removeByUuid(prefabPath, isDestroy) {
          super.removeByUuid(prefabPath, isDestroy);
          this.setBlackDisable();
        }

        setBlackDisable() {
          this.black.enabled = false;
        }

        clear(isDestroy) {
          super.clear(isDestroy);
          this.black.enabled = false;
          this.active = false;
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=791a8352db1ba06e40fad5d26186b0033c0fc50a.js.map