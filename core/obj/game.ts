import { GameInterface } from './gameInterface';
import { GameStatus } from '../state/gameStatus';
import { Player } from '../player/player';
import { PreGame } from '../state/pregame';
import { BayaniPick } from '../state/bayaniPick';
import { Battle } from '../state/battle';
import { BayaniList, bayaniMenu } from './bayanis';
import '../bayanis';

class Game implements GameInterface {
	state: GameStatus;
	players: Player[];
	bayaniMenu: BayaniList;

	preGameState: GameStatus;
	pickState: GameStatus;
	battleState: GameStatus;

	setState(state: GameStatus): void {
		this.state = state;
	}

	setPlayers(p1: Player, p2: Player): void {
		if (!this.state?.setPlayerNameA() || !this.state?.setPlayerNameB()) return;
		const p: Player[] = [];
		p.push(p1);
		p.push(p2);
		this.players = p;
		this.setState(this.pickState);
	}

	bayaniPick(index: number): void {
		if (!this.state.bayaniPickA() && !this.state.bayaniPickB()) return;
		this.players[0].pickBayani(this.bayaniMenu.bayani[index]);
		const newBayani: BayaniList = { 
			bayani: this.bayaniMenu.bayani.filter(bayani => {
				if (bayani.attribute.name !== this.bayaniMenu.bayani[index].attribute.name)
					return true;
				return false;
			})
		}
		this.bayaniMenu = newBayani;
	}

	getBayaniMenu(): BayaniList {
		return this.bayaniMenu;
	}
}

const newGame = (): GameInterface => {
	const g: GameInterface = new Game()
	const _preGameState: GameStatus = new PreGame(g);
	const _pickState: GameStatus = new BayaniPick(g);
	const _battleState: GameStatus = new Battle(g);
	const _bayaniMenu: BayaniList = bayaniMenu.bayanis;

	g.setState(_preGameState);
	g.preGameState = _preGameState;
	g.pickState = _pickState;
	g.battleState = _battleState;
	g.bayaniMenu = _bayaniMenu;

	return g;
}
export default newGame();