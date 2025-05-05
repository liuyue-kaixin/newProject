System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, ViewParams, LayerPopUp, LayerDialog, _crd;

  function _reportPossibleCrUseOfUICallbacks(extras) {
    _reporterNs.report("UICallbacks", "./Defines", _context.meta, extras);
  }

  function _reportPossibleCrUseOfViewParams(extras) {
    _reporterNs.report("ViewParams", "./Defines", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIConfig(extras) {
    _reporterNs.report("UIConfig", "./LayerManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLayerPopUp(extras) {
    _reporterNs.report("LayerPopUp", "./LayerPopup", _context.meta, extras);
  }

  _export("LayerDialog", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
    }, function (_unresolved_2) {
      ViewParams = _unresolved_2.ViewParams;
    }, function (_unresolved_3) {
      LayerPopUp = _unresolved_3.LayerPopUp;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "dcad5w8wHlEDJpIKJ4gUxEP", "LayerDialog", undefined);

      /*
       * @Author: dgflash
       * @Date: 2021-07-03 16:13:17
       * @LastEditors: dgflash
       * @LastEditTime: 2023-07-24 17:14:57
       */
      __checkObsolete__(['Node']);

      /** 模式弹窗数据 */

      /*
       * 模式弹窗层，该层的窗口同时只能显示一个，删除以后会自动从队列当中取一个弹窗，直到队列为空
       */
      _export("LayerDialog", LayerDialog = class LayerDialog extends (_crd && LayerPopUp === void 0 ? (_reportPossibleCrUseOfLayerPopUp({
        error: Error()
      }), LayerPopUp) : LayerPopUp) {
        constructor() {
          super(...arguments);

          /** 窗口调用参数队列 */
          this.params = [];

          /** 当前窗口数据 */
          this.current = void 0;
        }

        add(config, params, callbacks) {
          this.black.enabled = true;

          if (this.current && this.current.valid) {
            var uuid = this.getUuid(config.prefab);
            this.params.push({
              config: config,
              params: params,
              callbacks: callbacks
            });
            return uuid;
          }

          return this.show(config, params, callbacks);
        }

        show(config, params, callbacks) {
          var prefabPath = config.prefab;
          var uuid = this.getUuid(prefabPath);
          var viewParams = this.ui_nodes.get(uuid);

          if (viewParams == null) {
            viewParams = new (_crd && ViewParams === void 0 ? (_reportPossibleCrUseOfViewParams({
              error: Error()
            }), ViewParams) : ViewParams)();
            viewParams.uuid = this.getUuid(prefabPath);
            viewParams.prefabPath = prefabPath;
            viewParams.valid = true;
            this.ui_nodes.set(viewParams.uuid, viewParams);
          }

          viewParams.callbacks = callbacks != null ? callbacks : {};
          var onRemove_Source = viewParams.callbacks.onRemoved;

          viewParams.callbacks.onRemoved = (node, params) => {
            if (onRemove_Source) {
              onRemove_Source(node, params);
            }

            setTimeout(() => {
              this.next();
            }, 0);
          };

          viewParams.params = params || {};
          this.current = viewParams;
          this.load(viewParams, config.bundle);
          return uuid;
        }

        setBlackDisable() {
          if (this.params.length == 0) this.black.enabled = false;
        }

        next() {
          if (this.params.length > 0) {
            var param = this.params.shift();
            this.show(param.config, param.params, param.callbacks);
          }
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=2b50c8c1f4305bf7a1fe7070923a812e7bff028e.js.map