import { _decorator, instantiate, Prefab, Quat, Vec3 } from 'cc';
import { cBody } from '../../collision/Body';
import { Trigger } from '../../collision/Object';
import { Enemy } from './enemy';
const { ccclass, property } = _decorator;

const tempPos = new Vec3();
const tempRot = new Quat();
@ccclass('SnailTail')
export class SnailTail extends Enemy {

    //缓存池管理
    static pools: Array<SnailTail> = [];
    static get(prefab: Prefab) {
        let snailtail = this.pools.pop() || null;
        if (!snailtail) {
            let node = instantiate(prefab);
            snailtail = node.getComponent(SnailTail);
        }

        return snailtail;
    }

    static put(snailtail: SnailTail) {
        //压入缓存池管理节点
        this.pools.push(snailtail);
        //移除node不回收body
        snailtail.remove(false);
    }


    onTrigger(b: cBody,trigger: Trigger) {
        if(trigger == Trigger.exit ) return;

        switch (b.group) {
            case this.BULLET: //碰到子弹
                break;
            case this.PLAYER: //碰到player
                break;
        }

        //碰撞自我加收
        SnailTail.put(this);

        //播放死亡特效
        //.........
    }
}

