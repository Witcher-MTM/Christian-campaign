import IAtack from "../../interfaces/IAttack";
import Weapon from "../abstract/Weapon";

export default class Morgenshtern extends Weapon{
 protected name:string;
 protected length:number;
 protected weight:number;
 constructor(damage:number,length:number,weight:number){
    super(damage);
    this.name = "Morgenshtern";
    this.length = length;
    this.weight = weight;
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