import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper, Button, Box, Typography } from "@mui/material";

const Experience = () => {
  var items = [
    {
      Ftitle: "Vivo",
      Ltitle: "Collaboration Solutions",
    },
    {
      Ftitle: "SFLHUB",
      Ltitle: "Technology",
    },
    {
      Ftitle: "SFLHUB",
      Ltitle: "Technology",
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
          </Paper>
        ))}
      </Carousel>
    </Box>
  );
};

export default Experience;
