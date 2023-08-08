import React from "react";
import { Box, Button, Switch, Typography } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { TypeAnimation } from "react-type-animation";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";

const Home = () => {
  const [theme, setTheme] = React.useState<string>("dark");

  React.useEffect(() => {
    const data = JSON.parse(localStorage.getItem("myportfolio")!);
    setTheme(data?.theme ?? "dark");
  }, []);

  const changeTheme = (value: string): void => {
    localStorage.setItem("myportfolio", JSON.stringify({ theme: value }));
    window.location.reload();
  };

  const LinkedinUrl: string = "https://www.linkedin.com/in/prakashmishra1234/";
  const ResumeURL: string = "/dummy.pdf";

  const profileIntro = (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        padding: "20px",
      }}
    >
      <Typography variant="h4">Hello everyone!</Typography>
      <Box sx={{ display: "inline", textAlign: "center" }}>
        <Typography
          variant="h6"
          sx={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          My name is Prakash Mishra, I'm a{" "}
          <TypeAnimation
            sequence={[
              "Software Engineer",
              1000,
              "React Developer",
              1000,
              "Javascript Developer",
              1000,
              "Nodejs Developer",
              1000,
              "Android Developer",
              1000,
            ]}
            wrapper="span"
            speed={25}
            style={{
              color: "inherit",
              fontFamily: "inherit",
            }}
            repeat={Infinity}
          />
        </Typography>
      </Box>

      <Box sx={{ display: "flex", paddingTop: "1rem" }}>
        <Button
          variant="contained"
          size="small"
          onClick={(e) => {
            window.open(ResumeURL, "_blank");
          }}
        >
          Check My CV
        </Button>
        <Button
          href={LinkedinUrl}
          size="small"
          target="_blank"
          variant="contained"
          endIcon={<LinkedInIcon />}
          sx={{
            marginLeft: "1rem",
          }}
        >
          Linkedin
        </Button>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          paddingTop: "1rem",
        }}
      >
        <LightModeOutlinedIcon />
        <Switch
          sx={{}}
          onChange={() => {
            if (theme === "light") {
              changeTheme("dark");
            } else {
              changeTheme("light");
            }
          }}
          checked={theme === "light" ? false : true}
        />
        <DarkModeOutlinedIcon />
      </Box>
    </Box>
  );

  const HomeImage = (
    <Box
      component="img"
      sx={{
        transition: "all 1.5s",
        height: { md: 400, xs: 350 },
        width: { md: 400, xs: 350 },
        "&:hover": {
          md: {
            transform: "scale(1.3)",
          },
        },
      }}
      alt="img home"
      src="/HomePageImage.png"
    />
  );

  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: { md: "row", xs: "column" },
        justifyContent: "space-around",
        alignItems: "center",
      }}
    >
      {profileIntro}

      {HomeImage}
    </Box>
  );
};

export default Home;
