import HardArmor from "../HardArmor";

export default class Lammiliar extends HardArmor{

  protected armor:number;
  protected type:string;
    constructor(armor:number,type:string){
        super(armor);
      this.type = "Lammiliar Armor";
    }
  }