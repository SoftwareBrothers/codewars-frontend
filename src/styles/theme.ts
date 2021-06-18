import { createMuiTheme } from '@material-ui/core/styles';
import colors from './colors';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#171717',
    },
  },
  typography: {
    fontFamily: [
      'TTNorms',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    fontSize: 16,
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
    },
  },
});

theme.overrides = {
  MuiInput: {
    root: {
      fontSize: '1.5rem',
      color: colors.violentViolet,
      '&.MuiInput-underline:before': {
        borderBottomColor: colors.dark,
        borderBottomWidth: '2px',
      },
      '&:hover:not($disabled):not($focused):not($error):before': {
        borderBottomColor: colors.dark,
      },
    },
    input: {
      '&:-webkit-autofill': {
        WebkitTextFillColor: '#531ac6',
        transition: 'background-color 5000s ease-in-out 0s',
      },
      '&:-webkit-autofill::first-line': {
        fontFamily: 'TTNorms, Arial, sans-serif',
        fontSize: '1.5rem',
      },
      '&:focused': { fontSize: '1.5rem' },
    },
    focused: {
      color: colors.dark,
    },
    error: {
      color: colors.cinnabar,
    },
    disabled: {
      color: colors.blueMarguerite,
      '&.MuiInput-underline.Mui-disabled:before': {
        borderBottomColor: colors.dark,
        borderBottomStyle: 'solid',
      },
    },
  },
  MuiSelect: {
    root: {
      fontSize: '1.5rem',
      color: colors.violentViolet,
      '&.MuiInput-underline:before': {
        borderBottomColor: colors.dark,
      },
      '&:hover:not($disabled):before': {
        borderBottomColor: colors.dark,
      },
    },
    select: {
      '&:focus': {
        color: colors.dark,
        backgroundColor: 'transparent',
      },
    },
  },
  MuiInputLabel: {
    root: {
      fontSize: '1.5rem',
      color: colors.lightDark,
      '&.Mui-disabled': {
        color: colors.lightDark,
      },
      '&.Mui-focused': {
        fontSize: '1.25rem',
      },
    },
    filled: {
      fontSize: '0.75rem',
    },
    disabled: {
      color: colors.lightDark,
    },
  },
};

export default theme;
