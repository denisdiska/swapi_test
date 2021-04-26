import { createMuiTheme } from '@material-ui/core'

const BASE_FONT_SIZE = 16

const colors = {
  cream: '#FFF7F1',
  darkBone: '#E1E6ED',
  darkGray: '#212E39',
  darkGreen: '#49907D',
  gray: '#4D5861',
  orange: '#F9AD6C',
  whiteBone: '#F8F9FB',
}

const defaultTheme = createMuiTheme({
  breakpoints: {
    values: {
      lg: 1280,
      md: 767,
      sm: 320,
      xs: 0,
    },
  },
  colors,
  fontWeight: {
    bold: 700,
    light: 300,
    medium: 500,
    regular: 400,
  },
  overrides: {
    MuiAppBar: {
      root: {
        boxShadow: 'none',
      },
    },
    MuiButton: {
      containedSizeLarge: {
        fontSize: 13,
      },
      root: {
        fontWeight: 500,
        letterSpacing: '0.1em',
        lineHeight: '24px',
      },
    },
    MuiCardContent: {
      root: {
        '&:last-child': {
          paddingBottom: 16,
        },
      },
    },
    MuiInputBase: {
      root: {
        borderColor: colors.darkBone,
        color: colors.gray,
        fontSize: 16,
      },
    },
    MuiPopover: {
      paper: {
        boxShadow: '0px 8px 21px -8px rgba(38, 41, 48, 0.06), 0px 4px 50px rgba(38, 41, 48, 0.1)',
      },
    },
    // eslint-disable-next-line sort-keys
    MuiCssBaseline: {
      '@global': {
        body: {
          backgroundColor: colors.whiteBone,
          color: 'black',
          fontFamily: '"Rubik", sans-serif',
          fontSize: BASE_FONT_SIZE,
        },
        html: {
          WebkitFontSmoothing: 'auto',
        },
      },
    },
  },

  palette: {
    secondary: {
      main: colors.darkGreen,
    },
  },
  props: {
    MuiButtonBase: {
      disableRipple: true,
    },
    MuiTypography: {
      variantMapping: {
        body1: 'p',
        body2: 'p',
        subtitle1: 'p',
        subtitle2: 'p',
      },
    },
  },
  shadows: ['none', ...Array(24).fill('0px 8px 21px -8px rgba(38, 41, 48, 0.06), 0px 4px 40px rgba(38, 41, 48, 0.1)')],
  shape: {
    borderRadius: 8,
  },
  typography: {
    fontFamily: '"Rubik", sans-serif',
    fontStyle: 'normal',
    fontWeight: '400',
    // eslint-disable-next-line sort-keys
    body1: {
      fontSize: 20,
      lineHeight: '30px',
    },
    body2: {
      fontSize: 16,
      lineHeight: '24px',
    },
    h1: {
      fontSize: 61,
      lineHeight: '72px',
    },
    h2: {
      fontSize: 49,
      lineHeight: '58px',
    },
    h3: {
      fontSize: 39,
      lineHeight: '46px',
    },
    h4: {
      fontSize: 31,
      lineHeight: '37px',
    },
    h5: {
      fontSize: 25,
      lineHeight: '35px',
    },
    subtitle1: {
      fontSize: 13,
      lineHeight: '18px',
    },
    subtitle2: {
      fontSize: 10,
      lineHeight: '12px',
    },
  },
})

export default defaultTheme
