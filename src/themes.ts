import { Padding, SportsRugbySharp } from "@mui/icons-material";
import { ThemeOptions, createTheme } from "@mui/material";
import { csCZ } from '@mui/material/locale';

export enum MODE {
  LIGHT = "light",
  DARK = "dark",
}

export enum COLOR {
  TABLE_BORDER = "#E0E0E0",
  TRANSPARENT = "transparent",
  HIGHTCHART_BORDER = "#rgba(250,250,250,0.4)",
}

const THEME_TEMPLATES: { [x in MODE]: ThemeOptions } = {
  [MODE.LIGHT]: {
    palette: {
      background: {
        paper: "#fafafa",
        default: "#FFFFFF",
      },
      mode: "light",

      common: {
        white: "#FFFFFF",
      },

      primary: {
        main: "#009DE0",
      },
      secondary: {
        main: "#5A6268",
      },
      error: {
        main: "#C20E1A",
      },
      info: {
        main: "#0288d1",
      },
      success: {
        main: "#069500",
      },
      warning: {
        main: "#FF8F00",
      },
      // all components default text color
      text: {
        primary: "#5A6268"
      },
      // color of icons
      action: {
        active: "rgba(0,0,0,0.54)",
      }
    },
  },
  [MODE.DARK]: {
    palette: {
      background: {
        paper: "#333333",
      },
      mode: "dark",
      primary: {
        main: "#449d44",
      },
      secondary: {
        main: "#5a5a5a",
      },
    },
  },
};

const FONT_SIZE = 14;

export const getTheme: (mode: MODE) => ThemeOptions = (mode: MODE) =>
  createTheme(
    {
      shape: {
        borderRadius: 2,
      },
      palette: THEME_TEMPLATES[mode].palette,

      typography: {
        fontSize: FONT_SIZE,
      },

      spacing: FONT_SIZE / 2,

      components: {
        ...THEME_TEMPLATES[mode].components,
        MuiAccordion: {
          defaultProps: {
            disableGutters: true,
          },
        },
        MuiButtonGroup: {
          defaultProps: {
            variant: "contained",

          },
        },
        MuiButton: {
          defaultProps: {
            variant: "contained",
          },
        },
        MuiTextField: {
          defaultProps: {
            variant: "outlined",
            fullWidth: true,
          },
        },
        MuiCard: {
          defaultProps: {
            sx: {
              backgroundColor: THEME_TEMPLATES[mode].palette.background.default,
            }
          },
        },
        MuiPaper: {
          defaultProps: {
            sx: {
              backgroundColor: THEME_TEMPLATES[mode].palette.background.default,
            }
          },
        },
        MuiAccordionSummary: {
          defaultProps: {
            sx: {
              backgroundColor: THEME_TEMPLATES[mode].palette.background.default,
            }
          },
        },
        MuiAccordionDetails: {
          defaultProps: {
            sx: {
              backgroundColor: THEME_TEMPLATES[mode].palette.background.default,
            }
          },
        },
        MuiSvgIcon: {
          defaultProps: {
            sx: {
              //fontSize: "1.5em",
            }
          },
        },
        MuiDrawer: {
          defaultProps: {
            PaperProps: {
              sx: {
                backgroundColor: THEME_TEMPLATES[mode].palette.background.default,
              }
            }
          },
        },
        MuiDialogActions: {
          defaultProps: {
            sx: {
              padding: 1.5,
            }
          },
        },
        MuiIconButton: {
          defaultProps: {
            sx: {
              fontSize: "0.875em",
              padding: 0
            }
          },
        },
        MuiButtonBase: {
          defaultProps: {
            sx: {
              // padding: 0
            }
          },
        },
      },
    },
    csCZ
  );
