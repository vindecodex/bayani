import { Bayani } from './bayani';
import { BayaniList } from '../obj/bayanis';
import { Attribute } from './attribute';

class Rizal implements Bayani {
	attribute: Attribute;
	picked: boolean;
	constructor(
		attribute: Attribute = { 
			name: "Jose Rizal",
			health: 100, 
			totalHealth: 100,
			attackSpeed: 30, 
			power: 15 
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

export const rizal = new Rizal();