import { bayaniMenu } from './obj/bayanis';
import './bayanis';

import Game from './obj/game';

const newGame = new Game(bayaniMenu.bayanis);
console.log(bayaniMenu);
console.log(newGame);