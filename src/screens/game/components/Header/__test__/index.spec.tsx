import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import Header from '../index';

describe('NumberInput component', () => {
  it('button works', () => {
    const onPressBackMock = jest.fn();
    const {getByTestId} = render(<Header onPressBack={onPressBackMock} />);

    const backButton = getByTestId('Header.TouchableOpacity.back');
    fireEvent.press(backButton);

    expect(onPressBackMock).toHaveBeenCalled();
  });

  it('renders correctly', () => {
    const onPressBackMock = jest.fn();
    const {toJSON} = render(<Header onPressBack={onPressBackMock} />);
    expect(toJSON()).toMatchSnapshot();
  });
});
