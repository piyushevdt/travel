"use client";

import { useState, useContext, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
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
  Avatar,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { AuthContext } from "@/context/AuthContext";

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
  const [anchorEl, setAnchorEl] = useState(null);
  const [isClient, setIsClient] = useState(false);
  const { user, logout } = useContext(AuthContext);
  const pathname = usePathname();

  // Ensure client-side rendering for conditional content
  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    logout();
    handleMenuClose();
    window.location.href = "/"; // Refresh to update UI
  };

  // Filter nav items based on authentication
  const getNavItems = () => {
    const commonItems = [
      { name: "Destinations", path: "/destinations" },
      { name: "Hotels", path: "/hotels" },
      { name: "Flights", path: "/flights" },
      { name: "Bookings", path: "/bookings" },
    ];

    // Only show auth-dependent items after client hydration
    if (!isClient) return commonItems;
    
    return user ? commonItems : [...commonItems, 
      { name: "LogIn", path: "/login" },
      { name: "SignUp", path: "/signup" }
    ];
  };

  const navItems = getNavItems();

  const drawer = (
    <div onClick={handleDrawerToggle} style={{ padding: '16px' }}>
      <div style={{ padding: '16px' }}>
        <Link href="/" passHref>
          <Image
            src="/images/Logo.png"
            alt="Your Logo"
            width={100}
            height={40}
            priority
          />
        </Link>
      </div>
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
                  backgroundColor: isActive
                    ? "rgba(0, 0, 0, 0.08)"
                    : "transparent",
                  "&:hover": {
                    backgroundColor: "rgba(0, 0, 0, 0.04)",
                  },
                }}
              >
                <ListItemText
                  primary={item.name}
                  primaryTypographyProps={{
                    fontWeight: isActive ? "bold" : "normal",
                    color: isActive ? "primary.main" : "text.primary",
                  }}
                />
              </ListItemButton>
            </ListItem>
          );
        })}
        {isClient && user && (
          <>
            <Divider />
            <ListItem disablePadding>
              <ListItemButton
                component={Link}
                href="/dashboard"
                sx={{
                  px: 2,
                  backgroundColor:
                    pathname === "/dashboard"
                      ? "rgba(0, 0, 0, 0.08)"
                      : "transparent",
                }}
              >
                <ListItemText
                  primary="Dashboard"
                  primaryTypographyProps={{
                    fontWeight: pathname === "/dashboard" ? "bold" : "normal",
                  }}
                />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton
                component={Link}
                href="/profile"
                sx={{
                  px: 2,
                  backgroundColor:
                    pathname === "/profile"
                      ? "rgba(0, 0, 0, 0.08)"
                      : "transparent",
                }}
              >
                <ListItemText
                  primary="Profile"
                  primaryTypographyProps={{
                    fontWeight: pathname === "/profile" ? "bold" : "normal",
                  }}
                />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton onClick={handleLogout} sx={{ px: 2 }}>
                <ListItemText primary="Logout" />
              </ListItemButton>
            </ListItem>
          </>
        )}
      </List>
    </div>
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
              <div style={{ flexGrow: 1, display: 'block' }}>
                <Link href="/" passHref>
                  <Image
                    src="/images/Logo.png"
                    alt="Your Logo"
                    width={100}
                    height={40}
                    priority
                    style={{ display: 'block' }}
                  />
                </Link>
              </div>
              <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
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
                        display: { xs: "none", sm: "inline-flex" },
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
                {isClient && user && (
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <IconButton
                      onClick={handleMenuOpen}
                      sx={{ p: 0, ml: 2, display: { xs: "none", sm: "flex" } }}
                      aria-controls="user-menu"
                      aria-haspopup="true"
                    >
                      <Avatar
                        alt={user.name}
                        src="/images/default-avatar.jpg" // Replace with user.avatar if available
                        sx={{ width: 40, height: 40 }}
                      />
                    </IconButton>
                    <Menu
                      id="user-menu"
                      anchorEl={anchorEl}
                      open={Boolean(anchorEl)}
                      onClose={handleMenuClose}
                      PaperProps={{
                        elevation: 0,
                        sx: {
                          overflow: "visible",
                          filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                          mt: 1.5,
                          "& .MuiAvatar-root": {
                            width: 32,
                            height: 32,
                            ml: -0.5,
                            mr: 1,
                          },
                          "&:before": {
                            content: '""',
                            display: "block",
                            position: "absolute",
                            top: 0,
                            right: 14,
                            width: 10,
                            height: 10,
                            bgcolor: "background.paper",
                            transform: "translateY(-50%) rotate(45deg)",
                            zIndex: 0,
                          },
                        },
                      }}
                      transformOrigin={{ horizontal: "right", vertical: "top" }}
                      anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
                    >
                      <MenuItem onClick={handleMenuClose}>
                        <Typography variant="body1" fontWeight="bold">
                          {user.name}
                        </Typography>
                      </MenuItem>
                      <Divider />
                      <MenuItem
                        component={Link}
                        href="/dashboard"
                        onClick={handleMenuClose}
                      >
                        Dashboard
                      </MenuItem>
                      <MenuItem
                        component={Link}
                        href="/profile"
                        onClick={handleMenuClose}
                      >
                        Profile
                      </MenuItem>
                      <MenuItem onClick={handleLogout}>Logout</MenuItem>
                    </Menu>
                  </div>
                )}
              </div>
            </Toolbar>
          </Container>
        </AppBar>
      </HideOnScroll>
      <nav>
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
      </nav>
    </>
  );
}