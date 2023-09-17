import React from 'react';
import renderer from 'react-test-renderer';
import WinnerLine from '../index';

// Mock inside components, just check if the correct one is rendered
jest.mock('../../HorizontalLine', () => 'HorizontalLine');
jest.mock('../../VerticalLine', () => 'VerticalLine');
jest.mock('../../DiagonalTopLeftLine', () => 'DiagonalTopLeftLine');
jest.mock('../../DiagonalTopRightLine', () => 'DiagonalTopRightLine');

describe('WinnerLine Component', () => {
  it('should match snapshot when no winner', () => {
    const tree = renderer
      .create(
        <WinnerLine
          winnerMark=""
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
          winnerMark="X"
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
          winnerMark="O"
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
          winnerMark="X"
          boardPosition={null}
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
          winnerMark="O"
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
