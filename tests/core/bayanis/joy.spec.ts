import { Joy } from '../../../core/bayanis/joy';
import { Bayani } from '../../../core/bayanis/bayani';

describe('Joy', () => {
  let joy: Joy;
  let allies: Bayani[];

  beforeEach(() => {
    joy = new Joy();
    allies = [getNewBayani(), getNewBayani(), getNewBayani()];
  });

  describe('when executing their moves', () => {
    beforeEach(() => {
      joy.execute({ bayani: allies });
    });

    it('heals allies equal to their power amount', () => {
      expect(allies.map((ally) => ally.attribute.health)).toEqual([55, 55, 55]);
    });
  });

  describe('when allies get healed over their maximum health', () => {
    beforeEach(() => {
      allies = [getNewBayani(99), getNewBayani(99), getNewBayani(99)];
      joy.execute({ bayani: allies });
    });

    it('does not heal allies over their total health', () => {
      expect(allies.map((ally) => ally.attribute.health)).toEqual([100, 100, 100]);
    });
  });

  function getNewBayani(health = 50) {
    return new Bayani(
      {
        health,
        name: 'MockBayani',
        totalHealth: 100,
        attackSpeed: 50,
        power: 50,
      },
    );
  }
});
