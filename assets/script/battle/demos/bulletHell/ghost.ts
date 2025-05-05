import { _decorator, instantiate, PhysicsSystem, Prefab, Quat, Vec3 } from 'cc';
import { cBody } from '../../collision/Body';
import { Trigger } from '../../collision/Object';
import { Enemy } from './enemy';
import { Player } from './player';
const { ccclass, property } = _decorator;

const tempPos = new Vec3();
const tempRot = new Quat();
@ccclass('Ghost')
export class Ghost extends Enemy {

    //缓存池管理
    static pools: Array<Ghost> = [];
    static get(prefab: Prefab) {
        let ghost = this.pools.pop() || null;
        if (!ghost) {
            let node = instantiate(prefab);
            ghost = node.getComponent(Ghost);
        }

        return ghost;
    }

    static put(ghost: Ghost) {
        //压入缓存池管理节点
        this.pools.push(ghost);
        //移除node不回收body
        ghost.remove(false);
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
        Ghost.put(this);

        //播放死亡特效
        //.........
    }
}

