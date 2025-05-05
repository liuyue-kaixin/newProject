System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Component, _decorator, oops, EventDispatcher, ViewUtil, _dec, _class, _crd, ccclass, GameComponent;

  function _reportPossibleCrUseOfoops(extras) {
    _reporterNs.report("oops", "../../core/Oops", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventDispatcher(extras) {
    _reporterNs.report("EventDispatcher", "../../core/common/event/EventDispatcher", _context.meta, extras);
  }

  function _reportPossibleCrUseOfListenerFunc(extras) {
    _reporterNs.report("ListenerFunc", "../../core/common/event/EventMessage", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAssetType(extras) {
    _reporterNs.report("AssetType", "../../core/common/loader/ResLoader", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCompleteCallback(extras) {
    _reporterNs.report("CompleteCallback", "../../core/common/loader/ResLoader", _context.meta, extras);
  }

  function _reportPossibleCrUseOfProgressCallback(extras) {
    _reporterNs.report("ProgressCallback", "../../core/common/loader/ResLoader", _context.meta, extras);
  }

  function _reportPossibleCrUseOfViewUtil(extras) {
    _reporterNs.report("ViewUtil", "../../core/utils/ViewUtil", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Component = _cc.Component;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      oops = _unresolved_2.oops;
    }, function (_unresolved_3) {
      EventDispatcher = _unresolved_3.EventDispatcher;
    }, function (_unresolved_4) {
      ViewUtil = _unresolved_4.ViewUtil;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "62362nWbWZP653j6XL/zJDq", "GameComponent", undefined);
      /*
       * @Author: dgflash
       * @Date: 2022-04-14 17:08:01
       * @LastEditors: dgflash
       * @LastEditTime: 2022-12-13 11:36:00
       */


      __checkObsolete__(['Asset', 'Component', 'Node', '__private', '_decorator']);

      ({
        ccclass
      } = _decorator);
      /** 游戏显示对象组件模板 */

      _export("GameComponent", GameComponent = (_dec = ccclass("GameComponent"), _dec(_class = class GameComponent extends Component {
        constructor(...args) {
          super(...args);
          //#region 全局事件管理
          this._event = null;
          //#endregion
          //#region 预制节点管理

          /** 摊平的节点集合（不能重名） */
          this.nodes = new Map();
          //#endregion
          //#region 资源加载管理

          /** 资源路径 */
          this.resPaths = new Map();
          this.resPathsDir = new Map();
        }

        /** 全局事件管理器 */
        get event() {
          if (this._event == null) this._event = new (_crd && EventDispatcher === void 0 ? (_reportPossibleCrUseOfEventDispatcher({
            error: Error()
          }), EventDispatcher) : EventDispatcher)();
          return this._event;
        }
        /**
         * 注册全局事件
         * @param event       事件名
         * @param listener    处理事件的侦听器函数
         * @param object      侦听函数绑定的this对象
         */


        on(event, listener, object) {
          this.event.on(event, listener, object);
        }
        /**
         * 移除全局事件
         * @param event      事件名
         */


        off(event) {
          this.event.off(event);
        }
        /** 
         * 触发全局事件 
         * @param event      事件名
         * @param args       事件参数
         */


        dispatchEvent(event, args = null) {
          this.event.dispatchEvent(event, args);
        }

        /** 通过节点名获取预制上的节点，整个预制不能有重名节点 */
        getNode(name) {
          return this.nodes.get(name);
        }
        /** 平摊所有节点存到Map<string, Node>中通过get(name: string)方法获取 */


        nodeTreeInfoLite() {
          (_crd && ViewUtil === void 0 ? (_reportPossibleCrUseOfViewUtil({
            error: Error()
          }), ViewUtil) : ViewUtil).nodeTreeInfoLite(this.node, this.nodes);
        }

        /**
         * 获取资源
         * @param path          资源路径
         * @param type          资源类型
         * @param bundleName    远程资源包名
         */
        getRes(path, type, bundleName) {
          return (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
            error: Error()
          }), oops) : oops).res.get(path, type, bundleName);
        }
        /** 异步加载资源 */


        loadAsync(bundleName, paths, type) {
          if (paths instanceof Array) {
            paths.forEach(path => {
              this.resPaths.set(path, (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
                error: Error()
              }), oops) : oops).res.defaultBundleName);
            });
          } else {
            this.resPaths.set(bundleName, (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
              error: Error()
            }), oops) : oops).res.defaultBundleName);
          }

          return (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
            error: Error()
          }), oops) : oops).res.loadAsync(bundleName, paths, type);
        }
        /** 加载资源 */


        load(bundleName, paths, type, onProgress, onComplete) {
          if (paths instanceof Array) {
            paths.forEach(path => {
              this.resPaths.set(path, (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
                error: Error()
              }), oops) : oops).res.defaultBundleName);
            });
          } else {
            this.resPaths.set(bundleName, (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
              error: Error()
            }), oops) : oops).res.defaultBundleName);
          }

          (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
            error: Error()
          }), oops) : oops).res.load(bundleName, paths, type, onProgress, onComplete);
        }
        /** 加载文件名中资源 */


        loadDir(bundleName, dir, type, onProgress, onComplete) {
          if (typeof dir === "string") {
            this.resPathsDir.set(dir, (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
              error: Error()
            }), oops) : oops).res.defaultBundleName);
          } else {
            this.resPathsDir.set(bundleName, (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
              error: Error()
            }), oops) : oops).res.defaultBundleName);
          }

          (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
            error: Error()
          }), oops) : oops).res.loadDir(bundleName, dir, type, onProgress, onComplete);
        }
        /** 释放一个资源 */


        release() {
          this.resPaths.forEach((value, key) => {
            (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
              error: Error()
            }), oops) : oops).res.release(key, value);
          });
          this.resPaths.clear();
          this.resPaths = null;
        }
        /** 释放一个文件夹的资源 */


        releaseDir() {
          this.resPathsDir.forEach((value, key) => {
            (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
              error: Error()
            }), oops) : oops).res.releaseDir(key, value);
          });
          this.resPathsDir.clear();
          this.resPathsDir = null;
        } //#endregion
        //#region 音频播放管理

        /**
         * 循环播放背景音乐 - 音频资源会在对象释放时自动释放
         * @param url       资源地址
         */


        playMusic(url) {
          this.resPaths.set(url, (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
            error: Error()
          }), oops) : oops).res.defaultBundleName);
          (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
            error: Error()
          }), oops) : oops).audio.playerMusicLoop(url);
        }
        /**
        * 播放音效 - 音频资源会在对象释放时自动释放
        * @param url        资源地址
        */


        playEffect(url) {
          this.resPaths.set(url, (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
            error: Error()
          }), oops) : oops).res.defaultBundleName);
          (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
            error: Error()
          }), oops) : oops).audio.playEffect(url);
        } //#endregion


        onDestroy() {
          // 释放消息对象
          if (this._event) {
            this._event.destroy();

            this._event = null;
          } // 节点引用数据清除


          this.nodes.clear(); // 自动释放资源

          this.release();
          this.releaseDir();
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=bd0cd31f2e4f338acde53e4019c3696a4ec261b7.js.map