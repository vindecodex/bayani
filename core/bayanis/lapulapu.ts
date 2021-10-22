import { Bayani } from './bayani';

class LapuLapu extends Bayani {
  constructor() {
    super(
      {
        name: "Lapu-Lapu",
        health: 100,
        totalHealth: 100,
        attackSpeed: 30,
        power: 15
      },
    )
  }
}

export const lapulapu = new LapuLapu();
