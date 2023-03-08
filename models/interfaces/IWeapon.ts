import IAtack from "./IAttack";
import IDefend from "./IDefend";


export default interface IWeapon{
    Equip():void;
    Throw():void;
    Defend(action:IDefend):void;
    Atack(action:IAtack):void;
}