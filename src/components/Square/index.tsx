import React, {useState} from 'react';
import {Animated, TouchableOpacity} from 'react-native';
import {PlayerMark} from '../../common/types';
import {playShakeAnimation} from './animations';
import LottiePlayerMark from './components/lottiePlayerMark';
import {getSquareStyle} from './utils';

interface SquareProps {
  playerMark: PlayerMark;
  onPress: () => void;
  squareSize: number;
  winner: PlayerMark | null;
  testID?: string;
}

const Square: React.FC<SquareProps> = ({
  playerMark,
  squareSize,
  winner,
  onPress,
  testID = '',
}) => {
  const [animation] = useState(new Animated.Value(0));
  const [activePlayerMark, setActivePlayerMark] = useState<PlayerMark>('');

  const handleOnPress = () => {
    playShakeAnimation(animation);

    //Skip other effects and actions if already has player set
    if (activePlayerMark !== '') {
      return;
    }
    setActivePlayerMark(playerMark);
    onPress();
  };

  return (
    <TouchableOpacity
      testID={`Square${testID}.TouchableOpacity`}
      disabled={!!winner}
      onPress={handleOnPress}>
      <Animated.View style={getSquareStyle(squareSize, animation)}>
        <LottiePlayerMark
          activePlayerMark={activePlayerMark}
          squareSize={squareSize}
        />
      </Animated.View>
    </TouchableOpacity>
  );
};

export default Square;
