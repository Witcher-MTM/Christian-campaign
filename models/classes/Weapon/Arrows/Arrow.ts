class Arrow{
    protected name:string;
    protected damage:number;
    protected critChance:number;
    protected critDamage:number;
    constructor(name:string,damage:number,critChance:number,critDamage:number){
        this.name = name;
        this.damage = damage;
        this.critChance = critChance;
        this.critDamage = critDamage
    }
}