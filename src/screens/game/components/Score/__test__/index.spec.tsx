import React from 'react';
import {render} from '@testing-library/react-native';
import Score from '../index';

describe('Score component', () => {
  it('matches snapshot at circle turn', () => {
    const {toJSON} = render(
      <Score
        crossColor={'red'}
        circleColor={'blue'}
        circleWins={3}
        crossWins={2}
        hasWinner={false}
        circleWillPlayNow={true}
      />,
    );
    expect(toJSON()).toMatchSnapshot();
  });

  it('matches snapshot at cross turn', () => {
    const {toJSON} = render(
      <Score
        crossColor={'red'}
        circleColor={'blue'}
        circleWins={3}
        crossWins={2}
        hasWinner={false}
        circleWillPlayNow={false}
      />,
    );
    expect(toJSON()).toMatchSnapshot();
  });

  it('matches snapshot with winner', () => {
    const {toJSON} = render(
      <Score
        crossColor={'red'}
        circleColor={'blue'}
        circleWins={3}
        crossWins={2}
        circleWillPlayNow={true}
        hasWinner={true}
      />,
    );
    expect(toJSON()).toMatchSnapshot();
  });
});
