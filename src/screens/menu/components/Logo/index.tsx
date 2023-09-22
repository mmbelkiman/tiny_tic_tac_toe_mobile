import {Text, View} from 'react-native';
import React from 'react';

const Logo = () => {
  return (
    <View style={{marginRight: 34}}>
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
  );
};

export default Logo;
