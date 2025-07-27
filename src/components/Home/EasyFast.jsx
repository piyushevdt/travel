import { Box, Grid, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

const EasyFast = () => {
  const steps = [
    {
      id: 1,
      image: "/images/easy1.png",
      title: "Choose Destination",
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis, eius."
    },
    {
      id: 2,
      image: "/images/easy2.png",
      title: "Make Payment",
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis, eius."
    },
    {
      id: 3,
      image: "/images/easy3.png",
      title: "Reach Airport on Selected Date",
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis, eius."
    }
  ];

  return (
    <Box>
      <Grid container spacing={2} sx={{ mb: 4 }}>
        <Grid size={{xs: 12, md: 6}} sx={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
          <Typography variant="h6">Easy and Fast</Typography>
          <Typography variant="h2">Book your next trip in 3 easy steps</Typography>
          
          {steps.map((step) => (
            <Box key={step.id} sx={{ display: "flex", gap: 2, mt: 4, alignItems: "center" }}>
              <Box sx={{ 
                position: 'relative',
                width: { xs: 40, md: 50 },
                height: { xs: 40, md: 50 },
                flexShrink: 0
              }}>
                <Image
                  src={step.image}
                  alt={step.title}
                  fill
                  style={{ objectFit: 'contain' }}
                />
              </Box>
              <Box>
                <Typography variant="h5">{step.title}</Typography>
                <Typography variant="body1" sx={{width: { xs: '100%', md: '80%' }}}>
                  {step.description}
                </Typography>
              </Box>
            </Box>
          ))}
        </Grid>
        <Grid size={{xs: 12, md: 6}} sx={{ display: "flex", justifyContent: "center", alignItems: "center", width: "100%" }}>
          <Image
            src="/images/fast.png"
            alt="Easy Steps"
            width={500}
            height={400}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default EasyFast;