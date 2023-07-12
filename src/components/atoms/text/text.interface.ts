import {StyleProp, TextProps as RNTextProps, TextStyle} from 'react-native';
import {TypographyVariant} from '../../../utils';
export interface TextProps extends RNTextProps {
  variant?: TypographyVariant;
  style?: StyleProp<TextStyle>;
  color?: string;
}
