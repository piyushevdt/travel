"use client";
import { useState, useEffect } from "react";
import {
  Box,
  Typography,
  Avatar,
  Grid,
  IconButton,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import Image from "next/image";

const testimonials = [
  {
    id: 1,
    quote:
      "On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.",
    name: "Mike Taylor",
    location: "Lahore, Pakistan",
    role: "Traveler",
    avatar: "/images/test1.png",
  },
  {
    id: 2,
    quote:
      "The travel experience was absolutely amazing. Everything was well organized and exceeded my expectations.",
    name: "Chris Thomas",
    location: "New York, USA",
    role: "CEO of Red Button",
    avatar: "/images/test1.png",
  },
  {
    id: 3,
    quote:
      "Best travel service I've ever used. Will definitely book with them again for my next vacation!",
    name: "Sarah Johnson",
    location: "London, UK",
    role: "Marketing Director",
    avatar: "/images/test1.png",
  },
];

const CompanyImages = [
  "/images/company1.png",
  "/images/company2.png",
  "/images/company3.png",
  "/images/company4.png",
  "/images/company5.png",
];

export default function TestimonialSlider() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [slideDirection, setSlideDirection] = useState("up");
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const autoSlideInterval = 5000;

  const handleNext = () => {
    setSlideDirection("up");
    setActiveIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setSlideDirection("down");
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(handleNext, autoSlideInterval);
    return () => clearInterval(interval);
  }, []);

  return (
    <Box sx={{ py: 3, px: 0 }}>
      <Grid container spacing={2}>
        <Grid size={{ xs: 12, md: 6 }}>
          <Typography
            variant="overline"
            sx={{
              color: theme.palette.primary.main,
              fontWeight: "bold",
              letterSpacing: 2,
              display: "block",
              mb: 1,
            }}
          >
            TESTIMONIALS
          </Typography>

          <Typography
            variant="h4"
            component="h2"
            sx={{ fontWeight: "bold", mb: 6 }}
          >
            What People Say About Us.
          </Typography>

          <Box sx={{ display: "flex", mt: 4, gap: 1 }}>
            {testimonials.map((_, index) => (
              <Box
                key={index}
                onClick={() => {
                  setSlideDirection(index > activeIndex ? "up" : "down");
                  setActiveIndex(index);
                }}
                sx={{
                  width: 10,
                  height: 10,
                  borderRadius: "50%",
                  backgroundColor:
                    index === activeIndex
                      ? theme.palette.primary.main
                      : theme.palette.action.disabled,
                  cursor: "pointer",
                  transition: "background-color 0.3s",
                }}
              />
            ))}
          </Box>
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <Box sx={{ px: isMobile ? 0 : 2, display: "flex", height: "100%" }}>
            {/* Testimonial Content with Animation */}
            <Box
              sx={{
                position: "relative",

                borderRadius: 4,

                minHeight: isMobile ? 300 : 250,
                width: "100%",
                overflow: "hidden",
              }}
            >
              {testimonials.map((testimonial, index) => (
                <Box
                  key={testimonial.id}
                  sx={{
                    position: "absolute",
                    width: "100%",
                    height: "100%",
                    top: 0,
                    left: 0,
                    p: 2,

                    transition: "transform 0.5s ease, opacity 0.5s ease",
                    transform:
                      index === activeIndex
                        ? "translateY(0)"
                        : index < activeIndex
                        ? "translateY(-100%)"
                        : "translateY(100%)",
                    opacity: index === activeIndex ? 1 : 0,
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      backgroundColor: "white",
                      boxShadow: "0 2px 10px rgba(0, 0, 0, 0.14)",
                      flexDirection: "column",
                      justifyContent: "center",
                      p: 2,
                      borderRadius: 4,
                      height: "100%",   
                    }}
                  >
                    <Typography
                      variant="body2"
                      sx={{
                        fontStyle: "italic",
                        mb: 3,
                        fontSize: isMobile ? "1rem" : "1.1rem",
                      }}
                    >
                      "{testimonial.quote}"
                    </Typography>

                    <Box sx={{ display: "flex", alignItems: "center" }}>
                      <Avatar
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        sx={{ width: 56, height: 56, mr: 2 }}
                      />
                      <Box>
                        <Typography
                          variant="subtitle1"
                          sx={{ fontWeight: "bold" }}
                        >
                          {testimonial.name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {testimonial.location}
                        </Typography>
                        <Typography variant="caption" color="text.secondary">
                          {testimonial.role}
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              ))}
            </Box>

            {/* Vertical Navigation Arrows */}
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 2,
                justifyContent: "center",
                ml: 2,
              }}
            >
              <IconButton
                onClick={handlePrev}
                sx={{
                  backgroundColor: theme.palette.background.paper,
                  boxShadow: theme.shadows[2],
                  "&:hover": {
                    backgroundColor: theme.palette.background.default,
                  },
                }}
              >
                <ArrowUpwardIcon />
              </IconButton>

              <IconButton
                onClick={handleNext}
                sx={{
                  backgroundColor: theme.palette.background.paper,
                  boxShadow: theme.shadows[2],
                  "&:hover": {
                    backgroundColor: theme.palette.background.default,
                  },
                }}
              >
                <ArrowDownwardIcon />
              </IconButton>
            </Box>
          </Box>
        </Grid>
      </Grid>
      <Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 2,
          }}
        >
          {CompanyImages.map((image, index) => (
            <Box
              key={index}
              sx={{
                overflow: "hidden",
                borderRadius: 2,
                display: "flex",
                alignItems: "center",
              }}
            >
              <Image
                src={image}
                alt={`Company ${index + 1}`}
                layout="contain"
                height={120}
                width={120}
              />
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
