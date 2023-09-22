import {Text, View} from 'react-native';
import React from 'react';
import styles from './styles';

const Logo = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.textTiny}>Tiny 🤏</Text>
      <Text style={styles.textTic}>{'TIC '}</Text>
      <Text style={styles.textTac}>{'TAC'}</Text>
      <Text style={styles.textToe}>TOE</Text>
    </View>
  );
};

export default Logo;
