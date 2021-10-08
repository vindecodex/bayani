import { Bayani } from './bayani';
import { BayaniList } from '../obj/bayanis';
import { Attribute } from './attribute';

class Leni implements Bayani {
	attribute: Attribute;
	picked: boolean;
	constructor(
		attribute: Attribute = {
			name: 'Leni',
			health: 55,
			totalHealth: 55,
			attackSpeed: 15,
			power: 5
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

export const leni = new Leni();
