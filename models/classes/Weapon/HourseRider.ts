import Warrior from '../abstract/Warrior';
import IAttack from '../../interfaces/IAttack';
import IDefend from '../../interfaces/IDefend';
import Armor from '../Armor/Armor';

export default abstract class HourseRider extends Warrior{
   protected hourse:Hourse;
   constructor(hp:number,armor:Armor,hourse:Hourse){
    super(hp,armor);
    this.hourse = hourse;
   }
   
   abstract Move():void;
   abstract Fight(action:IAttack):void;
   abstract Defend(action:IDefend):void;
   abstract RunAway():void;

}