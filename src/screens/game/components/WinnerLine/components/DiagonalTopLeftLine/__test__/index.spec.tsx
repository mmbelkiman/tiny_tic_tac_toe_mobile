import React from 'react';
import renderer from 'react-test-renderer';
import DiagonalTopLeftLine from '../index';

jest.mock('@game/common/animations', () => ({
  playOpacityAnimation: jest.fn(),
  playSizeAnimation: jest.fn(),
  playShakeAnimation: jest.fn(),
}));

describe('DiagonalTopLeftLine Component', () => {
  it('should match the snapshot with a winner', () => {
    const tree = renderer
      .create(<DiagonalTopLeftLine length={100} height={20} winner="X" />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should match the snapshot without a winner', () => {
    const tree = renderer
      .create(<DiagonalTopLeftLine length={100} height={20} winner="" />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
