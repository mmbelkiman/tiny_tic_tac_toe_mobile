import React from 'react';
import renderer from 'react-test-renderer';
import DiagonalTopLeftLine from '../index';
import {Animated} from 'react-native';

describe('DiagonalTopLeftLine Component', () => {
  it('should match the snapshot with a winner', () => {
    const heightAnimation = new Animated.Value(0);
    const opacityAnimation = new Animated.Value(0);
    const shakeAnimation = new Animated.Value(0);

    const tree = renderer
      .create(
        <DiagonalTopLeftLine
          length={100}
          height={20}
          color={'red'}
          heightAnimation={heightAnimation}
          opacityAnimation={opacityAnimation}
          shakeAnimation={shakeAnimation}
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
        <DiagonalTopLeftLine
          length={200}
          height={10}
          color={'blue'}
          heightAnimation={heightAnimation}
          opacityAnimation={opacityAnimation}
          shakeAnimation={shakeAnimation}
        />,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
