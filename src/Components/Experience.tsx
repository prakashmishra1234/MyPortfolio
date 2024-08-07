import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper, Button, Box, Typography, Divider, Grow } from "@mui/material";
import RadioButtonCheckedOutlinedIcon from "@mui/icons-material/RadioButtonCheckedOutlined";
import { CorouselBox, CustomTypo } from "../Theme";
import Accordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const Experience = () => {
  const time = 1;
  var items = [
    {
      Ftitle: "Vivo",
      Ltitle: "Collaboration Solutions",
      jobtitle: "Software Engineer",
      Duration: "May, 2023 - Present",
      content: [
        "Spearheaded optimization efforts for React Ionic applications, leveraging custom Capacitor plugins to streamline background task management and ensure real-time data updates.",
        "Demonstrated proficiency in ReactJS by diagnosing and resolving critical bugs, including issues with Material-UI components, ensuring a seamless user experience.",
        "Integrated AWS services (Cognito, API Gateway, Lambda, SNS, SQS, SES) to architect scalable, secure, and cost-effective solutions, enhancing application functionality.",
        "Engineered serverless backend solutions using AWS Lambda, optimizing performance and resource utilization for mission-critical applications.",
        "Implemented Amazon Cognito for seamless authentication and user management within React applications, prioritizing data security and user privacy.",
        "Configured and optimized Amazon SNS, SQS, and SES for efficient messaging and email communication, enhancing system reliability and scalability while ensuring compliance with industry standards.",
        "Technology used : Amazon Web Services, Typescript, Javascript, ReactJs, Ionic Framework, Material UI, Java, Android.",
      ],
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
        flexDirection: "column",
        height: "100%",
        width: "calc(100% - 40px)",
        padding: "0 20px",
      }}
    >
      {/* <Carousel
        autoPlay={false}
        animation="fade"
        indicatorIconButtonProps={{
          style: {},
        }}
        activeIndicatorIconButtonProps={{
          style: {},
        }}
        sx={{
          width: { md: "60%", xs: "100%" },
        }}
      >
        {items.map((item, i) => (
          <Box
            sx={{
              height: { xs: "80vh" },
              overflowY: "auto",
            }}
          >
            <CorouselBox
              key={i}
              sx={{
                height: "auto",
                padding: "1rem",
              }}
            >
              <CustomTypo variant="h5">
                {item.Ftitle}{" "}
                <Typography variant="h5" component="span">
                  {item.Ltitle}
                </Typography>
              </CustomTypo>
              <Divider />
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <CustomTypo>{item.jobtitle}</CustomTypo>
                <CustomTypo>{item.Duration}</CustomTypo>
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
                          <CustomTypo fontWeight="700">{point}</CustomTypo>
                        ) : (
                          <CustomTypo>{point}</CustomTypo>
                        )}
                      </Paper>
                    </Grow>
                  );
                })}
              </Box>
            </CorouselBox>
          </Box>
        ))}
      </Carousel> */}

      {items.map((item, index) => {
        return (
          <React.Fragment key={index}>
            <Grow
              in={true}
              timeout={
                index === 0 ? 1 * 1000 * time : (index + 1) * 1000 * time
              }
            >
              <Accordion defaultExpanded={index === 0 ? true : false}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1-content"
                  id="panel1-header"
                >
                  <CustomTypo pr={1}>
                    {item.jobtitle}
                    {" at"}
                  </CustomTypo>
                  <CustomTypo pr={1}>
                    {item.Ftitle} {item.Ltitle}
                  </CustomTypo>
                  <CustomTypo>
                    {"("}
                    {item.Duration}
                    {")"}
                  </CustomTypo>
                </AccordionSummary>
                <AccordionDetails>
                  {item.content.map((i, ind) => {
                    return (
                      <React.Fragment key={ind}>
                        <CustomTypo>
                          {" * "}
                          {i}
                        </CustomTypo>
                      </React.Fragment>
                    );
                  })}
                </AccordionDetails>
              </Accordion>
            </Grow>
          </React.Fragment>
        );
      })}
    </Box>
  );
};

export default Experience;
