import { GameStatus } from "./gameStatus";
import { PreGame } from "./pregame";

export class State implements GameStatus {
	state: GameStatus;
	constructor(state: GameStatus = new PreGame(new State())) {
		this.state = state;
	}
	bayaniPickA(): boolean {
		return this.state.bayaniPickA();
	}
	bayaniPickB(): boolean {
		return this.state.bayaniPickB();
	}
	setPlayerNameA(): boolean {
		return this.state.setPlayerNameA();
	}
	setPlayerNameB(): boolean {
		return this.state.setPlayerNameA();
	}
	battle(): boolean {
		return this.state.battle();
	}
	setState(state: GameStatus): void {
		this.state = state;
	}
}