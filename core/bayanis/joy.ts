import { Bayani } from './bayani';
import { BayaniList } from '../obj/bayanis';

export class Joy extends Bayani {
  constructor() {
    super({
      name: 'Joy',
      health: 120,
      totalHealth: 120,
      attackSpeed: 40,
      power: 5
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

export const joy = new Joy();
