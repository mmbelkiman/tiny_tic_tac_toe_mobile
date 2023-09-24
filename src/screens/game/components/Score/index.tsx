import {Text, View} from 'react-native';
import LottieView from 'lottie-react-native';
import React from 'react';
import lottieMarkAnimation from '@game/res/lottieMarkAnimation.json';
import {PlayerMark} from '@game/common/types';
import {getColorFilter, getScoreText} from './utils';
import {LOTTIE_DURATION} from './constants';
import styles from './styles';

interface ScoreProps {
  winnerPlayerMark: PlayerMark;
  currentPlayer: PlayerMark;
  circleWins: number;
  crossWins: number;
  circleColor: string;
  crossColor: string;
}

const Score: React.FC<ScoreProps> = ({
  circleWins,
  crossWins,
  currentPlayer,
  winnerPlayerMark,
  circleColor,
  crossColor,
}) => {
  return (
    <View style={styles.container}>
      <LottieView
        duration={LOTTIE_DURATION}
        style={styles.markCircle}
        source={lottieMarkAnimation}
        autoPlay={true}
        loop={false}
        colorFilters={getColorFilter({
          winnerPlayerMark: winnerPlayerMark,
          playerMarkToRender: 'O',
          currentPlayer: currentPlayer,
          crossColor: crossColor,
          circleColor: circleColor,
        })}
      />

      <Text style={styles.textScore}>
        {getScoreText(circleWins, crossWins)}
      </Text>
      <LottieView
        duration={LOTTIE_DURATION}
        style={styles.markCross}
        source={lottieMarkAnimation}
        autoPlay={true}
        loop={false}
        colorFilters={getColorFilter({
          winnerPlayerMark: winnerPlayerMark,
          playerMarkToRender: 'X',
          currentPlayer: currentPlayer,
          crossColor: crossColor,
          circleColor: circleColor,
        })}
      />
    </View>
  );
};

export default Score;
