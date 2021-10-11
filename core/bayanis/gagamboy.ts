import { Bayani } from './bayani';
import { BayaniList } from '../obj/bayanis';
import { Attribute } from './attribute';

class Gagamboy implements Bayani {
	attribute: Attribute;
	picked: boolean;
	constructor(
		attribute: Attribute = {
			name: 'Gagamboy',
			health: 120,
			totalHealth: 120,
			attackSpeed: 35,
			power: 15
		},
		picked = false
	) {
		this.attribute = attribute;
		this.picked = picked;
	}
	findTarget(bayaniList: BayaniList): Bayani {
		return bayaniList.bayani[0];
	}
	execute(): void {
		console.log('execute');
	}
}

export const gagamboy = new Gagamboy();
