import IArmor from "../../interfaces/IArmor";

export default abstract class Armor implements IArmor{

  protected armor:number;
    constructor(armor:number){
      this.armor = armor;
    }

    Equip():void{

    }
    Defend():void{

    }
    Throw():void{

    }
  }