import { Attribute } from '../obj/attribute';
import { BayaniList } from '../obj/bayanis';

export interface Bayani {
	attribute: Attribute;
	findTarget(bayanis: BayaniList): Bayani;
	execute(): void;
}