import { Bayani } from '../bayanis/bayani';
import { BayaniList } from '../obj/bayanis';
import { Player } from './player';

class Unknown implements Player {
	health: number;
	totalHealth: number;
	name: string;
	bayanis: BayaniList;

	constructor(
		health = 0,
		totalHealth = 0,
		name = 'Unknown',
		bayanis: BayaniList = { bayani: [] },
	) {
		this.health = health;
		this.totalHealth = totalHealth;
		this.name = name;
		this.bayanis = bayanis;
	}

	pickBayani(bayani: Bayani): void {
		if (this.bayanis.bayani.length < 5) {
			this.bayanis.bayani.push(bayani);
			this.totalHealth += bayani.attribute.totalHealth;
			this.health = this.totalHealth;
			return;
		}
	}

	isReady(): boolean {
		if (this.bayanis.bayani.length < 5) return false;
		return true;
	}

	calculateHealth(): void {
		let sum = 0;
		for (const b of this.bayanis.bayani) sum += b.attribute.health;
		this.health = (sum / this.totalHealth) * 100;
	}
}

const newUnknown = (): Player => new Unknown();
export default newUnknown();
