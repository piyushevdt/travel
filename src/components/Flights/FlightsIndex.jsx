"use client";
import { useState } from 'react';
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button,
  Chip,
  Box,
  TextField,
  InputAdornment,
  Pagination,
  Stack,
  Divider
} from '@mui/material';
import { Icon } from '@iconify/react';
import Head from 'next/head';
import Link from 'next/link';
import flightsData from '@/data/flights.json';
import CustomButton from '../Custom/CustomButton';

const FlightsPage = () => {
  const [page, setPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredFlights = flightsData.filter(flight => {
    return (
      flight.airline.toLowerCase().includes(searchTerm.toLowerCase()) ||
      flight.flightNumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
      flight.departure.toLowerCase().includes(searchTerm.toLowerCase()) ||
      flight.arrival.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  const formatDate = (dateString) => {
    const options = { weekday: 'short', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  const itemsPerPage = 4;
  const pageCount = Math.ceil(filteredFlights.length / itemsPerPage);
  const paginatedFlights = filteredFlights.slice(
    (page - 1) * itemsPerPage,
    page * itemsPerPage
  );

  return (
    <>
      <Head>
        <title>Flights | Travel App</title>
        <meta name="description" content="Browse available flights" />
      </Head>

      <Container sx={{ py: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom sx={{ fontWeight: 'bold', mb: 4 }}>
          Available Flights
        </Typography>

        {/* Search */}
        <Box sx={{ mb: 4 }}>
          <TextField
            fullWidth
            variant="outlined"
            placeholder="Search flights..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Icon icon="ic:round-search" width={24} height={24} />
                </InputAdornment>
              ),
            }}
          />
        </Box>

        {/* Flight List */}
        <Grid container spacing={3}>
          {paginatedFlights.length > 0 ? (
            paginatedFlights.map((flight) => (
              <Grid size={{xs: 12}} key={flight.id}>
                <Card sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' } }}>
                  <CardMedia
                    component="img"
                    sx={{ width: { xs: '100%', md: 200 }, height: 200, objectFit: 'cover' }}
                    image={flight.image}
                    alt={flight.airline}
                  />
                  <CardContent sx={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
                      <Typography variant="h6" component="h2">
                        {flight.airline}
                      </Typography>
                      <Typography variant="h6" color="primary" fontWeight="bold">
                        ${flight.price}
                      </Typography>
                    </Box>

                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                      <Box sx={{ textAlign: 'center' }}>
                        <Typography variant="body1" fontWeight="bold">
                          {flight.departure}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {formatDate(flight.departureTime)}
                        </Typography>
                      </Box>

                      <Box sx={{ flex: 1, textAlign: 'center' }}>
                        <Typography variant="body2" color="text.secondary">
                          {flight.duration}
                        </Typography>
                        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                          <Divider sx={{ width: '40%', borderColor: 'text.secondary' }} />
                          <Icon icon="ph:airplane-tilt-fill" width={24} height={24} rotate={1} />
                          <Divider sx={{ width: '40%', borderColor: 'text.secondary' }} />
                        </Box>
                        <Typography variant="body2" color="text.secondary">
                          {flight.stops === 0 ? 'Non-stop' : `${flight.stops} stop${flight.stops > 1 ? 's' : ''}`}
                        </Typography>
                      </Box>

                      <Box sx={{ textAlign: 'center' }}>
                        <Typography variant="body1" fontWeight="bold">
                          {flight.arrival}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {formatDate(flight.arrivalTime)}
                        </Typography>
                      </Box>
                    </Box>

                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 'auto' }}>
                      <Chip
                        label={`Flight #${flight.flightNumber}`}
                        variant="outlined"
                        size="small"
                      />
                      <Link href={`/flights/${flight.id}`} passHref>
                        {/* <Button
                          variant="contained"
                          endIcon={<Icon icon="mdi:arrow-right" />}
                        >
                          View Details
                        </Button> */}
                        <CustomButton endIcon={<Icon icon="mdi:arrow-right" />}>
                          View Details
                        </CustomButton>
                      </Link>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))
          ) : (
            <Grid size={{xs: 12}}>
              <Box sx={{ textAlign: 'center', py: 8 }}>
                <Icon icon="mdi:airplane-off" width={64} height={64} style={{ opacity: 0.5 }} />
                <Typography variant="h6" sx={{ mt: 2 }}>
                  No flights found
                </Typography>
                <Typography variant="body1" color="text.secondary" sx={{ mt: 1 }}>
                  Try adjusting your search
                </Typography>
              </Box>
            </Grid>
          )}
        </Grid>

        {/* Pagination */}
        {filteredFlights.length > itemsPerPage && (
          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
            <Stack spacing={2}>
              <Pagination
                count={pageCount}
                page={page}
                onChange={handlePageChange}
                color="primary"
                shape="rounded"
              />
            </Stack>
          </Box>
        )}
      </Container>
    </>
  );
};

export default FlightsPage;