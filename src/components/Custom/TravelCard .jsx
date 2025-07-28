'use client';

import React from 'react';
import Link from 'next/link';
import {
  Box,
  Typography,
  Card,
  CardMedia,
  CardContent,
  Stack,
} from '@mui/material';
import { Icon } from '@iconify/react';

const TravelCard = ({ image, location, price, days, slug }) => {
  return (
    <Link href={`/destinations/${slug}`} style={{ textDecoration: 'none' }}>
      <Card
        elevation={3}
        sx={{
          borderRadius: '34px',
          overflow: 'hidden',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          transition: '0.3s',
          color: 'inherit',
          '&:hover': {
            transform: 'translateY(-5px)',
            boxShadow: '0 12px 30px rgba(47, 46, 46, 0.27)',
          },
           boxShadow: '0 12px 30px rgba(0, 0, 0, 0.05)',
        }}
      >
        <CardMedia
          component="img"
          image={image}
          alt={location}
          sx={{
            objectFit: 'cover',
            height: { xs: 200, sm: 250, md: 300, lg: 380 },
            width: '100%',
            objectPosition: 'top',
          }}
        />
        <CardContent
          sx={{
            flexGrow: 1,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
        >
          <Box>
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              mb={1}
            >
              <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                {location}
              </Typography>
              <Typography
                variant="subtitle2"
                sx={{ fontWeight: 500, color: '#666' }}
              >
                {price}
              </Typography>
            </Box>
            <Stack direction="row" spacing={1} alignItems="center">
              <Icon icon="ion:paper-plane" width={16} height={16} color="#555" />
              <Typography variant="body2" color="text.secondary">
                {days}
              </Typography>
            </Stack>
          </Box>
        </CardContent>
      </Card>
    </Link>
  );
};

export default TravelCard;
