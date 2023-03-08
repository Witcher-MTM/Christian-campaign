
import Armor from "../../Armor";

export default class AvarageArmor extends Armor{
  protected armor:number;
  protected type:string;
    constructor(armor:number){
        super(armor);
        this.type = "Avarage Armor";
    }
  }