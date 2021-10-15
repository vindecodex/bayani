import { Attribute } from './attribute';
import { BayaniList } from '../obj/bayanis';
import { Player } from '../player/player';

export interface Bayani {
	attribute: Attribute;
	picked: boolean;
	owner: Player;
	findTarget(bayanis: BayaniList): Bayani;
	execute(p1: Player, p2: Player): void;
}
