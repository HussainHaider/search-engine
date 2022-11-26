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
import typography from './typography';
import { white } from './colors';

const theme = responsiveFontSizes(
  createTheme({
    typography: typography,
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          'html': {
            fontSize: '62.5%',
          },
          'body': {
            backgroundColor: white,
            fontSize: '0 !important',
          },
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
