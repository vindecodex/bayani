export interface GameStatus {
	state: GameStatus;
	bayaniPickA(): boolean;
	bayaniPickB(): boolean;
	setPlayerNameA(): boolean;
	setPlayerNameB(): boolean;
	battle(): boolean;
}