import { Box, Switch, Typography, Button } from "@mui/material";
import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import { styled } from "@mui/material/styles";

const localStorageData = JSON.parse(localStorage.getItem("myportfolio")!);
const themeValue = localStorageData?.theme ?? "light";

const primary = {
  main: "#a1a09f",
  dark: "#b32d24",
  light: "#f7f7f7",
};

const secondary = {
  main: "#5e5c57",
  light: "",
  dark: "",
};

const theme = createTheme({
  palette: {
    mode: themeValue,
    primary: primary,
    secondary: secondary,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        containedPrimary: (theme) => ({
          color:
            theme.theme.palette.mode === "dark"
              ? theme.theme.palette.primary.light
              : theme.theme.palette.primary.dark,
          backgroundColor:
            theme.theme.palette.mode === "dark"
              ? theme.theme.palette.primary.dark
              : theme.theme.palette.primary.light,
          fontWeight: "600",
          "&:hover": {
            color:
              theme.theme.palette.mode === "dark"
                ? theme.theme.palette.primary.dark
                : theme.theme.palette.primary.light,
            backgroundColor:
              theme.theme.palette.mode === "dark"
                ? theme.theme.palette.primary.light
                : theme.theme.palette.primary.dark,
          },
        }),
      },
    },
    MuiDialog: {
      styleOverrides: {
        paper: (theme) => ({
          background:
            theme.theme.palette.mode === "dark"
              ? theme.theme.palette.secondary.main
              : theme.theme.palette.primary.light,
          color:
            theme.theme.palette.mode === "dark"
              ? theme.theme.palette.primary.light
              : theme.theme.palette.primary.dark,
          width: "calc(100% - 1rem)",
          margin: "0.5rem",
          padding: "1rem",
        }),
      },
    },
    MuiTextField: {
      styleOverrides: {},
    },
    MuiTypography: {
      styleOverrides: {},
    },
    MuiPaper: {
      styleOverrides: {
        root: (theme) => ({
          color:
            theme.theme.palette.mode === "dark"
              ? theme.theme.palette.primary.light
              : theme.theme.palette.primary.dark,
          backgroundColor:
            theme.theme.palette.mode === "dark"
              ? theme.theme.palette.secondary.main
              : theme.theme.palette.primary.light,
        }),
      },
    },
  },
});

export const CustomBox = styled(Box)(({ theme }) => ({
  height: "100%",
  width: "100%",
  background:
    theme.palette.mode === "light"
      ? " linear-gradient(90deg, rgba(251,244,244,1) 0%, rgba(245,229,225,1) 61%, rgba(191,192,195,1) 100%)"
      : "linear-gradient(90deg, rgba(35,34,36,1) 0%, rgba(51,47,47,1) 61%, rgba(116,115,113,1) 100%)",
}));

export const CustomThemeSwitch = styled(Switch)(({ theme }) => ({}));

export const CustomTypo = styled(Typography)(({ theme }) => ({
  color:
    theme.palette.mode === "dark"
      ? theme.palette.primary.light
      : theme.palette.primary.dark,
  fontFamily: `"Times New Roman",
  serif`,
}));

export const NavButton = styled(Button)(({ theme }) => ({
  color:
    theme.palette.mode === "dark"
      ? theme.palette.primary.light
      : theme.palette.primary.dark,
  "&:hover": {},
}));

export const CorouselBox = styled(Box)(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark"
      ? theme.palette.secondary.main
      : theme.palette.primary.light,
  color:
    theme.palette.mode === "dark"
      ? theme.palette.secondary.light
      : theme.palette.primary.dark,
}));

export default responsiveFontSizes(theme);
