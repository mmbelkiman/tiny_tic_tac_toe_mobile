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
      const withTransparency = false;
      const color = '#AAAAAA';

      const result = getColorFilterCircle({
        color,
        withTransparency,
      });

      const expected = [
        {color: `${color}FF`, keypath: 'Layer 1'},
        {color: '#00000000', keypath: 'Layer 2'},
      ];
      expect(result).toEqual(expected);
    });
    it('returns the correct color filter for circle at cross turn', () => {
      const withTransparency = true;
      const color = '#AAAAAA';

      const result = getColorFilterCircle({
        withTransparency,
        color,
      });

      const expected = [
        {color: `${color}33`, keypath: 'Layer 1'},
        {color: '#00000000', keypath: 'Layer 2'},
      ];
      expect(result).toEqual(expected);
    });
  });
  describe('getColorFilterCross', () => {
    it('returns the correct color filter for cross', () => {
      const withTransparency = false;
      const color = '#AAAAAA';

      const result = getColorFilterCross({
        color,
        withTransparency,
      });

      const expected = [
        {color: '#00000000', keypath: 'Layer 1'},
        {color: `${color}FF`, keypath: 'Layer 2'},
      ];
      expect(result).toEqual(expected);
    });
    it('returns the correct color filter when has winner', () => {
      const withTransparency = true;
      const color = '#AAAAAA';

      const result = getColorFilterCross({
        color,
        withTransparency,
      });

      const expected = [
        {color: '#00000000', keypath: 'Layer 1'},
        {color: `${color}33`, keypath: 'Layer 2'},
      ];
      expect(result).toEqual(expected);
    });
  });
});
