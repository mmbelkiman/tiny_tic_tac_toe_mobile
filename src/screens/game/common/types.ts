export type WinnerResultDirection =
  | 'horizontal'
  | 'vertical'
  | 'diagonalTopLeft'
  | 'diagonalTopRight';

export type PlayerMark = 'X' | 'O' | '';

export interface WinnerResult {
  winner: PlayerMark;
  direction: WinnerResultDirection | null;
  position: number | null;
}

export interface LottieColorObject {
  keypath: string;
  color: string;
}
