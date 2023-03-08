
import LightArmor from "../LightArmor";


export default class LeatherArmor extends LightArmor{

  protected armor:number;
  protected class:string;
    constructor(armor:number){
        super(armor);
      this.type = "Leather Armor";
    }
  }