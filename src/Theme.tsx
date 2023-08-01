import { Box, Switch, Typography } from "@mui/material";
import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import { styled } from "@mui/material/styles";

const localStorageData = JSON.parse(localStorage.getItem("myportfolio")!);
const themeValue = localStorageData?.theme ?? "light";

const theme = createTheme({
  palette: {
    mode: themeValue,
    primary: {
      main: "#fff",
      dark: "#000",
      light: "#fff",
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
    MuiTypography: {
      styleOverrides: {},
    },
  },
});

export const CustomBox = styled(Box)(({ theme }) => ({
  height: "100%",
  width: "100%",
  background:
    theme.palette.mode === "light"
      ? "linear-gradient( 90deg, rgba(131, 58, 180, 1) 0%,  rgba(253, 29, 29, 1) 75%, rgba(252, 76, 9, 1) 100%)"
      : "linear-gradient(90deg, rgba(35,34,36,1) 0%, rgba(51,47,47,1) 61%, rgba(116,115,113,1) 100%)",
}));

export const CustomThemeSwitch = styled(Switch)(({ theme }) => ({}));

export const CustomTypo = styled(Typography)(({}) => ({
  color:
    theme.palette.mode === "dark"
      ? theme.palette.primary.light
      : theme.palette.primary.dark,
}));

export default responsiveFontSizes(theme);
