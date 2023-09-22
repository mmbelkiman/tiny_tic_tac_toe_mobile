import React, {useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import styles from './styles';

interface NumberInputProps {
  value: number;
  minValue: number;
  maxValue: number;
  onChangeValue: (newValue: number) => void;
  testID?: string;
}

const NumberInput: React.FC<NumberInputProps> = ({
  value,
  minValue,
  maxValue,
  onChangeValue,
  testID = '',
}) => {
  const [inputValue, setInputValue] = useState(value.toString());

  const handleMinusPress = () => {
    const newValue = Math.max(value - 1, minValue);
    setInputValue(newValue.toString());
    onChangeValue(newValue);
  };

  const handlePlusPress = () => {
    const newValue = Math.min(value + 1, maxValue);
    setInputValue(newValue.toString());
    onChangeValue(newValue);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        testID={`NumberInput${testID}.TouchableOpacity.minus`}
        onPress={handleMinusPress}>
        <Text style={styles.textButton}>[-]</Text>
      </TouchableOpacity>
      <View style={styles.textContainer}>
        <Text style={styles.text}>{`${inputValue}x${inputValue}`}</Text>
      </View>
      <TouchableOpacity
        testID={`NumberInput${testID}.TouchableOpacity.plus`}
        onPress={handlePlusPress}>
        <Text style={styles.textButton}>[+]</Text>
      </TouchableOpacity>
    </View>
  );
};

export default NumberInput;
