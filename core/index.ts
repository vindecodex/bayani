import newGame from './obj/game';
import newBossing from './player/bossing';
import newBot from './player/bot';

const g = newGame;

console.log(g.getBayaniMenu());

g.setPlayers(newBossing, newBot);

g.bayaniPick(1);
g.bayaniPick(2);

console.log(g.getBayaniMenu());