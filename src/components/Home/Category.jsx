import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import Image from "next/image";
import weatherIcon from "../../../public/images/weather.svg";
import flightIcon from "../../../public/images/flight.svg";
import micIcon from "../../../public/images/mic.svg";
import gearIcon from "../../../public/images/gear.svg";
import FeatureCard from "../Custom/FeatureCard";

const features = [
  {
    title: "Calculated Weather",
    description: "Built Wicket longer admire do barton vanity itself do in it.",
    icon: <Image src={weatherIcon} alt="Weather" width={64} height={64} />,
  },
  {
    title: "Best Flights",
    description: "Engrossed listening. Park gate sell they west hard for the.",
    icon: <Image src={flightIcon} alt="Flights" width={64} height={64} />,
  },
  {
    title: "Local Events",
    description:
      "Barton vanity itself do in it. Prefer to men it engrossed listening.",
    icon: <Image src={micIcon} alt="Events" width={64} height={64} />,
  },
  {
    title: "Customization",
    description:
      "We deliver outsourced aviation services for military customers",
    icon: <Image src={gearIcon} alt="Customization" width={64} height={64} />,
  },
];

const Category = () => {
  return (
    <Box sx={{ p: 2, position: "relative", mb: 4 }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          mb: 2,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography variant="h6" gutterBottom sx={{ textTransform: "uppercase", color: "#5E6282" }}>
          Category
        </Typography>
        <Typography variant="h2" gutterBottom>
          We Offer Best Services
        </Typography>
      </Box>
      <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2 }}>
        <Grid container spacing={4} justifyContent="center">
          {features.map((item, index) => (
            <Grid size={{ xs: 12, sm: 6, md: 3 }} key={index}>
              <FeatureCard
                title={item.title}
                description={item.description}
                icon={item.icon}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
      <Box sx={{display:{xs:'none', md: 'block'}, position: "absolute", right: -30, top: 0, zIndex: -1 }}>
        <Image
          src="/images/spark.svg"
          alt="Feature Card Hover"
          width={153}
          height={166}
        />
      </Box>
    </Box>
  );
};

export default Category;
