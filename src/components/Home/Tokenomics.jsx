import React from "react";
import { Box, Grid2, Typography } from "@mui/material";
import GradientBox from "./GradientBox";
import chart from "@/assets/chart.png";
import { useTranslations } from "next-intl";

const Tokenomics = () => {
  const t_technical_integration = useTranslations("technical_integration");
  const t_tokenomics = useTranslations("tokenomics");
  const t_distribution = useTranslations("distribution");

  return (
    <Box className="w-full py-10 min-h-screen flex flex-col items-center">
      <Typography
        data-aos="zoom-in"
        className="text-2xl mt-10 text-white font-bold mb-8 text-center w-[92%]"
      >
        {t_technical_integration("caption")}
      </Typography>
      <Typography
        data-aos="zoom-in"
        className="text-white text-5xl font-bold mt-4 text-center bg-black/50 w-[95%] py-3"
        sx={{
          textShadow: "2px 2px #9ACD32",
        }}
      >
        {t_tokenomics("heading")}
      </Typography>
      <Typography
        data-aos="zoom-in"
        className="text-2xl mt-10 text-white font-bold mb-8 text-center w-[92%]"
      >
        {t_tokenomics("caption")}
      </Typography>
      <Grid2 container className="w-full px-4 lg:px-8 pt-6 lg:pt-12">
        <Grid2
          data-aos="fade-right"
          className="lg:pe-3"
          size={{ xs: 12, lg: 6 }}
        >
          <GradientBox
            height={
              "h-fit py-16 flex flex-col items-left justify-center relative top-0 hover:-top-4 transition-all"
            }
          >
            <Typography className="text-[#00FFFF] text-xl font-bold text-center">
              {t_distribution("heading")}
            </Typography>
            <ul className="list-disc ms-5">
              <li className="text-white text-base py-3">
                <span className="text-[#00FFFF] font-semibold">
                  {t_distribution("point_1_head")}
                </span>{" "}
                {t_distribution("point_1_value")}
              </li>
              <li className="text-white text-base py-3">
                <span className="text-[#00FFFF] font-semibold">
                  {t_distribution("point_2_head")}
                </span>{" "}
                {t_distribution("point_2_value")}
              </li>
              <li className="text-white text-base py-3">
                <span className="text-[#00FFFF] font-semibold">
                  {t_distribution("point_3_head")}
                </span>{" "}
                {t_distribution("point_3_value")}
              </li>
              <li className="text-white text-base py-3">
                <span className="text-[#00FFFF] font-semibold">
                  {t_distribution("point_4_head")}
                </span>{" "}
                {t_distribution("point_4_value")}
              </li>
              <li className="text-white text-base py-3">
                <span className="text-[#00FFFF] font-semibold">
                  {t_distribution("point_5_head")}
                </span>{" "}
                {t_distribution("point_5_value")}
              </li>
            </ul>
          </GradientBox>
        </Grid2>
        <Grid2
          data-aos="fade-left"
          className="lg:ps-3 pt-6 lg:pt-0"
          size={{ xs: 12, lg: 6 }}
        >
          <Box
            className="w-full h-fit py-5 sm:py-0 sm:h-[515px] flex justify-center items-center"
            sx={{
              backgroundColor: "rgba(105, 9, 84, 0.5)",
              border: "10px inset #880b73",
            }}
          >
            <img src={chart.src} alt="turtle chart" className="w-[90%] h-fit" />
          </Box>
        </Grid2>
      </Grid2>
    </Box>
  );
};

export default Tokenomics;
