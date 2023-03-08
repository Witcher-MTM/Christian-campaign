import IAction from "../../interfaces/IAction";
import IAttack from "../../interfaces/IAttack";
import IDefend from "../../interfaces/IDefend";
import Armor from "../Armor/Armor";
export default abstract class Warrior implements IAction{

  protected health:number;
  protected armor:Armor;

  constructor(health:number,armor:Armor){
    this.health = health;
    this.armor = armor;
  }
  abstract Move():void;
  abstract Fight(action:IAttack):void;
  abstract Defend(action:IDefend):void;
  abstract RunAway():void;
}