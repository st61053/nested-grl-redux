import { ThemeOptions, createTheme } from '@mui/material';
import { csCZ } from '@mui/material/locale';

export enum MODE {
  LIGHT = 'light',
  DARK = 'dark'
}

export enum COLOR {
  TABLE_BORDER = '#E0E0E0',
  TRANSPARENT = 'transparent',
}

const THEME_TEMPLATES: { [x in MODE]: ThemeOptions } = {
  [MODE.LIGHT]: {
    palette: {
      mode: 'light',
      primary: {
        main: '#449d44',
      },
      secondary: {
        main: '#424242'
      }
    }
  },
  [MODE.DARK]: {
    palette: {
      background: {
        paper: '#333333'
      },
      mode: 'dark',
      primary: {
        main: '#449d44',
      },
      secondary: {
        main: '#5a5a5a'
      }
    }
  }
};

export const getTheme: (mode: MODE) => ThemeOptions = (mode: MODE) => createTheme({
    shape: {
      borderRadius: 0
    },
    palette: {
      error: {
        main: '#d32f2f'
      },
      info: {
        main: '#0288d1'
      },
      success: {
        main: '#2e7d32'
      },
      warning: {
        main: '#ed6c02'
      },
      ...THEME_TEMPLATES[mode].palette
    },
    components: {
      ...THEME_TEMPLATES[mode].components
    }
  }, csCZ);

