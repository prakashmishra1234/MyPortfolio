import { Box, Typography, Paper, Grow } from "@mui/material";
import React from "react";
import { TypeAnimation } from "react-type-animation";
import { CustomTypo } from "../Theme";

interface SkillsData {
  name: string;
  logo: string;
  link: string;
}

const data: SkillsData[] = [
  {
    name: "React",
    logo: "/React.png",
    link: "",
  },
  {
    name: "Ionic",
    logo: "/Ionic.png",
    link: "",
  },
  {
    name: "Nodejs",
    logo: "/Node.png",
    link: "",
  },
  {
    name: "Typescript",
    logo: "/TypeScript.svg",
    link: "",
  },
  {
    name: "Javascript",
    logo: "/JavaScript.png",
    link: "",
  },
  {
    name: "Bootstrap",
    logo: "/Bootstrap.png",
    link: "",
  },
  {
    name: "Java",
    logo: "/Java.png",
    link: "",
  },
  {
    name: "Android",
    logo: "/android.png",
    link: "",
  },
  {
    name: "CSS",
    logo: "/CSS.png",
    link: "",
  },
  {
    name: "HTML",
    logo: "/HTML.png",
    link: "",
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
      <CustomTypo
        variant="h6"
        sx={{
          fontWeight: "700",
        }}
      >
        <Typography
          component="span"
          sx={{
            fontWeight: "600",
            color: "inherit",
            fontSize: "inherit",
          }}
        >
          My
        </Typography>{" "}
        Skills
      </CustomTypo>
      <CustomTypo
        variant="h6"
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
            marginTop: "1rem",
          }}
          repeat={Infinity}
        />
      </CustomTypo>

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
                    transition: "all 1.5s",
                    "&:hover": {
                      md: {
                        transform: "scale(1.3)",
                      },
                    },
                  }}
                  alt={item.name}
                  src={item.logo}
                />
                <CustomTypo fontWeight="700">{item.name}</CustomTypo>
              </Paper>
            </Grow>
          );
        })}
      </Box>
    </Box>
  );
};

export default MySkills;
