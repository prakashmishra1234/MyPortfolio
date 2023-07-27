import { Box, Typography, Button, Paper } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Home = () => {
  const LinkedinUrl: string = "https://www.linkedin.com/in/prakashmishra1234/";
  const ResumeURL: string = "/dummy.pdf";

  const profileIntro = (
    <Paper
      elevation={3}
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: { md: "auto", xs: "calc(100% - 80px);" },
        padding: "20px",
        margin: { xs: "20px", md: "0 0 0 80px" },
        backgroundColor: "#f0f1f2",
        "@media (max-width: 600px)": {
          boxShadow: "none",
        },
      }}
    >
      <Box
        component="img"
        sx={{
          height: 150,
          width: 150,
          borderRadius: "50%",
        }}
        alt="Profile image"
        src="/profileimage.jpg"
      />
      <Typography variant="h4" fontFamily="Edu SA Beginner">
        Hello everyone!
      </Typography>
      <Typography variant="h6" fontFamily="cursive">
        My name is Prakash Mishra
      </Typography>
      <Box sx={{ display: "flex", paddingTop: "1rem" }}>
        <Button
          variant="outlined"
          size="small"
          color="primary"
          sx={{
            fontSize: "small",
            borderRadius: "20px",
            "&:hover": {
              color: "#c93b30",
              borderColor: "#c93b30",
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
          color="primary"
          variant="outlined"
          endIcon={<LinkedInIcon />}
          sx={{
            borderRadius: "20px",
            marginLeft: "1rem",
            "&:hover": {
              color: "#c93b30",
              borderColor: "#c93b30",
            },
          }}
        >
          Linkedin
        </Button>
      </Box>
    </Paper>
  );

  const profileAbout = (
    <Paper
      elevation={3}
      sx={{
        width: { md: "25rem", xs: "calc(100% - 80px);" },
        padding: "20px",
        margin: { xs: "0 20px", md: "0 0 0 80px" },
        backgroundColor: "#f0f1f2",
        "@media (max-width: 600px)": {
          boxShadow: "none",
        },
      }}
    >
      <Typography fontWeight={600} textAlign="center">
        About
      </Typography>
      <Typography fontFamily="cursive">
        I'm a Software Engineer talented at contributing to team-developed
        projects. Collaborative designer of useful solutions and perfectly
        customized products. Proficient in writing application interface code
        via JavaScript and ReactJs workflows. Adept at monitoring and
        maintaining frontend performance and troubleshooting and debugging the
        same to support overall performance.
      </Typography>
    </Paper>
  );

  return (
    <Box
      sx={{
        backgroundImage: {
          md: "url('/HomeBackground.jpg')",
        },
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        justifyContent: "flex-start",
        alignItems: { md: "center", xs: "center" },
      }}
    >
      {profileIntro}
      {profileAbout}
    </Box>
  );
};

export default Home;
