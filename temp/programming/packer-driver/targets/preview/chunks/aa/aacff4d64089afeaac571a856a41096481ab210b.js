System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Component, oops, AudioEffect, AudioMusic, AudioManager, _crd, LOCAL_STORE_KEY;

  function _reportPossibleCrUseOfoops(extras) {
    _reporterNs.report("oops", "../../Oops", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAudioEffect(extras) {
    _reporterNs.report("AudioEffect", "./AudioEffect", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAudioMusic(extras) {
    _reporterNs.report("AudioMusic", "./AudioMusic", _context.meta, extras);
  }

  _export("AudioManager", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Component = _cc.Component;
    }, function (_unresolved_2) {
      oops = _unresolved_2.oops;
    }, function (_unresolved_3) {
      AudioEffect = _unresolved_3.AudioEffect;
    }, function (_unresolved_4) {
      AudioMusic = _unresolved_4.AudioMusic;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "252f0z+vPNL8Y/jsLYmomtw", "AudioManager", undefined);

      __checkObsolete__(['Component']);

      LOCAL_STORE_KEY = "game_audio";
      /** 
       * 音频管理
       * @example 
      // 模块功能通过 oops.audio 调用
      oops.audio.playMusic("audios/nocturne");
       */

      _export("AudioManager", AudioManager = class AudioManager extends Component {
        constructor() {
          super(...arguments);
          this.local_data = {};
          this.music = void 0;
          this.effect = void 0;
          this._volume_music = 1;
          this._volume_effect = 1;
          this._switch_music = true;
          this._switch_effect = true;
        }

        /**
         * 设置背景音乐播放完成回调
         * @param callback 背景音乐播放完成回调
         */
        setMusicComplete(callback) {
          if (callback === void 0) {
            callback = null;
          }

          this.music.onComplete = callback;
        }
        /**
         * 播放背景音乐
         * @param url        资源地址
         * @param callback   音乐播放完成事件
         */


        playMusic(url, callback) {
          if (this._switch_music) {
            this.music.load(url, callback);
          }
        }
        /** 循环播放背景音乐 */


        playerMusicLoop(url) {
          if (this._switch_music) {
            this.music.loop = true;
            this.music.load(url);
          }
        }
        /**
         * 获取背景音乐播放进度
         */


        get progressMusic() {
          return this.music.progress;
        }
        /**
         * 设置背景乐播放进度
         * @param value     播放进度值
         */


        set progressMusic(value) {
          this.music.progress = value;
        }
        /**
         * 获取背景音乐音量
         */


        get volumeMusic() {
          return this._volume_music;
        }
        /** 
         * 设置背景音乐音量
         * @param value     音乐音量值
         */


        set volumeMusic(value) {
          this._volume_music = value;
          this.music.volume = value;
        }
        /** 
         * 获取背景音乐开关值 
         */


        get switchMusic() {
          return this._switch_music;
        }
        /** 
         * 设置背景音乐开关值
         * @param value     开关值
         */


        set switchMusic(value) {
          this._switch_music = value;
          if (value == false) this.music.stop();
        }
        /**
         * 播放音效
         * @param url        资源地址
         */


        playEffect(url) {
          if (this._switch_effect) {
            this.effect.load(url);
          }
        }
        /** 
         * 获取音效音量 
         */


        get volumeEffect() {
          return this._volume_effect;
        }
        /**
         * 设置获取音效音量
         * @param value     音效音量值
         */


        set volumeEffect(value) {
          this._volume_effect = value;
          this.effect.volume = value;
        }
        /** 
         * 获取音效开关值 
         */


        get switchEffect() {
          return this._switch_effect;
        }
        /**
         * 设置音效开关值
         * @param value     音效开关值
         */


        set switchEffect(value) {
          this._switch_effect = value;
          if (value == false) this.effect.stop();
        }
        /** 恢复当前暂停的音乐与音效播放 */


        resumeAll() {
          if (this.music) {
            this.music.play();
            this.effect.play();
          }
        }
        /** 暂停当前音乐与音效的播放 */


        pauseAll() {
          if (this.music) {
            this.music.pause();
            this.effect.pause();
          }
        }
        /** 停止当前音乐与音效的播放 */


        stopAll() {
          if (this.music) {
            this.music.stop();
            this.effect.stop();
          }
        }
        /** 保存音乐音效的音量、开关配置数据到本地 */


        save() {
          this.local_data.volume_music = this._volume_music;
          this.local_data.volume_effect = this._volume_effect;
          this.local_data.switch_music = this._switch_music;
          this.local_data.switch_effect = this._switch_effect;
          var data = JSON.stringify(this.local_data);
          (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
            error: Error()
          }), oops) : oops).storage.set(LOCAL_STORE_KEY, data);
        }
        /** 本地加载音乐音效的音量、开关配置数据并设置到游戏中 */


        load() {
          this.music = this.getComponent(_crd && AudioMusic === void 0 ? (_reportPossibleCrUseOfAudioMusic({
            error: Error()
          }), AudioMusic) : AudioMusic) || this.addComponent(_crd && AudioMusic === void 0 ? (_reportPossibleCrUseOfAudioMusic({
            error: Error()
          }), AudioMusic) : AudioMusic);
          this.effect = this.getComponent(_crd && AudioEffect === void 0 ? (_reportPossibleCrUseOfAudioEffect({
            error: Error()
          }), AudioEffect) : AudioEffect) || this.addComponent(_crd && AudioEffect === void 0 ? (_reportPossibleCrUseOfAudioEffect({
            error: Error()
          }), AudioEffect) : AudioEffect);
          var data = (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
            error: Error()
          }), oops) : oops).storage.get(LOCAL_STORE_KEY);

          if (data) {
            try {
              this.local_data = JSON.parse(data);
              this._volume_music = this.local_data.volume_music;
              this._volume_effect = this.local_data.volume_effect;
              this._switch_music = this.local_data.switch_music;
              this._switch_effect = this.local_data.switch_effect;
            } catch (e) {
              this.local_data = {};
              this._volume_music = 1;
              this._volume_effect = 1;
              this._switch_music = true;
              this._switch_effect = true;
            }

            if (this.music) this.music.volume = this._volume_music;
            if (this.effect) this.effect.volume = this._volume_effect;
          }
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=aacff4d64089afeaac571a856a41096481ab210b.js.map