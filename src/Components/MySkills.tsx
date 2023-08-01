import { Box, Typography, Paper, Grow } from "@mui/material";
import React from "react";
import { TypeAnimation } from "react-type-animation";

interface SkillsData {
  name: string;
  logo: string;
}

const data: SkillsData[] = [
  {
    name: "React",
    logo: "/React.png",
  },
  {
    name: "Ionic",
    logo: "/Ionic.png",
  },
  {
    name: "Nodejs",
    logo: "/Node.png",
  },
  {
    name: "Typescript",
    logo: "/TypeScript.svg",
  },
  {
    name: "Javascript",
    logo: "/JavaScript.png",
  },
  {
    name: "Bootstrap",
    logo: "/Bootstrap.png",
  },
  {
    name: "Java",
    logo: "/Java.png",
  },
  {
    name: "Android",
    logo: "/android.png",
  },
  {
    name: "CSS",
    logo: "/CSS.png",
  },
  {
    name: "HTML",
    logo: "/HTML.png",
  },
];

const MySkills = () => {
  const time = 1;
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        height: "100%",
        flexDirection: "column",
        width: "100%",
      }}
    >
      <Typography
        variant="h6"
        color="secondary"
        sx={{
          fontWeight: "700",
        }}
      >
        <Typography
          component="span"
          color="primary"
          sx={{
            fontWeight: "700",
            fontSize: "inherit",
          }}
        >
          My
        </Typography>{" "}
        Skills
      </Typography>
      <Typography
        variant="h6"
        color="primary"
        fontSize="1.5rem"
        sx={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <TypeAnimation
          sequence={[
            "Writing code using Javascript",
            1000,
            "Writing code using Typescript",
            1000,
            "Writing code using Nodejs",
            1000,
            "Writing code using Reactjs",
            1000,
            "Writing code using Java",
            1000,
            "Writing code using Ionic",
            1000,
          ]}
          wrapper="span"
          speed={25}
          style={{
            fontSize: "1.5rem",
            color: "#f0ec0a",
            marginTop: "1rem",
          }}
          repeat={Infinity}
        />
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-around",
          width: { xs: "90%", md: "60%" },
          margin: "5%",
        }}
      >
        {data.map((item, index) => {
          return (
            <Grow in={true} timeout={index === 0 ? time : index * 1000 * time}>
              <Paper
                key={index}
                elevation={3}
                sx={{
                  margin: "20px",
                  minWidth: "5rem",
                  padding: "2px",
                }}
              >
                <Box
                  component="img"
                  sx={{
                    height: 70,
                    width: 70,
                    padding: "1rem",
                  }}
                  alt={item.name}
                  src={item.logo}
                />
                <Typography fontWeight="700">{item.name}</Typography>
              </Paper>
            </Grow>
          );
        })}
      </Box>
    </Box>
  );
};

export default MySkills;
