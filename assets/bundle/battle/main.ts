import { Component, EventTouch, Label, Node, Prefab, Slider, Toggle, _decorator, instantiate, setDisplayStats } from 'cc';
import { BulletHell } from './demos/bulletHell/bulletHell';
import { Player } from './demos/bulletHell/player';
import { Config } from './demos/collisions/Config';
import { demo2d } from './demos/collisions/demo2d';
import { demo3d } from './demos/collisions/demo3d';

const { ccclass, property } = _decorator;

@ccclass('main')
export class main extends Component {

    @property(Prefab)
    demo2d: Prefab = null;
    @property(Prefab)
    demo3d: Prefab = null;

    @property(Prefab)
    demoBullet: Prefab = null;

    @property(Node)
    demosNode: Node = null;

    @property(Slider)
    sbox: Slider = null;

    @property(Slider)
    sSphere: Slider = null;

    @property(Label)
    boxTxt: Label = null;

    @property(Label)
    sphereTxt: Label = null;

    @property(Label)
    speedTxt: Label = null;

    @property(Label)
    totalTxt: Label = null;


    currScense: Node = null;

    start() {

        setDisplayStats(true);

        this.changeDemos();

        //刷新物体个数
        this.schedule(() => {

            let length = 0;
            switch (Config.demoIdx) {
                case 0:
                    length = this.currScense.getComponentInChildren(demo2d).objects.length;
                    break;
                case 1:
                    length = this.currScense.getComponentInChildren(demo3d).objects.length;
                    break;
                case 2:
                    length = this.currScense.getComponentInChildren(BulletHell).objects.children.length;
                    break;
            }

            this.totalTxt.string = "" + length;

        }, 0.1);
    }

    changeDemos() {

        if (this.currScense) {
            //释放旧场景
            this.currScense.removeFromParent();
            this.currScense.destroy();
            this.currScense = null;
        }

        switch (Config.demoIdx) {
            case 0:

                this.currScense = instantiate(this.demo2d);
                this.node.getChildByName("Left").active = true;
                this.node.getChildByName("Skill").active = false;
                break;
            case 1:
                this.currScense = instantiate(this.demo3d);
                this.node.getChildByName("Left").active = true;
                this.node.getChildByName("Skill").active = false;
                break;
            case 2:
                this.currScense = instantiate(this.demoBullet);
                this.node.getChildByName("Left").active = false;
                this.node.getChildByName("Skill").active = true;
                break;
        }

        //下一帧加载新场景
        this.scheduleOnce(() => {
            this.demosNode.addChild(this.currScense);
        });
    }

    onDemos(event: Toggle) {

        let idx = event.target.getSiblingIndex();
        if (idx != Config.demoIdx) {
            Config.demoIdx = idx;
            this.changeDemos();
        }

    }

    onSpeed(event: Slider) {
        Config.maxSpeed = event.progress;

        this.speedTxt.string = "speed:" + Math.round(Config.maxSpeed * 100);
    }

    onRotation(event: Toggle) {
        if (Config.isRotate == event.isChecked) return;


        Config.isRotate = event.isChecked;
        // if (!Config.isRotate) {
        switch (Config.demoIdx) {
            case 0:
                if (!Config.isRotate)
                    this.currScense.getComponentInChildren(demo2d).resetRotation();
                else
                    this.currScense.getComponentInChildren(demo2d).randomRotation();
                break;
            case 1:
                if (!Config.isRotate)
                    this.currScense.getComponentInChildren(demo3d).resetRotation();
                else
                    this.currScense.getComponentInChildren(demo3d).randomRotation();
                break;
        }
        // }
    }

    onSphere(event: Slider) {

        let max = Config.maxNum;
        let progress = event.progress;


        if (progress + Config.box >= 1) {
            this.boxTxt.string = "box:" + Math.round((1 - progress) * max);
            this.sbox.progress = 1 - progress;
            Config.box = 1 - progress;

        }

        this.sphereTxt.string = "sphere:" + Math.round(progress * max);
        event.progress = progress;
        Config.sphere = progress;
    }

    onBox(event: Slider) {

        let max = Config.maxNum;
        let progress = event.progress;

        if (progress + Config.sphere >= 1) {
            this.sphereTxt.string = "sphere:" + Math.round((1 - progress) * max);
            this.sSphere.progress = 1 - progress;
            Config.sphere = 1 - progress;
        }

        this.boxTxt.string = "box:" + Math.round(progress * max);
        event.progress = progress;
        Config.box = progress;
    }

    onSkill(event:EventTouch) {

       Player.inst.onSkill();
       
       //示范做了个定时
       event.target.active = false;
       this.scheduleOnce(()=>{
        if(Config.demoIdx == 2){
            event.target.active = true;
        }
       },5);
    }
}

