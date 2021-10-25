import { Bayani } from './bayani';

class Gagamboy extends Bayani {
  constructor() {
    super(
      {
        name: 'Gagamboy',
        health: 120,
        totalHealth: 120,
        attackSpeed: 35,
        power: 15
      },
    );
  }
}

export const gagamboy = new Gagamboy();
