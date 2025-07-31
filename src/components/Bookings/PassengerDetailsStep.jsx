import {
  Card,
  CardContent,
  Box,
  Button,
  Typography,
  Divider,
  TextField,
  Grid,
  Paper,
  List,
} from "@mui/material";
import { Icon } from "@iconify/react";
import CustomButton from "../Custom/CustomButton";

const PassengerDetailsStep = ({
  selectedFlight,
  bookingDetails,
  handlePassengerChange,
  handleAddPassenger,
  handleRemovePassenger,
  handleBack,
  handleNext,
  formatDate,
  calculateTotal,
}) => {
  return (
    <Card sx={{ boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)", borderRadius: 4 }}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Passenger Information
        </Typography>
        <Typography variant="body2" color="text.secondary" gutterBottom>
          Flight: {selectedFlight.airline} {selectedFlight.flightNumber}
        </Typography>
        <Divider sx={{ my: 2 }} />

        {bookingDetails.passengers.map((passenger, index) => (
          <Paper key={index} variant="outlined" sx={{ p: 2, mb: 2 }}>
            <Typography variant="subtitle2" gutterBottom>
              Passenger {index + 1}
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Full Name"
                  value={passenger.name}
                  onChange={(e) =>
                    handlePassengerChange(index, "name", e.target.value)
                  }
                  required
                />
              </Grid>
              <Grid item xs={12} sm={3}>
                <TextField
                  fullWidth
                  label="Passport Number"
                  value={passenger.passport}
                  onChange={(e) =>
                    handlePassengerChange(index, "passport", e.target.value)
                  }
                  required
                />
              </Grid>
              <Grid item xs={12} sm={3}>
                <TextField
                  fullWidth
                  label="Seat Preference"
                  value={passenger.seat}
                  onChange={(e) =>
                    handlePassengerChange(index, "seat", e.target.value)
                  }
                />
              </Grid>
            </Grid>
            {index > 0 && (
              <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 1 }}>
                <Button
                  color="error"
                  size="small"
                  onClick={() => handleRemovePassenger(index)}
                  startIcon={<Icon icon="mdi:delete" />}
                >
                  Remove
                </Button>
              </Box>
            )}
          </Paper>
        ))}

        <Button
          variant="outlined"
          onClick={handleAddPassenger}
          startIcon={<Icon icon="mdi:plus" />}
          sx={{ mt: 1 }}
        >
          Add Passenger
        </Button>

        <Box sx={{ mt: 4, p: 2, backgroundColor: "#f5f5f5", borderRadius: 1 }}>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography variant="subtitle1">Total Passengers:</Typography>
            <Typography variant="subtitle1">
              {bookingDetails.passengers.length}
            </Typography>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "space-between", mt: 1 }}>
            <Typography variant="subtitle1">Price per passenger:</Typography>
            <Typography variant="subtitle1">${selectedFlight.price}</Typography>
          </Box>
          <Divider sx={{ my: 1 }} />
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography variant="h6">Total Amount:</Typography>
            <Typography variant="h6" fontWeight="bold">
              ${calculateTotal()}
            </Typography>
          </Box>
        </Box>

        <Box sx={{ display: "flex", justifyContent: "space-between", mt: 3 }}>
          <Button
            variant="outlined"
            onClick={handleBack}
            startIcon={<Icon icon="mdi:arrow-left" />}
          >
            Back
          </Button>
          {/* <Button
            variant="contained"
            onClick={handleNext}
            disabled={
              !bookingDetails.passengers.every((p) => p.name && p.passport)
            }
            endIcon={<Icon icon="mdi:arrow-right" />}
          >
            Continue to Payment
          </Button> */}
          <CustomButton
            onClick={handleNext}
            disabled={
              !bookingDetails.passengers.every((p) => p.name && p.passport)
            }
            endIcon={<Icon icon="mdi:arrow-right" />}
          >
            Continue to Payment
          </CustomButton>
        </Box>
      </CardContent>
    </Card>
  );
};

export default PassengerDetailsStep;
