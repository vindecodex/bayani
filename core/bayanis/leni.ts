import { Bayani } from './bayani';

class Leni extends Bayani {
  constructor() {
    super(
      {
        name: 'Leni',
        health: 55,
        totalHealth: 55,
        attackSpeed: 15,
        power: 5
      },
    );
  }
}

export const leni = new Leni();
