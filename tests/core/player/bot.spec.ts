import { BayaniList } from '../../../core/obj/bayanis';
import { Bayani } from '../../../core/bayanis/bayani';
import { Bot } from '../../../core/player/bot';

describe('Bot', () => {
  let bot: Bot;
  let mockBayani: Bayani;

  beforeEach(() => {
    bot = new Bot();
    mockBayani = new MockBayani();
  });

  describe('initial state', () => {
    it('sets the health to 0', () => {
      expect(bot.health).toBe(0);
    });

    it('sets the total health to 0', () => {
      expect(bot.totalHealth).toBe(0);
    });

    it('sets the name to "Bot"', () => {
      expect(bot.name).toBe('Bot');
    });

    it('sets an empty list of bayanis', () => {
      expect(bot.bayanis).toEqual({ bayani: [] });
    });
  });

  describe('picking bayani', () => {
    describe('when picking a new bayani', () => {
      beforeEach(() => {
        bot.pickBayani(mockBayani);
      });

      it('adds the mock bayani to the list of bayanis for the bot', () => {
        expect(bot.bayanis.bayani).toEqual([mockBayani]);
      });

      it('increases the bot\'s total health', () => {
        expect(bot.totalHealth).toBe(mockBayani.attribute.totalHealth);
      });

      it('increases the bot\'s health', () => {
        expect(bot.health).toBe(mockBayani.attribute.totalHealth);
      });
    });
  });

  describe('is ready', () => {
    describe('when less than 5 bayanis have been picked', () => {
      it('does not mark the bot player as ready', () => {
        expect(bot.isReady()).toBeFalsy();
      });
    });

    describe('when 5 bayanis have been picked', () => {
      beforeEach(() => {
        bot.pickBayani(mockBayani);
        bot.pickBayani(mockBayani);
        bot.pickBayani(mockBayani);
        bot.pickBayani(mockBayani);
        bot.pickBayani(mockBayani);
      });

      it('marks the bot player as ready', () => {
        expect(bot.isReady()).toBeTruthy();
      });
    });

    describe('calculate health', () => {
      describe('when no bayani has been picked', () => {
        beforeEach(() => {
          bot.calculateHealth();
        });

        it('marks the bot\'s health as 0%', () => {
          expect(bot.health).not.toBe(0);
        });
      });

      describe('when a healthy bayani has been picked', () => {
        beforeEach(() => {
          bot.pickBayani(mockBayani);
          bot.calculateHealth();
        });

        it('marks the bot\'s health as 100%', () => {
          expect(bot.health).toBe(100);
        });
      });

      describe('when the picked bayani takes 20% damage', () => {
        beforeEach(() => {
          bot.pickBayani(mockBayani);
          mockBayani.attribute.health -= 1;
          bot.calculateHealth();
        });

        it('marks the bot\'s health as 80%', () => {
          expect(bot.health).toBe(80);
        });
      });
    });
  });

  class MockBayani implements Bayani {
    picked = false;
    attribute = {
      attackSpeed: 5,
      health: 5,
      name: 'Mock',
      power: 5,
      totalHealth: 5,
    };

    findTarget(bayaniList: BayaniList) {
      return bayaniList.bayani[0];
    }

    execute(alies: BayaniList, enemy: BayaniList) {
      const target = this.findTarget(enemy);
      target.attribute.health -= this.attribute.power;
    }
  }
});
