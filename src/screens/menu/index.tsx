import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import styles from './styles';
import NumberInput from './components/NumberInput';
import Logo from './components/Logo';

interface Props {
  onPressStart: () => void;
  boardSize: number;
  setBoardSize: React.Dispatch<number>;
  testID?: string;
}

const Menu: React.FC<Props> = ({
  onPressStart,
  boardSize,
  setBoardSize,
  testID = '',
}) => {
  return (
    <View testID={'Menu.view.container'} style={styles.container}>
      <Logo />

      <Text style={styles.boardSizeTitleText}>Board Size</Text>
      <NumberInput
        value={boardSize}
        onChangeValue={setBoardSize}
        minValue={3}
        maxValue={10}
      />

      <TouchableOpacity
        testID={`Menu${testID}.TouchableOpacity.play`}
        style={styles.playButtonContainer}
        onPress={onPressStart}>
        <Text style={styles.playButtonText}>{'PLAY'}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Menu;
