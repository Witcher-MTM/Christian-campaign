import Armor from "@/../models/classes/Armor/Armor";
import Halibard from "@/classes/Weapon/Halibard";
import HardInfantry from "./HardInfantry";

export default class InfantryHalibard extends HardInfantry{
    protected Halibard:Halibard;
    constructor(health:number,armor:Armor,halibard:Halibard){
        super(health,armor);
        this.Halibard = halibard;
    }
}