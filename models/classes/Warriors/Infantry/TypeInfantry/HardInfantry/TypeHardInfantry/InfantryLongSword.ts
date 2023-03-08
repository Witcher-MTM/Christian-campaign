import Armor from "@/../models/classes/Armor/Armor";
import LongSword from "@/../models/classes/Weapon/LongSword";
import HardInfantry from "./HardInfantry";

export default class InfantryLongSword extends HardInfantry{
    protected LongSword:LongSword;
    constructor(health:number,armor:Armor,LongSword:LongSword){
        super(health,armor);
        this.LongSword = LongSword;
    }
}