import bot from '../../../core/player/bot';

describe('Bot', () => {
  describe('initial state', () => {
    it('sets the health to 0', () => {
      expect(bot.health).toBe(0);
    });
  });
});
