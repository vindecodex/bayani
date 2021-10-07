import { Bayani } from './bayani';
import { BayaniList } from '../obj/bayanis';
import { Attribute } from './attribute';

class Pakito implements Bayani {
	attribute: Attribute;
	constructor(attribute: Attribute = { 
		name: "Pakito", 
		health: 150, 
		attackSpeed: 60, 
		power: 30 
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

export const pakito = new Pakito();