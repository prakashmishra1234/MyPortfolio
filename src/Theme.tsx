import { Box, Switch, Typography, Button } from "@mui/material";
import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import { styled } from "@mui/material/styles";

const localStorageData = JSON.parse(localStorage.getItem("myportfolio")!);
const themeValue = localStorageData?.theme ?? "dark";

const primary = {
  main: "#a1a09f",
  dark: "#ff001f",
  light: "#f7f7f7",
};

const secondary = {
  main: "#292923",
  light: "",
  dark: "#000",
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
      styleOverrides: {
        h5: {
          fontFamily: "monospace",
        },
        h6: {
          fontFamily: "cursive",
        },
        h4: (theme) => ({
          color:
            theme.theme.palette.mode === "dark"
              ? theme.theme.palette.primary.dark
              : theme.theme.palette.secondary.main,
          fontFamily: "cursive",
        }),
      },
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

export const CustomThemeSwitch = styled(Switch)(({ theme }) => ({}));

export const CustomTypo = styled(Typography)(({ theme }) => ({
  color:
    theme.palette.mode === "dark"
      ? theme.palette.primary.light
      : theme.palette.secondary.dark,
  fontFamily: "monospace",
}));

export const NavButton = styled(Button)(({ theme }) => ({
  color:
    theme.palette.mode === "dark"
      ? theme.palette.primary.dark
      : theme.palette.secondary.dark,
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
