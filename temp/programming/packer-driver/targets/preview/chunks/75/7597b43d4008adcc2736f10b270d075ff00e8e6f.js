System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, EventDispatcher, Logger, LanguageData, LanguagePack, LanguageManager, _crd, LanguageEvent;

  function _reportPossibleCrUseOfEventDispatcher(extras) {
    _reporterNs.report("EventDispatcher", "../../../core/common/event/EventDispatcher", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLogger(extras) {
    _reporterNs.report("Logger", "../../../core/common/log/Logger", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLanguageData(extras) {
    _reporterNs.report("LanguageData", "./LanguageData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLanguagePack(extras) {
    _reporterNs.report("LanguagePack", "./LanguagePack", _context.meta, extras);
  }

  _export("LanguageManager", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      EventDispatcher = _unresolved_2.EventDispatcher;
    }, function (_unresolved_3) {
      Logger = _unresolved_3.Logger;
    }, function (_unresolved_4) {
      LanguageData = _unresolved_4.LanguageData;
    }, function (_unresolved_5) {
      LanguagePack = _unresolved_5.LanguagePack;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "3757cxZqLZObIdvP/gQ6Yuj", "Language", undefined);

      _export("LanguageEvent", LanguageEvent = /*#__PURE__*/function (LanguageEvent) {
        LanguageEvent["CHANGE"] = "LanguageEvent.CHANGE";
        LanguageEvent["RELEASE_RES"] = "LanguageEvent.RELEASE_RES";
        return LanguageEvent;
      }({}));

      _export("LanguageManager", LanguageManager = class LanguageManager extends (_crd && EventDispatcher === void 0 ? (_reportPossibleCrUseOfEventDispatcher({
        error: Error()
      }), EventDispatcher) : EventDispatcher) {
        constructor() {
          super(...arguments);
          this._languages = ["zh", "en", "tr"];
          // 支持的语言
          this._languagePack = new (_crd && LanguagePack === void 0 ? (_reportPossibleCrUseOfLanguagePack({
            error: Error()
          }), LanguagePack) : LanguagePack)();
          // 语言包
          this._defaultLanguage = "zh";
        }

        // 默认语言

        /** 支持的多种语言列表 */
        get languages() {
          return this._languages;
        }

        set languages(languages) {
          this._languages = languages;
        }
        /** 设置的当前语言列表中没有配置时，使用默认语言 */


        set default(lang) {
          this._defaultLanguage = lang || "zh";
        }
        /** 获取当前语种 */


        get current() {
          return (_crd && LanguageData === void 0 ? (_reportPossibleCrUseOfLanguageData({
            error: Error()
          }), LanguageData) : LanguageData).current;
        }
        /** 语言包 */


        get pack() {
          return this._languagePack;
        }

        isExist(lang) {
          return this.languages.indexOf(lang) > -1;
        }
        /**
         * 获取下一个语种
         */


        getNextLang() {
          var supportLangs = this.languages;
          var index = supportLangs.indexOf((_crd && LanguageData === void 0 ? (_reportPossibleCrUseOfLanguageData({
            error: Error()
          }), LanguageData) : LanguageData).current);
          var newLanguage = supportLangs[(index + 1) % supportLangs.length];
          return newLanguage;
        }
        /**
         * 改变语种，会自动下载对应的语种，下载完成回调
         * @param language 
         */


        setLanguage(language, callback) {
          if (language == null || language == "") {
            language = this._defaultLanguage;
          } else {
            language = language.toLowerCase();
          }

          var index = this.languages.indexOf(language);

          if (index < 0) {
            console.log("\u5F53\u524D\u4E0D\u652F\u6301\u3010" + language + "\u3011\u8BED\u8A00\uFF0C\u5C06\u81EA\u52A8\u5207\u6362\u5230\u3010" + this._defaultLanguage + "\u3011\u8BED\u8A00");
            language = this._defaultLanguage;
          }

          if (language === (_crd && LanguageData === void 0 ? (_reportPossibleCrUseOfLanguageData({
            error: Error()
          }), LanguageData) : LanguageData).current) {
            callback(false);
            return;
          }

          this.loadLanguageAssets(language, lang => {
            (_crd && Logger === void 0 ? (_reportPossibleCrUseOfLogger({
              error: Error()
            }), Logger) : Logger).logConfig("\u5F53\u524D\u8BED\u8A00\u4E3A\u3010" + language + "\u3011");
            (_crd && LanguageData === void 0 ? (_reportPossibleCrUseOfLanguageData({
              error: Error()
            }), LanguageData) : LanguageData).current = language;

            this._languagePack.updateLanguage(language);

            this.dispatchEvent(LanguageEvent.CHANGE, lang);
            callback(true);
          });
        }
        /**
         * 根据data获取对应语种的字符
         * @param labId 
         * @param arr 
         */


        getLangByID(labId) {
          return (_crd && LanguageData === void 0 ? (_reportPossibleCrUseOfLanguageData({
            error: Error()
          }), LanguageData) : LanguageData).getLangByID(labId);
        }
        /**
         * 下载语言包素材资源
         * 包括语言json配置和语言纹理包
         * @param lang 
         * @param callback 
         */


        loadLanguageAssets(lang, callback) {
          lang = lang.toLowerCase();
          return this._languagePack.loadLanguageAssets(lang, callback);
        }
        /**
         * 释放不需要的语言包资源
         * @param lang 
         */


        releaseLanguageAssets(lang) {
          lang = lang.toLowerCase();

          this._languagePack.releaseLanguageAssets(lang);

          this.dispatchEvent(LanguageEvent.RELEASE_RES, lang);
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=7597b43d4008adcc2736f10b270d075ff00e8e6f.js.map