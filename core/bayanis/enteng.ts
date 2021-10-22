import { Bayani } from './bayani';

class Enteng extends Bayani {
  constructor() {
    super(
      {
        name: 'Enteng Kabisote',
        health: 130,
        totalHealth: 130,
        attackSpeed: 30,
        power: 25
      },
    );
  }
}

export const enteng = new Enteng();
