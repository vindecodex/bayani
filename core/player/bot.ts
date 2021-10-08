import { BayaniList } from '../obj/bayanis';
import { Player } from './player';

class Bot implements Player {
	health: number;
	totalHealth: number;
	name: string;
	bayanis: BayaniList;

	constructor(
		health = 0, 
		totalHealth = 0,
		name = 'Bot',
		bayanis: BayaniList = { bayani: []},
	) {
		this.health = health;
		this.totalHealth = totalHealth;
		this.name = name;
		this.bayanis = bayanis;
	}

	pickBayani(): void {
		console.log('pick bayani');
	}

	calculateHealth(): void {
		console.log('calculateHealth');
	}
}

const newBot = (): Player => new Bot();
export default newBot();