import { Bayani } from './bayani';
import { Player } from '../player/player';
import newUnknown from '../player/unknown';
import { BayaniList } from '../obj/bayanis';
import { Attribute } from './attribute';

class Enteng implements Bayani {
	attribute: Attribute;
	picked: boolean;
	owner: Player;
	constructor(
		attribute: Attribute = {
			name: 'Enteng Kabisote',
			health: 130,
			totalHealth: 130,
			attackSpeed: 30,
			power: 25
		},
		picked = false,
		owner = newUnknown
	) {
		this.attribute = attribute;
		this.picked = picked;
		this.owner = owner;
	}
	findTarget(bayaniList: BayaniList): Bayani {
		const choosen = Math.floor(Math.random() * bayaniList.bayani.length);
		return bayaniList.bayani[choosen];
	}
	execute(p1: Player, p2: Player): void {
		const enemy = p1.name === this.owner.name ? p2.bayanis : p1.bayanis;
		const target = this.findTarget(enemy);
		target.attribute.health -= this.attribute.power;
	}
}

export const enteng = new Enteng();
