"use client";

import { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Divider,
  useScrollTrigger,
  Slide,
  Container,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Link from "next/link";
import Image from "next/image";

function HideOnScroll({ children }) {
  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const navItems = [
    { name: "Destinations", path: "/" },
    { name: "Hotels", path: "/" },
    { name: "Flights", path: "/" },
    { name: "Bookings", path: "/" },
    { name: "LogIn", path: "/" },
    { name: "SignUp", path: "/" },
  ];

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        Your Logo
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.name} disablePadding>
            <Link
              href={item.path}
              style={{ width: "100%", textDecoration: "none" }}
            >
              <ListItemButton sx={{ textAlign: "center" }}>
                <ListItemText primary={item.name} />
              </ListItemButton>
            </Link>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <HideOnScroll>
        <AppBar
          component="nav"
          position="sticky"
          elevation={0}
          sx={{
            backgroundColor: "transparent",
            backdropFilter: "blur(10px)",
            WebkitBackdropFilter: "blur(10px)", // Safari support
            borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
          }}
        >
          <Container maxWidth="lg">
            <Toolbar>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ mr: 2, display: { sm: "none" }, color: "black" }}
              >
                <MenuIcon />
              </IconButton>
              <Box sx={{ flexGrow: 1 }}>
                <Image
                  src="/images/Logo.png"
                  alt="Your Logo"
                  width={100}
                  height={40}
                />
              </Box>
              <Box sx={{ display: { xs: "none", sm: "flex" }, gap: 3 }}>
                {navItems.map((item) => (
                  <Link
                    href={item.path}
                    key={item.name}
                    style={{ textDecoration: "none" }}
                  >
                    <Button
                      sx={{
                        color: "#000",
                        textShadow: "0 1px 3px rgba(0, 0, 0, 0.3)",
                        fontSize: { xs: "0.875rem", sm: "1rem" },
                        border: "2px solid transparent", 
                        transition: "all 0.3s ease",
                        "&:hover": {
                          backgroundColor: "rgba(255, 255, 255, 0.1)",
                          border: "2px solid #000", 
                        },
                      }}
                    >
                      {item.name}
                    </Button>
                  </Link>
                ))}
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
      </HideOnScroll>
      <Box component="nav">
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, 
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": { boxSizing: "border-box", width: 240 },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </>
  );
}
