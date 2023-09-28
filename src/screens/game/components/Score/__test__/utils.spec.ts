import {
  getColorFilterCircle,
  getColorFilterCross,
  getScoreText,
} from '../utils';

describe('Score Component', () => {
  describe('getScoreText', () => {
    it('returns the correct score text', () => {
      const result = getScoreText(3, 2);
      expect(result).toBe('3 - 2');
    });
  });

  describe('getColorFilterCircle', () => {
    it('returns the correct color filter for circle', () => {
      const color = '#AAAAAA';

      const result = getColorFilterCircle({
        color,
      });

      const expected = [
        {color: '#AAAAAA', keypath: 'Layer 1'},
        {color: '#fafafa', keypath: 'Layer 2'},
      ];
      expect(result).toEqual(expected);
    });
    it('returns the correct color filter for circle at cross turn', () => {
      const color = '#AAAAAA';

      const result = getColorFilterCircle({
        color,
      });

      const expected = [
        {color: color, keypath: 'Layer 1'},
        {color: '#fafafa', keypath: 'Layer 2'},
      ];
      expect(result).toEqual(expected);
    });
  });

  describe('getColorFilterCross', () => {
    it('returns the correct color filter for cross', () => {
      const color = '#AAAAAA';

      const result = getColorFilterCross({
        color,
      });

      const expected = [
        {color: '#fafafa', keypath: 'Layer 1'},
        {color: color, keypath: 'Layer 2'},
      ];
      expect(result).toEqual(expected);
    });
    it('returns the correct color filter when has winner', () => {
      const color = '#AAAAAA';

      const result = getColorFilterCross({
        color,
      });

      const expected = [
        {color: '#fafafa', keypath: 'Layer 1'},
        {color: color, keypath: 'Layer 2'},
      ];
      expect(result).toEqual(expected);
    });
  });
});
