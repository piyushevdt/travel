import { Card, CardContent, Box, Button, Typography, Divider, Avatar, Grid, Paper, List, ListItem, ListItemText, Alert } from '@mui/material';
import { Icon } from '@iconify/react';
import Link from 'next/link';
import CustomButton from '../Custom/CustomButton';

const ConfirmationStep = ({ selectedFlight, bookingDetails, formatDate }) => {
  return (
    <Card>
      <CardContent sx={{ textAlign: 'center', py: 4 }}>
        <Box sx={{ 
          display: 'inline-flex', 
          p: 2, 
          mb: 3, 
          backgroundColor: '#4caf50', 
          borderRadius: '50%',
          color: 'white'
        }}>
          <Icon icon="mdi:check" width={48} height={48} />
        </Box>
        <Typography variant="h4" gutterBottom>
          Booking Confirmed!
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
          Your flight booking has been successfully completed.
        </Typography>

        <Alert severity="success" sx={{ mb: 3, textAlign: 'left' }}>
          <Typography variant="subtitle2">Booking Reference: BOOK-{Math.floor(100000 + Math.random() * 900000)}</Typography>
          <Typography variant="body2">An email confirmation has been sent to your registered email address.</Typography>
        </Alert>

        <Paper variant="outlined" sx={{ p: 3, mb: 3, textAlign: 'left' }}>
          <Typography variant="h6" gutterBottom>
            Flight Details
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
            <Avatar src={selectedFlight.airlineLogo} alt={selectedFlight.airline} sx={{ width: 40, height: 40, mr: 2 }} />
            <Box>
              <Typography variant="body1" fontWeight="bold">
                {selectedFlight.airline} {selectedFlight.flightNumber}
              </Typography>
              <Typography variant="body2">
                {selectedFlight.departure} → {selectedFlight.arrival}
              </Typography>
            </Box>
          </Box>

          <Grid container spacing={2} sx={{ mb: 2 }}>
            <Grid item xs={12} sm={6}>
              <Typography variant="body2" fontWeight="bold">
                Departure
              </Typography>
              <Typography variant="body2">
                {formatDate(selectedFlight.departureTime)}
              </Typography>
              <Typography variant="body2">
                {selectedFlight.departureTerminal}
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant="body2" fontWeight="bold">
                Arrival
              </Typography>
              <Typography variant="body2">
                {formatDate(selectedFlight.arrivalTime)}
              </Typography>
              <Typography variant="body2">
                {selectedFlight.arrivalTerminal}
              </Typography>
            </Grid>
          </Grid>

          <Typography variant="subtitle2" gutterBottom>
            Passengers ({bookingDetails.passengers.length})
          </Typography>
          <List dense>
            {bookingDetails.passengers.map((passenger, index) => (
              <ListItem key={index} sx={{ py: 0 }}>
                <ListItemText
                  primary={passenger.name}
                  secondary={
                    <>
                      Passport: {passenger.passport}
                      {passenger.seat && ` • Seat: ${passenger.seat}`}
                    </>
                  }
                />
              </ListItem>
            ))}
          </List>
        </Paper>

        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
          {/* <Button
            variant="contained"
            component={Link}
            href="/bookings"
            startIcon={<Icon icon="mdi:ticket-confirmation" />}
          >
            View My Bookings
          </Button> */}
          <CustomButton
            variant="contained"
            component={Link}
            href="/bookings"
            startIcon={<Icon icon="mdi:ticket-confirmation" />}
          >
            View My Bookings
          </CustomButton>
          <Button
            variant="outlined"
            component={Link}
            href="/flights"
            startIcon={<Icon icon="mdi:airplane" />}
          >
            Book Another Flight
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default ConfirmationStep;