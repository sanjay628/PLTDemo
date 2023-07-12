import {createContext, useContext} from 'react';
import {TextStyle} from 'react-native';
import {textVariants} from './typography';

export type TypographyVariant =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'body1'
  | 'body2'
  | 'body3'
  | 'body4';

export type Typography = Record<TypographyVariant, TextStyle>;
export interface Theme {
  typography: Typography;
}
export const ThemeContext = createContext<Theme>(textVariants);
export const useTypeContext = () => useContext(ThemeContext);
