import { Box } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Common/Navbar";
import CustomModal from "./Common/CustomModal";
import { MainBox } from "./styled/Components";

const Main = () => {
  return (
    <MainBox>
      <CustomModal />
      <Box sx={{ height: "4rem" }}>
        <Navbar />
      </Box>

      <Box sx={{ height: "calc(100% - 4rem)", overflowY: "auto" }}>
        <Outlet />
      </Box>
    </MainBox>
  );
};

export default Main;
