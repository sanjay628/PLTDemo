import {scale} from '../theme/scale';
import {Theme} from './constants';

export const textVariants: Theme = {
  typography: {
    h1: {
      fontSize: scale(60),
      fontWeight: '600',
    },
    h2: {
      fontSize: scale(48),
      fontWeight: '600',
    },
    h3: {
      fontSize: scale(34),
      fontWeight: '600',
    },
    h4: {
      fontSize: scale(24),
      fontWeight: '600',
    },
    h5: {
      fontSize: scale(20),
      fontWeight: '600',
    },
    h6: {
      fontSize: scale(18),
      fontWeight: '600',
    },
    body1: {
      fontSize: scale(16),
      fontWeight: '600',
    },
    body2: {
      fontSize: scale(14),
      fontWeight: '600',
    },
    body3: {
      fontSize: scale(12),
      fontWeight: '600',
    },
    body4: {
      fontSize: scale(10),
    },
  },
};
