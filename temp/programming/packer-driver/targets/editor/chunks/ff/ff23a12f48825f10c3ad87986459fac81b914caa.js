System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Component, JsonAsset, _decorator, AnimatorController, _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _crd, ccclass, property, executionOrder, menu, AnimatorBase;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfAnimatorController(extras) {
    _reporterNs.report("AnimatorController", "./AnimatorController", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAnimatorState(extras) {
    _reporterNs.report("AnimatorState", "./AnimatorState", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAnimatorStateLogic(extras) {
    _reporterNs.report("AnimatorStateLogic", "./AnimatorStateLogic", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Component = _cc.Component;
      JsonAsset = _cc.JsonAsset;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      AnimatorController = _unresolved_2.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "7ff14NOug1NAIB1XgQlC9Gc", "AnimatorBase", undefined);

      __checkObsolete__(['Component', 'JsonAsset', '_decorator']);

      ({
        ccclass,
        property,
        executionOrder,
        menu
      } = _decorator);
      /**
       * 自定义控制动画播放的接口
       */

      /**
       * 状态机组件基类 优先执行生命周期
       */
      _export("default", AnimatorBase = (_dec = executionOrder(-1000), _dec2 = menu('animator/AnimatorBase'), _dec3 = property({
        type: JsonAsset,
        tooltip: '状态机json文件'
      }), _dec4 = property({
        tooltip: '是否在start中自动启动状态机'
      }), _dec5 = property({
        tooltip: '是否在update中自动触发状态机逻辑更新'
      }), ccclass(_class = _dec(_class = _dec2(_class = (_class2 = class AnimatorBase extends Component {
        constructor(...args) {
          super(...args);

          /** ---------- 后续扩展代码 结束 ---------- */
          _initializerDefineProperty(this, "AssetRawUrl", _descriptor, this);

          _initializerDefineProperty(this, "PlayOnStart", _descriptor2, this);

          _initializerDefineProperty(this, "AutoUpdate", _descriptor3, this);

          /** 是否初始化 */
          this._hasInit = false;

          /** 状态机控制 */
          this._ac = null;

          /** 各个状态逻辑控制，key为状态名 */
          this._stateLogicMap = null;

          /** 状态切换时的回调 */
          this._onStateChangeCall = null;

          /** 自定义的动画播放控制器 */
          this._animationPlayer = null;
        }

        /** ---------- 后续扩展代码 开始 ---------- */

        /** 三维骨骼动画动画帧自定义事件 */
        onFrameEvent(param) {
          var _this$_animationPlaye;

          (_this$_animationPlaye = this._animationPlayer) == null || _this$_animationPlaye.onFrameEventCallback(param, this);
        }

        /** 当前状态名 */
        get curStateName() {
          return this._ac.curState.name;
        }
        /** 当前动画名 */


        get curStateMotion() {
          return this._ac.curState.motion;
        }
        /** 获取指定状态 */


        getState(name) {
          return this._ac.states.get(name);
        }
        /**
         * 手动初始化状态机，可传入0-3个参数，类型如下
         * - onStateChangeCall 状态切换时的回调
         * - stateLogicMap 各个状态逻辑控制
         * - animationPlayer 自定义动画控制
         * @virtual
         */


        onInit(...args) {}
        /**
         * 处理初始化参数
         */


        initArgs(...args) {
          args.forEach(arg => {
            if (!arg) {
              return;
            }

            if (typeof arg === 'function') {
              this._onStateChangeCall = arg;
            } else if (typeof arg === 'object') {
              if (arg instanceof Map) {
                this._stateLogicMap = arg;
              } else {
                this._animationPlayer = arg;
              }
            }
          });
        }

        updateAnimator() {
          // 混合当前动画播放速度
          let playSpeed = this._ac.curState.speed;

          if (this._ac.curState.multi) {
            var _this$_ac$params$getN;

            playSpeed *= (_this$_ac$params$getN = this._ac.params.getNumber(this._ac.curState.multi)) != null ? _this$_ac$params$getN : 1;
          }

          this.scaleTime(playSpeed); // 更新动画状态逻辑

          if (this._stateLogicMap) {
            let curLogic = this._stateLogicMap.get(this._ac.curState.name);

            curLogic && curLogic.onUpdate();
          } // 更新状态机逻辑


          this._ac.updateAnimator();
        }

        update() {
          if (this._hasInit && this.AutoUpdate) {
            this.updateAnimator();
          }
        }
        /**
         * 手动调用更新
         */


        manualUpdate() {
          if (this._hasInit && !this.AutoUpdate) {
            this.updateAnimator();
          }
        }
        /**
         * 解析状态机json文件
         */


        initJson(json) {
          this._ac = new (_crd && AnimatorController === void 0 ? (_reportPossibleCrUseOfAnimatorController({
            error: Error()
          }), AnimatorController) : AnimatorController)(this, json);
        }
        /**
         * 动画结束的回调
         */


        onAnimFinished() {
          var _this$_animationPlaye2;

          this._ac.onAnimationComplete();

          (_this$_animationPlaye2 = this._animationPlayer) == null || _this$_animationPlaye2.onFinishedCallback(this);
        }
        /**
         * 播放动画
         * @virtual
         * @param animName 动画名
         * @param loop 是否循环播放
         */


        playAnimation(animName, loop) {}
        /**
         * 缩放动画播放速率
         * @virtual
         * @param scale 缩放倍率
         */


        scaleTime(scale) {}
        /** 
         * 状态切换时的逻辑（状态机内部方法，不能由外部直接调用）
         */


        onStateChange(fromState, toState) {
          this.playAnimation(toState.motion, toState.loop);
          let fromStateName = fromState ? fromState.name : '';

          if (this._stateLogicMap) {
            let fromLogic = this._stateLogicMap.get(fromStateName);

            fromLogic && fromLogic.onExit();

            let toLogic = this._stateLogicMap.get(toState.name);

            toLogic && toLogic.onEntry();
          }

          this._onStateChangeCall && this._onStateChangeCall(fromStateName, toState.name);
        }
        /**
         * 设置boolean类型参数的值
         */


        setBool(key, value) {
          this._ac.params.setBool(key, value);
        }
        /**
         * 获取boolean类型参数的值
         */


        getBool(key) {
          return this._ac.params.getBool(key) !== 0;
        }
        /**
         * 设置number类型参数的值
         */


        setNumber(key, value) {
          this._ac.params.setNumber(key, value);
        }
        /**
         * 获取number类型参数的值
         */


        getNumber(key) {
          return this._ac.params.getNumber(key);
        }
        /**
         * 设置trigger类型参数的值
         */


        setTrigger(key) {
          this._ac.params.setTrigger(key);
        }
        /**
         * 重置trigger类型参数的值
         */


        resetTrigger(key) {
          this._ac.params.resetTrigger(key);
        }
        /**
         * 设置autoTrigger类型参数的值（autoTrigger类型参数不需要主动reset，每次状态机更新结束后会自动reset）
         */


        autoTrigger(key) {
          this._ac.params.autoTrigger(key);
        }
        /**
         * 无视条件直接跳转状态
         * @param 状态名
         */


        play(stateName) {
          if (!this._hasInit) {
            return;
          }

          this._ac.play(stateName);
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "AssetRawUrl", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "PlayOnStart", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return true;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "AutoUpdate", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return true;
        }
      })), _class2)) || _class) || _class) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=ff23a12f48825f10c3ad87986459fac81b914caa.js.map