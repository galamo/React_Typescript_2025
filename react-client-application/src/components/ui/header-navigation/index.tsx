import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import { NavLink, useNavigate } from "react-router";
import { useState } from "react";

function ResponsiveAppBar() {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            LOGO
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              open={true}
              onClose={() => {}}
              id="menu-appbar"
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              sx={{ display: { xs: "block", md: "none" } }}
            >
              <MenuItem key={"main-page"}>
                <Typography sx={{ textAlign: "center" }}>Main</Typography>
              </MenuItem>
              <MenuItem key={"Countries-page"}>
                <Typography sx={{ textAlign: "center" }}>Countries</Typography>
              </MenuItem>
              <MenuItem key={"about-page"}>
                <Typography sx={{ textAlign: "center" }}>About</Typography>
              </MenuItem>
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            LOGO
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <NavLink to="/countries">
              <Button sx={{ my: 2, color: "white", display: "block" }}>
                Countries
              </Button>
            </NavLink>

            <NavLink to="/">
              <Button sx={{ my: 2, color: "white", display: "block" }}>
                Main
              </Button>
            </NavLink>

            <NavLink to="/settings">
              <Button sx={{ my: 2, color: "white", display: "block" }}>
                Settings
              </Button>
            </NavLink>

            <Button
              onClick={() => {
                navigate("/about");
              }}
              sx={{ my: 2, color: "white", display: "block" }}
            >
              About
            </Button>
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton
                sx={{ p: 0 }}
                onClick={() => {
                  setIsMenuOpen(!isMenuOpen);
                }}
              >
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={isMenuOpen}
              onClose={() => {
                setIsMenuOpen(false);
              }}
            >
              <MenuItem
                key={1}
                onClick={() => {
                  // if our login is part of our application
                  // setIsMenuOpen(false);
                  // navigate("/auth/login");
                  // our login in another domain
                  // api request - logout
                  window.location.href = "/auth/login";
                }}
              >
                <Typography sx={{ textAlign: "center" }}>Logout</Typography>
              </MenuItem>
              <MenuItem key={2}>
                <Typography sx={{ textAlign: "center" }}>About</Typography>
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
