import React from 'react';
import {Button, Text, View} from 'react-native';
import styles from './styles';
import NumberInput from '@/screens/menu/components/NumberInput';

interface Props {
  onPressStart: () => void;
  boardSize: number;
  setBoardSize: React.Dispatch<number>;
}

const Menu: React.FC<Props> = ({onPressStart, boardSize, setBoardSize}) => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={{fontSize: 6, top: 24}}>Tiny 🤏</Text>
        <Text
          style={{
            textShadowColor: 'black',
            textShadowRadius: 1,
            textShadowOffset: {
              width: 2,
              height: 2,
            },
            color: '#FFF',
            fontSize: 24,
            left: 0,
            top: 25,
          }}>
          {'TIC '}
        </Text>
        <Text
          style={{
            fontSize: 30,
            left: 5,
            top: 60,
            position: 'absolute',
          }}>
          {'TAC'}
        </Text>
        <Text
          style={{
            left: 10,
            fontSize: 60,
            marginTop: 40,
            textShadowColor: 'black',
            textShadowRadius: 1,
            textShadowOffset: {
              width: 2,
              height: 2,
            },
            color: '#EEE',
          }}>
          TOE
        </Text>
      </View>

      <Text style={{fontSize: 20, paddingTop: 30}}>Board Size</Text>
      <NumberInput
        value={boardSize}
        onChangeValue={setBoardSize}
        minValue={3}
        maxValue={10}
      />

      <Button title="START GAME" onPress={onPressStart} />
    </View>
  );
};

export default Menu;
