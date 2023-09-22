import {LottieColorObject, PlayerMark} from '@game/common/types';
import {getPlayerColor} from '@game/common/utils';
import {
  COLOR_TRANSPARENT,
  TRANSPARENCY_AMOUNT,
  TRANSPARENCY_ZERO_AMOUNT,
} from './constants';

export const getScoreText = (circleWins: number, crossWins: number) =>
  `${circleWins} - ${crossWins}`;

export const getColorFilterCircle = ({
  playerMarkToRender,
  winnerPlayerMark,
  currentPlayer,
}: {
  playerMarkToRender: PlayerMark;
  winnerPlayerMark: PlayerMark;
  currentPlayer: PlayerMark;
}) => {
  const playerColor = getPlayerColor(playerMarkToRender);
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
}: {
  playerMarkToRender: PlayerMark;
  winnerPlayerMark: PlayerMark;
  currentPlayer: PlayerMark;
}) => {
  const playerColor = getPlayerColor(playerMarkToRender);
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
}: {
  playerMarkToRender: PlayerMark;
  winnerPlayerMark: PlayerMark;
  currentPlayer: PlayerMark;
}): LottieColorObject[] => {
  const circleColor = getColorFilterCircle({
    playerMarkToRender,
    winnerPlayerMark,
    currentPlayer,
  });
  const crossColor = getColorFilterCross({
    playerMarkToRender,
    winnerPlayerMark,
    currentPlayer,
  });

  return [
    {
      keypath: 'Layer 1',
      color: circleColor,
    },
    {
      keypath: 'Layer 2',
      color: crossColor,
    },
  ];
};
