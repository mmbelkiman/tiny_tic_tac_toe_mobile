import {fireEvent, render} from '@testing-library/react-native';
import Game from '../index';

describe('Game Component', () => {
  it('resets the game when touched after a winner is determined', () => {
    const mockOnPressBack = jest.fn();

    const {getByTestId, toJSON} = render(
      <Game boardSize={3} onPressBack={mockOnPressBack} />,
    );

    fireEvent.press(getByTestId('Game.gameCanvas'));
    fireEvent.press(getByTestId('Square0.0.TouchableOpacity'));
    fireEvent.press(getByTestId('Square1.0.TouchableOpacity'));
    fireEvent.press(getByTestId('Square0.1.TouchableOpacity'));
    fireEvent.press(getByTestId('Square1.1.TouchableOpacity'));
    fireEvent.press(getByTestId('Square0.2.TouchableOpacity'));
    fireEvent.press(getByTestId('Game.gameCanvas'));

    expect(toJSON()).toMatchSnapshot();
  });

  it('render winner count correctly', () => {
    const mockOnPressBack = jest.fn();

    const {getByTestId, toJSON} = render(
      <Game boardSize={3} onPressBack={mockOnPressBack} />,
    );

    fireEvent.press(getByTestId('Game.gameCanvas'));
    fireEvent.press(getByTestId('Square0.0.TouchableOpacity'));
    fireEvent.press(getByTestId('Square1.0.TouchableOpacity'));
    fireEvent.press(getByTestId('Square0.1.TouchableOpacity'));
    fireEvent.press(getByTestId('Square1.1.TouchableOpacity'));
    fireEvent.press(getByTestId('Square0.2.TouchableOpacity'));
    fireEvent.press(getByTestId('Game.gameCanvas'));
    fireEvent.press(getByTestId('Square0.0.TouchableOpacity'));
    fireEvent.press(getByTestId('Square1.0.TouchableOpacity'));
    fireEvent.press(getByTestId('Square0.1.TouchableOpacity'));
    fireEvent.press(getByTestId('Square1.1.TouchableOpacity'));
    fireEvent.press(getByTestId('Square0.2.TouchableOpacity'));
    fireEvent.press(getByTestId('Game.gameCanvas'));

    expect(toJSON()).toMatchSnapshot();
  });

  it('does not reset the game when touched without a winner', () => {
    const mockOnPressBack = jest.fn();

    const {getByTestId, toJSON} = render(
      <Game boardSize={3} onPressBack={mockOnPressBack} />,
    );

    fireEvent.press(getByTestId('Game.gameCanvas'));
    fireEvent.press(getByTestId('Square0.0.TouchableOpacity'));
    fireEvent.press(getByTestId('Game.gameCanvas'));

    expect(toJSON()).toMatchSnapshot();
  });

  it('press back button', () => {
    const onPressMock = jest.fn();

    const {getByTestId} = render(
      <Game boardSize={3} onPressBack={onPressMock} />,
    );

    const square = getByTestId('Header.TouchableOpacity.back');
    fireEvent.press(square);

    expect(onPressMock).toBeCalledTimes(1);
  });

  it('renders correctly', () => {
    const onPressBack = jest.fn();

    const {toJSON} = render(<Game boardSize={3} onPressBack={onPressBack} />);
    expect(toJSON()).toMatchSnapshot();
  });
});
