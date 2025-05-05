System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, AudioClip, AudioSource, error, _decorator, oops, _dec, _class, _crd, ccclass, menu, AudioEffect;

  function _reportPossibleCrUseOfoops(extras) {
    _reporterNs.report("oops", "../../Oops", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      AudioClip = _cc.AudioClip;
      AudioSource = _cc.AudioSource;
      error = _cc.error;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      oops = _unresolved_2.oops;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "e52d2ysY1BEbpcT2Cz0Wwss", "AudioEffect", undefined);
      /*
       * @Author: dgflash
       * @Date: 2022-09-01 18:00:28
       * @LastEditors: dgflash
       * @LastEditTime: 2022-09-02 10:22:36
       */


      __checkObsolete__(['AudioClip', 'AudioSource', 'error', '_decorator']);

      ({
        ccclass,
        menu
      } = _decorator);
      /**
       * 注：用playOneShot播放的音乐效果，在播放期间暂时没办法即时关闭音乐
       */

      /** 游戏音效 */

      _export("AudioEffect", AudioEffect = (_dec = ccclass('AudioEffect'), _dec(_class = class AudioEffect extends AudioSource {
        constructor() {
          super(...arguments);
          this.effects = new Map();
        }

        /**
         * 加载音效并播放
         * @param url           音效资源地址
         * @param callback      资源加载完成并开始播放回调
         */
        load(url, callback) {
          (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
            error: Error()
          }), oops) : oops).res.load(url, AudioClip, (err, data) => {
            if (err) {
              error(err);
            }

            this.effects.set(url, data);
            this.playOneShot(data, this.volume);
            callback && callback();
          });
        }
        /** 释放所有已使用过的音效资源 */


        release() {
          for (var key in this.effects) {
            (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
              error: Error()
            }), oops) : oops).res.release(key);
          }

          this.effects.clear();
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=1be68ceede51753e20f3bf826ad49573e2448c86.js.map