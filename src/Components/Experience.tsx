import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper, Button, Box, Typography, Divider } from "@mui/material";

const Experience = () => {
  var items = [
    {
      Ftitle: "Vivo",
      Ltitle: "Collaboration Solutions",
      jobtitle: "Software Engineer",
      Duration: "April, 2023 - Present",
    },
    {
      Ftitle: "SFLHUB",
      Ltitle: "Technology",
      jobtitle: "Software Engineer",
      Duration: "July, 2022 - April, 2023",
    },
    {
      Ftitle: "SFLHUB",
      Ltitle: "Technology",
      jobtitle: "Software Engineer Intern",
      Duration: "January, 2022 - June, 2022",
    },
  ];

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        width: "calc(100% - 40px)",
        padding: "0 20px",
      }}
    >
      <Carousel
        navButtonsProps={{
          style: {
            backgroundColor: "cornflowerblue",
            borderRadius: 0,
          },
        }}
        navButtonsWrapperProps={{
          style: {
            bottom: "0",
            top: "unset",
            color: "red",
          },
        }}
        sx={{ width: { md: "50%", xs: "100%" } }}
      >
        {items.map((item, i) => (
          <Paper
            elevation={3}
            sx={{
              height: "75vh",
              backgroundColor: "#fff",
              padding: "1rem",
            }}
          >
            <Typography variant="h5" color="primary" fontFamily="monospace">
              {item.Ftitle}{" "}
              <Typography
                variant="h5"
                component="span"
                color="secondary"
                fontFamily="monospace"
              >
                {item.Ltitle}
              </Typography>
            </Typography>
            <Divider />
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Typography>{item.jobtitle}</Typography>
              <Typography>{item.Duration}</Typography>
            </Box>
          </Paper>
        ))}
      </Carousel>
    </Box>
  );
};

export default Experience;
