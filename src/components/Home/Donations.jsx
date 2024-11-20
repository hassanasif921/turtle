import React from "react";
import { Box, Grid2, Typography } from "@mui/material";
import GradientBox from "./GradientBox";

import turtle from "@/assets/logo.png";

const Donations = () => {
  return (
    <Box className="w-full py-10 min-h-screen flex flex-col items-center">
      <Typography
        data-aos="zoom-in"
        className="text-white text-4xl sm:text-5xl font-bold mt-4 text-center bg-black/50 w-[95%] py-3"
        sx={{
          textShadow: "2px 2px #9ACD32",
        }}
      >
        Donations to Animal Welfare Organizations
      </Typography>
      <Typography
        data-aos="zoom-in"
        className="text-2xl mt-10 text-white font-bold mb-8 text-center w-[92%]"
      >
        Ninja Turtles Coin promotes global animal welfare by funding shelters,
        rescues, and endangered species awareness programs.
      </Typography>
      <Grid2 container className="w-full px-4 sm:px-8 pt-12">
        <Grid2 data-aos="fade-right" className="ps-3" size={{ xs: 12, md: 6 }}>
          <GradientBox
            height={
              "h-fit lg:h-[515px] py-20 gap-y-6 flex flex-col items-left justify-center relative top-0 hover:-top-4 transition-all"
            }
          >
            <Typography className="text-[#00FFFF] text-lg text-center">
              Join the Ninja Turtles Coin presale for discounted early access.
              Prices rise in each phase, and unsold tokens will be burned to
              boost the value of remaining coins. Invest early to maximize your
              opportunity!
            </Typography>
            <Typography className="text-white text-2xl text-center font-bold">
              Supporting Charitable Causes with Ninja Turtles Coin
            </Typography>
            <Typography className="text-[#00FFFF] text-lg text-center">
              Ninja Turtles Coin allocates 2% of its total supply to support
              charitable initiatives, focusing on animal welfare and positive
              social impact.
            </Typography>
          </GradientBox>
        </Grid2>
        <Grid2 data-aos="fade-left" className="pe-3" size={{ xs: 12, md: 6 }}>
          <Box className="w-full h-fit lg:h-[515px] flex justify-center items-center">
            <img
              src={turtle.src}
              alt="turtle chart"
              className="w-[90%] lg:w-[80%] animate-spin-slow h-fit"
            />
          </Box>
        </Grid2>
      </Grid2>
    </Box>
  );
};

export default Donations;
