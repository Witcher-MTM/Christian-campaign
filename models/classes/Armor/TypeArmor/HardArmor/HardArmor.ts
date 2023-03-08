
import Armor from "../../Armor";

export default class HardArmor extends Armor{

  protected armor:number;
  protected class:string;
    constructor(armor:number){
        super(armor);
        this.class="Hard Armor";
    }
  }
  