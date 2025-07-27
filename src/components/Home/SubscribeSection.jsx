"use client";

import React from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  InputAdornment,
  Paper,
} from "@mui/material";
import { Icon } from "@iconify/react";
import CustomButton from "../Custom/CustomButton";

const SubscribeSection = () => {
  return (
    <Paper
      elevation={0}
      sx={{
        backgroundColor: "#c8b9f865", 
        borderRadius: "102px 22px 22px 22px",
        py: { xs: 6, md: 10 },
        px: { xs: 4, md: 8 },
        textAlign: "center",
        position: "relative",
        // overflow: 'hidden',
      }}
    >
      {/* Heading */}
      <Typography
        variant="h5"
        sx={{
          fontWeight: 600,
          color: "#3f3d56",
          maxWidth: "700px",
          mx: "auto",
          mb: 4,
          fontSize: { xs: "1.25rem", sm: "1.5rem", md: "2rem" },
        }}
      >
        Subscribe to get information, latest news and other interesting offers
        about Jadoo
      </Typography>

      {/* Input and Button */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: 2,
          flexDirection: { xs: "column", sm: "row" },
          alignItems: "center",
        }}
      >
        <TextField
        size="medium"
          variant="outlined"
          placeholder="Your email"
          fullWidth
          required
          sx={{
            maxWidth: 400,
            backgroundColor: "#fff",
            borderRadius: 2,
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Icon icon="material-symbols-light:mail-outline" width={20} color="#3f3d56" />
              </InputAdornment>
            ),
          }}
        />

        <CustomButton  type="submit">
          Subscribe
        </CustomButton>
      </Box>

      {/* Optional: Floating Icon (Top-Right) */}
      <Box
        sx={{
          position: "absolute",
          top: "-20px",
          right: "-20px",
          width: 60,
          height: 60,
          background: "linear-gradient(135deg, #7f56d9, #5e60ce)",
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Icon icon="ion:paper-plane" color="#fff" width={24} />
      </Box>
    </Paper>
  );
};

export default SubscribeSection;
