import {
  createTheme,
  responsiveFontSizes,
} from '@mui/material/styles';

import {
  spacingl,
  spacingm,
  spacings,
  spacingxl,
  spacingxs,
  spacingxxl,
  spacingxxl2,
  spacingxxl3,
  spacingxxl4,
  spacingxxl5,
  spacingxxs,
} from './spacing';
import { white, black } from './colors';
import typography from './typography';

// theme of the whole application will be maanaged from this file
/**
 * responsiveFontSizes Generate responsive typography settings based on the options received.
 * @param  {object} theme  The theme object to enhance.
 * @param  {options} object
 * @return {object} The new theme with a responsive typography.
 */
//
const theme = responsiveFontSizes(
  createTheme({
    typography: typography,
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          'html': {
            fontSize: '62.5%', // 10px hence it is easy to use rem without thinking to much otherwise it will be 16px
          },
          'body': {
            backgroundColor: white,
            fontSize: '0 !important',
          },
          // changing the scrollbar styles
          '::-webkit-scrollbar': {
            width: '13px',
          },
          '::-webkit-scrollbar-track': {
            boxShadow: 'inset 0 0 14px 14px transparent',
            border: 'solid 4px transparent',
          },
          '::-webkit-scrollbar-thumb': {
            boxShadow: 'inset 0 0 14px 14px #bbbbbe',
            border: 'solid 4px transparent',
            borderRadius: '14px',
          },
          '::-webkit-scrollbar-button': {
            display: 'none',
          },
        },
      },
    },
    palette: {
      secondary: {
        main: white,
        contrastText: black,
      },
    },
    spacing: [
      spacingxxs,
      spacingxs,
      spacings,
      spacingm,
      spacingl,
      spacingxl,
      spacingxxl,
      spacingxxl2,
      spacingxxl3,
      spacingxxl4,
      spacingxxl5,
    ],
  }),
);

export default theme;
