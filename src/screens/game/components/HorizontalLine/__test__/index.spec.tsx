import React from 'react';
import renderer from 'react-test-renderer';
import HorizontalLine from '../index';

jest.mock('@/common/animations', () => ({
  playOpacityAnimation: jest.fn(),
  playSizeAnimation: jest.fn(),
  playShakeAnimation: jest.fn(),
}));

describe('HorizontalLine Component', () => {
  it('should match the snapshot with a winner', () => {
    const tree = renderer
      .create(<HorizontalLine height={100} positionY={50} winner="X" />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should match the snapshot without a winner', () => {
    const tree = renderer
      .create(<HorizontalLine height={100} positionY={50} winner="" />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
