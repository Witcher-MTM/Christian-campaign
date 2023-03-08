import Armor from "@/classes/Armor/Armor";
import Morgenshtern from "@/classes/Weapon/Morhenshtern";
import Shield from "@/classes/Weapon/Shields/Shield"
import HardInfantry from "../HardInfantry"

export default class InfantryMorgenshternShield extends HardInfantry{
    protected shield:Shield;
    protected weapon:Morgenshtern;
    constructor(health:number,armor:Armor,shield:Shield,weapon:Morgenshtern){
        super(health,armor);
        this.shield = shield;
        this.weapon = weapon;
    }
}