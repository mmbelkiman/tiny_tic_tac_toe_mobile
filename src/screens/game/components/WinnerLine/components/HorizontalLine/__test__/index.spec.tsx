import {Animated} from 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import HorizontalLine from '../index';

describe('HorizontalLine Component', () => {
  it('should match the snapshot with a winner', () => {
    const heightAnimation = new Animated.Value(0);
    const opacityAnimation = new Animated.Value(0);
    const shakeAnimation = new Animated.Value(0);

    const tree = renderer
      .create(
        <HorizontalLine
          positionY={50}
          color="red"
          heightAnimation={heightAnimation}
          shakeAnimation={shakeAnimation}
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
        <HorizontalLine
          positionY={50}
          color={'red'}
          opacityAnimation={opacityAnimation}
          shakeAnimation={shakeAnimation}
          heightAnimation={heightAnimation}
        />,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
