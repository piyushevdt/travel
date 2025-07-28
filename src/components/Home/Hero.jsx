import { Box, Grid, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import CustomButton from "../Custom/CustomButton";
import PlayButton from "../Custom/PlayButton";

export default function Hero() {
  return (
    <Box sx={{ mb: 2 }}>
      <Grid container spacing={2}>
        <Grid size={{ xs: 12, md: 6 }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              height: "100%",
              padding: 2,
            }}
          >
            <Typography
              variant="h6"
              gutterBottom
              sx={{ textTransform: "uppercase", color: "#DF6951" }}
            >
              Best Destinations around the world
            </Typography>
            <Typography variant="h1" gutterBottom sx={{ lineHeight: 1.0 }}>
              Travel, enjoy and live a new and full life
            </Typography>

            <Typography variant="body2" gutterBottom>
              Built Wicket longer admire do barton vanity itself do in it.
              Preferred to sportsmen it engrossed listening. Park gate sell they
              west hard for the.
            </Typography>
            <Box sx={{ display: "flex",flexDirection: {xs: 'column', sm: 'row'}, gap: 2, mt: 2 }}>
              <CustomButton component="a" href="/">
                Find out more
              </CustomButton>
              {/* <PlayButton onClick={() => console.log("Playing demo...")} /> */}

              <PlayButton
                label="Watch Video"
                size={48}
                iconSize="medium"
                onClick={() => alert("Video started!")}
                sx={{ ml: 4 }}
              />
            </Box>
          </Box>
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <Box
            sx={{
              position: "relative",
              height: "auto",
              zIndex: -1,
              top: -60,
              right: -20,
              display: { xs: "none", md: "block" },
            }}
          >
            <Image
              src="images/travel.svg"
              alt="Travel Image"
              layout="responsive"
              width={700}
              height={475}
            />
          </Box>
          <Box sx={{ display: { xs: "block", md: "none" } }}>
            <Image
              src="images/Traveller 1.svg"
              alt="Travel Image"
              layout="responsive"
              width={700}
              height={475}
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
