import { Box } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Common/Navbar";

const Main = () => {
  return (
    <Box
      sx={{
        height: "100%",
        width: "100%",
      }}
    >
      <Box sx={{ height: "4rem" }}>
        <Navbar />
      </Box>

      <Box sx={{ height: "calc(100% - 4rem)", overflowY: "auto" }}>
        <Outlet />
      </Box>
    </Box>
  );
};

export default Main;
