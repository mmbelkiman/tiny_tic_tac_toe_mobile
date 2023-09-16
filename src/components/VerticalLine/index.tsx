import React, {useCallback, useEffect, useRef} from 'react';
import {Animated} from 'react-native';

interface VerticalLineProps {
  width: number;
  positionX: number;
  winner: 'X' | 'O' | null;
  visible: boolean;
}

const VerticalLine: React.FC<VerticalLineProps> = ({
  width,
  positionX,
  winner,
  visible,
}) => {
  const lineColor =
    winner === 'X' ? 'rgba(216, 14, 13, 0.8)' : 'rgba(0, 0, 0, 0.8)';
  const opacity = useRef(new Animated.Value(0)).current;
  const widthAnimation = useRef(new Animated.Value(0)).current;
  const animation = useRef(new Animated.Value(0)).current;

  const playShakeAnimation = useCallback(() => {
    Animated.sequence([
      Animated.timing(animation, {
        toValue: 1,
        duration: 200,
        useNativeDriver: false,
      }),
      Animated.timing(animation, {
        toValue: 0,
        duration: 200,
        useNativeDriver: false,
      }),
    ]).start();
  }, [animation]);

  useEffect(() => {
    if (visible) {
      // Play opacity animation
      Animated.timing(opacity, {
        toValue: 0.8,
        duration: 90,
        useNativeDriver: false,
      }).start();

      // Play width animation
      Animated.timing(widthAnimation, {
        toValue: width,
        duration: 80,
        useNativeDriver: false,
      }).start();

      // Play shake animation
      playShakeAnimation();
    } else {
      // Reset animations when not visible
      Animated.timing(opacity, {
        toValue: 0,
        duration: 0,
        useNativeDriver: false,
      }).start();

      Animated.timing(widthAnimation, {
        toValue: 0,
        duration: 0,
        useNativeDriver: false,
      }).start();
    }
  }, [visible, opacity, widthAnimation, width, playShakeAnimation]);

  if (!visible) {
    return null;
  }

  return (
    <Animated.View
      style={{
        position: 'absolute',
        backgroundColor: lineColor,
        width: widthAnimation,
        height: '90%',
        left: positionX,
        top: '5%',
        opacity,
        borderRadius: 10,
        transform: [
          {
            translateY: animation.interpolate({
              inputRange: [0, 0.2, 0.4, 0.6, 0.8, 1],
              outputRange: [0, -5, 5, -5, 5, 0],
            }),
          },
        ],
      }}
    />
  );
};

export default VerticalLine;
