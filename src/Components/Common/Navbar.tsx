import React from "react";
import { Box, Typography, Menu, MenuItem, IconButton } from "@mui/material";
import ListOutlinedIcon from "@mui/icons-material/ListOutlined";
import { Link, useNavigate } from "react-router-dom";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";

const Navbar = () => {
  const [openMenu, setOpenMenu] = React.useState<boolean>(false);
  const navigate = useNavigate();

  const navigateRoute = (page: string): void => {
    navigate(page);
    setOpenMenu(false);
  };

  return (
    <Box
      sx={{
        height: "100%",
        padding: "1vh 2vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Box sx={{ display: { md: "none", xs: "flex" } }}>
        <IconButton>
          <ListOutlinedIcon
            sx={{ cursor: "pointer" }}
            onClick={() => setOpenMenu(true)}
          />
        </IconButton>

        <Menu
          sx={{ mt: "45px" }}
          id="menu-appbar"
          anchorOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
          keepMounted
          transformOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
          open={openMenu}
          onClose={() => setOpenMenu(false)}
        >
          <MenuItem sx={{ display: "flex" }} onClick={() => navigateRoute("/")}>
            <HomeOutlinedIcon />
            <Typography textAlign="center" sx={{ marginLeft: "1rem" }}>
              Home
            </Typography>
          </MenuItem>
          <MenuItem
            sx={{ display: "flex" }}
            onClick={() => navigateRoute("/skills")}
          >
            <HomeOutlinedIcon />
            <Typography textAlign="center" sx={{ marginLeft: "1rem" }}>
              My skills
            </Typography>
          </MenuItem>
        </Menu>
      </Box>
      <Typography
        variant="h6"
        style={{ fontFamily: "monospace", color: "#c93b30", fontWeight: "700" }}
      >
        <span style={{ color: "#070bf5" }}>My</span> Portfolio
      </Typography>
      <Box sx={{ flexGrow: 0, display: { md: "flex", xs: "none" } }}>
        <Typography
          sx={{ margin: "0 1rem" }}
          onClick={() => navigateRoute("/")}
        >
          <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
            Home
          </Link>
        </Typography>
        <Typography
          sx={{ margin: "0 1rem" }}
          onClick={() => navigateRoute("/skills")}
        >
          <Link
            to="/skills"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            My skills
          </Link>
        </Typography>
      </Box>
    </Box>
  );
};

export default Navbar;
