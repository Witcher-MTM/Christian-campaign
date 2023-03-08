import IAtack from "@/../models/interfaces/IAttack";
import IDefend from "@/../models/interfaces/IDefend";
import Warrior from "../../abstract/Warrior";
import Armor from "../../Armor/Armor";

export default abstract class Infantry extends Warrior{
    constructor(health:number,armor:Armor){
        super(health,armor);
    }
    abstract Move():void;
    abstract Fight(action:IAtack):void;
    abstract Defend(action:IDefend):void;
    abstract RunAway():void;
}