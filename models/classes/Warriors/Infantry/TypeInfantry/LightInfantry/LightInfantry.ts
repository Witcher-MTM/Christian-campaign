import Armor from "@/../models/classes/Armor/Armor";
import IAtack from "@/../models/interfaces/IAttack";
import IDefend from "@/../models/interfaces/IDefend";
import Infantry from "../../Infantry";

export default class LightInfantry extends Infantry{
    constructor(health:number,armor:Armor){
        super(health,armor);
    }
    Move():void{

    }
    Fight(action:IAtack):void{
        
    }
    Defend(action:IDefend):void{

    }
    RunAway():void{

    }
}