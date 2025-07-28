'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Box, TextField, Button, Typography, Container } from '@mui/material';
import Link from 'next/link';
import CustomButton from '../Custom/CustomButton';

export default function SignupPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [error, setError] = useState('');
  const router = useRouter();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    // In a real app, you would send this data to your backend
    // For this demo, we'll just log it and redirect to login
    console.log('Signup data:', formData);
    router.push('/login');
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 8 }}>
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 3,
          p: 4,
          boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
          borderRadius: 4,
          backgroundColor: 'background.paper'
        }}
      >
        <Typography variant="h4" component="h1" textAlign="center">
          Sign Up
        </Typography>
        
        {error && (
          <Typography color="error" textAlign="center">
            {error}
          </Typography>
        )}

        <TextField
          label="Full Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          fullWidth
        />

        <TextField
          label="Email"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          fullWidth
        />

        <TextField
          label="Password"
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
          fullWidth
        />

        <TextField
          label="Confirm Password"
          type="password"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
          required
          fullWidth
        />

        <CustomButton type="submit">
            Sign Up
        </CustomButton>

        <Typography textAlign="center">
          Already have an account? <Link href="/login">Login</Link>
        </Typography>
      </Box>
    </Container>
  );
}