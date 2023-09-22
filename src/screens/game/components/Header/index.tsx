import {Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import styles from './styles';

interface HeaderProps {
  onPressBack: () => void;
  testID?: string;
}

const Header: React.FC<HeaderProps> = ({onPressBack, testID = ''}) => {
  return (
    <View style={styles.container}>
      <View>
        <TouchableOpacity
          testID={`Header${testID}.TouchableOpacity.back`}
          onPress={onPressBack}>
          <Text style={styles.backText}>{'←'}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;
