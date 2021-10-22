import { Bayani } from './bayani';

class Rizal extends Bayani {
  constructor() {
    super(
      {
        name: "Jose Rizal",
        health: 100,
        totalHealth: 100,
        attackSpeed: 30,
        power: 15
      },
    );
  }
}

export const rizal = new Rizal();
