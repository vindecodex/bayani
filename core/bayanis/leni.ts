import { Bayani } from './bayani';
import { BayaniList } from '../obj/bayanis';
import { Attribute } from './attribute';

class Leni implements Bayani {
	attribute: Attribute;
	constructor(
		attribute: Attribute = {
			name: 'Leni',
			health: 55,
			attackSpeed: 15,
			power: 5
		}
	) {
		this.attribute = attribute;
	}
	findTarget(bayaniList: BayaniList): Bayani {
		return bayaniList.bayani[0];
	}
	execute(): void {
		console.log('execute');
	}
}

export const leni = new Leni();
