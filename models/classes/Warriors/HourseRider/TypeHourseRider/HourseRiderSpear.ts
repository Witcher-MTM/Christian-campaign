
import IAtack from "@/../models/interfaces/IAttack";
import IDefend from "@/../models/interfaces/IDefend";
import Armor from "../../../Armor/Armor";
import Spear from "../../../Weapon/Spear";
import HourseRider from "../../../Weapon/HourseRider";

export default class HourseRiderSpear extends HourseRider{
    protected spear:Spear;
    constructor(hp:number,armor:Armor,spear:Spear,hourse:Hourse){
        super(hp,armor,hourse)
        this.spear = spear;
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