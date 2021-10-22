import { Attribute } from './attribute';
import { BayaniList } from '../obj/bayanis';

export class Bayani {
  attribute: Attribute;
  picked: boolean;

  constructor(attribute: Attribute, picked = false) {
    this.attribute = attribute;
    this.picked = picked;
  }

  findTarget(bayaniList: BayaniList): Bayani {
    const choosen = Math.floor(Math.random() * bayaniList.bayani.length);

    return bayaniList.bayani[choosen];
  }

  execute(allies: BayaniList, enemy: BayaniList): void {
    const target = this.findTarget(enemy);

    target.attribute.health -= this.attribute.power;
  }
}
