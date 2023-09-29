import React from 'react';
import {fireEvent, render} from '@testing-library/react-native';
import Board from '../index';
import {act} from 'react-test-renderer';

const sampleBoard = [
  ['X', 'O', 'X'],
  ['O', ' ', 'O'],
  ['X', 'O', 'X'],
];

describe('Board Component', () => {
  it('renders correctly with sample board data', () => {
    const mockOnClickSquare = jest.fn();

    const {getAllByTestId} = render(
      <Board
        board={sampleBoard}
        nextPlayerIsCircle={false}
        disabled={false}
        squareSize={50}
        onClickSquare={mockOnClickSquare}
        circleColor="red"
        crossColor="blue"
      />,
    );

    const squareElements: any = getAllByTestId(/^Square/);
    expect(squareElements.length).toBe(9);
  });

  it('calls onClickSquare when a square is pressed', async () => {
    const mockOnClickSquare = jest.fn();

    const {getByTestId} = render(
      <Board
        board={sampleBoard}
        nextPlayerIsCircle={false}
        disabled={false}
        squareSize={50}
        onClickSquare={mockOnClickSquare}
        circleColor="red"
        crossColor="blue"
      />,
    );

    const firstSquare = getByTestId('Square0.0.TouchableOpacity');
    fireEvent.press(firstSquare);

    return act(() => {
      expect(mockOnClickSquare).toHaveBeenCalledWith(0, 0);
    });
  });

  it('matches snapshot with sample board data', () => {
    const {toJSON} = render(
      <Board
        board={sampleBoard}
        nextPlayerIsCircle={false}
        disabled={false}
        squareSize={50}
        onClickSquare={jest.fn()}
        circleColor="red"
        crossColor="blue"
      />,
    );

    expect(toJSON()).toMatchSnapshot();
  });

  it('matches snapshot with clear board', () => {
    const {toJSON} = render(
      <Board
        board={[]}
        nextPlayerIsCircle={false}
        disabled={false}
        squareSize={50}
        onClickSquare={jest.fn()}
        circleColor="red"
        crossColor="blue"
      />,
    );

    expect(toJSON()).toMatchSnapshot();
  });
});
