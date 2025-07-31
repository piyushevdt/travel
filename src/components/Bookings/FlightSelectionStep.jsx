import {
  Card,
  CardContent,
  Box,
  Button,
  Typography,
  Avatar,
  Grid,
  Icon,
} from "@mui/material";
import CustomButton from "../Custom/CustomButton";

const FlightSelectionStep = ({
  flightsData,
  selectedFlight,
  handleFlightSelect,
  formatDate,
}) => {
  return (
    <Grid container spacing={3}>
      {flightsData.map((flight) => (
        <Grid size={{ xs: 12 }} key={flight.id}>
          <Card
            sx={{
            //   cursor: "pointer",
              border:
                selectedFlight?.id === flight.id
                  ? "2px solid #1976d2"
                  : "1px solid #e0e0e0",
              boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
              borderRadius: 4,
            }}
            // onClick={() => handleFlightSelect(flight)}
          >
            <CardContent
              sx={{
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  mb: { xs: 2, md: 0 },
                  mr: { md: 3 },
                }}
              >
                <Avatar
                  src={flight.airlineLogo}
                  alt={flight.airline}
                  sx={{ width: 60, height: 60, mr: 2 }}
                />
                <Box>
                  <Typography variant="h6">{flight.airline}</Typography>
                  <Typography variant="body2">
                    Flight #{flight.flightNumber}
                  </Typography>
                  <Typography variant="body2">{flight.aircraft}</Typography>
                </Box>
              </Box>

              <Box
                sx={{
                  flex: 1,
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Box sx={{ textAlign: "center" }}>
                  <Typography variant="h6">{flight.departure}</Typography>
                  <Typography variant="body2">
                    {formatDate(flight.departureTime)}
                  </Typography>
                  <Typography variant="body2">
                    {flight.departureTerminal}
                  </Typography>
                </Box>

                <Box sx={{ textAlign: "center", mx: 2 }}>
                  <Typography variant="body2">{flight.duration}</Typography>
                  <Icon icon="ph:airplane-tilt-fill" width={24} />
                  <Typography variant="body2">
                    {flight.stops === 0
                      ? "Non-stop"
                      : `${flight.stops} stop${flight.stops > 1 ? "s" : ""}`}
                  </Typography>
                </Box>

                <Box sx={{ textAlign: "center" }}>
                  <Typography variant="h6">{flight.arrival}</Typography>
                  <Typography variant="body2">
                    {formatDate(flight.arrivalTime)}
                  </Typography>
                  <Typography variant="body2">
                    {flight.arrivalTerminal}
                  </Typography>
                </Box>
              </Box>

              <Box sx={{ ml: { md: 3 }, textAlign: "right" }}>
                <Typography
                  variant="h5"
                  color="primary"
                  sx={{ fontWeight: "bold" }}
                >
                  ${flight.price}
                </Typography>
                <Typography variant="body2">
                  {flight.seatsAvailable} seats left
                </Typography>
                {/* <Button
                  variant="outlined"
                  sx={{ mt: 1 }}
                  onClick={(e) => {
                    e.stopPropagation();
                    handleFlightSelect(flight);
                  }}
                >
                  Select
                </Button> */}
                <CustomButton
                  sx={{ mt: 1, p: "5px 3px" }}
                  onClick={(e) => {
                    e.stopPropagation();
                    handleFlightSelect(flight);
                  }}
                >
                  Select
                </CustomButton>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default FlightSelectionStep;
