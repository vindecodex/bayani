import { Attribute } from './attribute';
import { BayaniList } from '../obj/bayanis';

export interface Bayani {
	attribute: Attribute;
	picked: boolean;
	findTarget(bayanis: BayaniList): Bayani;
	execute(alies: BayaniList, enemy: BayaniList): void;
}