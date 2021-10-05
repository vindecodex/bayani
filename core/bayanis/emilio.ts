import { Bayani } from './bayani';
import { BayaniList } from '../obj/bayanis';
import { Attribute } from '../obj/attribute';

class Emilio implements Bayani {
	attribute: Attribute;
	constructor(attribute: Attribute = { 
			name: "Emilio", 
			health: 100, 
			attackSpeed: 10, 
			power: 8 
	}) {
		this.attribute = attribute;
	}
	findTarget(bayaniList: BayaniList): Bayani {
		return bayaniList.bayani[0];
	}
	execute(): void {
		console.log("execute");
	}
}

export const emilio = new Emilio();