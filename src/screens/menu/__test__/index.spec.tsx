import React from 'react';
import {fireEvent, render} from '@testing-library/react-native';
import Menu from '../index';

jest.mock('../components/NumberInput', () => 'NumberInput');

describe('Menu component', () => {
  it('renders correctly with initial board size', () => {
    const {toJSON} = render(
      <Menu onPressStart={() => {}} boardSize={3} setBoardSize={() => {}} />,
    );
    expect(toJSON()).toMatchSnapshot();
  });

  it('calls onPressStart when play button is pressed', () => {
    const onPressStartMock = jest.fn();
    const {getByTestId} = render(
      <Menu
        onPressStart={onPressStartMock}
        boardSize={3}
        setBoardSize={() => {}}
      />,
    );

    const playButton = getByTestId(`Menu.TouchableOpacity.play`);
    fireEvent.press(playButton);

    expect(onPressStartMock).toHaveBeenCalled();
  });
});
