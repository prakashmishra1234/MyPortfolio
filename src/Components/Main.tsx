import { Box } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Common/Navbar";
import CustomModal from "./Common/CustomModal";
import { CustomBox } from "../Theme";

const Main = () => {
  return (
    <CustomBox>
      <CustomModal />
      <Box sx={{ height: "4rem" }}>
        <Navbar />
      </Box>

      <Box sx={{ height: "calc(100% - 4rem)", overflowY: "auto" }}>
        <Outlet />
      </Box>
    </CustomBox>
  );
};

export default Main;
