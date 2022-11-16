import React, { useState } from "react";
import { Box } from "@mui/system";
import HomeIcon from "@mui/icons-material/Home";
import {
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from "react-router-dom";
import InboxIcon from "@mui/icons-material/Inbox";
import InfoIcon from "@mui/icons-material/Info";
import ContactPageIcon from "@mui/icons-material/ContactPage";
import ChatIcon from "@mui/icons-material/Chat";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Box
        sx={{
          height: "8vh",
          width: "100%",
          background: "#f1f1f1",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Typography
          sx={{
            fontSize: "25px",
            marginLeft: "10px",
          }}
        >
          Logo
        </Typography>

        <Typography
          sx={{
            marginRight: "10px",
          }}
        >
          <IconButton onClick={() => setIsOpen(true)}>
            <MenuIcon
              sx={{
                fontSize: "30px",
              }}
            />
          </IconButton>
        </Typography>
      </Box>

      <Drawer
        // variant={"permanent"}
        anchor="top"
        open={isOpen}
        onClose={() => setIsOpen(false)}
      >
        <Box
          sx={{
            height: "max-content",
            background: "#f2f2f2",
          }}
          role="presentation"
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginY: "20px",
            }}
          >
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRj0pqyGlU27A9upPmMZijKOZ_I0ir1C1781ifZ8s96&s"
              alt="none"
              style={{
                height: "70px",
                marginRight: "10px",
              }}
            />
            <Typography
              variant="h5"
              component={"div"}
              sx={{
                marginTop: "10px",
              }}
            >
              SSGM COLLAGE KHANDALA
            </Typography>
          </Box>

          <Box>
            <nav aria-label="main mailbox folders">
              <List>
                <ListItem disablePadding>
                  <Link to="/">
                    <ListItemButton>
                      <ListItemIcon>
                        <HomeIcon />
                      </ListItemIcon>
                      <ListItemText primary="Home" />
                    </ListItemButton>
                  </Link>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      <InfoIcon />
                    </ListItemIcon>
                    <ListItemText primary="About" />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <Link>
                    <ListItemButton>
                      <ListItemIcon>
                        <InboxIcon />
                      </ListItemIcon>
                      <ListItemText primary="Inbox" />
                    </ListItemButton>
                  </Link>
                </ListItem>
                <ListItem disablePadding>
                  <Link>
                    <ListItemButton>
                      <ListItemIcon>
                        <ContactPageIcon />
                      </ListItemIcon>
                      <ListItemText primary="Contact us" />
                    </ListItemButton>
                  </Link>
                </ListItem>
                <ListItem disablePadding>
                  <Link>
                    <ListItemButton>
                      <ListItemIcon>
                        <ChatIcon />
                      </ListItemIcon>
                      <ListItemText primary="Blog" />
                    </ListItemButton>
                  </Link>
                </ListItem>
              </List>
            </nav>
          </Box>
        </Box>
      </Drawer>
    </>
  );
};

export default Header;
