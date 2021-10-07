import { Bayani } from '../bayanis/bayani';
import { BayaniList } from '../obj/bayanis';

export interface Player {
	health: number;
	name: string;
	bayanis: BayaniList;
	pickBayani(bayani: Bayani): void;
	calculateHealth(): void;
}