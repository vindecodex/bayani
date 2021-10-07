import { Bayani } from '../bayanis/bayani';
import { BayaniList } from '../obj/bayanis';
import { Player } from './player';

class Bossing implements Player {
	health: number;
	name: string;
	bayanis: BayaniList;

	constructor(
		health = 0, 
		name = 'Bossing',
		bayanis: BayaniList = { bayani: []},
	) {
		this.health = health;
		this.name = name;
		this.bayanis = bayanis;
	}

	pickBayani(bayani: Bayani): void {
		if (this.bayanis.bayani.length > 5) return;
		this.bayanis.bayani.push(bayani);
	}

	calculateHealth(): void {
		console.log('calculateHealth');
	}
}

const newBossing = (): Player => new Bossing();
export default newBossing();