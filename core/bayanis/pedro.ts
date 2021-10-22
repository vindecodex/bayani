import { Bayani } from './bayani';

class Pedro extends Bayani {
	constructor() {
		super(
      {
        name: "Pedro",
        health: 100,
        totalHealth: 100,
        attackSpeed: 30,
        power: 15
      },
    );
	}
}

export const pedro = new Pedro();
