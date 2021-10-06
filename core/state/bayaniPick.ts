import { GameStatus } from './gameStatus';

export class BayaniPick implements GameStatus {
	state: GameStatus;
	constructor(state: GameStatus) {
		this.state = state;
	}
	bayaniPickA(): boolean {
		return true;
	}
	bayaniPickB(): boolean {
		return true;
	}
	setPlayerNameA(): boolean {
		return false;
	}
	setPlayerNameB(): boolean {
		return false;
	}
	battle(): boolean {
		return false;
	}
}