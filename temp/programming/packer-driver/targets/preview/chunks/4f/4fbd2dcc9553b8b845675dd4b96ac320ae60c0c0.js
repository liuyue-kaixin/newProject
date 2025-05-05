System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, game, Game, GameManager, _crd, timeScale;

  _export("GameManager", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      game = _cc.game;
      Game = _cc.Game;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "73fa0CEfOhMdJUoZwoFIIZV", "GameManager", undefined);
      /*
       * @Author: dgflash
       * @Date: 2022-02-10 09:50:41
       * @LastEditors: dgflash
       * @LastEditTime: 2022-09-02 12:09:55
       */


      __checkObsolete__(['game', 'Game', 'Node']);

      timeScale = 1;
      /** 游戏世界管理 */

      _export("GameManager", GameManager = class GameManager {
        constructor(root) {
          /** 界面根节点 */
          this.root = void 0;
          this.root = root;
          this.gameTimeScaleExtend();
        }
        /** 设置游戏动画速度（不支持 Native 模式） */


        setTimeScale(scale) {
          timeScale = scale;
        }
        /** 只支持web整体加速 */


        gameTimeScaleExtend() {
          //@ts-ignore
          game._calculateDT = function (now) {
            if (!now) now = performance.now(); //@ts-ignore

            this._deltaTime = now > this._startTime ? (now - this._startTime) / 1000 : 0; //@ts-ignore

            if (this._deltaTime > Game.DEBUG_DT_THRESHOLD) {
              //@ts-ignore
              this._deltaTime = this.frameTime / 1000;
            } //@ts-ignore


            this._startTime = now; //@ts-ignore

            return this._deltaTime * timeScale;
          };
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=4fbd2dcc9553b8b845675dd4b96ac320ae60c0c0.js.map