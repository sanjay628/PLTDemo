import {StyleSheet} from 'react-native';
import {Colors} from '../../theme';
import {scale} from '../../theme/scale';
const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.COLOR_WHITE,
  },
  totalView: {
    height: scale(50),
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Styles;
