System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, error, instantiate, isValid, Node, warn, Widget, oops, ViewParams, DelegateComponent, LayerUI, _crd;

  function _reportPossibleCrUseOfoops(extras) {
    _reporterNs.report("oops", "../../Oops", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUICallbacks(extras) {
    _reporterNs.report("UICallbacks", "./Defines", _context.meta, extras);
  }

  function _reportPossibleCrUseOfViewParams(extras) {
    _reporterNs.report("ViewParams", "./Defines", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDelegateComponent(extras) {
    _reporterNs.report("DelegateComponent", "./DelegateComponent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIConfig(extras) {
    _reporterNs.report("UIConfig", "./LayerManager", _context.meta, extras);
  }

  _export("LayerUI", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      error = _cc.error;
      instantiate = _cc.instantiate;
      isValid = _cc.isValid;
      Node = _cc.Node;
      warn = _cc.warn;
      Widget = _cc.Widget;
    }, function (_unresolved_2) {
      oops = _unresolved_2.oops;
    }, function (_unresolved_3) {
      ViewParams = _unresolved_3.ViewParams;
    }, function (_unresolved_4) {
      DelegateComponent = _unresolved_4.DelegateComponent;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "bc8b86Br9dGeKxeLijkyJKE", "LayerUI", undefined);
      /*
       * UI基础层，允许添加多个预制件节点
       * add          : 添加一个预制件节点到层容器中，该方法将返回一个唯一uuid来标识该操作Node节点。
       * delete       : 根据uuid删除Node节点，如果节点还在队列中也会被删除, 删除节点可以用gui.delete(node)或this.node.destroy()
       * deleteByUuid : 根据预制件路径删除，预制件如在队列中也会被删除，如果该预制件存在多个也会一起删除。
       * get          : 根据uuid获取Node节点，如果节点不存在或者预制件还在队列中，则返回null 。
       * getByUuid    : 根据预制件路径获取当前显示的该预制件的所有Node节点数组。
       * has          : 判断当前层是否包含 uuid或预制件路径对应的Node节点。
       * find         : 判断当前层是否包含 uuid或预制件路径对应的Node节点。
       * size         : 当前层上显示的所有Node节点数。
       * clear        : 清除所有Node节点，队列当中未创建的任务也会被清除。
       */


      __checkObsolete__(['error', 'instantiate', 'isValid', 'Node', 'Prefab', 'warn', 'Widget']);

      /** 界面层对象 */
      _export("LayerUI", LayerUI = class LayerUI extends Node {
        /**
         * UI基础层，允许添加多个预制件节点
         * @param name 该层名
         * @param container 容器Node
         */
        constructor(name) {
          super(name);

          /** 界面节点集合 */
          this.ui_nodes = new Map();

          /** 被移除的界面缓存数据 */
          this.ui_cache = new Map();
          var widget = this.addComponent(Widget);
          widget.isAlignLeft = widget.isAlignRight = widget.isAlignTop = widget.isAlignBottom = true;
          widget.left = widget.right = widget.top = widget.bottom = 0;
          widget.alignMode = 2;
          widget.enabled = true;
        }
        /** 构造一个唯一标识UUID */


        getUuid(prefabPath) {
          var uuid = this.name + "_" + prefabPath;
          return uuid.replace(/\//g, "_");
        }
        /**
         * 添加一个预制件节点到层容器中，该方法将返回一个唯一`uuid`来标识该操作节点
         * @param prefabPath 预制件路径
         * @param params     自定义参数
         * @param callbacks  回调函数对象，可选
         */


        add(config, params, callbacks) {
          var prefabPath = config.prefab;
          var uuid = this.getUuid(prefabPath);
          var viewParams = this.ui_nodes.get(uuid);

          if (viewParams && viewParams.valid) {
            warn("\u8DEF\u5F84\u4E3A\u3010" + prefabPath + "\u3011\u7684\u9884\u5236\u91CD\u590D\u52A0\u8F7D");
            return "";
          }

          if (viewParams == null) {
            viewParams = new (_crd && ViewParams === void 0 ? (_reportPossibleCrUseOfViewParams({
              error: Error()
            }), ViewParams) : ViewParams)();
            viewParams.uuid = uuid;
            viewParams.prefabPath = prefabPath;
            this.ui_nodes.set(viewParams.uuid, viewParams);
          }

          viewParams.params = params != null ? params : {};
          viewParams.callbacks = callbacks != null ? callbacks : {};
          viewParams.valid = true;
          this.load(viewParams, config.bundle);
          return uuid;
        }
        /**
         * 加载界面资源
         * @param viewParams 显示参数
         * @param bundle     远程资源包名，如果为空就是默认本地资源包
         */


        load(viewParams, bundle) {
          var vp = this.ui_nodes.get(viewParams.uuid);

          if (vp && vp.node) {
            this.createNode(vp);
          } else {
            // 优先加载配置的指定资源包中资源，如果没配置则加载默认资源包资源
            bundle = bundle || (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
              error: Error()
            }), oops) : oops).res.defaultBundleName;
            (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
              error: Error()
            }), oops) : oops).res.load(bundle, viewParams.prefabPath, (err, res) => {
              if (err) {
                error(err);
              }

              var childNode = instantiate(res);
              viewParams.node = childNode;
              var comp = childNode.addComponent(_crd && DelegateComponent === void 0 ? (_reportPossibleCrUseOfDelegateComponent({
                error: Error()
              }), DelegateComponent) : DelegateComponent);
              comp.viewParams = viewParams;
              this.createNode(viewParams);
            });
          }
        }
        /**
         * 创建界面节点
         * @param viewParams  视图参数
         */


        createNode(viewParams) {
          viewParams.valid = true;
          var comp = viewParams.node.getComponent(_crd && DelegateComponent === void 0 ? (_reportPossibleCrUseOfDelegateComponent({
            error: Error()
          }), DelegateComponent) : DelegateComponent);
          comp.add();
          viewParams.node.parent = this;
          return viewParams.node;
        }
        /**
         * 根据预制件路径删除，预制件如在队列中也会被删除，如果该预制件存在多个也会一起删除
         * @param prefabPath   预制路径
         * @param isDestroy    移除后是否释放
         */


        remove(prefabPath, isDestroy) {
          // 验证是否删除后台缓存界面
          if (isDestroy) this.removeCache(prefabPath); // 界面移出舞台

          var children = this.__nodes();

          for (var i = 0; i < children.length; i++) {
            var viewParams = children[i].viewParams;

            if (viewParams.prefabPath === prefabPath) {
              if (isDestroy) {
                // 直接释放界面
                this.ui_nodes.delete(viewParams.uuid);
              } else {
                // 不释放界面，缓存起来待下次使用
                this.ui_cache.set(viewParams.prefabPath, viewParams);
              }

              children[i].remove(isDestroy);
              viewParams.valid = false;
            }
          }
        }
        /**
         * 根据唯一标识删除节点，如果节点还在队列中也会被删除
         * @param uuid  唯一标识
         */


        removeByUuid(uuid, isDestroy) {
          var viewParams = this.ui_nodes.get(uuid);

          if (viewParams) {
            if (isDestroy) this.ui_nodes.delete(viewParams.uuid);
            var childNode = viewParams.node;
            var comp = childNode.getComponent(_crd && DelegateComponent === void 0 ? (_reportPossibleCrUseOfDelegateComponent({
              error: Error()
            }), DelegateComponent) : DelegateComponent);
            comp.remove(isDestroy);
          }
        }
        /** 
         * 删除缓存的界面，当缓存界面被移除舞台时，可通过此方法删除缓存界面
         */


        removeCache(prefabPath) {
          var viewParams = this.ui_cache.get(prefabPath);

          if (viewParams) {
            this.ui_nodes.delete(viewParams.uuid);
            this.ui_cache.delete(prefabPath);
            var childNode = viewParams.node;
            childNode.destroy();
          }
        }
        /**
         * 根据唯一标识获取节点，如果节点不存在或者还在队列中，则返回null 
         * @param uuid  唯一标识
         */


        getByUuid(uuid) {
          var children = this.__nodes();

          for (var comp of children) {
            if (comp.viewParams && comp.viewParams.uuid === uuid) {
              return comp.node;
            }
          }

          return null;
        }
        /**
         * 根据预制件路径获取当前显示的该预制件的所有Node节点数组
         * @param prefabPath 
         */


        get(prefabPath) {
          var arr = [];

          var children = this.__nodes();

          for (var comp of children) {
            if (comp.viewParams.prefabPath === prefabPath) {
              arr.push(comp.node);
            }
          }

          return arr;
        }
        /**
         * 判断当前层是否包含 uuid或预制件路径对应的Node节点
         * @param prefabPathOrUUID 预制件路径或者UUID
         */


        has(prefabPathOrUUID) {
          var children = this.__nodes();

          for (var comp of children) {
            if (comp.viewParams.uuid === prefabPathOrUUID || comp.viewParams.prefabPath === prefabPathOrUUID) {
              return true;
            }
          }

          return false;
        }
        /**
         * 获取当前层包含指定正则匹配的Node节点。
         * @param prefabPathReg 匹配预制件路径的正则表达式对象
         */


        find(prefabPathReg) {
          var arr = [];

          var children = this.__nodes();

          for (var comp of children) {
            if (prefabPathReg.test(comp.viewParams.prefabPath)) {
              arr.push(comp.node);
            }
          }

          return arr;
        }
        /** 获取当前层所有窗口事件触发组件 */


        __nodes() {
          var result = [];
          var children = this.children;

          for (var i = 0; i < children.length; i++) {
            var comp = children[i].getComponent(_crd && DelegateComponent === void 0 ? (_reportPossibleCrUseOfDelegateComponent({
              error: Error()
            }), DelegateComponent) : DelegateComponent);

            if (comp && comp.viewParams && comp.viewParams.valid && isValid(comp)) {
              result.push(comp);
            }
          }

          return result;
        }
        /** 层节点数量 */


        size() {
          return this.children.length;
        }
        /**
         * 清除所有节点，队列当中的也删除
         * @param isDestroy  移除后是否释放
         */


        clear(isDestroy) {
          // 清除所有显示的界面
          this.ui_nodes.forEach((value, key) => {
            this.removeByUuid(value.uuid, isDestroy);
            value.valid = false;
          });
          this.ui_nodes.clear(); // 清除缓存中的界面

          if (isDestroy) {
            this.ui_cache.forEach((value, prefabPath) => {
              this.removeCache(prefabPath);
            });
          }
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=311ce5ffaa046f9703e281cfd3fe72d6cfd21e1d.js.map