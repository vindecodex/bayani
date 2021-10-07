import { Bayani } from './bayani';
import { BayaniList } from '../obj/bayanis';
import { Attribute } from './attribute';

class Agimat implements Bayani {
	attribute: Attribute;
	constructor(
		attribute: Attribute = {
			name: 'Agimat',
			health: 160,
			attackSpeed: 40,
			power: 55
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

export const agimat = new Agimat();
