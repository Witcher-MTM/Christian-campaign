
import LightArmor from "../LightArmor";


export default class ClothArmor extends LightArmor{

  protected armor:number;
  protected class:string;
    constructor(armor:number){
        super(armor);
      this.type = "Cloth Armor";
    }
  }