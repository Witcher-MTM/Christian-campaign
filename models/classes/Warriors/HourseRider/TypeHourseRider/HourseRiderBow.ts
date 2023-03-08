
import IAtack from "@/../models/interfaces/IAttack";
import IDefend from "@/../models/interfaces/IDefend";
import Armor from "../../../Armor/Armor";
import Bow from "../../../Weapon/Bow";
import HourseRider from "../../../Weapon/HourseRider";

export default class HourseRiderBow extends HourseRider{
    protected bow:Bow;
    constructor(hp:number,armor:Armor,bow:Bow,hourse:Hourse){
        super(hp,armor,hourse)
        this.bow = bow;
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