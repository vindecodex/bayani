import { Bayani } from './bayani';

class Panday extends Bayani {
  constructor() {
    super(
      {
        name: 'Panday',
        health: 115,
        totalHealth: 115,
        attackSpeed: 35,
        power: 15
      },
    );
  }
}

export const panday = new Panday();
