import { _decorator, instantiate, PhysicsSystem, Prefab, Quat, Vec3 } from 'cc';
import { cBody } from '../../collision/Body';
import { cObject, Trigger } from '../../collision/Object';
import { Player } from './player';
const { ccclass, property } = _decorator;

const tempPos = new Vec3();
const tempRot = new Quat();
@ccclass('Enemy')
export class Enemy extends cObject {

    //获取默认物理控制面板的分组信息
    PLAYER = PhysicsSystem.PhysicsGroup["player"];
    BULLET = PhysicsSystem.PhysicsGroup["bullet"];

    init(): void {
        //重置状态
        this.follow();//跟随速度和方向
        this.velocity.set(this.tryVelocity);
    }

    update(dt: number) {

        //计算新位置
        let pos = this.getPosition();
        let velocity = this.velocity;
        tempPos.x = pos.x + velocity.x * dt;
        tempPos.y = pos.y + velocity.y * dt;
        tempPos.z = pos.z + velocity.z * dt;
        this.setPosition(tempPos);

        this.follow();
    }

    //跟随主角
    follow() {

        let scale = this.node.worldScale; 
        let pos = this.node.worldPosition; 
        let tartet = Player.inst.node.worldPosition;
        Vec3.subtract(this.tryVelocity, tartet, pos).normalize();

        //尝试最大跟随速度(有需要，可以自己设置)
        let maxVelocity = this.body.maxVelocity;
        this.tryVelocity.multiplyScalar(maxVelocity);
    
        //调整转向
        let x = Math.abs(scale.x),y = scale.y,z = scale.z;
        scale.set(x*(this.tryVelocity.x<0?-1:1),y,z);
        this.setScale(scale);
    }


    onTrigger(b: cBody,trigger: Trigger) {
        if(trigger == Trigger.exit ) return;
        switch (b.group) {
            case this.BULLET: //碰到子弹
                break;
            case this.PLAYER: //碰到player
                break;
        }
    }
}

