import {PlayerMark} from '@/screens/game/common/types';

export const getPlayerColor = (winner: PlayerMark) =>
  winner === 'X' ? '#FF4B3E' : '#8390FA';
