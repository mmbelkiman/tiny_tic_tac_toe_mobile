import React from 'react';
import {fireEvent, render} from '@testing-library/react-native';
import NumberInput from '../index';

describe('NumberInput component', () => {
  it('should render with the initial value', () => {
    const {getByText} = render(
      <NumberInput
        value={3}
        minValue={0}
        maxValue={5}
        onChangeValue={() => {}}
      />,
    );

    expect(getByText('3x3')).toBeTruthy();
  });

  it('should decrease the value when the minus button is pressed', () => {
    let currentValue = 3;
    const handleChangeValue = (value: number) => (currentValue = value);

    const {getByText} = render(
      <NumberInput
        value={currentValue}
        minValue={0}
        maxValue={5}
        onChangeValue={handleChangeValue}
      />,
    );

    const minusButton = getByText('[-]');
    fireEvent.press(minusButton);
    expect(currentValue).toBe(2);
  });

  it('should not decrease the value below the minimum value', () => {
    let currentValue = 0;
    const handleChangeValue = (value: number) => (currentValue = value);

    const {getByText} = render(
      <NumberInput
        value={currentValue}
        minValue={0}
        maxValue={5}
        onChangeValue={handleChangeValue}
      />,
    );

    const minusButton = getByText('[-]');
    fireEvent.press(minusButton);
    expect(currentValue).toBe(0);
  });

  it('should increase the value when the plus button is pressed', () => {
    let currentValue = 3;
    const handleChangeValue = (value: number) => (currentValue = value);

    const {getByText} = render(
      <NumberInput
        value={currentValue}
        minValue={0}
        maxValue={5}
        onChangeValue={handleChangeValue}
      />,
    );

    const plusButton = getByText('[+]');
    fireEvent.press(plusButton);
    expect(currentValue).toBe(4);
  });

  it('should not increase the value above the maximum value', () => {
    let currentValue = 5;
    const handleChangeValue = (value: number) => (currentValue = value);

    const {getByText} = render(
      <NumberInput
        value={currentValue}
        minValue={0}
        maxValue={5}
        onChangeValue={handleChangeValue}
      />,
    );

    const plusButton = getByText('[+]');
    fireEvent.press(plusButton);
    expect(currentValue).toBe(5);
  });

  it('renders correctly with initial value', () => {
    const {toJSON} = render(
      <NumberInput
        value={3}
        minValue={0}
        maxValue={5}
        onChangeValue={() => {}}
      />,
    );
    expect(toJSON()).toMatchSnapshot();
  });

  it('renders correctly when decreasing value', () => {
    const {getByTestId, toJSON} = render(
      <NumberInput
        value={3}
        minValue={0}
        maxValue={5}
        onChangeValue={() => {}}
      />,
    );

    const minusButton = getByTestId('NumberInput.TouchableOpacity.minus');
    fireEvent.press(minusButton);

    expect(toJSON()).toMatchSnapshot();
  });

  it('renders correctly when increasing value', () => {
    const {getByTestId, toJSON} = render(
      <NumberInput
        value={3}
        minValue={0}
        maxValue={5}
        onChangeValue={() => {}}
      />,
    );

    const plusButton = getByTestId('NumberInput.TouchableOpacity.plus');
    fireEvent.press(plusButton);

    expect(toJSON()).toMatchSnapshot();
  });

  it('renders correctly when value reaches minimum', () => {
    const {getByTestId, toJSON} = render(
      <NumberInput
        value={0}
        minValue={0}
        maxValue={5}
        onChangeValue={() => {}}
      />,
    );

    const minusButton = getByTestId('NumberInput.TouchableOpacity.minus');
    fireEvent.press(minusButton);

    expect(toJSON()).toMatchSnapshot();
  });

  it('renders correctly when value reaches maximum', () => {
    const {getByTestId, toJSON} = render(
      <NumberInput
        value={5}
        minValue={0}
        maxValue={5}
        onChangeValue={() => {}}
      />,
    );

    const plusButton = getByTestId('NumberInput.TouchableOpacity.plus');
    fireEvent.press(plusButton);

    expect(toJSON()).toMatchSnapshot();
  });
});
