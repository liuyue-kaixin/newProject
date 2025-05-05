System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Asset, assetManager, error, js, resources, ResLoader, _crd;

  _export("ResLoader", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Asset = _cc.Asset;
      assetManager = _cc.assetManager;
      error = _cc.error;
      js = _cc.js;
      resources = _cc.resources;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "1a2e4jFffpHrYjrpxbnC760", "ResLoader", undefined);

      __checkObsolete__(['Asset', 'AssetManager', 'Constructor', '__private', 'assetManager', 'error', 'js', 'resources']); // (error: Error | null, asset: T) => void;  (error: Error | null, asset: T[], urls: string[]) => void;


      /** 
       * 游戏资管理 
       * 1、加载默认resources文件夹中资源
       * 2、加载默认bundle远程资源
       * 3、主动传递bundle名时，优先加载传递bundle名资源包中的资源
       */
      _export("ResLoader", ResLoader = class ResLoader {
        constructor() {
          /** 全局默认加载的资源包名 */
          this.defaultBundleName = "resources";
        }
        /**
         * 加载远程资源
         * @param url           资源地址
         * @param options       资源参数，例：{ ext: ".png" }
         * @param onComplete    加载完成回调
         * @example
        var opt: IRemoteOptions = { ext: ".png" };
        var onComplete = (err: Error | null, data: ImageAsset) => {
        const texture = new Texture2D();
        texture.image = data;
        
        const spriteFrame = new SpriteFrame();
        spriteFrame.texture = texture;
        
        var sprite = this.sprite.addComponent(Sprite);
        sprite.spriteFrame = spriteFrame;
        }
        oops.res.loadRemote<ImageAsset>(this.url, opt, onComplete);
         */


        loadRemote(url, ...args) {
          var options = null;
          var onComplete = null;

          if (args.length == 2) {
            options = args[0];
            onComplete = args[1];
          } else {
            onComplete = args[0];
          }

          assetManager.loadRemote(url, options, onComplete);
        }
        /**
         * 加载资源包
         * @param url       资源地址
         * @param complete  完成事件
         * @param v         资源MD5版本号
         * @example
        var serverUrl = "http://192.168.1.8:8080/";         // 服务器地址
        var md5 = "8e5c0";                                  // Cocos Creator 构建后的MD5字符
        await oops.res.loadBundle(serverUrl,md5);
         */


        loadBundle(url, v) {
          return new Promise((resolve, reject) => {
            assetManager.loadBundle(url, {
              version: v
            }, (err, bundle) => {
              if (err) {
                return error(err);
              }

              resolve(bundle);
            });
          });
        }
        /**
         * 加载一个资源
         * @param bundleName    远程包名
         * @param paths         资源路径
         * @param type          资源类型
         * @param onProgress    加载进度回调
         * @param onComplete    加载完成回调
         * @example
        oops.res.load("spine_path", sp.SkeletonData, (err: Error | null, sd: sp.SkeletonData) => {
        });
         */


        load(bundleName, paths, type, onProgress, onComplete) {
          let args = null;

          if (typeof paths === "string" || paths instanceof Array) {
            args = this.parseLoadResArgs(paths, type, onProgress, onComplete);
            args.bundle = bundleName;
          } else {
            args = this.parseLoadResArgs(bundleName, paths, type, onProgress);
            args.bundle = this.defaultBundleName;
          }

          this.loadByArgs(args);
        }

        loadAsync(bundleName, paths, type) {
          return new Promise((resolve, reject) => {
            this.load(bundleName, paths, type, (err, asset) => {
              if (err) {
                error(err.message);
              }

              resolve(asset);
            });
          });
        }
        /**
         * 加载文件夹中的资源
         * @param bundleName    远程包名
         * @param dir           文件夹名
         * @param type          资源类型
         * @param onProgress    加载进度回调
         * @param onComplete    加载完成回调
         * @example
        // 加载进度事件
        var onProgressCallback = (finished: number, total: number, item: any) => {
        console.log("资源加载进度", finished, total);
        }
        // 加载完成事件
        var onCompleteCallback = () => {
        console.log("资源加载完成");
        }
        oops.res.loadDir("game", onProgressCallback, onCompleteCallback);
         */


        loadDir(bundleName, dir, type, onProgress, onComplete) {
          let args = null;

          if (typeof dir === "string") {
            args = this.parseLoadResArgs(dir, type, onProgress, onComplete);
            args.bundle = bundleName;
          } else {
            args = this.parseLoadResArgs(bundleName, dir, type, onProgress);
            args.bundle = this.defaultBundleName;
          }

          args.dir = args.paths;
          this.loadByArgs(args);
        }
        /**
         * 通过资源相对路径释放资源
         * @param path          资源路径
         * @param bundleName    远程资源包名
         */


        release(path, bundleName) {
          if (bundleName == null) bundleName = this.defaultBundleName;
          var bundle = assetManager.getBundle(bundleName);

          if (bundle) {
            var asset = bundle.get(path);

            if (asset) {
              this.releasePrefabtDepsRecursively(asset);
            }
          }
        }
        /**
         * 通过相对文件夹路径删除所有文件夹中资源
         * @param path          资源文件夹路径
         * @param bundleName    远程资源包名
         */


        releaseDir(path, bundleName) {
          if (bundleName == null) bundleName = this.defaultBundleName;
          var bundle = assetManager.getBundle(bundleName);

          if (bundle) {
            var infos = bundle.getDirWithPath(path);

            if (infos) {
              infos.map(info => {
                this.releasePrefabtDepsRecursively(info.uuid);
              });
            }

            if (path == "" && bundleName != "resources") {
              assetManager.removeBundle(bundle);
            }
          }
        }
        /** 释放预制依赖资源 */


        releasePrefabtDepsRecursively(uuid) {
          if (uuid instanceof Asset) {
            uuid.decRef(); // assetManager.releaseAsset(uuid);
          } else {
            var asset = assetManager.assets.get(uuid);

            if (asset) {
              asset.decRef(); // assetManager.releaseAsset(asset);
            }
          } // Cocos引擎内部已处理子关联资源的释放
          // if (asset instanceof Prefab) {
          //     var uuids: string[] = assetManager.dependUtil.getDepsRecursively(uuid)!;
          //     uuids.forEach(uuid => {
          //         var asset = assetManager.assets.get(uuid)!;
          //         asset.decRef();
          //     });
          // }

        }
        /**
         * 获取资源
         * @param path          资源路径
         * @param type          资源类型
         * @param bundleName    远程资源包名
         */


        get(path, type, bundleName) {
          if (bundleName == null) bundleName = this.defaultBundleName;
          var bundle = assetManager.getBundle(bundleName);
          return bundle.get(path, type);
        }
        /** 打印缓存中所有资源信息 */


        dump() {
          assetManager.assets.forEach((value, key) => {
            console.log(assetManager.assets.get(key));
          });
          console.log(`当前资源总数:${assetManager.assets.count}`);
        }

        parseLoadResArgs(paths, type, onProgress, onComplete) {
          let pathsOut = paths;
          let typeOut = type;
          let onProgressOut = onProgress;
          let onCompleteOut = onComplete;

          if (onComplete === undefined) {
            const isValidType = js.isChildClassOf(type, Asset);

            if (onProgress) {
              onCompleteOut = onProgress;

              if (isValidType) {
                onProgressOut = null;
              }
            } else if (onProgress === undefined && !isValidType) {
              onCompleteOut = type;
              onProgressOut = null;
              typeOut = null;
            }

            if (onProgress !== undefined && !isValidType) {
              onProgressOut = type;
              typeOut = null;
            }
          }

          return {
            paths: pathsOut,
            type: typeOut,
            onProgress: onProgressOut,
            onComplete: onCompleteOut
          };
        }

        loadByBundleAndArgs(bundle, args) {
          if (args.dir) {
            bundle.loadDir(args.paths, args.type, args.onProgress, args.onComplete);
          } else {
            if (typeof args.paths == 'string') {
              bundle.load(args.paths, args.type, args.onProgress, args.onComplete);
            } else {
              bundle.load(args.paths, args.type, args.onProgress, args.onComplete);
            }
          }
        }

        loadByArgs(args) {
          if (args.bundle) {
            if (assetManager.bundles.has(args.bundle)) {
              let bundle = assetManager.bundles.get(args.bundle);
              this.loadByBundleAndArgs(bundle, args);
            } else {
              // 自动加载bundle
              assetManager.loadBundle(args.bundle, (err, bundle) => {
                if (!err) {
                  this.loadByBundleAndArgs(bundle, args);
                }
              });
            }
          } else {
            this.loadByBundleAndArgs(resources, args);
          }
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=91438b452129da66cdac5d31caeabb3ef36382ae.js.map