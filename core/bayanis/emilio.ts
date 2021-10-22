import { Bayani } from './bayani';

class Emilio extends Bayani {
  constructor() {
    super(
      {
        name: "Emilio",
        health: 100,
        totalHealth: 100,
        attackSpeed: 10,
        power: 8
      },
    );
  }
}

export const emilio = new Emilio();
