import { Box, Typography, Button, Paper } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { TypeAnimation } from "react-type-animation";

const Home = () => {
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
      <Typography variant="h4" color="primary">
        Hello everyone!
      </Typography>
      <Box sx={{ display: "inline", textAlign: "center" }}>
        <Typography
          variant="h6"
          color="primary"
          fontSize="1.5rem"
          sx={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          My name is Prakash Mishra, I'm a{" "}
          <TypeAnimation
            sequence={[
              "Software Engineer.",
              1000,
              "React Developer.",
              1000,
              "Javascript Developer.",
              1000,
              "Nodejs Developer.",
              1000,
              "Android Developer.",
              1000,
            ]}
            wrapper="span"
            speed={25}
            style={{
              fontSize: "1.5rem",
              color: "#f0ec0a",
            }}
            repeat={Infinity}
          />
        </Typography>
      </Box>

      <Box sx={{ display: "flex", paddingTop: "1rem" }}>
        <Button
          variant="contained"
          size="small"
          color="primary"
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
          color="primary"
          variant="contained"
          endIcon={<LinkedInIcon />}
          sx={{
            marginLeft: "1rem",
          }}
        >
          Linkedin
        </Button>
      </Box>
    </Box>
  );

  const HomeImage = (
    <Box
      component="img"
      sx={{
        transition: "all 0.3s",
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
