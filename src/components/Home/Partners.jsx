import React from "react";
import { Box, Typography } from "@mui/material";
import coingecko from "@/assets/coingecko.png";
import coinmarketcap from "@/assets/coinmarketcap.png";
import excbybit from "@/assets/excbybit.png";
import excgate from "@/assets/excgate.png";
import excmexc from "@/assets/excmexc.png";

const Partners = () => {
  const images = [
    coingecko.src,
    coinmarketcap.src,
    excbybit.src,
    excgate.src,
    excmexc.src,
  ];
  return (
    <Box className="w-full pb-10 h-fit flex flex-col items-center">
      <Typography
        data-aos="zoom-in"
        className="text-white text-5xl font-bold mt-4 text-center bg-black/50 w-[95%] py-3"
        sx={{
          textShadow: "2px 2px #9ACD32",
        }}
      >
        Our Partners
      </Typography>
      <Box className="w-full h-fit flex flex-wrap gap-5 items-center justify-center mt-12">
        {images.map((im, i) => (
          <img data-aos="zoom-in" src={im} key={i} className="h-16 w-fit" />
        ))}
      </Box>
    </Box>
  );
};

export default Partners;
