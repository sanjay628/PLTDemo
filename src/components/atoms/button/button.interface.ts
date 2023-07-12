import {
  NativeSyntheticEvent,
  StyleProp,
  TargetedEvent,
  TextStyle,
  ViewStyle,
} from 'react-native';
import {TypographyVariant} from '../../../utils';

export interface ButtonProps {
  buttonStyle?: StyleProp<ViewStyle>;
  btnLabel: string;
  onPress: (event: NativeSyntheticEvent<TargetedEvent>) => void;
  disable?: boolean;
  buttonTextColor: string;
  buttonVariant?: TypographyVariant;
  buttonTextStyle?: StyleProp<TextStyle>;
  buttonWidth?: number;
  buttonColor: string;
}
