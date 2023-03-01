import IAttack from './IAttack';
import IDefend from './IDefend';
export default interface IAction {
    Move():void;
    Fight(action:IAttack):void;   
    Defend(action:IDefend):void;
    RunAway():void;
  }