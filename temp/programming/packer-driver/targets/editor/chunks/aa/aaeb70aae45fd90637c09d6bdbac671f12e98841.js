System.register(["__unresolved_0", "cc"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, log, warn, EventData, MessageEventData, MessageManager, _class3, _crd;

  function _reportPossibleCrUseOfListenerFunc(extras) {
    _reporterNs.report("ListenerFunc", "./EventMessage", _context.meta, extras);
  }

  _export({
    MessageEventData: void 0,
    MessageManager: void 0
  });

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      log = _cc.log;
      warn = _cc.warn;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "a401fY+wj9NsqOACoZ7Zy/R", "MessageManager", undefined);

      __checkObsolete__(['log', 'warn']);

      EventData = class EventData {
        constructor() {
          this.event = void 0;
          this.listener = void 0;
          this.object = void 0;
        }

      };
      /**
       * 批量注册、移除全局事件对象
       */

      _export("MessageEventData", MessageEventData = class MessageEventData {
        constructor() {
          this.events = {};
        }

        /**
         * 注册全局事件
         * @param event      事件名
         * @param listener   处理事件的侦听器函数
         * @param object     侦听函数绑定的作用域对象
         */
        on(event, listener, object) {
          let list = this.events[event];

          if (list == null) {
            list = [];
            this.events[event] = list;
          }

          let data = new EventData();
          data.event = event;
          data.listener = listener;
          data.object = object;
          list.push(data);
          MessageManager.Instance.on(event, listener, object);
        }
        /**
        * 移除全局事件
         * @param event     事件名
         */


        off(event) {
          let ebs = this.events[event];

          if (!ebs) {
            return;
          }

          for (let eb of ebs) {
            MessageManager.Instance.off(event, eb.listener, eb.object);
          }

          delete this.events[event];
        }
        /** 
         * 触发全局事件 
         * @param event(string)      事件名
         * @param args(any)          事件参数
         */


        dispatchEvent(event, arg = null) {
          MessageManager.Instance.dispatchEvent(event, arg);
        }
        /** 清除所有的全局事件监听 */


        clear() {
          for (let event in this.events) {
            this.off(event);
          }
        }

      });
      /** 
       * 全局消息管理
       * @example 
      // 注册持续监听的全局事件
      export class RoleViewComp extends Component{
          onLoad(){
              // 监听全局事件
              oops.message.on(GameEvent.GameServerConnected, this.onHandler, this);
          }
          
          protected onDestroy() {
              // 对象释放时取消注册的全局事件
              oops.message.off(GameEvent.GameServerConnected, this.onHandler, this);
          }
          
          private onHandler(event: string, args: any) {
              switch (event) {
                  case GameEvent.GameServerConnected:
                      console.log("处理游戏服务器连接成功后的逻辑");
                      break;
              }
          }
      }
      
      // 注册只触发一次的全局事件
      export class RoleViewComp extends Component{
          onLoad(){
              // 监听一次事件，事件响应后，该监听自动移除
              oops.message.once(GameEvent.GameServerConnected, this.onHandler, this);
          }
          
          private onHandler(event: string, args: any) {
              switch (event) {
                  case GameEvent.GameServerConnected:
                      console.log("处理游戏服务器连接成功后的逻辑");
                      break;
              }
          }
      }
       */


      _export("MessageManager", MessageManager = class MessageManager {
        constructor() {
          this.events = {};
        }

        /**
         * 注册全局事件
         * @param event      事件名
         * @param listener   处理事件的侦听器函数
         * @param object     侦听函数绑定的作用域对象
         */
        on(event, listener, object) {
          if (!event || !listener) {
            warn(`注册【${event}】事件的侦听器函数为空`);
            return;
          }

          let list = this.events[event];

          if (list == null) {
            list = [];
            this.events[event] = list;
          }

          let length = list.length;

          for (let i = 0; i < length; i++) {
            let bin = list[i];

            if (bin.listener == listener && bin.object == object) {
              warn(`名为【${event}】的事件重复注册侦听器`);
            }
          }

          let data = new EventData();
          data.event = event;
          data.listener = listener;
          data.object = object;
          list.push(data);
        }
        /**
         * 监听一次事件，事件响应后，该监听自动移除
         * @param event     事件名
         * @param listener  事件触发回调方法
         * @param object    侦听函数绑定的作用域对象
         */


        once(event, listener, object) {
          let _listener = ($event, $args) => {
            this.off(event, _listener, object);
            _listener = null;
            listener.call(object, $event, $args);
          };

          this.on(event, _listener, object);
        }
        /**
         * 移除全局事件
         * @param event     事件名
         * @param listener  处理事件的侦听器函数
         * @param object    侦听函数绑定的作用域对象
         */


        off(event, listener, object) {
          let list = this.events[event];

          if (!list) {
            log(`名为【${event}】的事件不存在`);
            return;
          }

          let length = list.length;

          for (let i = 0; i < length; i++) {
            let bin = list[i];

            if (bin.listener == listener && bin.object == object) {
              list.splice(i, 1);
              break;
            }
          }

          if (list.length == 0) {
            delete this.events[event];
          }
        }
        /** 
         * 触发全局事件 
         * @param event(string)      事件名
         * @param args(any)          事件参数
         */


        dispatchEvent(event, args = null) {
          let list = this.events[event];

          if (list != null) {
            let temp = list.concat();
            let length = temp.length;

            for (let i = 0; i < length; i++) {
              let eventBin = temp[i];
              eventBin.listener.call(eventBin.object, event, args);
            }
          }
        }

      });

      _class3 = MessageManager;
      MessageManager.Instance = new _class3();

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=aaeb70aae45fd90637c09d6bdbac671f12e98841.js.map