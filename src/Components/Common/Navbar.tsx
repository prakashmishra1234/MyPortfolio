import React from "react";
import {
  Box,
  Typography,
  Menu,
  MenuItem,
  IconButton,
  Button,
} from "@mui/material";
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
        <IconButton color="primary" onClick={() => setOpenMenu(true)}>
          <ListOutlinedIcon sx={{ cursor: "pointer", fontSize: "2rem" }} />
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
            <Typography textAlign="center" sx={{ marginLeft: "1rem" }}>
              Home
            </Typography>
          </MenuItem>
          <MenuItem
            sx={{ display: "flex" }}
            onClick={() => navigateRoute("/skills")}
          >
            <Typography textAlign="center" sx={{ marginLeft: "1rem" }}>
              My skills
            </Typography>
          </MenuItem>
        </Menu>
      </Box>
      <Box>
        <Typography
          variant="h6"
          color="primary"
          style={{
            fontFamily: "monospace",
            fontWeight: "700",
            display: "inline",
          }}
        >
          My
        </Typography>{" "}
        <Typography
          variant="h6"
          color="secondary"
          style={{
            fontFamily: "monospace",
            fontWeight: "700",
            display: "inline",
          }}
        >
          Portfolio
        </Typography>
      </Box>

      <Box
        sx={{
          flexGrow: 0,
          display: { md: "flex", xs: "none" },
        }}
      >
        <Button
          color="primary"
          sx={{ margin: "0 1rem", fontWeight: "600" }}
          onClick={() => navigateRoute("/")}
        >
          <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
            Home
          </Link>
        </Button>
        <Button
          color="primary"
          sx={{ margin: "0 1rem", fontWeight: "600" }}
          onClick={() => navigateRoute("/skills")}
        >
          <Link
            to="/skills"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            My skills
          </Link>
        </Button>
      </Box>
    </Box>
  );
};

export default Navbar;
