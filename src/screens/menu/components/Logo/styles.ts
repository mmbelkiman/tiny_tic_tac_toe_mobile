import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {marginRight: 34},
  textTiny: {fontSize: 6, top: 24},
  textTic: {
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
  },
  textTac: {
    fontSize: 30,
    left: 5,
    top: 60,
    position: 'absolute',
  },
  textToe: {
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
  },
});
