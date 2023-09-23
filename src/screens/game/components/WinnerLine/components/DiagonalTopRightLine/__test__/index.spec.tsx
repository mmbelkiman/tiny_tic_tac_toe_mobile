import {Animated} from 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import DiagonalTopRightLine from '../index';

describe('DiagonalTopRightLine Component', () => {
  it('should match the snapshot with a winner', () => {
    const heightAnimation = new Animated.Value(0);
    const opacityAnimation = new Animated.Value(0);
    const shakeAnimation = new Animated.Value(0);

    const tree = renderer
      .create(
        <DiagonalTopRightLine
          length={100}
          height={20}
          color="blue"
          shakeAnimation={shakeAnimation}
          heightAnimation={heightAnimation}
          opacityAnimation={opacityAnimation}
        />,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should match the snapshot without a winner', () => {
    const heightAnimation = new Animated.Value(0);
    const opacityAnimation = new Animated.Value(0);
    const shakeAnimation = new Animated.Value(0);

    const tree = renderer
      .create(
        <DiagonalTopRightLine
          length={100}
          height={20}
          color="red"
          opacityAnimation={opacityAnimation}
          shakeAnimation={shakeAnimation}
          heightAnimation={heightAnimation}
        />,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
