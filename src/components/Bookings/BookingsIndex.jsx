"use client";
import { useState } from 'react';
import { Container, Typography } from '@mui/material';
import Head from 'next/head';
import flightsData from '@/data/flights.json';
import FlightSelectionStep from './FlightSelectionStep';
import PassengerDetailsStep from './PassengerDetailsStep';
import PaymentStep from './PaymentStep';
import ConfirmationStep from './ConfirmationStep';
import BookingStepper from './BookingStepper';


const BookingsIndex = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [bookingDetails, setBookingDetails] = useState({
    flightId: null,
    passengers: [
      { name: '', passport: '', seat: '' }
    ],
    payment: {
      cardNumber: '',
      cardName: '',
      expiry: '',
      cvv: ''
    }
  });
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [selectedFlight, setSelectedFlight] = useState(null);

  const handleNext = () => {
    setActiveStep((prev) => prev + 1);
  };

  const handleBack = () => {
    setActiveStep((prev) => prev - 1);
  };

  const handlePassengerChange = (index, field, value) => {
    const updatedPassengers = [...bookingDetails.passengers];
    updatedPassengers[index][field] = value;
    setBookingDetails({...bookingDetails, passengers: updatedPassengers});
  };

  const handlePaymentChange = (field, value) => {
    setBookingDetails({
      ...bookingDetails,
      payment: { ...bookingDetails.payment, [field]: value }
    });
  };

  const handleFlightSelect = (flight) => {
    setSelectedFlight(flight);
    setBookingDetails({...bookingDetails, flightId: flight.id});
    handleNext();
  };

  const handleAddPassenger = () => {
    setBookingDetails({
      ...bookingDetails,
      passengers: [...bookingDetails.passengers, { name: '', passport: '', seat: '' }]
    });
  };

  const handleRemovePassenger = (index) => {
    const updatedPassengers = [...bookingDetails.passengers];
    updatedPassengers.splice(index, 1);
    setBookingDetails({...bookingDetails, passengers: updatedPassengers});
  };

  const handlePaymentSubmit = (e) => {
    e.preventDefault();
    setPaymentSuccess(true);
    setTimeout(() => {
      handleNext();
    }, 2000);
  };

  const formatDate = (dateString) => {
    const options = { weekday: 'short', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  const calculateTotal = () => {
    if (!selectedFlight) return 0;
    return selectedFlight.price * bookingDetails.passengers.length;
  };

  const steps = [
    'Select Flight',
    'Passenger Details',
    'Payment',
    'Confirmation'
  ];

  return (
    <>
      <Head>
        <title>Book Flights | Travel App</title>
      </Head>

      <Container sx={{ py: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom sx={{ fontWeight: 'bold', mb: 4 }}>
          Flight Booking
        </Typography>

        <BookingStepper activeStep={activeStep} steps={steps} />

        {activeStep === 0 && (
          <FlightSelectionStep 
            flightsData={flightsData}
            selectedFlight={selectedFlight}
            handleFlightSelect={handleFlightSelect}
            formatDate={formatDate}
          />
        )}

        {activeStep === 1 && selectedFlight && (
          <PassengerDetailsStep
            selectedFlight={selectedFlight}
            bookingDetails={bookingDetails}
            handlePassengerChange={handlePassengerChange}
            handleAddPassenger={handleAddPassenger}
            handleRemovePassenger={handleRemovePassenger}
            handleBack={handleBack}
            handleNext={handleNext}
            formatDate={formatDate}
            calculateTotal={calculateTotal}
          />
        )}

        {activeStep === 2 && selectedFlight && (
          <PaymentStep
            bookingDetails={bookingDetails}
            selectedFlight={selectedFlight}
            paymentSuccess={paymentSuccess}
            handlePaymentChange={handlePaymentChange}
            handleBack={handleBack}
            handlePaymentSubmit={handlePaymentSubmit}
            calculateTotal={calculateTotal}
          />
        )}

        {activeStep === 3 && selectedFlight && (
          <ConfirmationStep
            selectedFlight={selectedFlight}
            bookingDetails={bookingDetails}
            formatDate={formatDate}
          />
        )}
      </Container>
    </>
  );
};

export default BookingsIndex;