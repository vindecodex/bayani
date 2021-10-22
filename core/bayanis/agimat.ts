import { Bayani } from './bayani';

class Agimat extends Bayani {
  constructor() {
    super(
      {
        name: 'Agimat',
        health: 160,
        totalHealth: 160,
        attackSpeed: 40,
        power: 55
      },
    );
  }
}

export const agimat = new Agimat();
