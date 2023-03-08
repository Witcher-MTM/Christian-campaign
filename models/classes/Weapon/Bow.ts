import IAtack from "../../interfaces/IAttack";
import Weapon from "../abstract/Weapon";

export default class Bow extends Weapon{
 protected name:string;
 protected arrow:WoodArrow;
 constructor(damage:number,length:number,weight:number){
    super(damage);
    this.name = "Bow";
 }

  Atack(action:IAtack):void{

  }
  Equip():void{

  }
  Throw():void{

  }
  Defend():void{
    
  }
}