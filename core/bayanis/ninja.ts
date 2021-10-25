import { Bayani } from './bayani';

class Ninja extends Bayani {
  constructor() {
    super(
      {
        name: "Ninja",
        health: 100,
        totalHealth: 100,
        attackSpeed: 30,
        power: 15
      },
    );
  }
}

export const ninja = new Ninja();
