import { GameStatus } from './gameStatus';

export class PreGame implements GameStatus {
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
		return true;
	}
	setPlayerNameB(): boolean {
		return true;
	}
	battle(): boolean {
		return false;
	}
}