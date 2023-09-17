import {PlayerMark} from './types';

export const getPlayerColor = (winner: PlayerMark) =>
  winner === 'X' ? '#D80E0D' : '#000';
