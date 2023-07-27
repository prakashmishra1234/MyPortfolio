import { Box, Typography, Button } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Home = () => {
  const LinkedinUrl: string = "https://www.linkedin.com/in/prakashmishra1234/";
  const ResumeURL: string = "/dummy.pdf";
  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "flex-start",
        alignItems: { md: "center", xs: "flex-start" },
      }}
    >
      <Box
        sx={{
          padding: { md: "4rem", xs: "1rem" },
          marginTop: { xs: "4rem", md: "0" },
        }}
      >
        <Typography variant="h4" fontFamily="Edu SA Beginner" color="#4c517a">
          Hello everyone!
        </Typography>
        <Typography variant="h6" fontFamily="cursive" color="#070bf5">
          <span style={{ color: "#c93b30" }}>My name is Prakash Mishra,</span>{" "}
          I'm a Software Engineer.
        </Typography>
        <Box sx={{ display: "flex", paddingTop: "1rem" }}>
          <Button
            variant="outlined"
            sx={{
              borderRadius: "20px",
              color: "#070bf5",
              borderColor: "#070bf5",
              "&:hover": {
                backgroundColor: "#c93b30",
                color: "#fff",
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
            target="_blank"
            variant="outlined"
            endIcon={<LinkedInIcon />}
            sx={{
              borderRadius: "20px",
              marginLeft: "1rem",
              color: "#070bf5",
              borderColor: "#070bf5",
              "&:hover": {
                backgroundColor: "#c93b30",
                color: "#fff",
              },
            }}
          >
            Linkedin
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
