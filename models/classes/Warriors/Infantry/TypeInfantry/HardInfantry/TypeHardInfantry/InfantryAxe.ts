import Armor from "@/../models/classes/Armor/Armor";
import Axe from "@/../models/classes/Weapon/Axe";
import HardInfantry from "../HardInfantry";

export default class InfantryAxe extends HardInfantry{
    protected weapon:Axe;
    constructor(health:number,armor:Armor,weapon:Axe){
        super(health,armor);
        this.weapon = weapon;
    }
}