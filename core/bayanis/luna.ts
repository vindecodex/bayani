import { Bayani } from './bayani';

class Luna extends Bayani {
	constructor() {
		super(
      {
        name: 'Luna',
        health: 120,
        totalHealth: 120,
        attackSpeed: 35,
        power: 15
      },
    );
	}
}

export const luna = new Luna();
