"use strict";
import Enemy from "./enemy";

export default class Elf extends Enemy {
  protected range: number;
  private color: string;
  protected damage: number;

  constructor(name: string, hp: number, damage: number) {
    super(name, hp, damage);
    this.range = 30;
    this.color = "blue";
  }
  public MagicAttack(target: any) {
    this.damage = 50;
    this.range = 20;
    target.hp -= this.damage;
    console.log(this.range);
    console.log("Mabuhi ang kangitngit!");
  }
}
