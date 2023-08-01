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
import { AuthContext, Imodal } from "../../Store";

const Navbar = () => {
  const [openMenu, setOpenMenu] = React.useState<boolean>(false);
  const navigate = useNavigate();
  const { openModal, setOpenModal } = React.useContext(AuthContext);

  const navigateRoute = (page: string): void => {
    navigate(page);
    setOpenMenu(false);
  };

  const openModalHandler = (data: Imodal) => {
    setOpenModal({
      ...openModal,
      open: data.open,
      comp: data.comp,
      title: data.title,
    });
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
          <MenuItem onClick={() => navigateRoute("/")}>
            <Typography textAlign="center" sx={{ marginLeft: "1rem" }}>
              Home
            </Typography>
          </MenuItem>
          <MenuItem onClick={() => navigateRoute("/skills")}>
            <Typography textAlign="center" sx={{ marginLeft: "1rem" }}>
              My skills
            </Typography>
          </MenuItem>
          <MenuItem onClick={() => navigateRoute("/experience")}>
            <Typography textAlign="center" sx={{ marginLeft: "1rem" }}>
              My Experience
            </Typography>
          </MenuItem>
          <MenuItem
            onClick={() => {
              openModalHandler({
                open: true,
                comp: "contact",
                title: "Contact Me",
              });
              setOpenMenu(false);
            }}
          >
            <Typography textAlign="center" sx={{ marginLeft: "1rem" }}>
              Contact Me
            </Typography>
          </MenuItem>
        </Menu>
      </Box>
      <Box>
        <Typography
          variant="h6"
          color="primary"
          style={{
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
          Home
        </Button>
        <Button
          color="primary"
          sx={{ margin: "0 1rem", fontWeight: "600" }}
          onClick={() => navigateRoute("/skills")}
        >
          My skills
        </Button>
        <Button
          color="primary"
          sx={{ margin: "0 1rem", fontWeight: "600" }}
          onClick={() => navigateRoute("/experience")}
        >
          My Experience
        </Button>
      </Box>

      <Box
        sx={{
          flexGrow: 0,
          display: { md: "flex", xs: "none" },
        }}
      >
        <Button
          variant="contained"
          size="small"
          onClick={() =>
            openModalHandler({
              open: true,
              comp: "contact",
              title: "Contact Me",
            })
          }
        >
          Contact Me
        </Button>
      </Box>
    </Box>
  );
};

export default Navbar;
