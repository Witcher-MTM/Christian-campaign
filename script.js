"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var Attack = /** @class */ (function () {
    function Attack() {
    }
    return Attack;
}());
var SwordAttack = /** @class */ (function (_super) {
    __extends(SwordAttack, _super);
    function SwordAttack() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.damage = 10;
        return _this;
    }
    SwordAttack.prototype.attack = function (target) {
        target.health -= this.damage;
    };
    return SwordAttack;
}(Attack));
var BowAttack = /** @class */ (function (_super) {
    __extends(BowAttack, _super);
    function BowAttack() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.damage = 15;
        return _this;
    }
    BowAttack.prototype.attack = function (target) {
        target.health -= this.damage;
    };
    return BowAttack;
}(Attack));
var Warrior = /** @class */ (function () {
    function Warrior(dmg, hp, armor) {
        this.damage = dmg;
        this.health = hp;
        this.armor = armor;
    }
    Object.defineProperty(Warrior.prototype, "Getdamage", {
        get: function () {
            return this.damage;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Warrior.prototype, "Setdamage", {
        set: function (damage) {
            this.damage = damage;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Warrior.prototype, "GetHP", {
        get: function () {
            return this.health;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Warrior.prototype, "SetHP", {
        set: function (HP) {
            this.health = HP;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Warrior.prototype, "Getarmor", {
        get: function () {
            return this.damage;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Warrior.prototype, "Setarmor", {
        set: function (armor) {
            this.armor = armor;
        },
        enumerable: false,
        configurable: true
    });
    return Warrior;
}());
var Infantry = /** @class */ (function (_super) {
    __extends(Infantry, _super);
    function Infantry() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Infantry.prototype.attack = function () {
        // Реализация атаки лучника
    };
    Infantry.prototype.run = function () {
        // Реализация бега лучника
    };
    Infantry.prototype.defend = function () {
        // Реализация защиты лучника
    };
    return Infantry;
}(Warrior));
var Archer = /** @class */ (function (_super) {
    __extends(Archer, _super);
    function Archer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Archer.prototype.attack = function () {
        // Реализация атаки лучника
    };
    Archer.prototype.run = function () {
        // Реализация бега лучника
    };
    Archer.prototype.defend = function () {
        // Реализация защиты лучника
    };
    return Archer;
}(Warrior));
var Rider = /** @class */ (function (_super) {
    __extends(Rider, _super);
    function Rider() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Rider.prototype.attack = function () {
        // Реализация атаки наездника
    };
    Rider.prototype.run = function () {
        // Реализация бега наездника
    };
    Rider.prototype.defend = function () {
        // Реализация защиты наездника
    };
    return Rider;
}(Warrior));
