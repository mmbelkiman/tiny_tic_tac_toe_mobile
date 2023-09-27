import {Text, View} from 'react-native';
import LottieView from 'lottie-react-native';
import React from 'react';
import lottieMarkAnimation from '@game/res/lottieMarkAnimation.json';
import {getColorFilterCircle, getColorFilterCross, getScoreText} from './utils';
import {LOTTIE_DURATION} from './constants';
import styles from './styles';

interface ScoreProps {
  hasWinner: boolean;
  circleWillPlayNow: boolean;
  circleWins: number;
  crossWins: number;
  circleColor: string;
  crossColor: string;
}

const Score: React.FC<ScoreProps> = ({
  circleWins,
  crossWins,
  circleWillPlayNow,
  hasWinner,
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
        colorFilters={getColorFilterCircle({
          color: circleColor,
          withTransparency: !circleWillPlayNow || hasWinner,
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
        colorFilters={getColorFilterCross({
          color: crossColor,
          withTransparency: circleWillPlayNow || hasWinner,
        })}
      />
    </View>
  );
};

export default Score;
