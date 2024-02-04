import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

const Navbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleDrawerOpen = () => {
    setIsDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setIsDrawerOpen(false);
  };

  return (
    <div>
      <AppBar position="static">
        <Toolbar style={{ justifyContent: "space-between" }}>
          <Typography variant="h6">my task</Typography>
          <IconButton edge="end" color="inherit" onClick={handleDrawerOpen}>
            
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Drawer anchor="right" open={isDrawerOpen} onClose={handleDrawerClose}>
        <List>
          <ListItem button onClick={handleDrawerClose}>
            <ListItemText primary="Banks" />
          </ListItem>
          <ListItem button onClick={handleDrawerClose}>
            <ListItemText primary="Agtests" />
          </ListItem>
          <ListItem button onClick={handleDrawerClose}>
            <ListItemText primary="constants" />
          </ListItem>
          <ListItem button onClick={handleDrawerClose}>
            <ListItemText primary="tests" />
          </ListItem>
        </List>
      </Drawer>
    </div>
  );
};

export default Navbar;