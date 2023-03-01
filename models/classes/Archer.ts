import Warrior from './abstract/Warrior';
import IAction from '../interfaces/IAction';
import IAttack from '../interfaces/IAttack';
import IDefend from '../interfaces/IDefend';
import Weapon from './abstract/Weapon';
import Armor from './abstract/Armor';


export default class Archer extends Warrior implements IAction {
  
   constructor(hp:number,weapon:Weapon,armor:Armor){
    super(hp,weapon,armor);
   }
   
   Move():void{
      
   }
   Fight(action:IAttack):void{

   }
   Defend(action:IDefend):void{

   }
   RunAway():void{

   }

}