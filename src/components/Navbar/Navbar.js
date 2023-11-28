import React, { useEffect, useState } from "react";
import style from "../Moj.module.css";
import {
  AssignmentOutlined,
  Close,
  FmdGood,
  Home,
  Inbox,
  InsertPhoto,
  Mail,
  Menu,
  MenuRounded,
  Person,
} from "@mui/icons-material";
import {
  Box,
  Button,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { useMediaQuery } from "react-responsive";

function Navbar() {
  const [showNavMobile, setShowNavMobile] = useState(false);
  const [openDrawer, setOpenDrawer] = useState(false);

  const icons = [
    <Home />,
    <AssignmentOutlined />,
    <Person />,
    <InsertPhoto />,
    <FmdGood />,
    <Close />,
  ];

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setOpenDrawer(open);
  };

  const isMobile = useMediaQuery({ query: "(max-width: 380px)" });

  const list = () => (
    <Box
      sx={{ width: "100%", display: "flex", justifyContent: "center" }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List sx={{ width: "100%" }}>
        {[
          "Strona główna",
          "Aktualności",
          "O nas",
          "Galeria",
          "Kontakt",
          "Zamknij",
        ].map((text, index) => (
          <ListItem key={text}>
            <ListItemButton>
              <ListItemIcon>{icons[index]}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>

      <List></List>
    </Box>
  );

  return (
    <nav>
      <div
        style={{
          height: "65px",
          backgroundColor: "#ffd6d6",
          display: "flex",
          gap: "10px",
          justifyContent: "space-between",
          alignItems: "center",
          borderBottom: "2px solid #efefef",
          position: "fixed",
          width: "100%",
          zIndex: "10 ",
        }}
      >
        {isMobile ? (
          <img
            src="/images/logo-img-removebg-preview.png"
            style={{ maxHeight: "50px", display: "flex", marginLeft: '5%' }}
          />
        ) : (
          <img
            src="/images/logo-szkola-removebg-preview.png"
            style={{ height: "50px", display: "flex", marginLeft: "1%" }}
          />
        )}

        <div className="nav-items">
          <p>Strona główna</p>
          <p>Aktualności</p>
          <p>O nas</p>
          <p>Galeria</p>
          <p>Kontakt</p>
          <Drawer
            anchor={"top"}
            open={openDrawer}
            onClose={toggleDrawer(false)}
          >
            {list()}
          </Drawer>
        </div>
        <div className="hamburger">
          <MenuRounded
            sx={{ width: "38px", height: "42px" }}
            onClick={toggleDrawer(true)}
          />
        </div>
      </div>
     
    </nav>
  );
}

export default Navbar;
