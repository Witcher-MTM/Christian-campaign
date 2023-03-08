
import Armor from "../../Armor";

export default class LightArmor extends Armor{

  protected armor:number;
  protected type:string;
    constructor(armor:number){
        super(armor);
        this.type = "Light Armor";
    }

    Equip():void{

    }
    Defend():void{

    }
    Throw():void{

    }
  }