import Warrior from './abstract/Warrior';
import IAction from '../interfaces/IAction';
import IAttack from '../interfaces/IAttack';
import IDefend from '../interfaces/IDefend';
import IArmor from '../interfaces/IArmor';

export default class Soldier extends Warrior implements IAction {
  
   constructor(hp:number,armor:IArmor){
    super(hp,armor);
   }

   Fight(action: IAttack): void {
     action.do();
   }
   Defend(action: IDefend): void {
   }
   RunAway(): void {
     
   }
   Move(): void {
     
   }

}