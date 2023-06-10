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
import { FaTimes, FaVideo } from "react-icons/fa";
import { GiMusicalScore } from "react-icons/gi";
import "./Header.css";
import { Link } from "react-router-dom";
import { MdPermContactCalendar } from "react-icons/md";
import { SiHatenabookmark } from "react-icons/si";
import djs from "../../assets/Images/djs.png";
import { HiBars3BottomRight } from "react-icons/hi2";
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
        <FaTimes
          style={{
            cursor: "pointer",
            marginRight: "90px",
          }}
        />
      </Typography>
      <Divider />
      <List
        style={{
          display: "block",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <ul
          style={{
            display: "block",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            lineHeight: "50px",
          }}
        >
          <ListItem>
            {" "}
            <Link
              to="/musics"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              {" "}
              <GiMusicalScore style={{ marginRight: "5px" }} /> Music
            </Link>
          </ListItem>
          <ListItem>
            <Link
              to="/videos"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              {" "}
              <FaVideo style={{ marginRight: "5px" }} />
              Videos{" "}
            </Link>
          </ListItem>

          <ListItem>
            {" "}
            <SiHatenabookmark style={{ marginRight: "5px" }} />
            About Us
          </ListItem>
          <ListItem>
            {" "}
            <Link
              to="/contact-us"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <MdPermContactCalendar style={{ marginRight: "5px" }} /> Contact
              Us
            </Link>
          </ListItem>
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
              <HiBars3BottomRight />
              {/* <MenuIcon /> */}
            </IconButton>
            <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
              <div className="hd-div-mg-ds">
                <img src={djs} alt="dnnd" className="img-hd" />
                <Typography
                  variant="h6"
                  component="div"
                  className="now-music-sm"
                >
                  TodaysMusic
                </Typography>
              </div>
            </Link>
            <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
              <Typography
                variant="h6"
                component="div"
                sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
              >
                TodaysMusic
              </Typography>
            </Link>
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              <List>
                <ul
                  style={{
                    display: "flex",

                    justifyContent: "flex-end",
                    alignItems: "flex-end",
                    textAlign: "right",
                  }}
                >
                  <ListItem>
                    {" "}
                    <Link
                      to="/musics"
                      style={{ textDecoration: "none", color: "inherit" }}
                    >
                      Music
                    </Link>
                  </ListItem>
                  <ListItem>
                    <Link
                      to="/videos"
                      style={{ textDecoration: "none", color: "inherit" }}
                    >
                      {" "}
                      Videos
                    </Link>
                  </ListItem>

                  <ListItem>
                    {" "}
                    <span>About</span>
                    <span style={{ marginLeft: "5px" }}>Us</span>
                  </ListItem>

                  <ListItem>
                    <Link
                      to="/contact-us"
                      style={{ textDecoration: "none", color: "inherit" }}
                    >
                      <span>Contact</span>
                      <span style={{ marginLeft: "5px" }}>Us</span>
                    </Link>
                  </ListItem>
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
