System.register(["__unresolved_0", "cc", "crypto-es"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, CryptoES, EncryptUtil, _crd;

  function _reportPossibleCrUseOfCryptoES(extras) {
    _reporterNs.report("CryptoES", "crypto-es", _context.meta, extras);
  }

  _export("EncryptUtil", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_cryptoEs) {
      CryptoES = _cryptoEs.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "46d12Bx4JdKnIYHhcvNk6S1", "EncryptUtil", undefined);
      /*
       * @Author: dgflash
       * @Date: 2022-09-02 09:28:00
       * @LastEditors: dgflash
       * @LastEditTime: 2022-10-21 09:46:39
       */


      /** 
       * CryptoES 加密库封装 
       * https://github.com/entronad/crypto-es
       * 
       * 安装第三方库生效
       * npm install -g yarn
       * yarn add crypto-es
       */
      _export("EncryptUtil", EncryptUtil = class EncryptUtil {
        /**
         * MD5加密
         * @param msg 加密信息
         */
        static md5(msg) {
          return (_crd && CryptoES === void 0 ? (_reportPossibleCrUseOfCryptoES({
            error: Error()
          }), CryptoES) : CryptoES).MD5(msg).toString();
        }
        /** 初始化加密库 */


        static initCrypto(key, iv) {
          this.key = key;
          this.iv = (_crd && CryptoES === void 0 ? (_reportPossibleCrUseOfCryptoES({
            error: Error()
          }), CryptoES) : CryptoES).enc.Hex.parse(iv);
        }
        /**
         * AES 加密
         * @param msg 加密信息
         * @param key aes加密的key 
         * @param iv  aes加密的iv
         */


        static aesEncrypt(msg, key, iv) {
          return (_crd && CryptoES === void 0 ? (_reportPossibleCrUseOfCryptoES({
            error: Error()
          }), CryptoES) : CryptoES).AES.encrypt(msg, this.key, {
            iv: this.iv,
            format: this.JsonFormatter
          }).toString();
        }
        /**
         * AES 解密
         * @param str 解密字符串
         * @param key aes加密的key 
         * @param iv  aes加密的iv
         */


        static aesDecrypt(str, key, iv) {
          const decrypted = (_crd && CryptoES === void 0 ? (_reportPossibleCrUseOfCryptoES({
            error: Error()
          }), CryptoES) : CryptoES).AES.decrypt(str, this.key, {
            iv: this.iv,
            format: this.JsonFormatter
          });
          return decrypted.toString((_crd && CryptoES === void 0 ? (_reportPossibleCrUseOfCryptoES({
            error: Error()
          }), CryptoES) : CryptoES).enc.Utf8);
        }

      });

      EncryptUtil.key = null;
      EncryptUtil.iv = null;
      EncryptUtil.JsonFormatter = {
        stringify: function (cipherParams) {
          const jsonObj = {
            ct: cipherParams.ciphertext.toString((_crd && CryptoES === void 0 ? (_reportPossibleCrUseOfCryptoES({
              error: Error()
            }), CryptoES) : CryptoES).enc.Base64)
          };

          if (cipherParams.iv) {
            jsonObj.iv = cipherParams.iv.toString();
          }

          if (cipherParams.salt) {
            jsonObj.s = cipherParams.salt.toString();
          }

          return JSON.stringify(jsonObj);
        },
        parse: function (jsonStr) {
          const jsonObj = JSON.parse(jsonStr);
          const cipherParams = (_crd && CryptoES === void 0 ? (_reportPossibleCrUseOfCryptoES({
            error: Error()
          }), CryptoES) : CryptoES).lib.CipherParams.create({
            ciphertext: (_crd && CryptoES === void 0 ? (_reportPossibleCrUseOfCryptoES({
              error: Error()
            }), CryptoES) : CryptoES).enc.Base64.parse(jsonObj.ct)
          });

          if (jsonObj.iv) {
            cipherParams.iv = (_crd && CryptoES === void 0 ? (_reportPossibleCrUseOfCryptoES({
              error: Error()
            }), CryptoES) : CryptoES).enc.Hex.parse(jsonObj.iv);
          }

          if (jsonObj.s) {
            cipherParams.salt = (_crd && CryptoES === void 0 ? (_reportPossibleCrUseOfCryptoES({
              error: Error()
            }), CryptoES) : CryptoES).enc.Hex.parse(jsonObj.s);
          }

          return cipherParams;
        }
      };

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=74ffb85e4742e276aa8a43ad0f0ba895a3ac23aa.js.map