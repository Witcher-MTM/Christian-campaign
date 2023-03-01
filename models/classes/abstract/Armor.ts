import IArmor from "../../interfaces/IArmor";

export default abstract class Armor implements IArmor{

    constructor(protected armor:number,protected type:string){}

    Equip():void{

    }
    Defend():void{

    }
    Throw():void{

    }
  }