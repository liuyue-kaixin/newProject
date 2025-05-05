System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, AudioClip, AudioSource, _decorator, error, oops, _dec, _class, _crd, ccclass, menu, AudioMusic;

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
      _decorator = _cc._decorator;
      error = _cc.error;
    }, function (_unresolved_2) {
      oops = _unresolved_2.oops;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "5c1f3kqGetBiIv48/CvuaQv", "AudioMusic", undefined);
      /*
       * @Author: dgflash
       * @Date: 2022-06-21 12:05:13
       * @LastEditors: dgflash
       * @LastEditTime: 2023-05-16 09:11:30
       */


      __checkObsolete__(['AudioClip', 'AudioSource', '_decorator', 'error']);

      ({
        ccclass,
        menu
      } = _decorator);
      /** 背景音乐 */

      _export("AudioMusic", AudioMusic = (_dec = ccclass('AudioMusic'), _dec(_class = class AudioMusic extends AudioSource {
        constructor(...args) {
          super(...args);

          /** 背景音乐播放完成回调 */
          this.onComplete = null;
          this._progress = 0;
          this._url = null;
          this._isPlay = false;
        }

        /** 获取音乐播放进度 */
        get progress() {
          if (this.duration > 0) this._progress = this.currentTime / this.duration;
          return this._progress;
        }
        /**
         * 设置音乐当前播放进度
         * @param value     进度百分比0到1之间
         */


        set progress(value) {
          this._progress = value;
          this.currentTime = value * this.duration;
        }
        /**
         * 加载音乐并播放
         * @param url          音乐资源地址
         * @param callback     加载完成回调
         */


        load(url, callback) {
          (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
            error: Error()
          }), oops) : oops).res.load(url, AudioClip, (err, data) => {
            if (err) {
              error(err);
            }

            if (this.playing) {
              this._isPlay = false;
              this.stop();
            }

            if (this._url) {
              (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
                error: Error()
              }), oops) : oops).res.release(this._url);
            }

            this.enabled = true;
            this.clip = data; // 注：事件定义在这里，是为了在播放前设置初始播放位置数据

            callback && callback();
            this.play();
            this._url = url;
          });
        }
        /** cc.Component 生命周期方法，验证背景音乐播放完成逻辑，建议不要主动调用 */


        update(dt) {
          if (this.currentTime > 0) {
            this._isPlay = true;
          }

          if (this._isPlay && this.playing == false) {
            this._isPlay = false;
            this.enabled = false;
            this.onComplete && this.onComplete();
          }
        }
        /** 释放当前背景音乐资源 */


        release() {
          if (this._url) {
            (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
              error: Error()
            }), oops) : oops).res.release(this._url);
            this._url = null;
          }
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=22ea38911ca40646ad164f3fb2162c896c06de44.js.map