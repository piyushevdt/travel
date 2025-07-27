"use client";

import {
  Box,
  Container,
  Grid,
  Typography,
  Link as MuiLink,
  IconButton,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import Link from "next/link";
import { Facebook, Twitter, Instagram, LinkedIn } from "@mui/icons-material";
import Image from "next/image";

export default function Footer() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const footerLinks = [
    {
      title: "Company",
      links: [
        { name: "About Us", href: "/about" },
        { name: "Careers", href: "/careers" },
        { name: "Contact", href: "/contact" },
      ],
    },
    {
      title: "Resources",
      links: [
        { name: "Blog", href: "/blog" },
        { name: "Help Center", href: "/help" },
        { name: "Tutorials", href: "/tutorials" },
      ],
    },
    {
      title: "Legal",
      links: [
        { name: "Privacy Policy", href: "/privacy" },
        { name: "Terms of Service", href: "/terms" },
        { name: "Cookie Policy", href: "/cookies" },
      ],
    },
  ];

  const socialLinks = [
    { icon: <Facebook />, name: "Facebook", href: "#" },
    { icon: <Twitter />, name: "Twitter", href: "#" },
    { icon: <Instagram />, name: "Instagram", href: "#" },
    { icon: <LinkedIn />, name: "LinkedIn", href: "#" },
  ];

  return (
    <Box
      component="footer"
      sx={{
        py: 6,
        px: 2,
        mt: "auto",
        backgroundColor: (theme) =>
          theme.palette.mode === "light"
            ? theme.palette.grey[200]
            : theme.palette.grey[800],
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* Logo and description */}
          <Grid size={{ xs: 12, md: 3 }}>
            <Box mb={2}>
              <Image
              src="/images/Logo.png"
              alt="Your Logo"
              width={100}
              height={40}
            />
            </Box>
            <Typography variant="body2" color="text.secondary">
              Making the world a better place through technology and innovation.
            </Typography>
           
          </Grid>

          {/* Footer links */}
          {footerLinks.map((column) => (
            <Grid size={{ xs: 6, md: 2 }} key={column.title}>
              <Typography variant="subtitle1" gutterBottom>
                {column.title}
              </Typography>
              <Box component="ul" sx={{ listStyle: "none", p: 0, m: 0 }}>
                {column.links.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} style={{ textDecoration: "none" }}>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{
                          "&:hover": {
                            textDecoration: "underline",
                          },
                        }}
                      >
                        {link.name}
                      </Typography>
                    </Link>
                  </li>
                ))}
              </Box>
            </Grid>
          ))}

          <Grid size={{ xs: 12, md: 3 }}>
             <Box sx={{ mt: 2 }}>
              {socialLinks.map((social) => (
                <IconButton
                  key={social.name}
                  component="a"
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  sx={{ mr: 1 }}
                >
                  {social.icon}
                </IconButton>
              ))}
            </Box>
          </Grid>
        </Grid>

        {/* Copyright */}
        <Box
          sx={{ mt: 5, pt: 3, borderTop: "1px solid", borderColor: "divider" }}
        >
          <Typography variant="body2" color="text.secondary" align="center">
            {"Copyright © "}
            <Link href="/" style={{ color: "inherit", textDecoration: "none" }}>
              Your Company
            </Link>{" "}
            {new Date().getFullYear()}
            {"."}
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
