import React from 'react';
import renderer from 'react-test-renderer';
import VerticalLine from '../index';
import {Animated} from 'react-native';

describe('VerticalLine Component', () => {
  it('should match the snapshot with a winner', () => {
    const widthAnimation = new Animated.Value(0);
    const opacityAnimation = new Animated.Value(0);
    const shakeAnimation = new Animated.Value(0);
    const tree = renderer
      .create(
        <VerticalLine
          width={100}
          positionX={50}
          color={'green'}
          widthAnimation={widthAnimation}
          opacityAnimation={opacityAnimation}
          shakeAnimation={shakeAnimation}
        />,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should match the snapshot without a winner', () => {
    const widthAnimation = new Animated.Value(0);
    const opacityAnimation = new Animated.Value(0);
    const shakeAnimation = new Animated.Value(0);

    const tree = renderer
      .create(
        <VerticalLine
          width={100}
          positionX={50}
          color={'blue'}
          shakeAnimation={shakeAnimation}
          opacityAnimation={opacityAnimation}
          widthAnimation={widthAnimation}
        />,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
