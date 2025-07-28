import { Box, Container, Grid, Typography } from '@mui/material';
import React from 'react'
import TravelCard from '../Custom/TravelCard ';

export default function DestinationIndex() {
    const travelData = [
    {
      image: '/images/selling1.png',
      location: 'Rome, Italy',
      price: '$5,42k',
      days: '10 Days Trip',
      slug: "rome-italy",
    },
    {
      image: '/images/selling2.png',
      location: 'London, UK',
      price: '$4.2k',
      days: '12 Days Trip',
      slug: "london-uk",
    },
    {
      image: '/images/selling3.png',
      location: 'Full Europe',
      price: '$15k',
      days: '28 Days Trip',
      slug: "full-europe",
    },
  ];
  return (
    <Container>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          mb: 2,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography variant="h2" gutterBottom>
          Top Destinations
        </Typography>
      </Box>
      <Grid container spacing={4}>
      {travelData.map((item, idx) => (
        <Grid size={{xs: 12, sm: 6, md: 4}} key={idx}>
          <TravelCard {...item} />
        </Grid>
      ))}
    </Grid>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          my: 2,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography variant="h2" gutterBottom>
          Destinations We Offer
        </Typography>
      </Box>
      <Grid container spacing={4}>
      {travelData.map((item, idx) => (
        <Grid size={{xs: 12, sm: 6, md: 4}} key={idx}>
          <TravelCard {...item} />
        </Grid>
      ))}
    </Grid>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          my: 2,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography variant="h2" gutterBottom>
          Destinations you can visit
        </Typography>
      </Box>
      <Grid container spacing={4}>
      {travelData.map((item, idx) => (
        <Grid size={{xs: 12, sm: 6, md: 4}} key={idx}>
          <TravelCard {...item} />
        </Grid>
      ))}
    </Grid>
    </Container>
  )
}
