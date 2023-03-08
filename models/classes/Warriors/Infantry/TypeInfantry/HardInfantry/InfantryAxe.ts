import Armor from "@/../models/classes/Armor/Armor";
import Axe from "@/../models/classes/Weapon/Axe";
import HardInfantry from "./TypeHardInfantry/HardInfantry";

export default class InfantryAxe extends HardInfantry{
    protected Axe:Axe;
    constructor(health:number,armor:Armor,axe:Axe){
        super(health,armor);
        this.Axe = axe;
    }
}