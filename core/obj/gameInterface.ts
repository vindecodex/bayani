import { Player } from "../player/player";
import { GameStatus } from "../state/gameStatus";
import { BayaniList } from "./bayanis";

export interface GameInterface {
	preGameState: GameStatus;
	pickState: GameStatus;
	battleState: GameStatus;

	setState(state: GameStatus): void;
	getState(): GameStatus;
	randomPick(player: Player): void;

	setPlayers(p1: Player, p2: Player): void;
	getPlayers(): Player[];
	getPlayerA(): Player;
	getPlayerB(): Player;
	playerAPick(index: number): void;
	playerBPick(index: number): void;

	setBayaniMenu(bayaniMenu: BayaniList): void;
	getBayaniMenu(): BayaniList;
	getBayaniUnpicked(): BayaniList;

	battle(fn: (p1: Player, p2: Player) => void): void
	getLineUp(): BayaniList
}