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
        containedPrimary: {
          color: "#000",
          backgroundColor: "#fff",
          "&:hover": {
            color: "#fff",
          },
        },
      },
    },
    MuiDialog: {
      styleOverrides: {
        paper: {
          backgroundColor: "#fff",
          color: "#f00a12",
          width: "calc(100% - 1rem)",
          margin: "0.5rem",
          padding: "1rem",
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          border: "red",
        },
      },
    },
  },
});

export default responsiveFontSizes(theme);
