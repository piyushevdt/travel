"use client";
import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
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
  Divider,
  Avatar,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Alert,
  Skeleton,
  Paper
} from '@mui/material';
import { Icon } from '@iconify/react';
import Head from 'next/head';
import Link from 'next/link';
import flightsData from '@/data/flights.json';
import CustomButton from '@/components/Custom/CustomButton';

const FlightDetailsPage = () => {
  const params = useParams();
  const router = useRouter();
  const [flight, setFlight] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedSeats, setSelectedSeats] = useState([]);

  useEffect(() => {
    // Get flight ID from slug
    const flightId = parseInt(params.id);
    
    // Find flight in data
    const foundFlight = flightsData.find(f => f.id === flightId);
    
    if (foundFlight) {
      setFlight(foundFlight);
    }
    
    setLoading(false);
  }, [params.id]);

  const formatDate = (dateString) => {
    const options = { 
      weekday: 'long', 
      year: 'numeric',
      month: 'long', 
      day: 'numeric', 
      hour: '2-digit', 
      minute: '2-digit' 
    };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  const formatTime = (dateString) => {
    const options = { hour: '2-digit', minute: '2-digit' };
    return new Date(dateString).toLocaleTimeString('en-US', options);
  };

  const getAmenityIcon = (amenity) => {
    const iconMap = {
      'WiFi': 'mdi:wifi',
      'Entertainment': 'mdi:play-circle-outline',
      'Meal': 'mdi:food',
      'Snack': 'mdi:cookie',
      'USB Charging': 'mdi:usb-port'
    };
    return iconMap[amenity] || 'mdi:check-circle';
  };

  const handleBookFlight = () => {
    // In a real app, this would navigate to booking page
    alert(`Booking flight ${flight.flightNumber} for $${flight.price}`);
  };

  if (loading) {
    return (
      <Container sx={{ py: 4 }}>
        <Skeleton variant="text" width="60%" height={60} />
        <Skeleton variant="rectangular" width="100%" height={400} sx={{ mt: 2 }} />
        <Skeleton variant="text" width="100%" height={200} sx={{ mt: 2 }} />
      </Container>
    );
  }

  if (!flight) {
    return (
      <>
        <Head>
          <title>Flight Not Found | Travel App</title>
        </Head>
        <Container sx={{ py: 4 }}>
          <Box sx={{ textAlign: 'center', py: 8 }}>
            <Icon icon="mdi:airplane-off" width={64} height={64} style={{ opacity: 0.5 }} />
            <Typography variant="h4" sx={{ mt: 2, mb: 1 }}>
              Flight Not Found
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
              The flight you&apos;re looking for doesn&apos;t exist or has been removed.
            </Typography>
            <Link href="/flights" passHref>
              <Button variant="contained" startIcon={<Icon icon="mdi:arrow-left" />}>
                Back to Flights
              </Button>
            </Link>
          </Box>
        </Container>
      </>
    );
  }

  return (
    <>
      <Head>
        <title>{`${flight.airline} ${flight.flightNumber} | Travel App`}</title>
        <meta name="description" content={`Flight details for ${flight.airline} ${flight.flightNumber} from ${flight.departure} to ${flight.arrival}`} />
      </Head>

      <Container sx={{ py: 4 }}>
        {/* Back Button */}
        <Box sx={{ mb: 3 }}>
          <Link href="/flights" passHref>
            <Button startIcon={<Icon icon="mdi:arrow-left" />} variant="text">
              Back to Flights
            </Button>
          </Link>
        </Box>

        {/* Flight Header */}
        <Card sx={{ mb: 4, boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)", borderRadius: 4 }}>
          <CardContent>
            <Grid container spacing={3} alignItems="center">
              <Grid size={{ xs: 12, md: 3 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  <Avatar
                    src={flight.airlineLogo}
                    alt={flight.airline}
                    sx={{ width: 60, height: 60 }}
                  />
                  <Box>
                    <Typography variant="h4" component="h1" fontWeight="bold">
                      {flight.airline}
                    </Typography>
                    <Typography variant="h6" color="text.secondary">
                      Flight {flight.flightNumber}
                    </Typography>
                  </Box>
                </Box>
              </Grid>
              
              <Grid size={{ xs: 12, md: 6 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 3 }}>
                  <Box sx={{ textAlign: 'center' }}>
                    <Typography variant="h3" fontWeight="bold">
                      {flight.departure}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {formatTime(flight.departureTime)}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {flight.departureTerminal}
                    </Typography>
                  </Box>

                  <Box sx={{ textAlign: 'center', flex: 1 }}>
                    <Typography variant="body2" color="text.secondary">
                      {flight.duration}
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', my: 1 }}>
                      <Divider sx={{ width: '30%' }} />
                      <Icon icon="ph:airplane-tilt-fill" width={32} height={32} rotate={1} />
                      <Divider sx={{ width: '30%' }} />
                    </Box>
                    <Typography variant="body2" color="text.secondary">
                      {flight.stops === 0 ? 'Non-stop' : `${flight.stops} stop${flight.stops > 1 ? 's' : ''}`}
                    </Typography>
                  </Box>

                  <Box sx={{ textAlign: 'center' }}>
                    <Typography variant="h3" fontWeight="bold">
                      {flight.arrival}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {formatTime(flight.arrivalTime)}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {flight.arrivalTerminal}
                    </Typography>
                  </Box>
                </Box>
              </Grid>

              <Grid size={{ xs: 12, md: 3 }} >
                <Box sx={{ textAlign: { xs: 'center', md: 'right' } }}>
                  <Typography variant="h3" color="primary" fontWeight="bold">
                    ${flight.price}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                    per person
                  </Typography>
                  {/* <Button
                    variant="contained"
                    size="large"
                    fullWidth
                    onClick={handleBookFlight}
                    sx={{ mb: 1 }}
                  >
                    Book Now
                  </Button> */}
                  <CustomButton onClick={handleBookFlight} sx={{ mb: 1 }}>
                    Book Now
                  </CustomButton>
                  <Typography variant="body2" color="success.main">
                    {flight.seatsAvailable} seats available
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </CardContent>
        </Card>

        <Grid container spacing={4}>
          {/* Flight Image */}
          <Grid size={{ xs: 12, md: 8 }}>
            <Card sx={{ mb: 4, boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)", borderRadius: 4 }}>
              <CardMedia
                component="img"
                height="300"
                image={flight.image}
                alt={flight.airline}
                sx={{ objectFit: 'cover' }}
              />
            </Card>

            {/* Flight Details */}
            <Card sx={{boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)", borderRadius: 4}}>
              <CardContent>
                <Typography variant="h5" gutterBottom fontWeight="bold">
                  Flight Details
                </Typography>
                
                <Grid container spacing={3}>
                  <Grid size={{ xs: 12, sm: 6 }}>
                    <Paper sx={{ p: 2, bgcolor: 'grey.50', boxShadow: "0 4px 20px rgba(0, 0, 0, 0.26)", borderRadius: 4 }}>
                      <Typography variant="h6" gutterBottom>
                        Departure
                      </Typography>
                      <Typography variant="body1">
                        <strong>{formatDate(flight.departureTime)}</strong>
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        From {flight.departure} - {flight.departureTerminal}
                      </Typography>
                    </Paper>
                  </Grid>
                  
                  <Grid size={{ xs: 12, sm: 6 }}>
                    <Paper sx={{ p: 2, bgcolor: 'grey.50', boxShadow: "0 4px 20px rgba(0, 0, 0, 0.26)", borderRadius: 4 }}>
                      <Typography variant="h6" gutterBottom>
                        Arrival
                      </Typography>
                      <Typography variant="body1">
                        <strong>{formatDate(flight.arrivalTime)}</strong>
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        To {flight.arrival} - {flight.arrivalTerminal}
                      </Typography>
                    </Paper>
                  </Grid>
                  
                  <Grid size={{ xs: 12, sm: 6 }}>
                    <Typography variant="h6" gutterBottom>
                      Aircraft Information
                    </Typography>
                    <Typography variant="body1">
                      <strong>Aircraft:</strong> {flight.aircraft}
                    </Typography>
                    <Typography variant="body1">
                      <strong>Flight Duration:</strong> {flight.duration}
                    </Typography>
                  </Grid>
                  
                  <Grid size={{ xs: 12, sm: 6 }}>
                    <Typography variant="h6" gutterBottom>
                      Baggage Allowance
                    </Typography>
                    <Typography variant="body1">
                      {flight.baggageAllowance}
                    </Typography>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>

          {/* Sidebar */}
          <Grid size={{ xs: 12, md: 4 }}>
            {/* Amenities */}
            <Card sx={{ mb: 3, boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)", borderRadius: 4 }}>
              <CardContent>
                <Typography variant="h6" gutterBottom fontWeight="bold">
                  In-Flight Amenities
                </Typography>
                <List dense>
                  {flight.amenities.map((amenity, index) => (
                    <ListItem key={index} sx={{ px: 0 }}>
                      <ListItemIcon sx={{ minWidth: 36 }}>
                        <Icon icon={getAmenityIcon(amenity)} width={20} height={20} />
                      </ListItemIcon>
                      <ListItemText primary={amenity} />
                    </ListItem>
                  ))}
                </List>
              </CardContent>
            </Card>

            {/* Booking Summary */}
            <Card sx={{ boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)", borderRadius: 4}}>
              <CardContent>
                <Typography variant="h6" gutterBottom fontWeight="bold">
                  Booking Summary
                </Typography>
                
                <Box sx={{ mb: 2 }}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                    <Typography variant="body2">Base Fare</Typography>
                    <Typography variant="body2">${flight.price}</Typography>
                  </Box>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                    <Typography variant="body2">Taxes & Fees</Typography>
                    <Typography variant="body2">$45</Typography>
                  </Box>
                  <Divider sx={{ my: 1 }} />
                  <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Typography variant="h6" fontWeight="bold">Total</Typography>
                    <Typography variant="h6" fontWeight="bold" color="primary">
                      ${flight.price + 45}
                    </Typography>
                  </Box>
                </Box>

                <Alert severity="info" sx={{ mb: 2 }}>
                  Price includes all taxes and fees
                </Alert>

                <CustomButton fullWidth onClick={handleBookFlight}
                  startIcon={<Icon icon="mdi:airplane" />}>
                    Book This Flight
                </CustomButton>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default FlightDetailsPage;