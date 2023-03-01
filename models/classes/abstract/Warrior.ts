import IAction from "../../interfaces/IAction";
import IArmor from "../../interfaces/IArmor";
import IAttack from "../../interfaces/IAttack";
import IDefend from "../../interfaces/IDefend";
import IWeapon from "../../interfaces/IWeapon";
export default abstract class Warrior implements IAction{

    abstract health:number;
    abstract weapon:IWeapon;
    abstract armor:IArmor;

    constructor(hp:number,armor:IArmor,weapon:IWeapon){
        this.SetHP = hp;
        this.SetWeapon = weapon;
        this.SetArmor = armor;
    }

    get GetHP():number{
        return this.health;
    }
    set SetHP(HP:number){
        this.health = HP;
    }
    get GetArmor():IArmor{
        return this.armor;
    }
    set SetArmor(armor:IArmor):IArmor{
        this.armor = armor;
    }
    get GetWeapon():IWeapon{
        return this.weapon;
    }
    set SetWeapon(weapon:IWeapon):IWeapon{
        this.weapon = weapon;
    }
    Move():void{

    }
    Fight(action:IAttack):void{

    }
    Defend(action:IDefend):void{

    }
    RunAway():void{

    }
  }