System.register(["__unresolved_0", "cc", "cc/env", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, CCString, Component, Sprite, SpriteFrame, UITransform, _decorator, EDITOR, oops, LanguageData, _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _crd, ccclass, property, menu, LanguageSprite;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfoops(extras) {
    _reporterNs.report("oops", "../../../core/Oops", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLanguageData(extras) {
    _reporterNs.report("LanguageData", "./LanguageData", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      CCString = _cc.CCString;
      Component = _cc.Component;
      Sprite = _cc.Sprite;
      SpriteFrame = _cc.SpriteFrame;
      UITransform = _cc.UITransform;
      _decorator = _cc._decorator;
    }, function (_ccEnv) {
      EDITOR = _ccEnv.EDITOR;
    }, function (_unresolved_2) {
      oops = _unresolved_2.oops;
    }, function (_unresolved_3) {
      LanguageData = _unresolved_3.LanguageData;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "11b96k/RIZF57Loehxyl6Hs", "LanguageSprite", undefined);
      /*
       * @Author: dgflash
       * @Date: 2021-11-24 15:51:01
       * @LastEditors: dgflash
       * @LastEditTime: 2022-09-02 10:04:57
       */


      __checkObsolete__(['CCString', 'Component', 'Size', 'Sprite', 'SpriteFrame', 'UITransform', '_decorator']);

      ({
        ccclass,
        property,
        menu
      } = _decorator);

      _export("LanguageSprite", LanguageSprite = (_dec = ccclass("LanguageSprite"), _dec2 = menu('ui/language/LanguageSprite'), _dec3 = property({
        serializable: true
      }), _dec4 = property({
        type: CCString,
        serializable: true
      }), _dec5 = property({
        tooltip: "是否设置为图片原始资源大小"
      }), _dec(_class = _dec2(_class = (_class2 = class LanguageSprite extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "_dataID", _descriptor, this);

          _initializerDefineProperty(this, "isRawSize", _descriptor2, this);
        }

        get dataID() {
          return this._dataID || "";
        }

        set dataID(value) {
          this._dataID = value;

          if (!EDITOR) {
            this.updateSprite();
          }
        }

        start() {
          this.updateSprite();
        }
        /** 更新语言 */


        language() {
          this.updateSprite();
        }

        updateSprite() {
          // 获取语言标记
          var path = "language/texture/" + (_crd && LanguageData === void 0 ? (_reportPossibleCrUseOfLanguageData({
            error: Error()
          }), LanguageData) : LanguageData).current + "/" + this.dataID + "/spriteFrame";
          var res = (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
            error: Error()
          }), oops) : oops).res.get(path, SpriteFrame);

          if (res) {
            var spcomp = this.getComponent(Sprite);
            spcomp.spriteFrame = res;
            /** 修改节点为原始图片资源大小 */

            if (this.isRawSize) {
              var _spcomp$getComponent;

              //@ts-ignore
              var rawSize = res._originalSize;
              (_spcomp$getComponent = spcomp.getComponent(UITransform)) == null || _spcomp$getComponent.setContentSize(rawSize);
            }
          } else {
            console.error("[LanguageSprite] 资源不存在 " + path);
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "_dataID", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return "";
        }
      }), _applyDecoratedDescriptor(_class2.prototype, "dataID", [_dec4], Object.getOwnPropertyDescriptor(_class2.prototype, "dataID"), _class2.prototype), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "isRawSize", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return true;
        }
      })), _class2)) || _class) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=5a9163a416cabff56b7c47dd0330aceea31457da.js.map