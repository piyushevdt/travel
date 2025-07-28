import { Box, Container, Grid, Typography, List, ListItem, ListItemText, Divider, Chip, Stack } from '@mui/material';
import Image from 'next/image';
import travelData from '@/data/travelData.json'; // Assuming you have a JSON file with destination data

export default function DestinationDetail({ params }) {
  const { slug } = params;
  const destination = travelData.destination.find(item => item.slug === slug);

  if (!destination) {
    return <Typography>Destination not found</Typography>;
  }

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Grid container spacing={4}>
        <Grid size={{ xs: 12, md: 8 }} >
          <Box sx={{ mb: 4 }}>
            <Typography variant="h3" gutterBottom>
              {destination.location}
            </Typography>
            <Stack direction="row" spacing={2} sx={{ mb: 2 }}>
              <Chip label={destination.days} color="primary" />
              <Chip label={destination.price} variant="outlined" />
            </Stack>
            <Box sx={{ position: 'relative', height: '400px', borderRadius: 2, overflow: 'hidden' }}>
              <Image
                src={destination.image}
                alt={destination.location}
                fill
                style={{ objectFit: 'cover' }}
                priority
              />
            </Box>
          </Box>

          <Typography variant="h5" gutterBottom>
            About This Trip
          </Typography>
          <Typography paragraph>
            {destination.description}
          </Typography>

          {destination.highlights && (
            <>
              <Typography variant="h5" gutterBottom sx={{ mt: 4 }}>
                Trip Highlights
              </Typography>
              <List>
                {destination.highlights.map((highlight, index) => (
                  <ListItem key={index}>
                    <ListItemText primary={highlight} />
                  </ListItem>
                ))}
              </List>
            </>
          )}
        </Grid>

        <Grid size={{ xs: 12, md: 4 }}>
          <Box sx={{ position: 'sticky', top: 20 }}>
            <Box sx={{ p: 3, borderRadius: 4, boxShadow: "0 10px 20px rgba(0, 0, 0, 0.1)" }}>
              <Typography variant="h6" gutterBottom>
                Trip Summary
              </Typography>
              <Divider sx={{ my: 2 }} />
              <List>
                <ListItem>
                  <ListItemText primary="Destination" secondary={destination.location} />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Duration" secondary={destination.days} />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Price" secondary={destination.price} />
                </ListItem>
              </List>

              <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
                Included
              </Typography>
              <Divider sx={{ my: 2 }} />
              {destination.included ? (
                <List dense>
                  {destination.included.map((item, index) => (
                    <ListItem key={index}>
                      <ListItemText primary={item} />
                    </ListItem>
                  ))}
                </List>
              ) : (
                <Typography variant="body2">Please inquire for details</Typography>
              )}
            </Box>
          </Box>
        </Grid>
      </Grid>

      {destination.itinerary && (
        <Box sx={{ mt: 6 }}>
          <Typography variant="h4" gutterBottom>
            Itinerary
          </Typography>
          <Divider sx={{ mb: 4 }} />
          <Grid container spacing={3}>
            {destination.itinerary.map((day) => (
              <Grid item xs={12} md={6} key={day.day}>
                <Box sx={{ p: 3, borderRadius: 4, boxShadow: "0 10px 20px rgba(0, 0, 0, 0.1)", height: '100%' }}>
                  <Typography variant="h6">
                    Day {day.day}: {day.title}
                  </Typography>
                  <Typography variant="body1" sx={{ mt: 1 }}>
                    {day.description}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      )}
    </Container>
  );
}

export async function generateStaticParams() {
  return travelData.destination.map((destination) => ({
    slug: destination.slug,
  }));
}