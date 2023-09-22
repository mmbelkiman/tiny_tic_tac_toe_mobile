import {PlayerMark} from './types';

export const getPlayerColor = (winner: PlayerMark) =>
  winner === 'X' ? '#FF4B3E' : '#8390FA';
