import {LottieColorObject, PlayerMark} from '@game/common/types';
import {TRANSPARENCY_AMOUNT, TRANSPARENCY_ZERO_AMOUNT} from './constants';
import {COLOR_TRANSPARENT} from '@game/common/constants';

export const getScoreText = (circleWins: number, crossWins: number) =>
  `${circleWins} - ${crossWins}`;

export const getColorFilterCircle = ({
  playerMarkToRender,
  winnerPlayerMark,
  currentPlayer,
  playerColor,
}: {
  playerColor: string;
  playerMarkToRender: PlayerMark;
  winnerPlayerMark: PlayerMark;
  currentPlayer: PlayerMark;
}) => {
  const transparencyAmount = getColorFilterTransparency({
    currentPlayer,
    winnerPlayerMark,
    playerMarkToRender,
  });

  return playerMarkToRender === 'O'
    ? `${playerColor}${transparencyAmount}`
    : COLOR_TRANSPARENT;
};

export const getColorFilterCross = ({
  playerMarkToRender,
  winnerPlayerMark,
  currentPlayer,
  playerColor,
}: {
  playerColor: string;
  playerMarkToRender: PlayerMark;
  winnerPlayerMark: PlayerMark;
  currentPlayer: PlayerMark;
}) => {
  const transparencyAmount = getColorFilterTransparency({
    currentPlayer,
    winnerPlayerMark,
    playerMarkToRender,
  });

  return playerMarkToRender === 'X'
    ? `${playerColor}${transparencyAmount}`
    : COLOR_TRANSPARENT;
};

export const getColorFilterTransparency = ({
  winnerPlayerMark,
  playerMarkToRender,
  currentPlayer,
}: {
  playerMarkToRender: PlayerMark;
  winnerPlayerMark: PlayerMark;
  currentPlayer: PlayerMark;
}) => {
  let transparencyAmount = TRANSPARENCY_AMOUNT;
  if (winnerPlayerMark === '') {
    //The Current player will be in evidence / Without transparency
    transparencyAmount =
      playerMarkToRender === currentPlayer
        ? TRANSPARENCY_ZERO_AMOUNT
        : TRANSPARENCY_AMOUNT;
  }

  return transparencyAmount;
};

export const getColorFilter = ({
  currentPlayer,
  playerMarkToRender,
  winnerPlayerMark,
  circleColor,
  crossColor,
}: {
  playerMarkToRender: PlayerMark;
  winnerPlayerMark: PlayerMark;
  currentPlayer: PlayerMark;
  circleColor: string;
  crossColor: string;
}): LottieColorObject[] => {
  const circleFilterColor = getColorFilterCircle({
    playerColor: circleColor,
    playerMarkToRender,
    winnerPlayerMark,
    currentPlayer,
  });
  const crossFilterColor = getColorFilterCross({
    playerColor: crossColor,
    playerMarkToRender,
    winnerPlayerMark,
    currentPlayer,
  });

  return [
    {
      keypath: 'Layer 1',
      color: circleFilterColor,
    },
    {
      keypath: 'Layer 2',
      color: crossFilterColor,
    },
  ];
};
