"use client";
import { Box, Container, Grid, Typography, Pagination } from '@mui/material';
import { useState } from 'react';
import HotelCard from '../Custom/HotelCard';
import hotelsData from '@/data/hotelsData.json';

export default function HotelsPage() {
  const [page, setPage] = useState(1);
  const hotelsPerPage = 6;
  
  // Calculate pagination
  const count = Math.ceil(hotelsData.hotels.length / hotelsPerPage);
  const paginatedHotels = hotelsData.hotels.slice(
    (page - 1) * hotelsPerPage,
    page * hotelsPerPage
  );

  const handlePageChange = (event, value) => {
    setPage(value);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Box sx={{ textAlign: 'center', mb: 4 }}>
        <Typography variant="h2" gutterBottom>
          Our Hotels
        </Typography>
        <Typography variant="subtitle1" color="text.secondary">
          Discover the perfect accommodation for your next trip
        </Typography>
      </Box>

      <Grid container spacing={4}>
        {paginatedHotels.map((hotel) => (
          <Grid size={{ xs: 12,sm: 6, md: 4 }} key={hotel.id}>
            <HotelCard hotel={hotel} />
          </Grid>
        ))}
      </Grid>

      {/* Pagination */}
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
        <Pagination
          count={count}
          page={page}
          onChange={handlePageChange}
          color="primary"
          size="large"
          sx={{
            '& .MuiPaginationItem-root': {
              fontSize: '1rem',
            },
          }}
        />
      </Box>
    </Container>
  );
}