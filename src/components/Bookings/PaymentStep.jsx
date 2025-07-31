import {
  Card,
  CardContent,
  Box,
  Button,
  Typography,
  Divider,
  TextField,
  Grid,
} from "@mui/material";
import { Icon } from "@iconify/react";
import CustomButton from "../Custom/CustomButton";

const PaymentStep = ({
  bookingDetails,
  selectedFlight,
  paymentSuccess,
  handlePaymentChange,
  handleBack,
  handlePaymentSubmit,
  calculateTotal,
}) => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Payment Information
        </Typography>
        <Divider sx={{ mb: 3 }} />

        <Box component="form" onSubmit={handlePaymentSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Card Number"
                value={bookingDetails.payment.cardNumber}
                onChange={(e) =>
                  handlePaymentChange("cardNumber", e.target.value)
                }
                placeholder="1234 5678 9012 3456"
                required
                InputProps={{
                  startAdornment: (
                    <Icon
                      icon="mdi:credit-card"
                      width={24}
                      style={{ marginRight: 8 }}
                    />
                  ),
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Cardholder Name"
                value={bookingDetails.payment.cardName}
                onChange={(e) =>
                  handlePaymentChange("cardName", e.target.value)
                }
                placeholder="As shown on card"
                required
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                label="Expiry Date"
                value={bookingDetails.payment.expiry}
                onChange={(e) => handlePaymentChange("expiry", e.target.value)}
                placeholder="MM/YY"
                required
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                label="CVV"
                value={bookingDetails.payment.cvv}
                onChange={(e) => handlePaymentChange("cvv", e.target.value)}
                placeholder="123"
                required
                type="password"
              />
            </Grid>
          </Grid>

          <Box
            sx={{ mt: 4, p: 2, backgroundColor: "#f5f5f5", borderRadius: 1 }}
          >
            <Typography variant="subtitle1" gutterBottom>
              Order Summary
            </Typography>
            <Box
              sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}
            >
              <Typography>Flight:</Typography>
              <Typography>
                {selectedFlight.airline} {selectedFlight.flightNumber}
              </Typography>
            </Box>
            <Box
              sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}
            >
              <Typography>Passengers:</Typography>
              <Typography>
                {bookingDetails.passengers.length} × ${selectedFlight.price}
              </Typography>
            </Box>
            <Box
              sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}
            >
              <Typography>Taxes & Fees:</Typography>
              <Typography>$42.00</Typography>
            </Box>
            <Divider sx={{ my: 1 }} />
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Typography variant="subtitle1">Total:</Typography>
              <Typography variant="subtitle1" fontWeight="bold">
                ${calculateTotal() + 42}
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
              type="submit"
              variant="contained"
              disabled={paymentSuccess}
              endIcon={
                <Icon
                  icon={paymentSuccess ? "eos-icons:loading" : "mdi:lock"}
                />
              }
            ></Button> */}
            <CustomButton
              type="submit"
              variant="contained"
              disabled={paymentSuccess}
              endIcon={
                <Icon
                  icon={paymentSuccess ? "eos-icons:loading" : "mdi:lock"}
                />
              }
            >
              {paymentSuccess ? "Processing Payment..." : "Confirm Payment"}
            </CustomButton>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default PaymentStep;
