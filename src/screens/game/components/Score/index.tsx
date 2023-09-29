import {Text, View} from 'react-native';
import LottieView from 'lottie-react-native';
import React from 'react';
import lottieMarkAnimation from '@game/res/lottieMarkAnimation.json';
import {
  getColorFilterCircle,
  getColorFilterCross,
  getOpacityValue,
  getScoreText,
} from './utils';
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
      <View
        style={{
          opacity: getOpacityValue(!circleWillPlayNow || hasWinner),
        }}>
        <LottieView
          duration={LOTTIE_DURATION}
          style={styles.markCircle}
          source={lottieMarkAnimation}
          autoPlay={true}
          loop={false}
          colorFilters={getColorFilterCircle({
            color: circleColor,
          })}
        />
      </View>

      <Text testID={'Score.Text'} style={styles.textScore}>
        {getScoreText(circleWins, crossWins)}
      </Text>

      <View style={{opacity: getOpacityValue(circleWillPlayNow || hasWinner)}}>
        <LottieView
          duration={LOTTIE_DURATION}
          style={styles.markCross}
          source={lottieMarkAnimation}
          autoPlay={true}
          loop={false}
          colorFilters={getColorFilterCross({
            color: crossColor,
          })}
        />
      </View>
    </View>
  );
};

export default Score;
