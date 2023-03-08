import IAttack from "../../interfaces/IAttack";
import IDefend from "../../interfaces/IDefend";
import IWeapon from "../../interfaces/IWeapon";

export default abstract class Weapon implements IWeapon{
    protected damage:number;
    
    constructor(damage:number){
        this.damage = damage;
    }

    abstract Atack(action:IAttack):void;
    abstract Equip():void;
    abstract Throw():void;
    abstract Defend(action:IDefend):void;
}