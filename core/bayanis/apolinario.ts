import { Bayani } from './bayani';

class Apolinario extends Bayani {
  constructor() {
    super(
      {
        name: "Apolinario",
        health: 100,
        totalHealth: 100,
        attackSpeed: 30,
        power: 15
      },
    );
  }
}

export const apolinario = new Apolinario();
