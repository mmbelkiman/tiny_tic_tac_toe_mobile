import {Text, TouchableOpacity, View} from 'react-native';
import LottieView from 'lottie-react-native';
import React from 'react';
import lottieMarkAnimation from '../Square/components/lottiePlayerMark/res/lottieMarkAnimation.json';
import {PlayerMark} from '@/screens/game/common/types';
import {getPlayerColor} from '@/common/utils';

interface HeaderProps {
  winner: PlayerMark;
  currentPlayer: PlayerMark;
  circleWins: number;
  crossWins: number;
  onPressBack: () => void;
}

const Header: React.FC<HeaderProps> = ({
  circleWins,
  onPressBack,
  crossWins,
  currentPlayer,
  winner,
}) => {
  //TODO
  const colors = (player: PlayerMark): any[] => {
    const transparencyValue =
      winner !== '' ? '33' : player === currentPlayer ? 'FF' : '33';

    return [
      {
        keypath: 'Layer 1',
        color:
          player === 'O'
            ? `${getPlayerColor(player)}${transparencyValue}`
            : '#00000000',
      },
      {
        keypath: 'Layer 2',
        color:
          player === 'X'
            ? `${getPlayerColor(player)}${transparencyValue}`
            : '#00000000',
      },
    ];
  };

  return (
    <View
      style={{
        flexDirection: 'column',
      }}>
      <View>
        <TouchableOpacity onPress={onPressBack}>
          <Text
            style={{
              paddingLeft: 20,
              pointerEvents: 'none',
              fontSize: 50,
              color: '#999',
            }}>
            {'←'}
          </Text>
        </TouchableOpacity>
      </View>

      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          alignContent: 'center',
          alignSelf: 'center',
        }}>
        <LottieView
          duration={1}
          style={{
            width: 150,
            height: 150,
          }}
          source={lottieMarkAnimation}
          autoPlay={true}
          loop={false}
          colorFilters={colors('O')}
        />

        <Text
          style={{
            fontSize: 40,
            color: '#555',
          }}>{` ${circleWins} - ${crossWins}`}</Text>
        <LottieView
          duration={1}
          style={{
            width: 150,
            height: 150,
          }}
          source={lottieMarkAnimation}
          autoPlay={true}
          loop={false}
          colorFilters={colors('X')}
        />
      </View>
    </View>
  );
};

export default Header;
