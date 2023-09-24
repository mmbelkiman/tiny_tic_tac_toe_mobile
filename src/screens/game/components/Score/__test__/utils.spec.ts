import {getColorFilter, getScoreText} from '../utils';
import {PlayerMark} from '@game/common/types';

describe('Score Component', () => {
  describe('getScoreText', () => {
    it('returns the correct score text', () => {
      const result = getScoreText(3, 2);
      expect(result).toBe('3 - 2');
    });
  });

  describe('getColorFilter', () => {
    it('returns the correct color filter for circle', () => {
      const playerMarkToRender: PlayerMark = 'O';
      const winnerPlayerMark: PlayerMark = '';
      const currentPlayer: PlayerMark = 'O';
      const circleColor = '#AAAAAA';
      const crossColor = '#997766';

      const result = getColorFilter({
        currentPlayer,
        playerMarkToRender,
        winnerPlayerMark,
        circleColor,
        crossColor,
      });

      const expected = [
        {color: `${circleColor}FF`, keypath: 'Layer 1'},
        {color: '#00000000', keypath: 'Layer 2'},
      ];
      expect(result).toEqual(expected);
    });
    it('returns the correct color filter for circle at cross turn', () => {
      const playerMarkToRender: PlayerMark = 'O';
      const winnerPlayerMark: PlayerMark = '';
      const currentPlayer: PlayerMark = 'X';
      const circleColor = '#AAAAAA';
      const crossColor = '#997766';

      const result = getColorFilter({
        playerMarkToRender,
        winnerPlayerMark,
        currentPlayer,
        circleColor,
        crossColor,
      });

      const expected = [
        {color: `${circleColor}33`, keypath: 'Layer 1'},
        {color: '#00000000', keypath: 'Layer 2'},
      ];
      expect(result).toEqual(expected);
    });

    it('returns the correct color filter for cross', () => {
      const playerMarkToRender: PlayerMark = 'X';
      const winnerPlayerMark: PlayerMark = '';
      const currentPlayer: PlayerMark = 'X';
      const circleColor = '#AAAAAA';
      const crossColor = '#997766';

      const result = getColorFilter({
        playerMarkToRender,
        winnerPlayerMark,
        currentPlayer,
        circleColor,
        crossColor,
      });

      const expected = [
        {color: '#00000000', keypath: 'Layer 1'},
        {color: `${crossColor}FF`, keypath: 'Layer 2'},
      ];
      expect(result).toEqual(expected);
    });
    it('returns the correct color filter when has winner', () => {
      const playerMarkToRender: PlayerMark = 'O';
      const winnerPlayerMark: PlayerMark = 'X';
      const currentPlayer: PlayerMark = 'O';
      const circleColor = '#AAAAAA';
      const crossColor = '#997766';

      const result = getColorFilter({
        playerMarkToRender,
        winnerPlayerMark,
        currentPlayer,
        circleColor,
        crossColor,
      });

      const expected = [
        {color: `${circleColor}33`, keypath: 'Layer 1'},
        {color: '#00000000', keypath: 'Layer 2'},
      ];
      expect(result).toEqual(expected);
    });
  });
});
