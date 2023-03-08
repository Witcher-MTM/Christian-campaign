import Armor from "@/../models/classes/Armor/Armor";
import Halibard from "@/classes/Weapon/Halibard";
import HardInfantry from "../HardInfantry";

export default class InfantryHalibard extends HardInfantry{
    protected weapon:Halibard;
    constructor(health:number,armor:Armor,weapon:Halibard){
        super(health,armor);
        this.weapon = weapon;
    }
}