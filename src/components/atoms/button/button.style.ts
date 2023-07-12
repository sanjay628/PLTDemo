import {StyleSheet} from 'react-native';
import {Colors} from '../../../theme';
import {scale} from '../../../theme/scale';

const Styles = StyleSheet.create({
  buttonStyle: {
    height: scale(41),
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    borderRadius: scale(20),
  },

  shadowStyle: {
    shadowColor: Colors.COLOR_BLACK,
    shadowOffset: {
      width: scale(4),
      height: scale(4),
    },
    shadowRadius: scale(5),
    shadowOpacity: scale(0.3),
    elevation: 5,
  },
});

export default Styles;
