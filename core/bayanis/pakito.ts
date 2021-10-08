import { Bayani } from './bayani';
import { BayaniList } from '../obj/bayanis';
import { Attribute } from './attribute';

class Pakito implements Bayani {
	attribute: Attribute;
	picked: boolean;
	constructor(
		attribute: Attribute = { 
			name: "Pakito", 
			health: 150, 
			totalHealth: 150,
			attackSpeed: 60, 
			power: 30 
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

export const pakito = new Pakito();