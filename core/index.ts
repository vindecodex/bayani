import newGame from './obj/game';
import newBossing from './player/bossing';
import newBot from './player/bot';

console.log('Initializing game!!!...');
const g = newGame();

console.log('Setting up players!!!...');
g.setPlayers(newBossing, newBot);

console.log('Total of: ' + g.getBayaniMenu().bayani.length + ' bayanis');
console.log(g.getBayaniMenu());

console.log('===========PLAYER PICKS==============')

g.playerAPick(0);
g.playerAPick(1);
g.playerAPick(2);
g.playerAPick(3);
g.playerAPick(4);

console.log(g.getPlayerA().bayanis);
g.getPlayerA().calculateHealth();
console.log(g.getPlayerA().health);


console.log('===========UNPICKS==============')
console.log(g.getBayaniUnpicked());


console.log('===========BOT PICKS==============')
while(!g.getPlayerB().isReady()) {
	g.randomPick(g.getPlayerB());
}
console.log(g.getPlayerB().bayanis);
g.getPlayerA().calculateHealth();
console.log(g.getPlayerA().health);

console.log('===========Battle==============')
const lineup = g.getLineUp();

g.battle((p1, p2) => {
	lineup.bayani.forEach(bayani => {
		console.log(`P1: ${p1.health} - P2: ${p2.health}`);
		bayani.execute(p1.bayanis, p2.bayanis);
		p1.calculateHealth();
		p2.calculateHealth();
	});
});

