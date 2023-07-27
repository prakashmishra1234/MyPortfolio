import { Box } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Common/Navbar";

const Main = () => {
  return (
    <Box
      sx={{
        backgroundImage: {
          xs: "url('/HomeBackground.jpg')",
        },
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: "100%",
        width: "100%",
      }}
    >
      <Box sx={{ height: "7vh" }}>
        <Navbar />
      </Box>

      <Box sx={{ height: "93vh", overflowY: "auto" }}>
        <Outlet />
      </Box>
    </Box>
  );
};

export default Main;
