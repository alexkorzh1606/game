'use strict'

class Enemy {
    constructor(name, hp, damage) {
        this.name = name;
        this.hp = hp;
        this.damage = damage;
    }
    Attack(target) {
        target.hp -= this.damage;
        console.log(this.range);
    }
    getDamage(damage) {
        this.hp -= damage;
    }
    scream() {
        console.log(this.name);
    }
}

class Knight extends Enemy {
    constructor(name, hp, damage) {
        super(name, hp, damage);
        this.range = 20;
        this.color = 'red';
    }
    AttackAll(targets) {
        this.damage = 30;
        for (let target of targets) {
            target.hp -= this.damage;
            console.log(this.range);
            console.log('К рыцарю лучше не подходить');
        }
    }

}

class Elf extends Enemy {
    constructor(name, hp, damage,) {
        super(name, hp, damage);
        this.range = 30;
        this.color = 'blue';
    }
    MagicAttack(target, range) {
        this.damage = 50;
        this.range = 20;
        target.hp -= this.damage;
        console.log(this.range);
        console.log('Mabuhi ang kangitngit!')
    }
}

class Dwarf extends Enemy {
    constructor(name, hp, damage) {
        super(name, hp, damage);
        this.range = 10;
        this.color = 'grey';
    }
    ThrowAxe(target) {
        this.range = 30;
        this.damage = 50;
        target.hp -= this.damage;
        console.log(this.range);
        console.log('Слышится свист топора');
    }
}

let galeot = new Knight('Galeot', 200, 10);
let legolas = new Elf('Legolas', 100, 15);
let gimli = new Dwarf('Gimli', 150, 20);