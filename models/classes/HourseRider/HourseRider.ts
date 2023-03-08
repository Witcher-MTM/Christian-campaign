import Warrior from '../abstract/Warrior';
import IAttack from '../../interfaces/IAttack';
import IDefend from '../../interfaces/IDefend';
import Weapon from '../abstract/Weapon';
import Armor from '../Armor/Armor';

export default class HourseRider extends Warrior{
   protected hourse:Hourse;
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