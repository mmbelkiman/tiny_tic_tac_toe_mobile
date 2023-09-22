import React from 'react';
import renderer from 'react-test-renderer';
import VerticalLine from '../index';

jest.mock('@game/common/animations', () => ({
  playOpacityAnimation: jest.fn(),
  playSizeAnimation: jest.fn(),
  playShakeAnimation: jest.fn(),
}));

describe('VerticalLine Component', () => {
  it('should match the snapshot with a winner', () => {
    const tree = renderer
      .create(<VerticalLine width={100} positionX={50} winner="X" />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should match the snapshot without a winner', () => {
    const tree = renderer
      .create(<VerticalLine width={100} positionX={50} winner="" />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
