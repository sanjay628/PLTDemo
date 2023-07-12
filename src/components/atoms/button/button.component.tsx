import React from 'react';
import {TouchableOpacity} from 'react-native';
import Text from '../text/text.component';
import {ButtonProps} from './button.interface';
import Styles from './button.style';

const Button: React.FC<ButtonProps> = ({
  buttonStyle,
  btnLabel,
  onPress,
  disable,
  buttonTextColor,
  buttonVariant,
  buttonTextStyle,
  buttonWidth,
  buttonColor,
}) => {
  return (
    <TouchableOpacity
      testID="submit-button"
      disabled={disable}
      onPress={onPress}
      style={[
        Styles.buttonStyle,
        buttonStyle,
        Styles.shadowStyle,
        {
          width: buttonWidth,
          backgroundColor: buttonColor,
        },
      ]}>
      <Text
        color={buttonTextColor}
        style={buttonTextStyle}
        variant={buttonVariant}>
        {btnLabel}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;
