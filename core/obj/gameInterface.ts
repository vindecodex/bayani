import { Player } from "../player/player";
import { GameStatus } from "../state/gameStatus";
import { BayaniList } from "./bayanis";

export interface GameInterface {
	state: GameStatus;
	players: Player[];
	bayaniMenu: BayaniList;

	preGameState: GameStatus;
	pickState: GameStatus;
	battleState: GameStatus;

	setState(state: GameStatus): void;
	setPlayers(p1: Player, p2: Player): void;
	bayaniPick(index: number): void;
	getBayaniMenu(): BayaniList;
}