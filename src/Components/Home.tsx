import { Box, Typography, Button, Paper } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

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
          sx={{ display: "inline" }}
        >
          My name is Prakash Mishra,
        </Typography>{" "}
        <Typography
          color="secondary"
          variant="h6"
          fontFamily="cursive"
          sx={{ display: "inline" }}
        >
          I am a Software Engineer.
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
        height: 350,
        width: 350,
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
