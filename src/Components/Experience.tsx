import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper, Button, Box, Typography, Divider, Grow } from "@mui/material";
import RadioButtonCheckedOutlinedIcon from "@mui/icons-material/RadioButtonCheckedOutlined";

const Experience = () => {
  const time = 1;
  var items = [
    // {
    //   Ftitle: "Vivo",
    //   Ltitle: "Collaboration Solutions",
    //   jobtitle: "Software Engineer",
    //   Duration: "May, 2023 - Present",
    //   content: [],
    // },
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
        autoPlay={false}
        animation="fade"
        indicatorIconButtonProps={{
          style: {},
        }}
        activeIndicatorIconButtonProps={{
          style: {
            color: "red",
          },
        }}
        sx={{
          width: { md: "60%", xs: "100%" },
        }}
      >
        {items.map((item, i) => (
          <Box
            key={i}
            sx={{
              height: "75vh",
              padding: "1rem",
              backgroundColor: "#fff",
              borderRadius: "2rem",
              overflowY: "auto",
            }}
          >
            <Typography variant="h5" color="primary.dark">
              {item.Ftitle}{" "}
              <Typography variant="h5" component="span">
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
            <Box
              sx={{
                paddingTop: "1rem",
              }}
            >
              {item.content.map((point, index) => {
                return (
                  <Grow
                    key={index}
                    in={true}
                    timeout={index === 0 ? time : index * 1000 * time}
                  >
                    <Paper
                      elevation={3}
                      style={{ marginBottom: "0.5rem", padding: "0.3rem" }}
                    >
                      {index === item.content.length - 1 ? (
                        <Typography color="#000" fontWeight="700">
                          {point}
                        </Typography>
                      ) : (
                        <Typography color="#000">{point}</Typography>
                      )}
                    </Paper>
                  </Grow>
                );
              })}
            </Box>
          </Box>
        ))}
      </Carousel>
    </Box>
  );
};

export default Experience;
