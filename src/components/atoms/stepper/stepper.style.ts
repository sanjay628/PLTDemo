import {StyleSheet} from 'react-native';
import {Colors} from '../../../theme';
import {moderateScale, scale, verticalScale} from '../../../theme/scale';
const Styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.COLOR_LIGHT_GRAY,
    width: scale(100),
    height: scale(40),
    borderRadius: scale(25),
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexDirection: 'row',
    position: 'absolute',
    right: moderateScale(10),
    bottom: verticalScale(10),
  },
  touchSign: {
    width: 30,
    height: scale(30),
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Styles;
