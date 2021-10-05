import { BayaniList } from '../obj/bayanis';
import { Player } from './player';

class Bossing implements Player {
	health: number;
	name: string;
	bayanis: BayaniList;

	constructor(
		health: number = 0, 
		name: string = '',
		bayanis: BayaniList = { bayani: []},
	) {
		this.health = health;
		this.name = name;
		this.bayanis = bayanis;
	}

	pickBayani(): void {

	}

	calculateHealth(): void {

	}
}