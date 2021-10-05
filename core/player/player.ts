import { BayaniList } from '../obj/bayanis';

export interface Player {
	health: number;
	name: string;
	bayanis: BayaniList;
	pickBayani(): void;
	calculateHealth(): void;
}