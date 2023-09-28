import React from 'react';
import {render} from '@testing-library/react-native';
import LottiePlayerMark from '../index';

describe('LottiePlayerMark Component', () => {
  it('should render LottiePlayerMark with "X" animation', () => {
    const {toJSON} = render(
      <LottiePlayerMark
        color={'red'}
        isVisible={true}
        isCircle={false}
        squareSize={100}
        backgroundColor={'blue'}
      />,
    );
    expect(toJSON()).toMatchSnapshot();
  });

  it('should render LottiePlayerMark with "O" animation', () => {
    const {toJSON} = render(
      <LottiePlayerMark
        color={'red'}
        isVisible={true}
        isCircle={true}
        squareSize={100}
        backgroundColor={'blue'}
      />,
    );
    expect(toJSON()).toMatchSnapshot();
  });

  it('should return null when is not visible', () => {
    const {toJSON} = render(
      <LottiePlayerMark
        color={'red'}
        isVisible={false}
        isCircle={false}
        squareSize={100}
        backgroundColor={'blue'}
      />,
    );
    expect(toJSON()).toBeNull();
  });
});
