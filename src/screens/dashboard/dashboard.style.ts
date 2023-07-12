import {StyleSheet} from 'react-native';
import {Colors} from '../../theme';
import {scale} from '../../theme/scale';
const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.COLOR_WHITE,
  },
  cartView: {
    backgroundColor: 'lightblue',
    width: scale(80),
    height: scale(40),
    borderRadius: scale(25),
    position: 'absolute',
    right: scale(20),
    bottom: '5%',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
});

export default Styles;
