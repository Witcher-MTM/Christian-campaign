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

    Attack():void{

    }
    HardAttack():void{

    }
    Equip():void{
        
    }
    Throw():void{

    }
    Defend():void{

    }
}