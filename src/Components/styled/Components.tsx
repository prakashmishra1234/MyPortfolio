import { Box, Button, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

export const MainBox = styled(Box)(({ theme }) => ({
  height: "100%",
  width: "100%",
  background:
    theme.palette.mode === "light"
      ? "#ebedeb"
      : "linear-gradient(90deg, rgba(35,34,36,1) 0%, rgba(51,47,47,1) 61%, rgba(116,115,113,1) 100%)",
}));

export const LogoText = styled(Typography)(({ theme }) => ({
  fontWeight: "700",
  textTransform: "uppercase",
  backgroundImage:
    "linear-gradient(-225deg, #231557 0%, #44107a 29%, #ff1361 67%, #fff800 100% )",
  backgroundClip: "border-box",
  backgroundSize: "200% auto",
  color: "#fff",
  WebkitTextFillColor: "transparent",
  WebkitBackgroundClip: "text",
  animation: "textclip 2s linear infinite",
  display: "inline-block",
  "@keyframes textclip": {
    to: {
      backgroundPosition: "200% center",
    },
  },
}));

export const NavigationButton = styled(Button)(({ theme }) => ({
  color:
    theme.palette.mode === "dark"
      ? theme.palette.primary.light
      : theme.palette.secondary.main,
  margin: "0 1rem",
  fontWeight: "600",
}));
