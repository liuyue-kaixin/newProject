System.register(["__unresolved_0", "cc", "cc/env", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, sys, PREVIEW, EncryptUtil, StorageManager, _crd;

  function _reportPossibleCrUseOfEncryptUtil(extras) {
    _reporterNs.report("EncryptUtil", "../../utils/EncryptUtil", _context.meta, extras);
  }

  _export("StorageManager", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      sys = _cc.sys;
    }, function (_ccEnv) {
      PREVIEW = _ccEnv.PREVIEW;
    }, function (_unresolved_2) {
      EncryptUtil = _unresolved_2.EncryptUtil;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "ed226gLF85Oyr+WhA9TJZLX", "StorageManager", undefined);

      __checkObsolete__(['sys']);

      /** 本地存储 */
      _export("StorageManager", StorageManager = class StorageManager {
        constructor() {
          this._key = null;
          this._iv = null;
          this._id = "";
        }

        /**
         * 初始化密钥
         * @param key aes加密的key 
         * @param iv  aes加密的iv
         */
        init(key, iv) {
          (_crd && EncryptUtil === void 0 ? (_reportPossibleCrUseOfEncryptUtil({
            error: Error()
          }), EncryptUtil) : EncryptUtil).initCrypto(key, iv);
          this._key = (_crd && EncryptUtil === void 0 ? (_reportPossibleCrUseOfEncryptUtil({
            error: Error()
          }), EncryptUtil) : EncryptUtil).md5(key);
          this._iv = (_crd && EncryptUtil === void 0 ? (_reportPossibleCrUseOfEncryptUtil({
            error: Error()
          }), EncryptUtil) : EncryptUtil).md5(iv);
        }
        /**
         * 设置用户唯一标识
         * @param id 
         */


        setUser(id) {
          this._id = id;
        }
        /**
         * 存储本地数据
         * @param key 存储key
         * @param value 存储值
         * @returns 
         */


        set(key, value) {
          var keywords = `${key}_${this._id}`;

          if (null == key) {
            console.error("存储的key不能为空");
            return;
          }

          if (!PREVIEW) {
            keywords = (_crd && EncryptUtil === void 0 ? (_reportPossibleCrUseOfEncryptUtil({
              error: Error()
            }), EncryptUtil) : EncryptUtil).md5(keywords);
          }

          if (null == value) {
            console.warn("存储的值为空，则直接移除该存储");
            this.remove(key);
            return;
          }

          if (typeof value === 'function') {
            console.error("储存的值不能为方法");
            return;
          }

          if (typeof value === 'object') {
            try {
              value = JSON.stringify(value);
            } catch (e) {
              console.error(`解析失败，str = ${value}`);
              return;
            }
          } else if (typeof value === 'number') {
            value = value + "";
          }

          if (!PREVIEW && null != this._key && null != this._iv) {
            value = (_crd && EncryptUtil === void 0 ? (_reportPossibleCrUseOfEncryptUtil({
              error: Error()
            }), EncryptUtil) : EncryptUtil).aesEncrypt(`${value}`, this._key, this._iv);
          }

          sys.localStorage.setItem(keywords, value);
        }
        /**
         * 获取指定关键字的数据
         * @param key          获取的关键字
         * @param defaultValue 获取的默认值
         * @returns 
         */


        get(key, defaultValue = "") {
          if (null == key) {
            console.error("存储的key不能为空");
            return null;
          }

          key = `${key}_${this._id}`;

          if (!PREVIEW) {
            key = (_crd && EncryptUtil === void 0 ? (_reportPossibleCrUseOfEncryptUtil({
              error: Error()
            }), EncryptUtil) : EncryptUtil).md5(key);
          }

          let str = sys.localStorage.getItem(key);

          if (null != str && '' !== str && !PREVIEW && null != this._key && null != this._iv) {
            str = (_crd && EncryptUtil === void 0 ? (_reportPossibleCrUseOfEncryptUtil({
              error: Error()
            }), EncryptUtil) : EncryptUtil).aesDecrypt(str, this._key, this._iv);
          }

          if (null === str) {
            return defaultValue;
          }

          return str;
        }
        /** 获取指定关键字的数值 */


        getNumber(key, defaultValue = 0) {
          var r = this.get(key);

          if (r == "0") {
            return Number(r);
          }

          return Number(r) || defaultValue;
        }
        /** 获取指定关键字的布尔值 */


        getBoolean(key) {
          var r = this.get(key);
          return Boolean(r) || false;
        }
        /** 获取指定关键字的JSON对象 */


        getJson(key, defaultValue) {
          var r = this.get(key);
          return r && JSON.parse(r) || defaultValue;
        }
        /**
         * 删除指定关键字的数据
         * @param key 需要移除的关键字
         * @returns 
         */


        remove(key) {
          if (null == key) {
            console.error("存储的key不能为空");
            return;
          }

          var keywords = `${key}_${this._id}`;

          if (!PREVIEW) {
            keywords = (_crd && EncryptUtil === void 0 ? (_reportPossibleCrUseOfEncryptUtil({
              error: Error()
            }), EncryptUtil) : EncryptUtil).md5(keywords);
          }

          sys.localStorage.removeItem(keywords);
        }
        /** 清空整个本地存储 */


        clear() {
          sys.localStorage.clear();
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=4d406e6a1ba33bf04d7c0b893fe1e986baf964f7.js.map