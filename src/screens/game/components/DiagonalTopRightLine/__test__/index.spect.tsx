import React from 'react';
import renderer from 'react-test-renderer';
import DiagonalTopRightLine from '../index';

jest.mock('@/common/animations', () => ({
  playOpacityAnimation: jest.fn(),
  playSizeAnimation: jest.fn(),
  playShakeAnimation: jest.fn(),
}));

describe('DiagonalTopRightLine Component', () => {
  it('should match the snapshot with a winner', () => {
    const tree = renderer
      .create(<DiagonalTopRightLine length={100} height={20} winner="X" />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should match the snapshot without a winner', () => {
    const tree = renderer
      .create(<DiagonalTopRightLine length={100} height={20} winner="" />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
