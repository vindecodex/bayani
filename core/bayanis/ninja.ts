import { Bayani } from './bayani';
import { BayaniList } from '../obj/bayanis';
import { Attribute } from '../obj/attribute';

class Ninja implements Bayani {
	attribute: Attribute;
	picked: boolean;
	constructor(
		attribute: Attribute = { 
			name: "Ninja",
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
		return bayaniList.bayani[0];
	}
	execute(): void {
		console.log("execute");
	}
}

export const ninja = new Ninja();