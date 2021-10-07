import { Bayani } from './bayani';
import { BayaniList } from '../obj/bayanis';
import { Attribute } from '../obj/attribute';

class Panday implements Bayani {
	attribute: Attribute;
	constructor(
		attribute: Attribute = {
			name: 'Panday',
			health: 115,
			attackSpeed: 35,
			power: 15
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

export const panday = new Panday();
