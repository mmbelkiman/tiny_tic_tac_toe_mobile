import React from 'react';
import {Button, View} from 'react-native';
import styles from './styles';

interface Props {
  onPressStart: () => void;
}

const Menu: React.FC<Props> = ({onPressStart}) => {
  return (
    <View style={styles.container}>
      <Button title="START GAME" onPress={onPressStart} />
    </View>
  );
};

export default Menu;
