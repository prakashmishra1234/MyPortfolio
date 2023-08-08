import { Box, Grow, Paper, Typography } from "@mui/material";
import React from "react";

const About = () => {
  const data =
    "Software Engineer talented at contributing to team-developed projects. Collaborative designer of useful solutions and perfectly customized products. Proficient in writing application interface code via JavaScript and ReactJs workflows. Adept at monitoring and maintaining frontend performance and troubleshooting and debugging the same to support overall performance.";
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        height: "100%",
      }}
    >
      <Grow in={true} timeout={2000}>
        <Paper
          elevation={3}
          sx={{
            width: { md: "70vw", xs: "98%" },
            margin: "1%",
            padding: "1rem",
          }}
        >
          <Typography>{data}</Typography>
        </Paper>
      </Grow>
    </Box>
  );
};

export default About;
