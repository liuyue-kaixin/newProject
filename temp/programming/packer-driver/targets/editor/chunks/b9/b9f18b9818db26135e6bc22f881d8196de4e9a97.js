System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, LayerType, _crd, UIID, UIConfigData;

  function _reportPossibleCrUseOfLayerType(extras) {
    _reporterNs.report("LayerType", "../../../../../extensions/oops-plugin-framework/assets/core/gui/layer/LayerManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIConfig(extras) {
    _reporterNs.report("UIConfig", "../../../../../extensions/oops-plugin-framework/assets/core/gui/layer/LayerManager", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      LayerType = _unresolved_2.LayerType;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "ffa5c27PYVCvoC7Y7YOyl/8", "GameUIConfig", undefined);
      /*
       * @Date: 2021-08-12 09:33:37
       * @LastEditors: dgflash
       * @LastEditTime: 2022-11-11 17:41:53
       */


      /** 界面唯一标识（方便服务器通过编号数据触发界面打开） */
      _export("UIID", UIID = /*#__PURE__*/function (UIID) {
        UIID[UIID["Loading"] = 1] = "Loading";
        UIID[UIID["GameMain"] = 2] = "GameMain";
        return UIID;
      }({}));
      /** 打开界面方式的配置数据 */


      _export("UIConfigData", UIConfigData = {
        [UIID.Loading]: {
          layer: (_crd && LayerType === void 0 ? (_reportPossibleCrUseOfLayerType({
            error: Error()
          }), LayerType) : LayerType).UI,
          prefab: "loading/prefab/loading",
          bundle: "resources"
        },
        [UIID.GameMain]: {
          layer: (_crd && LayerType === void 0 ? (_reportPossibleCrUseOfLayerType({
            error: Error()
          }), LayerType) : LayerType).UI,
          prefab: "main/prefabs/GameMain",
          bundle: "bundle"
        }
      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=b9f18b9818db26135e6bc22f881d8196de4e9a97.js.map