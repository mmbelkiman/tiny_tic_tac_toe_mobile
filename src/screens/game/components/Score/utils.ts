import {LottieColorObject} from '@game/common/types';
import {TRANSPARENCY_AMOUNT, TRANSPARENCY_ZERO_AMOUNT} from './constants';
import {COLOR_TRANSPARENT} from '@game/common/constants';

export const getScoreText = (circleWins: number, crossWins: number) =>
  `${circleWins} - ${crossWins}`;

export const getColorFilterTransparencyAmount = ({
  withTransparency,
}: {
  withTransparency: boolean;
}) => (withTransparency ? TRANSPARENCY_AMOUNT : TRANSPARENCY_ZERO_AMOUNT);

export const getColorFilterCircle = ({
  withTransparency,
  color,
}: {
  withTransparency: boolean;
  color: string;
}): LottieColorObject[] => {
  const transparencyAmount = getColorFilterTransparencyAmount({
    withTransparency,
  });
  const circleFilterColor = `${color}${transparencyAmount}`;

  return [
    {
      keypath: 'Layer 1',
      color: circleFilterColor,
    },
    {
      keypath: 'Layer 2',
      color: COLOR_TRANSPARENT,
    },
  ];
};

export const getColorFilterCross = ({
  withTransparency,
  color,
}: {
  withTransparency: boolean;
  color: string;
}): LottieColorObject[] => {
  const transparencyAmount = getColorFilterTransparencyAmount({
    withTransparency,
  });
  const crossFilterColor = `${color}${transparencyAmount}`;

  return [
    {
      keypath: 'Layer 1',
      color: COLOR_TRANSPARENT,
    },
    {
      keypath: 'Layer 2',
      color: crossFilterColor,
    },
  ];
};
