import { _decorator, instantiate, Prefab, Quat, Vec3 } from 'cc';
import { cBody } from '../../collision/Body';
import { cObject, Trigger } from '../../collision/Object';
const { ccclass, property } = _decorator;

const tempPos = new Vec3();
const tempRot = new Quat();

@ccclass('Skill')
export class Skill extends cObject {

    //缓存池管理
    static pools: Array<Skill> = [];
    static get(prefab: Prefab) {
        let skill = this.pools.pop() || null;
        if (!skill) {
            let node = instantiate(prefab);
            skill = node.getComponent(Skill);
        }
        return skill;
    }

    static put(skill: Skill) {
        //压入缓存池管理节点
        this.pools.push(skill);
        //移除node不回收body
        skill.remove(false);
    }

    //生命周期，回收时间
    lifeTime: number = 0;
    //attack: number = 0;

    angle:number = 0;


    update(dt: number) {

        this.lifeTime -= dt;
        if (this.lifeTime < 0) {
            //生命周期回收
            Skill.put(this);
            return;
        }

        //计算新位置
        let pos = this.getPosition();
        let velocity = this.velocity;

        tempPos.x = pos.x + velocity.x * dt;
        tempPos.y = pos.y + velocity.y * dt;
        tempPos.z = pos.z + velocity.z * dt;


        this.angle += dt * 60 * 60;
        Quat.fromEuler(tempRot, 0, 0, this.angle);
        this.setRotation(tempRot);//更新节点旋转

        this.setPosition(tempPos);

    }


    onTrigger(b: cBody,trigger: Trigger) {
        if(trigger == Trigger.exit ) return;
        //击中回收子弹
        //Skill.put(this);
        //播放爆炸特效
        //.........
    }
}

