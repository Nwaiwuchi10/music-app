import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import List from "@mui/material/List";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
// import "./AdminLayout.css";
// import "./AdminMenuBar.css";

import puyol from "../../assets/Images/puyol.jpg";
import { Dropdown, Image } from "react-bootstrap";
import { Link } from "react-router-dom";

import { MdAdminPanelSettings } from "react-icons/md";

const drawerWidth = 240;

function UploadLayout(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div className="userD-div" style={{ height: "100vh" }}>
      <div className="shake">
        <Link to="/" style={{ textDecoration: "none" }}>
          <Image
            src={puyol}
            alt="hde"
            style={{
              width: "auto",
              height: "auto",
              color: "whitesmoke",

              maxHeight: "50px",
              maxWidth: "100px",

              display: "flex",
              justifyContent: "center",
              alignItem: "center",
              marginLeft: "auto",
              marginRight: "auto",
              marginTop: "40px",
              marginBottom: "20px",
            }}
            thumbnail
            roundedCircle
          />
        </Link>
      </div>
      <Toolbar
        style={{
          background: "purple",
          backgroundColor: "#0000CD",
          color: "white",
        }}
      />

      <Divider />

      <List style={{ backgroundColor: "inherit", color: "white" }}>
        <ul className="div-ul">
          <li style={{ display: "flex" }}>
            <MdAdminPanelSettings
              style={{
                fontSize: "25px",
                marginTop: "25px",
                marginBottom: "auto",
              }}
            />
            <Dropdown>
              <Dropdown.Toggle
                id="dropdown-basic"
                className="borde-drop"
                style={{
                  backgroundColor: "inherit",
                  border: "#228B22",
                  fontSize: "large",
                  fontWeight: "600",
                }}
              >
                MUSIC
              </Dropdown.Toggle>

              <Dropdown.Menu className="drop-d">
                <Dropdown.Item>
                  <Link to="/music-upload" style={{ textDecoration: "none" }}>
                    Create Music Blog
                  </Link>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </li>
          <li style={{ display: "flex" }}>
            <MdAdminPanelSettings
              style={{
                fontSize: "25px",
                marginTop: "25px",
                marginBottom: "auto",
              }}
            />
            <Dropdown>
              <Dropdown.Toggle
                id="dropdown-basic"
                className="borde-drop"
                style={{
                  backgroundColor: "inherit",
                  border: "#228B22",
                  fontSize: "large",
                  fontWeight: "600",
                }}
              >
                VIDEO
              </Dropdown.Toggle>

              <Dropdown.Menu className="drop-d">
                <Dropdown.Item>
                  <Link
                    to="/Create-Video-Blog"
                    style={{ textDecoration: "none" }}
                  >
                    Create Video Blog
                  </Link>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </li>
        </ul>
      </List>
      <Divider />
      <List></List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          bgcolor: "white",

          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon style={{ color: "#171744" }} />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            color="#171744"
            style={{ marginLeft: "20px" }}
          >
            <Link to="/" style={{ color: "#171744", textDecoration: "none" }}>
              Upload Music DashBoard
            </Link>
          </Typography>
          {/* <div className="superadmin">SuperAdmin</div> */}
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
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
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        <Typography paragraph>{props.children}</Typography>
      </Box>
    </Box>
  );
}

UploadLayout.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default UploadLayout;
