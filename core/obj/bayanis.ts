import { Bayani } from '../bayanis/bayani';

export type BayaniList = {
	bayani: Bayani[];
}

class BayaniMenu {
	bayanis: BayaniList;
	constructor(bayanis = {bayani: []}) {
		this.bayanis = bayanis;
	}
	register(bayani: Bayani) {
		this.bayanis.bayani.push(bayani);
	}
}

export const bayaniMenu = new BayaniMenu();