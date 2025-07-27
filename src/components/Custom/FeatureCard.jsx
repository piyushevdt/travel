"use client";

import { Box, Typography, Paper } from "@mui/material";
import Image from "next/image";
import React from "react";

const FeatureCard = ({ icon, title, description }) => {
  return (
    <Box sx={{ position: "relative", height: "100%" }}>
      <Paper
        elevation={0}
        sx={{
          textAlign: "center",
          px: 4,
          py:6,
          borderRadius: 4,
          position: "relative",
          transition: "all 0.3s ease",
          backgroundColor: "transparent",
          boxShadow: "none",
          zIndex: 2,
          "&:hover": {
            backgroundColor: "white",
            boxShadow: "0 10px 20px rgba(0, 0, 0, 0.14)",
            zIndex: 10,
            borderRadius: "36px"
          },
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          height: "100%",
        }}
      >
        <Box mb={2}>{icon}</Box>

        <Typography
          variant="h5"
          sx={{ fontWeight: 600, mb: 1, color: "#0F1F3D" }}
        >
          {title}
        </Typography>

        <Typography
          variant="body1"
          sx={{ color: "text.secondary", maxWidth: 200, mx: "auto" }}
        >
          {description}
        </Typography>
      </Paper>

      <Box
        sx={{
          position: "absolute",
          bottom: -20,
          left: -20,
          zIndex: 1,
          opacity: 0,
          transition: "all 0.5s ease",
          ".MuiPaper-root:hover ~ &": {
            opacity: 1,
          },
        }}
      >
        <Image
          src="images/featureCardHover.svg"
          alt="Feature Card Hover"
          width={64}
          height={64}
        />
      </Box>
    </Box>
  );
};

export default FeatureCard;
