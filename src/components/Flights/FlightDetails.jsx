"use client";
import { useRouter } from 'next/router';
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
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
  Stepper,
  Step,
  StepLabel,
  Avatar
} from '@mui/material';
import { Icon } from '@iconify/react';
import Head from 'next/head';
import Link from 'next/link';
import flightsData from '@/data/flights.json';

const FlightDetailPage = () => {
  const router = useRouter();
  const { id } = router.query;
  
  // Find the flight in our static data
  const flight = flightsData.find(f => f.id === parseInt(id));

  const formatDate = (dateString) => {
    const options = { weekday: 'short', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  const formatTime = (dateString) => {
    return new Date(dateString).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
  };

  if (!flight) {
    return (
      <Container maxWidth="xl" sx={{ py: 8, textAlign: 'center' }}>
        <Icon icon="mdi:airplane-off" width={64} height={64} style={{ opacity: 0.5 }} />
        <Typography variant="h4" sx={{ mt: 2 }}>
          Flight not found
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mt: 1, mb: 3 }}>
          The flight you're looking for doesn't exist or may have been removed.
        </Typography>
        <Link href="/flights" passHref>
          <Button variant="contained" startIcon={<Icon icon="mdi:arrow-left" />}>
            Back to Flights
          </Button>
        </Link>
      </Container>
    );
  }

  return (
    <>
      <Head>
        <title>{flight.airline} Flight {flight.flightNumber} | Travel App</title>
        <meta name="description" content={`Details for ${flight.airline} flight ${flight.flightNumber}`} />
      </Head>

      <Container maxWidth="xl" sx={{ py: 4 }}>
        <Box sx={{ mb: 4 }}>
          <Link href="/flights" passHref>
            <Button startIcon={<Icon icon="mdi:arrow-left" />} sx={{ mb: 2 }}>
              Back to Flights
            </Button>
          </Link>
          <Typography variant="h4" component="h1" gutterBottom sx={{ fontWeight: 'bold' }}>
            {flight.airline} Flight {flight.flightNumber}
          </Typography>
        </Box>

        <Grid container spacing={4}>
          <Grid item xs={12} md={8}>
            <Card sx={{ mb: 4 }}>
              <CardMedia
                component="img"
                height="300"
                image={flight.image}
                alt={flight.airline}
              />
              <CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                  <Avatar src={flight.airlineLogo} alt={flight.airline} sx={{ width: 56, height: 56, mr: 2 }} />
                  <Box>
                    <Typography variant="h5">{flight.airline}</Typography>
                    <Typography variant="body2" color="text.secondary">
                      {flight.aircraft} • Flight #{flight.flightNumber}
                    </Typography>
                  </Box>
                </Box>

                <Stepper alternativeLabel activeStep={1} sx={{ mb: 4 }}>
                  <Step>
                    <StepLabel>
                      <Typography variant="body2" fontWeight="bold">
                        {flight.departure}
                      </Typography>
                      <Typography variant="caption">
                        {formatTime(flight.departureTime)}
                      </Typography>
                    </StepLabel>
                  </Step>
                  <Step>
                    <StepLabel>
                      <Typography variant="body2" fontWeight="bold">
                        {flight.duration}
                      </Typography>
                      <Typography variant="caption">
                        {flight.stops === 0 ? 'Non-stop' : `${flight.stops} stop${flight.stops > 1 ? 's' : ''}`}
                      </Typography>
                    </StepLabel>
                  </Step>
                  <Step>
                    <StepLabel>
                      <Typography variant="body2" fontWeight="bold">
                        {flight.arrival}
                      </Typography>
                      <Typography variant="caption">
                        {formatTime(flight.arrivalTime)}
                      </Typography>
                    </StepLabel>
                  </Step>
                </Stepper>

                <Grid container spacing={2} sx={{ mb: 3 }}>
                  <Grid item xs={6} sm={3}>
                    <Paper variant="outlined" sx={{ p: 2, textAlign: 'center' }}>
                      <Typography variant="body2" color="text.secondary">
                        Departure
                      </Typography>
                      <Typography variant="h6" fontWeight="bold">
                        {formatDate(flight.departureTime)}
                      </Typography>
                      <Typography variant="body2">
                        {flight.departureTerminal}
                      </Typography>
                    </Paper>
                  </Grid>
                  <Grid item xs={6} sm={3}>
                    <Paper variant="outlined" sx={{ p: 2, textAlign: 'center' }}>
                      <Typography variant="body2" color="text.secondary">
                        Arrival
                      </Typography>
                      <Typography variant="h6" fontWeight="bold">
                        {formatDate(flight.arrivalTime)}
                      </Typography>
                      <Typography variant="body2">
                        {flight.arrivalTerminal}
                      </Typography>
                    </Paper>
                  </Grid>
                  <Grid item xs={6} sm={3}>
                    <Paper variant="outlined" sx={{ p: 2, textAlign: 'center' }}>
                      <Typography variant="body2" color="text.secondary">
                        Duration
                      </Typography>
                      <Typography variant="h6" fontWeight="bold">
                        {flight.duration}
                      </Typography>
                    </Paper>
                  </Grid>
                  <Grid item xs={6} sm={3}>
                    <Paper variant="outlined" sx={{ p: 2, textAlign: 'center' }}>
                      <Typography variant="body2" color="text.secondary">
                        Seats Available
                      </Typography>
                      <Typography variant="h6" fontWeight="bold">
                        {flight.seatsAvailable}
                      </Typography>
                    </Paper>
                  </Grid>
                </Grid>

                <Typography variant="h6" sx={{ mb: 2 }}>
                  Flight Details
                </Typography>
                <Divider sx={{ mb: 2 }} />

                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <List dense>
                      <ListItem>
                        <ListItemIcon>
                          <Icon icon="mdi:airplane" />
                        </ListItemIcon>
                        <ListItemText primary="Aircraft" secondary={flight.aircraft} />
                      </ListItem>
                      <ListItem>
                        <ListItemIcon>
                          <Icon icon="mdi:baggage-checked" />
                        </ListItemIcon>
                        <ListItemText primary="Baggage Allowance" secondary={flight.baggageAllowance} />
                      </ListItem>
                    </List>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <List dense>
                      <ListItem>
                        <ListItemIcon>
                          <Icon icon="mdi:airplane-takeoff" />
                        </ListItemIcon>
                        <ListItemText primary="Departure Terminal" secondary={flight.departureTerminal} />
                      </ListItem>
                      <ListItem>
                        <ListItemIcon>
                          <Icon icon="mdi:airplane-landing" />
                        </ListItemIcon>
                        <ListItemText primary="Arrival Terminal" secondary={flight.arrivalTerminal} />
                      </ListItem>
                    </List>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>

            <Typography variant="h5" sx={{ mb: 2 }}>
              Amenities
            </Typography>
            <Grid container spacing={2} sx={{ mb: 4 }}>
              {flight.amenities.map((amenity, index) => (
                <Grid item xs={6} sm={4} md={3} key={index}>
                  <Paper variant="outlined" sx={{ p: 2, display: 'flex', alignItems: 'center' }}>
                    <Icon 
                      icon={
                        amenity === 'WiFi' ? 'mdi:wifi' :
                        amenity === 'Entertainment' ? 'mdi:television' :
                        amenity === 'Meal' ? 'mdi:food' :
                        amenity === 'USB Charging' ? 'mdi:usb-port' :
                        'mdi:checkbox-marked-circle'
                      } 
                      width={20} 
                      style={{ marginRight: 8 }} 
                    />
                    <Typography variant="body2">{amenity}</Typography>
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </Grid>

          <Grid item xs={12} md={4}>
            <Card variant="outlined" sx={{ position: 'sticky', top: 20 }}>
              <CardContent>
                <Typography variant="h6" sx={{ mb: 2 }}>
                  Booking Summary
                </Typography>
                <Divider sx={{ mb: 2 }} />

                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                  <Typography variant="body1">Flight:</Typography>
                  <Typography variant="body1" fontWeight="bold">
                    {flight.airline} {flight.flightNumber}
                  </Typography>
                </Box>

                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                  <Typography variant="body1">Route:</Typography>
                  <Typography variant="body1" fontWeight="bold">
                    {flight.departure} → {flight.arrival}
                  </Typography>
                </Box>

                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                  <Typography variant="body1">Date:</Typography>
                  <Typography variant="body1" fontWeight="bold">
                    {formatDate(flight.departureTime)}
                  </Typography>
                </Box>

                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 3 }}>
                  <Typography variant="body1">Duration:</Typography>
                  <Typography variant="body1" fontWeight="bold">
                    {flight.duration}
                  </Typography>
                </Box>

                <Divider sx={{ mb: 2 }} />

                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
                  <Typography variant="h6">Total:</Typography>
                  <Typography variant="h5" color="primary" fontWeight="bold">
                    ${flight.price}
                  </Typography>
                </Box>

                <Button 
                  variant="contained" 
                  fullWidth 
                  size="large"
                  startIcon={<Icon icon="mdi:ticket-confirmation" />}
                  sx={{ mt: 2 }}
                >
                  Book Now
                </Button>

                <Button 
                  variant="outlined" 
                  fullWidth 
                  size="large"
                  startIcon={<Icon icon="mdi:heart-outline" />}
                  sx={{ mt: 2 }}
                >
                  Save for Later
                </Button>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default FlightDetailPage;