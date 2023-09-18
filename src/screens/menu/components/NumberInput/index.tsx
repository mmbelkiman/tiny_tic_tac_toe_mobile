import React, {useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

interface NumberInputProps {
  value: number;
  minValue: number;
  maxValue: number;
  onChangeValue: (newValue: number) => void;
}

const NumberInput: React.FC<NumberInputProps> = ({
  value,
  minValue,
  maxValue,
  onChangeValue,
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
    <View style={{flexDirection: 'row', alignItems: 'center'}}>
      <TouchableOpacity onPress={handleMinusPress}>
        <Text style={{fontSize: 30}}>[-]</Text>
      </TouchableOpacity>
      <View
        style={{
          minWidth: 110,
          height: 50,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text
          style={{
            fontSize: 32,
          }}>{`${inputValue}x${inputValue}`}</Text>
      </View>
      <TouchableOpacity onPress={handlePlusPress}>
        <Text style={{fontSize: 30}}>[+]</Text>
      </TouchableOpacity>
    </View>
  );
};

export default NumberInput;
