import { Box, Grow, Paper } from "@mui/material";
import React from "react";
import { CustomTypo } from "../Theme";

const About = () => {
  const data = [
    "As a Software Engineer, I am dedicated to collaborating with teams to deliver innovative solutions tailored to meet specific needs. With a keen eye for detail and a passion for crafting seamless user experiences, I specialize in writing application interface code using JavaScript and ReactJS workflows, alongside my proficiency in the MERN stack.",
    "In addition to frontend development, I bring extensive experience in backend development using MongoDB, Express.js, React.js, and Node.js. This comprehensive skill set enables me to architect full-stack applications with efficiency and precision, ensuring both frontend and backend components work seamlessly together.",
    "Furthermore, my expertise extends to Amazon Web Services (AWS), where I have mastered various services including AWS Lambda, API Gateway, Amazon Cognito, Amazon SNS, Amazon SQS, and Amazon SES. Leveraging these tools, I have designed and deployed scalable, reliable, and performant systems, contributing to the success of diverse projects.",
    "With a proactive approach to monitoring and maintaining frontend performance, I excel in troubleshooting and debugging to ensure optimal operation and user satisfaction.",
    "Driven by a passion for continuous learning and growth, I am eager to tackle new challenges and make meaningful contributions to dynamic projects.",
  ];
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
          {data.map((item, index) => {
            return (
              <React.Fragment key={index}>
                <CustomTypo>{item}</CustomTypo>
              </React.Fragment>
            );
          })}
        </Paper>
      </Grow>
    </Box>
  );
};

export default About;
