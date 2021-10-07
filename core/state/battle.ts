import { GameInterface } from '../obj/gameInterface';
import { GameStatus } from './gameStatus';

export class Battle implements GameStatus {
	game: GameInterface;
	constructor(game: GameInterface) {
		this.game = game;
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