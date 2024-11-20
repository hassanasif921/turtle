import React from "react";
import { Box, Grid2, Typography } from "@mui/material";
import GradientBox from "./GradientBox";

import turtle from "@/assets/turtle-logo.png";
import { useTranslations } from "next-intl";

const Presale = () => {
  const t_presale = useTranslations("presale");
  const t_charitable = useTranslations("charitable");

  return (
    <Box className="w-full py-10 min-h-screen flex flex-col items-center">
      <Typography
        data-aos="zoom-in"
        className="text-white text-5xl font-bold mt-4 text-center bg-black/50 w-[95%] py-3"
        sx={{
          textShadow: "2px 2px #9ACD32",
        }}
      >
        {t_presale("heading")}
      </Typography>
      {/* <Typography
        data-aos="zoom-in"
        className="text-2xl mt-10 text-white font-bold mb-8 text-center w-[92%]"
      >
        {t_presale("value")}
      </Typography> */}
      <Grid2 container className="w-full px-4 lg:px-8 pt-6 lg:pt-12">
        <Grid2
          data-aos="fade-right"
          className="lg:pe-3"
          size={{ xs: 12, md: 6 }}
        >
          <Box
            className="w-full h-fit lg:h-[515px] flex justify-center items-center"
            sx={{
              backgroundColor: "rgba(105, 9, 84, 0.5)",
              border: "10px inset #880b73",
            }}
          >
            <img
              src={turtle.src}
              alt="turtle chart"
              className="w-[90%] lg:w-[80%] mt-8 h-fit"
            />
          </Box>
        </Grid2>
        <Grid2
          data-aos="fade-left"
          className="lg:ps-3 pt-6 lg:pt-0"
          size={{ xs: 12, md: 6 }}
        >
          <GradientBox
            height={
              "h-fit lg:h-[515px] py-20 gap-y-6 flex flex-col items-left justify-center relative top-0 hover:-top-4 transition-all"
            }
          >
            <Typography className="text-[#00FFFF] text-lg text-center">
              {t_presale("value")}
            </Typography>
            <Typography className="text-white text-2xl text-center font-bold">
              {t_charitable("heading")}
            </Typography>
            <Typography className="text-[#00FFFF] text-lg text-center">
              {t_charitable("value")}
            </Typography>
          </GradientBox>
        </Grid2>
      </Grid2>
    </Box>
  );
};

export default Presale;
