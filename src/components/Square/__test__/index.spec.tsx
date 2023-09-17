import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import Square from '../index';

describe('Square Component', () => {
  it('should call the onPress just at first press', () => {
    const onPressMock = jest.fn();
    const {getByTestId} = render(
      <Square
        playerMark="X"
        squareSize={100}
        winner={null}
        onPress={onPressMock}
      />,
    );

    const square = getByTestId('Square.TouchableOpacity');
    fireEvent.press(square);
    fireEvent.press(square);
    fireEvent.press(square);

    expect(onPressMock).toBeCalledTimes(1);
  });

  it('should not allow pressing when there is a winner', () => {
    const onPressMock = jest.fn();
    const {getByTestId} = render(
      <Square
        playerMark="X"
        squareSize={100}
        winner="X"
        onPress={onPressMock}
      />,
    );

    const square = getByTestId('Square.TouchableOpacity');
    fireEvent.press(square);

    expect(onPressMock).not.toHaveBeenCalled();
  });

  it('renders correctly with playerMark "X" and squareSize 100', () => {
    const {toJSON} = render(
      <Square
        playerMark="X"
        squareSize={100}
        winner={null}
        onPress={() => {}}
      />,
    );
    expect(toJSON()).toMatchSnapshot();
  });

  it('renders correctly with playerMark "O" and squareSize 32', () => {
    const {toJSON} = render(
      <Square
        playerMark="O"
        squareSize={32}
        winner={null}
        onPress={() => {}}
      />,
    );
    expect(toJSON()).toMatchSnapshot();
  });

  it('renders correctly with a winner', () => {
    const {toJSON} = render(
      <Square playerMark="X" squareSize={100} winner="X" onPress={() => {}} />,
    );
    expect(toJSON()).toMatchSnapshot();
  });

  it('renders correctly without winner and playerMark', () => {
    const {toJSON} = render(
      <Square
        playerMark=""
        squareSize={100}
        winner={null}
        onPress={() => {}}
      />,
    );
    expect(toJSON()).toMatchSnapshot();
  });
});
