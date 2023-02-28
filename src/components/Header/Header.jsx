import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Container } from "@mui/system";
import { FaTimes } from "react-icons/fa";
import "./Header.css";
const drawerWidth = 240;
// const navItems = ["Home", "About", "Contact"];

function Header(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{
        display: "block",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <Typography variant="h6" sx={{ my: 2 }}>
        <FaTimes style={{ cursor: "pointer" }} />
      </Typography>
      <Divider />
      <List>
        <ul
          style={{
            display: "block",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <ListItem>Home</ListItem>
          <ListItem>Music</ListItem>
          <ListItem>Videos</ListItem>
          <ListItem>News</ListItem>
          <ListItem>About Us</ListItem>
          <ListItem>Contact Us</ListItem>
        </ul>
        {/* {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))} */}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Container>
      <Box sx={{ display: "flex" }} className="box-header-div">
        <CssBaseline />
        <AppBar
          component="nav"
          sx={{
            bgcolor: "white",
            color: "black",
          }}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{
                mr: 2,

                display: { sm: "none" },
              }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" className="now-music-sm">
              NowMusic
            </Typography>
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
            >
              NowMusic
            </Typography>
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              <List>
                <ul
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <ListItem>Home</ListItem>
                  <ListItem>Music</ListItem>
                  <ListItem>Videos</ListItem>
                  <ListItem>News</ListItem>
                  {/* <ListItem>About-Us</ListItem>
                <ListItem>Contact-Us</ListItem> */}
                </ul>
              </List>
              {/* {navItems.map((item) => (
              <Button key={item} sx={{ color: "#fff" }}>
                {item}
              </Button>
            ))} */}
            </Box>
          </Toolbar>
        </AppBar>
        <Box component="nav">
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
          >
            {drawer}
          </Drawer>
        </Box>
        {/* <Box component="main" sx={{ p: 3 }}>
          <Toolbar />
          <Typography></Typography>
        </Box> */}
      </Box>
    </Container>
  );
}

Header.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Header;
