"use client"
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'light', 
    primary: {
      main: '#1976d2',
      light: '#42a5f5',
      dark: '#1565c0',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#9c27b0',
      light: '#ba68c8',
      dark: '#7b1fa2',
      contrastText: '#ffffff',
    },
    error: {
      main: '#d32f2f',
      light: '#ef5350',
      dark: '#c62828',
    },
    warning: {
      main: '#ed6c02',
      light: '#ff9800',
      dark: '#e65100',
    },
    info: {
      main: '#0288d1',
      light: '#03a9f4',
      dark: '#01579b',
    },
    success: {
      main: '#2e7d32',
      light: '#4caf50',
      dark: '#1b5e20',
    },
    background: {
      default: '#f5f5f5',
      paper: '#ffffff',
    },
    text: {
      primary: 'rgba(0, 0, 0, 0.87)',
      secondary: 'rgba(0, 0, 0, 0.6)',
      disabled: 'rgba(0, 0, 0, 0.38)',
    },
  },
  typography: {
    fontFamily: '"Inter", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: '2.5rem', // 40px
      '@media (min-width:600px)': {
        fontSize: '3.5rem', // 56px
      },
      '@media (min-width:960px)': {
        fontSize: '4.625rem', // 74px
      },
      fontWeight: 'bold',
      lineHeight: 1.2,
      fontFamily: '"Volkhov", serif',
    },
   h2: {
      fontWeight: 700,
      lineHeight: 1.3,
      fontFamily: '"Volkhov", serif',
      fontSize: '1.5rem', // 24px
      '@media (min-width:600px)': {
        fontSize: '1.75rem', // 28px
      },
      '@media (min-width:960px)': {
        fontSize: '2rem', // 32px
      },
    },
    h3: {
      fontWeight: 600,
      lineHeight: 1.3,
      fontSize: '1.25rem', // 20px
      '@media (min-width:600px)': {
        fontSize: '1.5rem', // 24px
      },
      '@media (min-width:960px)': {
        fontSize: '1.75rem', // 28px
      },
    },
    h4: {
      fontWeight: 600,
      lineHeight: 1.4,
      fontSize: '1.125rem', // 18px
      '@media (min-width:600px)': {
        fontSize: '1.25rem', // 20px
      },
      '@media (min-width:960px)': {
        fontSize: '1.5rem', // 24px
      },
    },
    h5: {
      fontWeight: 600,
      lineHeight: 1.4,
      fontSize: '1rem', // 16px
      '@media (min-width:600px)': {
        fontSize: '1.125rem', // 18px
      },
      '@media (min-width:960px)': {
        fontSize: '1.25rem', // 20px
      },
    },
    h6: {
      fontWeight: 600,
      lineHeight: 1.5,
      fontFamily: '"Poppins", serif',
      fontSize: '0.875rem', // 14px
      '@media (min-width:600px)': {
        fontSize: '0.9375rem', // 15px
      },
      '@media (min-width:960px)': {
        fontSize: '1rem', // 16px
      },
    },
    subtitle1: {
      fontWeight: 400,
      lineHeight: 1.5,
      fontSize: '0.875rem', // 14px
      '@media (min-width:600px)': {
        fontSize: '0.9375rem', // 15px
      },
      '@media (min-width:960px)': {
        fontSize: '1rem', // 16px
      },
    },
    subtitle2: {
      fontWeight: 500,
      lineHeight: 1.57,
      fontSize: '0.75rem', // 12px
      '@media (min-width:600px)': {
        fontSize: '0.8125rem', // 13px
      },
      '@media (min-width:960px)': {
        fontSize: '0.875rem', // 14px
      },
    },
    body1: {
      fontWeight: 400,
      lineHeight: 1.5,
      fontSize: '0.875rem', // 14px
      '@media (min-width:600px)': {
        fontSize: '0.9375rem', // 15px
      },
      '@media (min-width:960px)': {
        fontSize: '1rem', // 16px
      },
    },
    body2: {
      fontWeight: 400,
      lineHeight: 1.43,
      fontSize: '0.75rem', // 12px
      '@media (min-width:600px)': {
        fontSize: '0.8125rem', // 13px
      },
      '@media (min-width:960px)': {
        fontSize: '0.875rem', // 14px
      },
    },
    button: {
      fontWeight: 500,
      lineHeight: 1.75,
      textTransform: 'none',
      fontSize: '0.75rem', // 12px
      '@media (min-width:600px)': {
        fontSize: '0.8125rem', // 13px
      },
      '@media (min-width:960px)': {
        fontSize: '0.875rem', // 14px
      },
    },
    caption: {
      fontWeight: 400,
      lineHeight: 1.66,
      fontSize: '0.6875rem', // 11px
      '@media (min-width:600px)': {
        fontSize: '0.71875rem', // 11.5px
      },
      '@media (min-width:960px)': {
        fontSize: '0.75rem', // 12px
      },
    },
    overline: {
      fontWeight: 400,
      lineHeight: 2.66,
      textTransform: 'uppercase',
      fontSize: '0.6875rem', // 11px
      '@media (min-width:600px)': {
        fontSize: '0.71875rem', // 11.5px
      },
      '@media (min-width:960px)': {
        fontSize: '0.75rem', // 12px
      },
    },
  },
  custom: {
      main: '#F1A501',
      light: '#F3B533',
      dark: '#D69400',
      contrastText: '#FFFFFF',
    },
  spacing: 8, 
  shape: {
    borderRadius: 4, 
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '8px',
        },
      },
    },
  },
});

export default theme;