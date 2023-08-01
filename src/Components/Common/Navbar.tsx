import React from "react";
import { Box, Menu, MenuItem, IconButton, Button } from "@mui/material";
import ListOutlinedIcon from "@mui/icons-material/ListOutlined";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext, Imodal } from "../../Store";
import { CustomTypo } from "../../Theme";

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
        <IconButton onClick={() => setOpenMenu(true)}>
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
            <CustomTypo textAlign="center" sx={{ marginLeft: "1rem" }}>
              Home
            </CustomTypo>
          </MenuItem>
          <MenuItem onClick={() => navigateRoute("/skills")}>
            <CustomTypo textAlign="center" sx={{ marginLeft: "1rem" }}>
              My skills
            </CustomTypo>
          </MenuItem>
          <MenuItem onClick={() => navigateRoute("/experience")}>
            <CustomTypo textAlign="center" sx={{ marginLeft: "1rem" }}>
              My Experience
            </CustomTypo>
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
            <CustomTypo textAlign="center" sx={{ marginLeft: "1rem" }}>
              Contact Me
            </CustomTypo>
          </MenuItem>
        </Menu>
      </Box>
      <Box>
        <CustomTypo
          variant="h6"
          style={{
            fontWeight: "700",
            display: "inline",
          }}
        >
          My
        </CustomTypo>{" "}
        <CustomTypo
          variant="h6"
          style={{
            fontWeight: "700",
            display: "inline",
          }}
        >
          Portfolio
        </CustomTypo>
      </Box>

      <Box
        sx={{
          flexGrow: 0,
          display: { md: "flex", xs: "none" },
        }}
      >
        <Button
          sx={{ margin: "0 1rem", fontWeight: "600" }}
          onClick={() => navigateRoute("/")}
        >
          Home
        </Button>
        <Button
          sx={{ margin: "0 1rem", fontWeight: "600" }}
          onClick={() => navigateRoute("/skills")}
        >
          My skills
        </Button>
        <Button
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
