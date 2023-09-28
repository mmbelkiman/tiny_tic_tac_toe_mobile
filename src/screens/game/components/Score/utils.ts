import {LottieColorObject} from '@game/common/types';
import {TRANSPARENCY_AMOUNT, TRANSPARENCY_ZERO_AMOUNT} from './constants';
import {BACKGROUND_COLOR} from '@game/common/constants';

export const getScoreText = (circleWins: number, crossWins: number) =>
  `${circleWins} - ${crossWins}`;

export const getOpacityValue = (withTransparency: boolean): number =>
  withTransparency ? TRANSPARENCY_AMOUNT : TRANSPARENCY_ZERO_AMOUNT;

export const getColorFilterCircle = ({
  color,
}: {
  color: string;
}): LottieColorObject[] => {
  return [
    {
      keypath: 'Layer 1',
      color: color,
    },
    {
      keypath: 'Layer 2',
      color: BACKGROUND_COLOR,
    },
  ];
};

export const getColorFilterCross = ({
  color,
}: {
  color: string;
}): LottieColorObject[] => {
  return [
    {
      keypath: 'Layer 1',
      color: BACKGROUND_COLOR,
    },
    {
      keypath: 'Layer 2',
      color: color,
    },
  ];
};
