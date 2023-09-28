import React from 'react';
import renderer from 'react-test-renderer';
import WinnerLine from '../index';

// Mock inside components, just check if the correct one is rendered
jest.mock('../components/HorizontalLine', () => 'HorizontalLine');
jest.mock('../components/VerticalLine', () => 'VerticalLine');
jest.mock('../components/DiagonalTopLeftLine', () => 'DiagonalTopLeftLine');
jest.mock('../components/DiagonalTopRightLine', () => 'DiagonalTopRightLine');

jest.mock('../animations', () => ({
  playOpacityAnimation: jest.fn(),
  playSizeAnimation: jest.fn(),
  playShakeAnimation: jest.fn(),
}));

describe('WinnerLine Component', () => {
  it('should match snapshot when no winner', () => {
    const tree = renderer
      .create(
        <WinnerLine
          color={null}
          boardPosition={null}
          squareSize={100}
          winnerResultDirection={null}
          boardSize={10}
        />,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should match the horizontal line snapshot', () => {
    const tree = renderer
      .create(
        <WinnerLine
          color={'red'}
          boardPosition={3}
          squareSize={100}
          winnerResultDirection="horizontal"
          boardSize={10}
        />,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should match the vertical line snapshot', () => {
    const tree = renderer
      .create(
        <WinnerLine
          color={'red'}
          boardPosition={5}
          squareSize={100}
          winnerResultDirection="vertical"
          boardSize={8}
        />,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should match the diagonal top left line snapshot', () => {
    const tree = renderer
      .create(
        <WinnerLine
          color={'red'}
          boardPosition={0}
          squareSize={100}
          winnerResultDirection="diagonalTopLeft"
          boardSize={5}
        />,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should match the diagonal top right line snapshot', () => {
    const tree = renderer
      .create(
        <WinnerLine
          color={'red'}
          boardPosition={2}
          squareSize={100}
          winnerResultDirection="diagonalTopRight"
          boardSize={6}
        />,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
