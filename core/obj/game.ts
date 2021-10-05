import { BayaniList } from './bayanis';

class Game {
	bayanis: BayaniList;
	constructor(bayanis: BayaniList = { bayani: []}) {
		this.bayanis = bayanis;
	}
}

export default Game;