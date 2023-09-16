import LottieView from 'lottie-react-native';
import React, {useEffect, useMemo, useState} from 'react';
import {Animated, TouchableOpacity} from 'react-native';
import crossAnimation from '../../cross.json';
import circleAnimation from '../../circle.json';
interface SquareProps {
  value: string;
  onPress: () => void;
  squareSize: number;
  winner: string | null;
}

const Square: React.FC<SquareProps> = ({
  value,
  squareSize,
  winner,
  onPress,
}) => {
  const [animation] = useState(new Animated.Value(0));
  const [currentValue, setCurrentValue] = useState('');
  let lottieAnimation: LottieView | null;

  const handlePress = () => {
    playShakeAnimation();
    if (currentValue !== '') {
      return;
    }
    setCurrentValue(value);
    onPress();
  };

  const playShakeAnimation = () => {
    Animated.sequence([
      Animated.timing(animation, {
        toValue: 1,
        duration: 100,
        useNativeDriver: true,
      }),
      Animated.timing(animation, {
        toValue: 0,
        duration: 100,
        useNativeDriver: true,
      }),
    ]).start();
  };

  useEffect(() => {
    if (currentValue === '') {
      return;
    }

    // Play the Lottie animation
    if (lottieAnimation) {
      lottieAnimation.play();
    }
  }, [animation, currentValue, lottieAnimation]);

  const shakeStyle = {
    transform: [
      {
        translateX: animation.interpolate({
          inputRange: [0, 0.2, 0.4, 0.6, 0.8, 1],
          outputRange: [0, -5, 5, -5, 5, 0],
        }),
      },
      {
        translateY: animation.interpolate({
          inputRange: [0, 0.2, 0.4, 0.6, 0.8, 1],
          outputRange: [-2, 0, 2, 0, -2, 0],
        }),
      },
    ],
  };

  const lottieElement = useMemo(() => {
    const lottieSource =
      currentValue === 'X' ? crossAnimation : circleAnimation;

    return (
      <LottieView
        duration={currentValue === 'X' ? 300 : 1000}
        style={{width: squareSize, height: squareSize}}
        source={lottieSource}
        autoPlay={false}
        loop={false}
        ref={animation => (lottieAnimation = animation)}
      />
    );
  }, [currentValue]);

  return (
    <TouchableOpacity disabled={winner !== null} onPress={handlePress}>
      <Animated.View
        style={[
          {
            borderColor: '#00000022',
            borderWidth: 1,
            width: squareSize,
            height: squareSize,
            backgroundColor: '#33333311',
          },
          shakeStyle,
        ]}>
        {lottieElement}
      </Animated.View>
    </TouchableOpacity>
  );
};

export default Square;
