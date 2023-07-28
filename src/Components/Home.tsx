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
        width: { md: "50%" },
      }}
    >
      <Typography
        variant="h4"
        fontFamily="Edu SA Beginner"
        color="primary.dark"
      >
        Hello everyone!
      </Typography>
      <Box sx={{ display: "inline", textAlign: "center" }}>
        <Typography
          variant="h6"
          fontFamily="cursive"
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
              fontFamily: "cursive",
            }}
            repeat={Infinity}
          />
        </Typography>
      </Box>

      <Box sx={{ display: "flex", paddingTop: "1rem" }}>
        <Button
          variant="outlined"
          size="small"
          color="secondary"
          sx={{
            fontSize: "small",
            borderRadius: "20px",
            borderColor: "primary.dark",
            "&:hover": {
              color: "primary.dark",
              borderColor: "secondary",
            },
          }}
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
          color="secondary"
          variant="outlined"
          endIcon={<LinkedInIcon />}
          sx={{
            borderRadius: "20px",
            borderColor: "primary.dark",
            marginLeft: "1rem",

            "&:hover": {
              color: "primary.dark",
              borderColor: "secondary",
            },
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
        height: { md: 400, xs: 350 },
        width: { md: 400, xs: 350 },
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
