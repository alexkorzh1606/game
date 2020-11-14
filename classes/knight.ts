"use strict";
import Enemy from "./enemy";

export default class Knight extends Enemy {
  protected range: number;
  private color: string;
  protected damage: number;

  constructor(name: string, hp: number, damage: number) {
    super(name, hp, damage);
    this.range = 20;
    this.color = "red";
  }
  public AttackAll(targets: any) {
    this.damage = 30;
    for (let target of targets) {
      target.hp -= this.damage;
      console.log(this.range);
      console.log("К рыцарю лучше не подходить");
    }
  }
}
