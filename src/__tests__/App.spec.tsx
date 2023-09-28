import 'react-native';
import {render, fireEvent} from '@testing-library/react-native';
import React from 'react';
import App from '../App';

describe('App', () => {
  it('renders the Menu component when in STOPPED state', () => {
    const {toJSON} = render(<App />);
    expect(toJSON()).toMatchSnapshot();
  });

  it('renders the Game component when in RUNNING state', () => {
    const {getByTestId, toJSON} = render(<App />);
    const startButton = getByTestId('Menu.TouchableOpacity.play');

    fireEvent.press(startButton);

    expect(getByTestId('Game.gameCanvas')).toBeTruthy();
    expect(toJSON()).toMatchSnapshot();
  });

  it('transitions from STOPPED to RUNNING state when the "PLAY" button is clicked', () => {
    const {toJSON, getByText, getByTestId} = render(<App />);
    const startButton = getByText('PLAY');

    expect(getByText('Board Size')).toBeTruthy();
    expect(() => getByTestId('Game.gameCanvas')).toThrow();

    fireEvent.press(startButton);

    expect(() => getByText('Board Size')).toThrow();
    expect(getByTestId('Game.gameCanvas')).toBeTruthy();
    expect(toJSON()).toMatchSnapshot();
  });

  it('transitions from RUNNING to STOPPED state when the "Back" button is clicked', () => {
    const {toJSON, getByText, getByTestId} = render(<App />);
    const startButton = getByText('PLAY');

    fireEvent.press(startButton);

    expect(() => getByText('Board Size')).toThrow();
    expect(getByTestId('Game.gameCanvas')).toBeTruthy();

    const backButton = getByTestId('Header.TouchableOpacity.back');
    fireEvent.press(backButton);

    expect(getByText('Board Size')).toBeTruthy();
    expect(() => getByTestId('Game.gameCanvas')).toThrow();
    expect(toJSON()).toMatchSnapshot();
  });
});
