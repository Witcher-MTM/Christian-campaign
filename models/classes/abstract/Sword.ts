import IWeapon from "../../interfaces/IWeapon";

export default abstract class Sword implements IWeapon{
    abstract lenght:number;
    abstract weight:number;
    abstract damage:number;

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