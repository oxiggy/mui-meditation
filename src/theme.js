import { createTheme } from '@mui/material'


const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#6737DA'
    },
    secondary: {
      main: '#c5c5c5'
    },
    text: {
      secondary: 'rgba(235, 235, 245, 0.6)'
    }
  },
  typography: {
    fontFamily: 'Roboto',
    body1: {
      fontWeight: 300,
      letterSpacing: '-0.24px',
    }
  },
  components: {
    MuiTypography: {
      variants: [
        {
          props: { variant: 'title' },
          style: {
            fontSize: '2.125rem',
            lineHeight: '1.235',
            fontWeight: 700
          }
        },
      ]
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
        },
        defaultProps: {
          disableRipple: true,
        },
      },
    }
  }
})

export default theme