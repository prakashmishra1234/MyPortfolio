import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper, Button, Box, Typography, Divider } from "@mui/material";
import RadioButtonCheckedOutlinedIcon from "@mui/icons-material/RadioButtonCheckedOutlined";

const Experience = () => {
  var items = [
    {
      Ftitle: "Vivo",
      Ltitle: "Collaboration Solutions",
      jobtitle: "Software Engineer",
      Duration: "May, 2023 - Present",
      content: [],
    },
    {
      Ftitle: "SFLHUB",
      Ltitle: "Technology",
      jobtitle: "Software Engineer",
      Duration: "July, 2022 - April, 2023",
      content: [
        "Manage frontend development projects from initial design through completion, optimizing all cross-browser and multi-platform compatibility.",
        "Collaborated with 3 different backend development team on 5 new projects designs and feature improvement.",
        "Produced multiple visual elements of web applications by translating UI/UX design wireframes into code.",
        "Responsible for developing a responsive framework that work on smartphone as well as tablet and desktop.",
        "Responsible for maintaining websites including content updates, debugging, feature enhancement and regular updates.",
        "Technology used : Javascript, ReactJs, Redux, Bootstrap, Material UI, HTML, CSS.",
      ],
    },
    {
      Ftitle: "SFLHUB",
      Ltitle: "Technology",
      jobtitle: "Software Engineer Intern",
      Duration: "January, 2022 - June, 2022",
      content: [
        "Analyzed source code to identify functionality issues.",
        "Shadowed team members to learn new tasks and how to appropriately handle technical issues.",
        "Worked with developers to identify and remove software bugs.",
        "Partnered with team members to learn best practices in software design.",
        "Prepared and submitted reports and other documentation to assist development team members.",
        "Technology used : Javascript, ReactJs, Redux, Bootstrap, Material UI, HTML, CSS.",
      ],
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
        // autoPlay={false}
        animation="fade"
        indicatorIconButtonProps={{
          style: {},
        }}
        activeIndicatorIconButtonProps={{
          style: {
            color: "red",
          },
        }}
        sx={{ width: { md: "50%", xs: "100%" } }}
      >
        {items.map((item, i) => (
          <Paper
            key={i}
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
            <Box sx={{ paddingTop: "1rem" }}>
              {item.content.map((point, index) => {
                return (
                  <React.Fragment key={index}>
                    {index === item.content.length - 1 ? (
                      <Box
                        sx={{
                          my: "1rem",
                          display: "flex",
                        }}
                      >
                        <RadioButtonCheckedOutlinedIcon
                          sx={{
                            fontSize: "1rem",
                            marginRight: "5px",
                            marginTop: "5px",
                          }}
                        />
                        <Typography fontWeight="700">{point}</Typography>
                      </Box>
                    ) : (
                      <Box
                        sx={{
                          my: "1rem",
                          display: "flex",
                        }}
                      >
                        <RadioButtonCheckedOutlinedIcon
                          sx={{
                            fontSize: "1rem",
                            marginRight: "5px",
                            marginTop: "5px",
                          }}
                        />
                        <Typography>{point}</Typography>
                      </Box>
                    )}
                  </React.Fragment>
                );
              })}
            </Box>
          </Paper>
        ))}
      </Carousel>
    </Box>
  );
};

export default Experience;
