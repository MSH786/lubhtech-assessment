import { isDarkTheme } from '../../utilities/get-theme';

export const theme = {
  color: {
    success: {
      original: '#209fa5',
    },
    white: {
      original: '#fff',
    },
    black: {
      original: '#000',
    },
    error: {
      original: '#FF4444',
    },
    loader: {
      original: 'rgba(0,0,0,0.4)',
    },
    grey: {
      original: '#8189B0',
    },
  },
};

export const myTheme = {
  background: isDarkTheme()
    ? theme.color.white.original
    : theme.color.black.original,
};
