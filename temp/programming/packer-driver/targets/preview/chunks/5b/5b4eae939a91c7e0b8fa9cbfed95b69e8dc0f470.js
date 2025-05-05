System.register(["__unresolved_0", "cc", "cc/env", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, CCString, Component, Label, RichText, TTFFont, _decorator, warn, EDITOR, oops, LanguageData, _dec, _class, _class2, _descriptor, _descriptor2, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _class4, _class5, _descriptor3, _descriptor4, _crd, ccclass, property, menu, LangLabelParamsItem, LanguageLabel;

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
      Label = _cc.Label;
      RichText = _cc.RichText;
      TTFFont = _cc.TTFFont;
      _decorator = _cc._decorator;
      warn = _cc.warn;
    }, function (_ccEnv) {
      EDITOR = _ccEnv.EDITOR;
    }, function (_unresolved_2) {
      oops = _unresolved_2.oops;
    }, function (_unresolved_3) {
      LanguageData = _unresolved_3.LanguageData;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "110c8vEd5NEPL/N9meGQnaX", "LanguageLabel", undefined);

      __checkObsolete__(['CCString', 'Component', 'Label', 'RichText', 'TTFFont', '_decorator', 'warn']);

      ({
        ccclass,
        property,
        menu
      } = _decorator);

      _export("LangLabelParamsItem", LangLabelParamsItem = (_dec = ccclass("LangLabelParamsItem"), _dec(_class = (_class2 = class LangLabelParamsItem {
        constructor() {
          _initializerDefineProperty(this, "key", _descriptor, this);

          _initializerDefineProperty(this, "value", _descriptor2, this);
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "key", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return "";
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "value", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return "";
        }
      })), _class2)) || _class));

      _export("LanguageLabel", LanguageLabel = (_dec2 = ccclass("LanguageLabel"), _dec3 = menu('ui/language/LanguageLabel'), _dec4 = property({
        type: LangLabelParamsItem,
        displayName: "params"
      }), _dec5 = property({
        type: LangLabelParamsItem,
        displayName: "params"
      }), _dec6 = property({
        serializable: true
      }), _dec7 = property({
        type: CCString,
        serializable: true
      }), _dec2(_class4 = _dec3(_class4 = (_class5 = class LanguageLabel extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "_params", _descriptor3, this);

          _initializerDefineProperty(this, "_dataID", _descriptor4, this);

          /** 初始字体尺寸 */
          this.initFontSize = 0;
          this._needUpdate = false;
        }

        set params(value) {
          this._params = value;

          if (!EDITOR) {
            this._needUpdate = true;
          }
        }

        get params() {
          return this._params || [];
        }

        get dataID() {
          return this._dataID || "";
        }

        set dataID(value) {
          this._dataID = value;

          if (!EDITOR) {
            this._needUpdate = true;
          }
        }

        get string() {
          var _string = (_crd && LanguageData === void 0 ? (_reportPossibleCrUseOfLanguageData({
            error: Error()
          }), LanguageData) : LanguageData).getLangByID(this._dataID);

          if (_string && this._params.length > 0) {
            this._params.forEach(item => {
              _string = _string.replace("%{" + item.key + "}", item.value);
            });
          }

          if (!_string) {
            warn("[LanguageLabel] 未找到语言标识，使用dataID替换");
            _string = this._dataID;
          }

          return _string;
        }
        /** 更新语言 */


        language() {
          this._needUpdate = true;
        }

        onLoad() {
          this._needUpdate = true;
        }
        /**
         * 修改多语言参数，采用惰性求值策略
         * @param key 对于i18n表里面的key值
         * @param value 替换的文本
         */


        setVars(key, value) {
          var haskey = false;

          for (var i = 0; i < this._params.length; i++) {
            var element = this._params[i];

            if (element.key === key) {
              element.value = value;
              haskey = true;
            }
          }

          if (!haskey) {
            var ii = new LangLabelParamsItem();
            ii.key = key;
            ii.value = value;

            this._params.push(ii);
          }

          this._needUpdate = true;
        }

        update() {
          if (this._needUpdate) {
            this.updateContent();
            this._needUpdate = false;
          }
        }

        updateContent() {
          var label = this.getComponent(Label);
          var richtext = this.getComponent(RichText);
          var path = (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
            error: Error()
          }), oops) : oops).language.pack.json + "/" + (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
            error: Error()
          }), oops) : oops).language.current;
          var font = (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
            error: Error()
          }), oops) : oops).res.get(path, TTFFont);

          if (label) {
            if (font && !label.useSystemFont) {
              label.font = font;
            }

            label.string = this.string;
            this.initFontSize = label.fontSize;
          } else if (richtext) {
            if (font && !richtext.useSystemFont) {
              richtext.font = font;
            }

            this.initFontSize = richtext.fontSize;
            richtext.string = this.string;
            this.initFontSize = richtext.fontSize;
          } else {
            warn("[LanguageLabel], 该节点没有cc.Label || cc.RichText组件");
          }
        }

      }, (_descriptor3 = _applyDecoratedDescriptor(_class5.prototype, "_params", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _applyDecoratedDescriptor(_class5.prototype, "params", [_dec5], Object.getOwnPropertyDescriptor(_class5.prototype, "params"), _class5.prototype), _descriptor4 = _applyDecoratedDescriptor(_class5.prototype, "_dataID", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return "";
        }
      }), _applyDecoratedDescriptor(_class5.prototype, "dataID", [_dec7], Object.getOwnPropertyDescriptor(_class5.prototype, "dataID"), _class5.prototype)), _class5)) || _class4) || _class4));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=5b4eae939a91c7e0b8fa9cbfed95b69e8dc0f470.js.map