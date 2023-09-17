import React from 'react';
import {render} from '@testing-library/react-native';
import LottiePlayerMark from '../index';

describe('LottiePlayerMark Component', () => {
  it('should render LottiePlayerMark with "X" animation', () => {
    const {toJSON} = render(
      <LottiePlayerMark activePlayerMark="X" squareSize={100} />,
    );
    expect(toJSON()).toMatchSnapshot();
  });

  it('should render LottiePlayerMark with "O" animation', () => {
    const {toJSON} = render(
      <LottiePlayerMark activePlayerMark="O" squareSize={100} />,
    );
    expect(toJSON()).toMatchSnapshot();
  });

  it('should return null when activePlayerMark is empty', () => {
    const {toJSON} = render(
      <LottiePlayerMark activePlayerMark="" squareSize={100} />,
    );
    expect(toJSON()).toBeNull();
  });
});
