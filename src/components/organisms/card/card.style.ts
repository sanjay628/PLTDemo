import {StyleSheet} from 'react-native';
import {Colors} from '../../../theme';
import {moderateScale, scale, verticalScale} from '../../../theme/scale';

const Styles = StyleSheet.create({
  content: {
    shadowColor: Colors.COLOR_BLACK,
    shadowOffset: {
      width: scale(4),
      height: scale(4),
    },
    shadowRadius: scale(5),
    shadowOpacity: 0.3,
    elevation: scale(5),
    width: '90%',
    height: scale(150),
    backgroundColor: 'white',
    alignSelf: 'center',
    borderRadius: scale(12),
    alignItems: 'center',
    flexDirection: 'row',
    marginVertical: verticalScale(10),
  },
  subContent: {height: '100%', width: '60%'},
  cardImg: {
    height: scale(120),
    width: scale(120),
    backgroundColor: Colors.COLOR_TEXT_OFF_WHITE,
    borderRadius: scale(10),
    marginLeft: moderateScale(10),
  },
  cardTxt: {
    marginTop: verticalScale(20),
    marginLeft: moderateScale(10),
  },
  cardPrice: {
    marginTop: verticalScale(20),
    marginLeft: moderateScale(10),
  },
  cardBtn: {
    position: 'absolute',
    right: moderateScale(10),
    bottom: verticalScale(10),
  },
});

export default Styles;
