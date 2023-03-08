
import IAtack from "@/../models/interfaces/IAttack";
import IDefend from "@/../models/interfaces/IDefend";
import Armor from "../../../Armor/Armor";
import Sword from "../../../Weapon/Sword";
import HourseRider from "../../../Weapon/HourseRider";

export default class HourseRiderSword extends HourseRider{
    protected sword :Sword;
    constructor(hp:number,armor:Armor,sword:Sword,hourse:Hourse){
        super(hp,armor,hourse)
        this.sword = sword;
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