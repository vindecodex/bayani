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

	getState(): GameStatus {
		return this.state;
	}

	randomPick(player: Player): void {
		const unpicked = this.getBayaniUnpicked().bayani;
		const l = unpicked.length;
		const r = Math.floor(Math.random() * l);
		player.pickBayani(unpicked[r]);
		unpicked[r].picked = true;
		unpicked[r].owner = player;
		if (this.getPlayerA().isReady() && this.getPlayerB().isReady()) this.setState(this.battleState);
	}

	setPlayers(p1: Player, p2: Player): void {
		if (!this.state?.setPlayerNameA() || !this.state?.setPlayerNameB()) return;
		const p: Player[] = [];
		p.push(p1);
		p.push(p2);
		this.players = p;
		this.setState(this.pickState);
	}

	getPlayers(): Player[] {
		return this.players;
	}

	getPlayerA(): Player {
		return this.players[0];
	}

	getPlayerB(): Player {
		return this.players[1];
	}

	playerAPick(index: number): void {
		if (!this.state.bayaniPickA() && !this.state.bayaniPickB()) return;
		this.getPlayerA().pickBayani(this.bayaniMenu.bayani[index]);
		this.bayaniMenu.bayani[index].picked = true;
		this.bayaniMenu.bayani[index].owner = this.getPlayerA();
		if (this.getPlayerA().isReady() && this.getPlayerB().isReady()) this.setState(this.battleState);
	}

	playerBPick(index: number): void {
		console.log(this.getPlayerA().isReady(), this.getPlayerB().isReady());
		if (!this.state.bayaniPickA() && !this.state.bayaniPickB()) return;
		if (!this.getPlayerA().isReady()) return;
		this.players[1].pickBayani(this.bayaniMenu.bayani[index]);
		this.bayaniMenu.bayani[index].picked = true;
		this.bayaniMenu.bayani[index].owner = this.getPlayerB();
		if (this.getPlayerA().isReady() && this.getPlayerB().isReady()) this.setState(this.battleState);
	}

	setBayaniMenu(bayaniMenu: BayaniList): void {
		this.bayaniMenu = bayaniMenu;
	}

	getBayaniMenu(): BayaniList {
		return this.bayaniMenu;
	}

	getBayaniUnpicked(): BayaniList {
		const bayanis: BayaniList = { bayani: [] };
		bayanis.bayani = this.bayaniMenu.bayani.filter(bayani => !bayani.picked);
		return bayanis;
	}

	getLineUp(): BayaniList {
		const bayanis: BayaniList = { bayani: [] };
		const lineUp = this.getPlayerA().bayanis.bayani.concat(this.getPlayerB().bayanis.bayani);
		lineUp.sort((x, y) => y.attribute.attackSpeed - x.attribute.attackSpeed)
		bayanis.bayani = lineUp;
		return bayanis;
	}

	battle(fn: (p1: Player, p2: Player) => void): void {
		while ((this.getPlayerA().health > 0 && this.getPlayerB().health > 0)) {
			fn(this.getPlayerA(), this.getPlayerB());
		}
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
	g.setBayaniMenu(_bayaniMenu);

	return g;
}
export default newGame;