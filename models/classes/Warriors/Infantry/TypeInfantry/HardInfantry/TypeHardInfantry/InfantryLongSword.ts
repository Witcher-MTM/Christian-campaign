import Armor from "@/../models/classes/Armor/Armor";
import LongSword from "@/../models/classes/Weapon/LongSword";
import HardInfantry from "../HardInfantry";

export default class InfantryLongSword extends HardInfantry{
    protected weapon:LongSword;
    constructor(health:number,armor:Armor,weapon:LongSword){
        super(health,armor);
        this.weapon = weapon;
    }
}