import { Box, Container, Grid, Typography, List, ListItem, ListItemText, Divider, Chip, Rating, Avatar, Card, CardContent, Button } from '@mui/material';
import Image from 'next/image';
import hotelsData from '@/data/hotelsData.json';
import CustomButton from '../Custom/CustomButton';

export default function HotelDetailPage({ params }) {
  const { slug } = params;
  const hotel = hotelsData.hotels.find(h => h.slug === slug);

  if (!hotel) {
    return (
      <Container>
        <Typography variant="h4">Hotel not found</Typography>
      </Container>
    );
  }

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Grid container spacing={4}>
        <Grid size={{ xs: 12, md: 8 }}>
          <Typography variant="h3" gutterBottom>
            {hotel.name}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" gutterBottom>
            {hotel.location}
          </Typography>
          
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
            <Rating value={hotel.rating} precision={0.1} readOnly />
            <Typography variant="body1" sx={{ ml: 1 }}>
              {hotel.rating} ({hotel.reviews?.length || 0} reviews)
            </Typography>
            <Chip label={hotel.price} color="primary" sx={{ ml: 2 }} />
          </Box>

          <Box sx={{ position: 'relative', height: '400px', borderRadius: 2, overflow: 'hidden', mb: 4 }}>
            <Image
              src={hotel.image}
              alt={hotel.name}
              fill
              style={{ objectFit: 'cover' }}
              priority
            />
          </Box>

          <Typography variant="h5" gutterBottom>
            About This Hotel
          </Typography>
          <Typography paragraph>
            {hotel.description}
          </Typography>

          <Typography variant="h5" gutterBottom sx={{ mt: 4 }}>
            Amenities
          </Typography>
          <Grid container spacing={2} sx={{ mb: 4 }}>
            {hotel.amenities.map((amenity, index) => (
              <Grid size={{ xs: 6, sm: 4 }} key={index}>
                <Chip label={amenity} sx={{ width: '100%' }} />
              </Grid>
            ))}
          </Grid>

          <Typography variant="h5" gutterBottom>
            Room Types
          </Typography>
          <Grid container spacing={3} sx={{ mb: 4 }}>
            {hotel.rooms.map((room, index) => (
              <Grid size={{ xs: 12, sm: 6 }} key={index}>
                <Card variant="outlined" sx={{borderRadius: 4, boxShadow: "0 5px 10px rgba(0, 0, 0, 0.1)"}}>
                  <CardContent>
                    <Typography variant="h6" gutterBottom>
                      {room.type}
                    </Typography>
                    <Typography variant="h5" color="primary" gutterBottom>
                      {room.price}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" gutterBottom>
                      {room.size} • {room.beds}
                    </Typography>
                    <List dense>
                      {room.amenities.map((item, i) => (
                        <ListItem key={i}>
                          <ListItemText primary={item} />
                        </ListItem>
                      ))}
                    </List>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>

          {hotel.reviews && hotel.reviews.length > 0 && (
            <>
              <Typography variant="h5" gutterBottom>
                Guest Reviews
              </Typography>
              <Box sx={{ mb: 4 }}>
                {hotel.reviews.map((review, index) => (
                  <Box key={index} sx={{ mb: 3 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                      <Avatar sx={{ mr: 2 }}>{review.author.charAt(0)}</Avatar>
                      <Box>
                        <Typography variant="subtitle1">{review.author}</Typography>
                        <Rating value={review.rating} precision={0.5} readOnly size="small" />
                      </Box>
                    </Box>
                    <Typography variant="body1">{review.comment}</Typography>
                    {index < hotel.reviews.length - 1 && <Divider sx={{ my: 2 }} />}
                  </Box>
                ))}
              </Box>
            </>
          )}
        </Grid>

        <Grid size={{ xs: 12, md: 4 }}>
          <Box sx={{ position: 'sticky', top: 20 }}>
            <Card sx={{ p: 3, mb: 3, borderRadius: 4, boxShadow: "0 5px 10px rgba(0, 0, 0, 0.1)" }}>
              <Typography variant="h6" gutterBottom>
                Book This Hotel
              </Typography>
              <Divider sx={{ my: 2 }} />
              <Typography variant="body1" gutterBottom>
                Check availability and prices
              </Typography>
              <Box sx={{ mt: 2 }}>
                <CustomButton sx={{ width: '100%' }}>
                    Check Availability
                </CustomButton>
              </Box>
            </Card>

            <Card sx={{ p: 3, borderRadius: 4, boxShadow: "0 5px 10px rgba(0, 0, 0, 0.1)" }}>
              <Typography variant="h6" gutterBottom>
                Contact Information
              </Typography>
              <Divider sx={{ my: 2 }} />
              <List>
                <ListItem>
                  <ListItemText primary="Location" secondary={hotel.location} />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Starting Price" secondary={hotel.price} />
                </ListItem>
              </List>
            </Card>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}

export async function generateStaticParams() {
  return hotelsData.hotels.map((hotel) => ({
    slug: hotel.slug,
  }));
}