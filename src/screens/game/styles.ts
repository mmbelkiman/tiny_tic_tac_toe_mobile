import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {flex: 1},

  status: {
    marginBottom: 10,
    fontSize: 24,
  },
  gameCanvas: {
    flexDirection: 'column',
  },
  row: {
    flexDirection: 'row',
  },
  square: {
    width: 100,
    height: 100,
    borderWidth: 1,
    borderColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  squareText: {
    fontSize: 24,
    color: 'red',
  },
});
