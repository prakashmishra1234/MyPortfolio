import { Box } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Common/Navbar";
import CustomModal from "./Common/CustomModal";

const Main = () => {
  return (
    <Box
      sx={{
        height: "100%",
        width: "100%",
      }}
    >
      <CustomModal />
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
