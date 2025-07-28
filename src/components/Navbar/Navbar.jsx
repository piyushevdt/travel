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
import { usePathname } from "next/navigation";

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
  const pathname = usePathname();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const navItems = [
    { name: "Destinations", path: "/destinations" },
    { name: "Hotels", path: "/hotels" },
    { name: "Flights", path: "/flights" },
    { name: "Bookings", path: "/bookings" },
    { name: "LogIn", path: "/login" },
    { name: "SignUp", path: "/signup" },
  ];

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ p: 2 }}>
      <Box sx={{ p: 2 }}>
        <Image 
          src="/images/Logo.png" 
          alt="Your Logo" 
          width={100} 
          height={40}
          priority
        />
      </Box>
      <Divider />
      <List>
        {navItems.map((item) => {
          const isActive = pathname === item.path;
          return (
            <ListItem key={item.name} disablePadding>
              <ListItemButton
                component={Link}
                href={item.path}
                sx={{ 
                  px: 2,
                  backgroundColor: isActive ? "rgba(0, 0, 0, 0.08)" : "transparent",
                  "&:hover": {
                    backgroundColor: "rgba(0, 0, 0, 0.04)"
                  }
                }}
              >
                <ListItemText 
                  primary={item.name} 
                  primaryTypographyProps={{
                    fontWeight: isActive ? "bold" : "normal",
                    color: isActive ? "primary.main" : "text.primary"
                  }}
                />
              </ListItemButton>
            </ListItem>
          );
        })}
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
            WebkitBackdropFilter: "blur(10px)",
            borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
          }}
        >
          <Container>
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
                  priority
                />
              </Box>
              <Box sx={{ display: { xs: "none", sm: "flex" }, gap: 2 }}>
                {navItems.map((item) => {
                  const isActive = pathname === item.path;
                  return (
                    <Button
                      key={item.name}
                      component={Link}
                      href={item.path}
                      sx={{
                        color: isActive ? "primary.main" : "#000",
                        fontWeight: isActive ? "bold" : "normal",
                        textShadow: "0 1px 3px rgba(0, 0, 0, 0.3)",
                        fontSize: { xs: "0.875rem", sm: "1rem" },
                        border: isActive 
                          ? "2px solid #000" 
                          : "2px solid transparent",
                        transition: "all 0.3s ease",
                        "&:hover": {
                          backgroundColor: "rgba(255, 255, 255, 0.1)",
                          border: "2px solid #000",
                        },
                      }}
                    >
                      {item.name}
                    </Button>
                  );
                })}
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