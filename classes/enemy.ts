"use strict";

export default class Enemy {
  private name: string;
  protected hp: number;
  protected damage: number;
  protected range: number;

  constructor(name: string, hp: number, damage: number) {
    this.name = name;
    this.hp = hp;
    this.damage = damage;
  }
  public Attack(target: any) {
    target.hp -= this.damage;
    console.log(this.range);
  }
  public getDamage(damage: number) {
    this.hp -= damage;
  }
  public Scream() {
    return console.log(this.name);
  }
}
