import { Bayani } from './bayani';
import { BayaniList } from '../obj/bayanis';
import { Attribute } from './attribute';

class Agimat implements Bayani {
	attribute: Attribute;
	picked: boolean;
	constructor(
		attribute: Attribute = {
			name: 'Agimat',
			health: 160,
			totalHealth: 160,
			attackSpeed: 40,
			power: 55
		},
		picked = false
	) {
		this.attribute = attribute;
		this.picked = picked;
	}
	findTarget(bayaniList: BayaniList): Bayani {
		const choosen = Math.floor(Math.random() * bayaniList.bayani.length);
		return bayaniList.bayani[choosen];
	}
	execute(alies: BayaniList, enemy: BayaniList): void {
		const target = this.findTarget(enemy);
		target.attribute.health -= this.attribute.power;
	}
}

export const agimat = new Agimat();
