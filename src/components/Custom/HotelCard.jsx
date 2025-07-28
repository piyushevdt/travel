import { Card, CardContent, CardMedia, Typography, Chip, Rating, Box, Button } from '@mui/material';
import Link from 'next/link';
import PropTypes from 'prop-types';
import CustomButton from './CustomButton';

const HotelCard = ({ hotel }) => {
  return (
    <Card sx={{ 
      height: '100%', 
      display: 'flex', 
      flexDirection: 'column',
      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
      '&:hover': {
        transform: 'translateY(-5px)',
        boxShadow: "0 4px 20px rgba(0, 0, 0, 0.2)",
      },
      borderRadius: 4,
    }}>
      <CardMedia
        component="img"
        image={hotel.image}
        alt={hotel.name}
        sx={{ 
          height: 200,
          objectFit: 'cover'
        }}
      />
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography gutterBottom variant="h5" component="h2">
          {hotel.name}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
          {hotel.location}
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
          <Rating value={hotel.rating} precision={0.1} readOnly />
          <Typography variant="body2" sx={{ ml: 1 }}>
            {hotel.rating} {hotel.reviewCount && `(${hotel.reviewCount})`}
          </Typography>
        </Box>
        <Typography variant="h6" color="primary" sx={{ mb: 2 }}>
          {hotel.price}
        </Typography>
        <Box sx={{ 
          display: 'flex',
          flexWrap: 'wrap',
          gap: 1,
          mb: 1
        }}>
          {hotel.amenities?.slice(0, 3).map((amenity, index) => (
            <Chip 
              key={index} 
              label={amenity} 
              size="small" 
              sx={{ 
                backgroundColor: 'background.paper',
                border: '1px solid',
                borderColor: 'divider'
              }}
            />
          ))}
        </Box>
      </CardContent>
      <Box sx={{ p: 2 }}>
        <Link href={`/hotels/${hotel.slug}`} passHref>
          <CustomButton sx={{ width: '100%' }}>
            View Details
          </CustomButton>
        </Link>
      </Box>
    </Card>
  );
};

HotelCard.propTypes = {
  hotel: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    slug: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    amenities: PropTypes.arrayOf(PropTypes.string),
    reviewCount: PropTypes.number
  }).isRequired
};

export default HotelCard;