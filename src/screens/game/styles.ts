import {StyleSheet} from 'react-native';
import {BACKGROUND_COLOR} from '@game/common/constants';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BACKGROUND_COLOR,
  },
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
