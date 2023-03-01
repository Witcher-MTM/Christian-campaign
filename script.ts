
  abstract class Attack {
    protected abstract damage: number;
    public abstract attack(target: any): void;
  }

  class SwordAttack extends Attack {
    protected damage = 10;
    public attack(target: any): void {
      target.health -= this.damage;
    }
  }

  class BowAttack extends Attack {
    protected damage = 15;
    public attack(target: any): void {
      target.health -= this.damage;
    }
  }
  
  