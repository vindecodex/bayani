import { Bayani } from './bayani';

class Pakito extends Bayani {
  constructor() {
    super(
      {
        name: "Pakito",
        health: 150,
        totalHealth: 150,
        attackSpeed: 60,
        power: 30
      },
    );
  }
}

export const pakito = new Pakito();
