import { Bayani } from './bayani';
import { BayaniList } from '../obj/bayanis';
import { Attribute } from './attribute';

class Enteng implements Bayani {
	attribute: Attribute;
	constructor(
		attribute: Attribute = {
			name: 'Enteng Kabisote',
			health: 130,
			attackSpeed: 30,
			power: 25
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

export const enteng = new Enteng();
