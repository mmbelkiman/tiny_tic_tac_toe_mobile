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
        currentPlayer="O"
        winnerPlayerMark=""
      />,
    );
    expect(toJSON()).toMatchSnapshot();
  });

  it('matches snapshot at croos turn', () => {
    const {toJSON} = render(
      <Score
        crossColor={'red'}
        circleColor={'blue'}
        circleWins={3}
        crossWins={2}
        currentPlayer="X"
        winnerPlayerMark=""
      />,
    );
    expect(toJSON()).toMatchSnapshot();
  });

  it('matches snapshot with circle winner', () => {
    const {toJSON} = render(
      <Score
        crossColor={'red'}
        circleColor={'blue'}
        circleWins={3}
        crossWins={2}
        currentPlayer="O"
        winnerPlayerMark="O"
      />,
    );
    expect(toJSON()).toMatchSnapshot();
  });

  it('matches snapshot with cross winner', () => {
    const {toJSON} = render(
      <Score
        crossColor={'blue'}
        circleColor={'red'}
        circleWins={0}
        crossWins={2}
        currentPlayer="X"
        winnerPlayerMark="X"
      />,
    );
    expect(toJSON()).toMatchSnapshot();
  });
});
