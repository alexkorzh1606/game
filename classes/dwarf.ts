"use strict";
import Enemy from "./enemy";

export default class Dwarf extends Enemy {
  protected range: number;
  private color: string;
  protected damage: number;
  constructor(name: string, hp: number, damage: number) {
    super(name, hp, damage);
    this.range = 10;
    this.color = "grey";
  }
  public ThrowAxe(target: any) {
    this.range = 30;
    this.damage = 50;
    target.hp -= this.damage;
    console.log(this.range);
    console.log("Слышится свист топора");
  }
}
