import newGame from './obj/game';
import newBossing from './player/bossing';
import newBot from './player/bot';

console.log('Initializing game!!!...');
const g = newGame;

console.log('Setting up players!!!...');
g.setPlayers(newBossing, newBot);

console.log('Total of: ' + g.getBayaniMenu().bayani.length + ' bayanis');

g.playerAPick(0);
g.playerAPick(1);
g.playerAPick(2);
g.playerAPick(3);
g.playerAPick(4);

console.log(g.getBayaniUnpicked());

console.log(g.getPlayerA().totalHealth);