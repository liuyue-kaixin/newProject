System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Vec3, view, CameraUtil, _crd;

  _export("CameraUtil", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Vec3 = _cc.Vec3;
      view = _cc.view;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "95c77QQpp1EjKj8UBFCCdKu", "CameraUtil", undefined);
      /*
       * @Author: dgflash
       * @Date: 2022-07-26 15:29:57
       * @LastEditors: dgflash
       * @LastEditTime: 2022-09-02 14:50:16
       */


      /** 摄像机工具 */
      __checkObsolete__(['Camera', 'Vec3', 'view']);

      _export("CameraUtil", CameraUtil = class CameraUtil {
        /**
         * 当前世界坐标是否在摄像机显示范围内
         * @param camera    摄像机
         * @param worldPos  坐标
         */
        static isInView(camera, worldPos) {
          var cameraPos = camera.node.getWorldPosition();
          var viewPos = camera.worldToScreen(worldPos);
          var dir = Vec3.normalize(new Vec3(), worldPos.subtract(cameraPos));
          var forward = camera.node.forward;
          var dot = Vec3.dot(forward, dir);
          const viewportRect = view.getViewportRect(); // 判断物体是否在相机前面

          if (dot > 0 // 判断物体是否在视窗内
          && viewPos.x <= viewportRect.width && viewPos.x >= 0 && viewPos.y <= viewportRect.height && viewPos.y >= 0) return true;else return false;
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=2b0c7b9c346f1d7ef425df55599ad4a7cb4b2aec.js.map