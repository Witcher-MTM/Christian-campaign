import Armor from "./abstract/Armor";
import Weapon from "./abstract/Weapon";
import Soldier from "./Soldier";

class Area{
    private _width:number;
    private _height:number;
    protected team1:any[];
    protected team2:any[];
    constructor(width:number,heigth:number){
        this._width = width;
        this._height = heigth;
    }

    get getWidth():number{
        return this._width;
    }
    set setWidth(width:number){
        this._width = width;
    }

    get getHeigth():number{
        return this._height;
    }
    set setHeigth(heigth:number){
        this._height = heigth;
    }

    Init(){
    //init
    }
}