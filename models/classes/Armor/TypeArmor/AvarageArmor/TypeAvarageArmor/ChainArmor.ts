import AvarageArmor from "../AvarageArmor";
export default class ChainArmor extends AvarageArmor{

  protected armor:number;
  protected class:string;
    constructor(armor:number){
        super(armor);
      this.class = "Leather Armor";
    }
  }