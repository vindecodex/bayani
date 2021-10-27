import { Bayani } from './bayani';
import { BayaniList } from '../obj/bayanis';

export class Rastaman extends Bayani {
  constructor() {
    super({
      name: 'Rastaman',
      health: 150,
      totalHealth: 150,
      attackSpeed: 50,
      power: 20
    });
  }

  execute(allies: BayaniList): void {
    allies.bayani.forEach((ally) => {
      ally.attribute.health += this.attribute.power;

      if (ally.attribute.health > ally.attribute.totalHealth) {
        ally.attribute.health = ally.attribute.totalHealth;
      }
    });
  }
}

export const rastaman = new Rastaman();
