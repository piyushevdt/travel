"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Box, TextField, Button, Typography, Container } from "@mui/material";
import { authenticateUser, storeAuthToken } from "@/utils/auth";
import Link from "next/link";
import CustomButton from "../Custom/CustomButton";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    const result = authenticateUser(email, password);

    if (result.success) {
      storeAuthToken(result.token, result.user);
      router.push("/"); // Redirect to home after login
    } else {
      setError(result.message);
    }
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 8 }}>
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 3,
          p: 4,
          boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
          borderRadius: 4,
          backgroundColor: "background.paper",
        }}
      >
        <Typography variant="h4" component="h1" textAlign="center">
          Login
        </Typography>

        {error && (
          <Typography color="error" textAlign="center">
            {error}
          </Typography>
        )}

        <TextField
          label="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          fullWidth
        />

        <TextField
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          fullWidth
        />
        <CustomButton type="submit">Login</CustomButton>

        <Typography textAlign="center">
          Don't have an account? <Link href="/signup">Sign up</Link>
        </Typography>
      </Box>
    </Container>
  );
}
