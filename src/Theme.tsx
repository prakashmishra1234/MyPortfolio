import { createTheme, responsiveFontSizes } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#f00a12",
      dark: "#c93b30",
    },
    secondary: {
      main: "#f0ec0a",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        // containedPrimary: {
        //   backgroundColor: (theme: any) => theme.palette.secondary.main,
        //   borderColor: (theme: any) => theme.palette.secondary.main,
        //   "&:hover": {
        //     backgroundColor: (theme: any) => theme.palette.primary.main,
        //     borderColor: (theme: any) => theme.palette.primary.main,
        //   },
        // },
      },
    },
  },
});

export default responsiveFontSizes(theme);
