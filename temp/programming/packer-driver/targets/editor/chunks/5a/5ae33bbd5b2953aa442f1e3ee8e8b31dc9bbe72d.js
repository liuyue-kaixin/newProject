System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Color, Texture2D, ImageUtil, _crd;

  _export("ImageUtil", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Color = _cc.Color;
      Texture2D = _cc.Texture2D;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "ebdf3rRnEdIYpKgGdW8gSmZ", "ImageUtil", undefined);
      /*
       * @Author: dgflash
       * @Date: 2022-09-01 18:00:28
       * @LastEditors: dgflash
       * @LastEditTime: 2022-09-02 14:49:42
       */


      /**
       * 图像工具
       */
      __checkObsolete__(['Color', 'Texture2D']);

      _export("ImageUtil", ImageUtil = class ImageUtil {
        /**
         * 获取纹理中指定像素的颜色，原点为左上角，从像素 (1, 1) 开始。
         * @param texture 纹理
         * @param x x 坐标
         * @param y y 坐标
         * @example
        // 获取纹理左上角第一个像素的颜色
        const color = ImageUtil.getPixelColor(texture, 1, 1);
        cc.color(50, 100, 123, 255);
         */
        static getPixelColor(texture, x, y) {
          const canvas = document.createElement('canvas');
          const ctx = canvas.getContext('2d');
          canvas.width = texture.width;
          canvas.height = texture.height;
          const image = texture.getHtmlElementObj();
          ctx.drawImage(image, 0, 0, texture.width, texture.height);
          const imageData = ctx.getImageData(0, 0, texture.width, texture.height);
          const pixelIndex = (y - 1) * texture.width * 4 + (x - 1) * 4;
          const pixelData = imageData.data.slice(pixelIndex, pixelIndex + 4);
          const color = new Color(pixelData[0], pixelData[1], pixelData[2], pixelData[3]);
          image.remove();
          canvas.remove();
          return color;
        }
        /**
         * 将图像转为 Base64 字符（仅 png、jpg 或 jpeg 格式资源）（有问题）
         * @param url 图像地址
         * @param callback 完成回调
         */


        static imageToBase64(url, callback) {
          return new Promise(res => {
            var _exec;

            let extname = (_exec = /\.png|\.jpg|\.jpeg/.exec(url)) == null ? void 0 : _exec[0]; //@ts-ignore

            if (['.png', '.jpg', '.jpeg'].includes(extname)) {
              const canvas = document.createElement('canvas');
              const ctx = canvas.getContext('2d');
              const image = new Image();
              image.src = url;

              image.onload = () => {
                canvas.height = image.height;
                canvas.width = image.width;
                ctx.drawImage(image, 0, 0);
                extname = extname === '.jpg' ? 'jpeg' : extname.replace('.', '');
                const dataURL = canvas.toDataURL(`image/${extname}`);
                callback && callback(dataURL);
                res(dataURL);
                image.remove();
                canvas.remove();
              };
            } else {
              console.warn('Not a jpg/jpeg or png resource!');
              callback && callback("");
              res("");
            }
          });
        }
        /**
         * 将 Base64 字符转为 cc.Texture2D 资源（有问题）
         * @param base64 Base64 字符
         */


        static base64ToTexture(base64) {
          const image = document.createElement('img');
          image.src = base64;
          const texture = new Texture2D(); //@ts-ignore

          texture.initWithElement(image);
          image.remove();
          return texture;
        }
        /**
         * 将 Base64 字符转为二进制数据（有问题）
         * @param base64 Base64 字符
         */


        static base64ToBlob(base64) {
          const strings = base64.split(','); //@ts-ignore

          const type = /image\/\w+|;/.exec(strings[0])[0];
          const data = window.atob(strings[1]);
          const arrayBuffer = new ArrayBuffer(data.length);
          const uint8Array = new Uint8Array(arrayBuffer);

          for (let i = 0; i < data.length; i++) {
            uint8Array[i] = data.charCodeAt(i) & 0xff;
          }

          return new Blob([uint8Array], {
            type: type
          });
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=5ae33bbd5b2953aa442f1e3ee8e8b31dc9bbe72d.js.map