import { GameInterface } from '../obj/gameInterface';
import { GameStatus } from './gameStatus';

export class BayaniPick implements GameStatus {
	game: GameInterface;
	constructor(game: GameInterface) {
		this.game = game;
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