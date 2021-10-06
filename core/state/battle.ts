import { GameStatus } from './gameStatus';

export class Battle implements GameStatus {
	state: GameStatus;
	constructor(state: GameStatus) {
		this.state = state;
	}
	bayaniPickA(): boolean {
		return false;
	}
	bayaniPickB(): boolean {
		return false;
	}
	setPlayerNameA(): boolean {
		return false;
	}
	setPlayerNameB(): boolean {
		return false;
	}
	battle(): boolean {
		return true;
	}
}