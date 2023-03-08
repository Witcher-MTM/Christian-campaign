import IWeapon from "../../interfaces/IWeapon";

export default abstract class Weapon implements IWeapon{
    protected damage:number;
    protected lenght:number;
    protected weight:number;
    
    constructor(damage:number,length:number,weigth:number){
        this.damage = damage;
        this.lenght = length;
        this.weight = weigth;
    }

    abstract Attack():void;
    abstract HardAttack():void;
    abstract Equip():void;
    abstract Throw():void;
    abstract Defend():void;
}