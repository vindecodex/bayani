import { Bayani } from './bayani';
import { BayaniList } from '../obj/bayanis';
import { Attribute } from '../obj/attribute';

class Apolinario implements Bayani {
	attribute: Attribute;
	constructor(attribute: Attribute = { 
			name: "Apolinario",
			health: 100, 
			attackSpeed: 30, 
			power: 15 
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

export const apolinario = new Apolinario();