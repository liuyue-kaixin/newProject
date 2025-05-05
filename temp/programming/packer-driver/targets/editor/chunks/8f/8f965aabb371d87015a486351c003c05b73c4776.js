System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Camera, Layers, Node, warn, Widget, GUI, DelegateComponent, LayerDialog, LayerNotify, LayerPopUp, LayerUI, UIMap, LayerManager, _crd, LayerType;

  function _reportPossibleCrUseOfGUI(extras) {
    _reporterNs.report("GUI", "../GUI", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUICallbacks(extras) {
    _reporterNs.report("UICallbacks", "./Defines", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDelegateComponent(extras) {
    _reporterNs.report("DelegateComponent", "./DelegateComponent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLayerDialog(extras) {
    _reporterNs.report("LayerDialog", "./LayerDialog", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLayerNotify(extras) {
    _reporterNs.report("LayerNotify", "./LayerNotify", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLayerPopUp(extras) {
    _reporterNs.report("LayerPopUp", "./LayerPopup", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLayerUI(extras) {
    _reporterNs.report("LayerUI", "./LayerUI", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIMap(extras) {
    _reporterNs.report("UIMap", "./UIMap", _context.meta, extras);
  }

  _export("LayerManager", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Camera = _cc.Camera;
      Layers = _cc.Layers;
      Node = _cc.Node;
      warn = _cc.warn;
      Widget = _cc.Widget;
    }, function (_unresolved_2) {
      GUI = _unresolved_2.GUI;
    }, function (_unresolved_3) {
      DelegateComponent = _unresolved_3.DelegateComponent;
    }, function (_unresolved_4) {
      LayerDialog = _unresolved_4.LayerDialog;
    }, function (_unresolved_5) {
      LayerNotify = _unresolved_5.LayerNotify;
    }, function (_unresolved_6) {
      LayerPopUp = _unresolved_6.LayerPopUp;
    }, function (_unresolved_7) {
      LayerUI = _unresolved_7.LayerUI;
    }, function (_unresolved_8) {
      UIMap = _unresolved_8.UIMap;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "7ba675xFGdHqIOykTysNzEu", "LayerManager", undefined);

      __checkObsolete__(['Camera', 'Layers', 'Node', 'warn', 'Widget']);

      /** 界面层类型 */
      _export("LayerType", LayerType = /*#__PURE__*/function (LayerType) {
        LayerType["Game"] = "LayerGame";
        LayerType["UI"] = "LayerUI";
        LayerType["PopUp"] = "LayerPopUp";
        LayerType["Dialog"] = "LayerDialog";
        LayerType["System"] = "LayerSystem";
        LayerType["Notify"] = "LayerNotify";
        LayerType["Guide"] = "LayerGuide";
        return LayerType;
      }({}));
      /** 
       * 界面配置结构体
       * @example
      // 界面唯一标识
      export enum UIID {
          Loading = 1,
          Window,
          Netinstable
      }
      
      // 打开界面方式的配置数据
      export var UIConfigData: { [key: number]: UIConfig } = {
          [UIID.Loading]: { layer: LayerType.UI, prefab: "loading/prefab/loading", bundle: "resources" },
          [UIID.Netinstable]: { layer: LayerType.PopUp, prefab: "common/prefab/netinstable" },
          [UIID.Window]: { layer: LayerType.Dialog, prefab: "common/prefab/window" }
      }
       */


      _export("LayerManager", LayerManager = class LayerManager {
        /** 是否为竖屏显示 */
        get portrait() {
          return this.root.getComponent(_crd && GUI === void 0 ? (_reportPossibleCrUseOfGUI({
            error: Error()
          }), GUI) : GUI).portrait;
        }
        /**
         * 初始化所有UI的配置对象
         * @param configs 配置对象
         */


        init(configs) {
          this.configs = configs;
        }
        /**
         * 渐隐飘过提示
         * @param content 文本表示
         * @param useI18n 是否使用多语言
         * @example 
         * oops.gui.toast("提示内容");
         */


        toast(content, useI18n = false) {
          this.notify.show(content, useI18n);
        }
        /**
         * 设置界面配置
         * @param uiId   要设置的界面id
         * @param config 要设置的配置
         */


        setConfig(uiId, config) {
          this.configs[uiId] = config;
        }
        /**
         * 设置界面地图配置
         * @param data 界面地图数据
         */


        setUIMap(data) {
          if (this.uiMap == null) {
            this.uiMap = new (_crd && UIMap === void 0 ? (_reportPossibleCrUseOfUIMap({
              error: Error()
            }), UIMap) : UIMap)();
          }

          this.uiMap.init(this, data);
        }
        /**
         * 同步打开一个窗口
         * @param uiId          窗口唯一编号
         * @param uiArgs        窗口参数
         * @param callbacks     回调对象
         * @example
        var uic: UICallbacks = {
            onAdded: (node: Node, params: any) => {
                var comp = node.getComponent(LoadingViewComp) as ecs.Comp;
            }
            onRemoved:(node: Node | null, params: any) => {
                        
            }
        };
        oops.gui.open(UIID.Loading, null, uic);
         */


        open(uiId, uiArgs = null, callbacks) {
          var config = this.configs[uiId];

          if (config == null) {
            warn(`打开编号为【${uiId}】的界面失败，配置信息不存在`);
            return;
          }

          switch (config.layer) {
            case LayerType.UI:
              this.ui.add(config, uiArgs, callbacks);
              break;

            case LayerType.PopUp:
              this.popup.add(config, uiArgs, callbacks);
              break;

            case LayerType.Dialog:
              this.dialog.add(config, uiArgs, callbacks);
              break;

            case LayerType.System:
              this.system.add(config, uiArgs, callbacks);
              break;
          }
        }
        /**
         * 异步打开一个窗口
         * @param uiId          窗口唯一编号
         * @param uiArgs        窗口参数
         * @example 
         * var node = await oops.gui.openAsync(UIID.Loading);
         */


        async openAsync(uiId, uiArgs = null) {
          return new Promise((resolve, reject) => {
            var callbacks = {
              onAdded: (node, params) => {
                resolve(node);
              }
            };
            this.open(uiId, uiArgs, callbacks);
          });
        }
        /**
         * 缓存中是否存在指定标识的窗口
         * @param uiId 窗口唯一标识
         * @example
         * oops.gui.has(UIID.Loading);
         */


        has(uiId) {
          var config = this.configs[uiId];

          if (config == null) {
            warn(`编号为【${uiId}】的界面失败，配置信息不存在`);
            return false;
          }

          var result = false;

          switch (config.layer) {
            case LayerType.UI:
              result = this.ui.has(config.prefab);
              break;

            case LayerType.PopUp:
              result = this.popup.has(config.prefab);
              break;

            case LayerType.Dialog:
              result = this.dialog.has(config.prefab);
              break;

            case LayerType.System:
              result = this.system.has(config.prefab);
              break;
          }

          return result;
        }
        /**
         * 移除指定标识的窗口
         * @param uiId         窗口唯一标识
         * @param isDestroy    移除后是否释放
         * @example
         * oops.gui.remove(UIID.Loading);
         */


        remove(uiId, isDestroy = true) {
          var config = this.configs[uiId];

          if (config == null) {
            warn(`删除编号为【${uiId}】的界面失败，配置信息不存在`);
            return;
          }

          switch (config.layer) {
            case LayerType.UI:
              this.ui.remove(config.prefab, isDestroy);
              break;

            case LayerType.PopUp:
              this.popup.remove(config.prefab, isDestroy);
              break;

            case LayerType.Dialog:
              this.dialog.remove(config.prefab, isDestroy);
              break;

            case LayerType.System:
              this.system.remove(config.prefab, isDestroy);
              break;
          }
        }
        /**
         * 删除一个通过this框架添加进来的节点
         * @param node          窗口节点
         * @param isDestroy     移除后是否释放
         * @example
         * oops.gui.removeByNode(cc.Node);
         */


        removeByNode(node, isDestroy = false) {
          if (node instanceof Node) {
            let comp = node.getComponent(_crd && DelegateComponent === void 0 ? (_reportPossibleCrUseOfDelegateComponent({
              error: Error()
            }), DelegateComponent) : DelegateComponent);

            if (comp && comp.viewParams) {
              // @ts-ignore 注：不对外使用
              node.parent.removeByUuid(comp.viewParams.uuid, isDestroy);
            } else {
              warn(`当前删除的node不是通过界面管理器添加到舞台上`);
              node.destroy();
            }
          }
        }
        /**
         * 清除所有窗口
         * @param isDestroy 移除后是否释放
         * @example
         * oops.gui.clear();
         */


        clear(isDestroy = false) {
          this.ui.clear(isDestroy);
          this.popup.clear(isDestroy);
          this.dialog.clear(isDestroy);
          this.system.clear(isDestroy);
        }
        /**
         * 构造函数
         * @param root  界面根节点
         */


        constructor(root) {
          /** 界面根节点 */
          this.root = void 0;

          /** 界面摄像机 */
          this.camera = void 0;

          /** 游戏界面特效层 */
          this.game = void 0;

          /** 新手引导层 */
          this.guide = void 0;

          /** 界面地图 */
          this.uiMap = void 0;

          /** 界面层 */
          this.ui = void 0;

          /** 弹窗层 */
          this.popup = void 0;

          /** 只能弹出一个的弹窗 */
          this.dialog = void 0;

          /** 游戏系统提示弹窗  */
          this.system = void 0;

          /** 消息提示控制器，请使用show方法来显示 */
          this.notify = void 0;

          /** UI配置 */
          this.configs = {};
          this.root = root;
          this.camera = this.root.getComponentInChildren(Camera);
          this.game = this.create_node(LayerType.Game);
          this.ui = new (_crd && LayerUI === void 0 ? (_reportPossibleCrUseOfLayerUI({
            error: Error()
          }), LayerUI) : LayerUI)(LayerType.UI);
          this.popup = new (_crd && LayerPopUp === void 0 ? (_reportPossibleCrUseOfLayerPopUp({
            error: Error()
          }), LayerPopUp) : LayerPopUp)(LayerType.PopUp);
          this.dialog = new (_crd && LayerDialog === void 0 ? (_reportPossibleCrUseOfLayerDialog({
            error: Error()
          }), LayerDialog) : LayerDialog)(LayerType.Dialog);
          this.system = new (_crd && LayerDialog === void 0 ? (_reportPossibleCrUseOfLayerDialog({
            error: Error()
          }), LayerDialog) : LayerDialog)(LayerType.System);
          this.notify = new (_crd && LayerNotify === void 0 ? (_reportPossibleCrUseOfLayerNotify({
            error: Error()
          }), LayerNotify) : LayerNotify)(LayerType.Notify);
          this.guide = this.create_node(LayerType.Guide);
          root.addChild(this.game);
          root.addChild(this.ui);
          root.addChild(this.popup);
          root.addChild(this.dialog);
          root.addChild(this.system);
          root.addChild(this.notify);
          root.addChild(this.guide);
        }

        create_node(name) {
          var node = new Node(name);
          node.layer = Layers.Enum.UI_2D;
          var w = node.addComponent(Widget);
          w.isAlignLeft = w.isAlignRight = w.isAlignTop = w.isAlignBottom = true;
          w.left = w.right = w.top = w.bottom = 0;
          w.alignMode = 2;
          w.enabled = true;
          return node;
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=8f965aabb371d87015a486351c003c05b73c4776.js.map