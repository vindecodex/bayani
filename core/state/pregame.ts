import { GameInterface } from '../obj/gameInterface';
import { GameStatus } from './gameStatus';

export class PreGame implements GameStatus {
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
		return true;
	}
	setPlayerNameB(): boolean {
		return true;
	}
	battle(): boolean {
		return false;
	}
}