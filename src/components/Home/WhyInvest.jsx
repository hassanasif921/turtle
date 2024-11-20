import React from "react";
import { Box, Grid2, Typography } from "@mui/material";
import GradientBox from "./GradientBox";
import { useTranslations } from "next-intl";

const WhyInvest = () => {
  const t = useTranslations("why_invest");
  const t_about = useTranslations("about");
  const t_vision = useTranslations("vision");
  const t_functionality = useTranslations("functionality");
  const t_token_allocation = useTranslations("token_allocation");
  const t_game_mechanics = useTranslations("game_mechanics");
  const t_benefits = useTranslations("benefits");
  const t_technical_integration = useTranslations("technical_integration");

  return (
    <Box className="w-full min-h-screen py-10 px-4 sm:px-8 bg-black">
      <Typography
        className="w-full text-3xl text-white font-bold mb-8 text-center"
        data-aos="zoom-in"
        style={{
          textShadow: "2px 2px #9ACD32",
        }}
      >
        {t("heading")}
      </Typography>
      <Grid2 container className="pt-12">
        <Grid2
          data-aos="fade-right"
          className="sm:pe-3"
          size={{ xs: 12, sm: 6 }}
        >
          <GradientBox
            height={
              "h-fit sm:h-80 flex flex-col items-left justify-center relative top-0 hover:-top-4 transition-all"
            }
          >
            <ul className="list-disc ms-5">
              <li className="text-white text-base py-3">
                <span className="text-[#00FFFF] font-semibold">
                  {t("point_1_head")}
                </span>{" "}
                {t("point_1_value")}
              </li>
              <li className="text-white text-base py-3">
                <span className="text-[#00FFFF] font-semibold">
                  {t("point_2_head")}
                </span>{" "}
                {t("point_2_value")}
              </li>
            </ul>
          </GradientBox>
        </Grid2>
        <Grid2
          data-aos="fade-left"
          className="sm:ps-3 pt-10 sm:pt-0"
          size={{ xs: 12, sm: 6 }}
        >
          <GradientBox
            height={
              "h-fit sm:h-80 flex flex-col items-left justify-center relative top-0 hover:-top-4 transition-all"
            }
          >
            <ul className="list-disc ms-5">
              <li className="text-white text-base py-3">
                <span className="text-[#00FFFF] font-semibold">
                  {t("point_3_head")}
                </span>{" "}
                {t("point_3_value")}
              </li>
              <li className="text-white text-base py-3">
                <span className="text-[#00FFFF] font-semibold">
                  {t("point_4_head")}
                </span>{" "}
                {t("point_4_value")}
              </li>
            </ul>
          </GradientBox>
        </Grid2>
        <Grid2
          data-aos="fade-right"
          className="lg:pe-3 pt-10 sm:pt-24"
          size={{ xs: 12, sm: 12, md: 8 }}
        >
          <GradientBox
            height={
              "h-fit py-12 flex flex-col gap-y-6 items-left justify-center relative top-0 hover:-top-4 transition-all"
            }
          >
            <Typography className="text-white text-xl font-bold text-center">
              {t_about("heading")}
            </Typography>
            <Typography className="text-[#00FFFF] text-center">
              {t_about("value")}
            </Typography>
            <Typography className="text-white text-xl font-bold text-center">
              {t_vision("heading")}
            </Typography>
            <Typography className="text-[#00FFFF] text-center">
              {t_vision("value")}
            </Typography>
            <Typography className="text-white text-xl font-bold text-center">
              {t_functionality("heading")}
            </Typography>
            <Typography className="text-[#00FFFF] text-center">
              {t_functionality("value")}
            </Typography>
          </GradientBox>
        </Grid2>
        <Grid2
          data-aos="fade-left"
          className="lg:ps-3 pt-10 sm:pt-24 h-full"
          size={{ xs: 12, sm: 12, md: 4 }}
        >
          <GradientBox
            height={
              "h-fit lg:h-[515px] flex flex-col items-center justify-center relative top-0 hover:-top-4 transition-all"
            }
          >
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-auto h-48 sm:h-56 lg:h-32 object-cover"
            >
              <source src="/assets/bg-video-fixed.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </GradientBox>
        </Grid2>
        <Grid2
          data-aos="fade-right"
          className="sm:pe-3 pt-10 sm:pt-24"
          size={{ xs: 12, sm: 6 }}
        >
          <GradientBox
            height={
              "h-fit py-12 flex flex-col items-left justify-center relative top-0 hover:-top-4 transition-all"
            }
          >
            <Typography className="text-[#00FFFF] text-xl font-bold text-center">
              {t_token_allocation("heading")}
            </Typography>
            <ul className="list-disc ms-5">
              <li className="text-white text-base py-3">
                {t_token_allocation("point_1")}
              </li>
              <li className="text-white text-base py-3">
                {t_token_allocation("point_2")}
              </li>
            </ul>
            <Typography className="text-[#00FFFF] text-xl mt-6 font-bold text-center">
              {t_game_mechanics("heading")}
            </Typography>
            <ul className="list-disc ms-5">
              <li className="text-white text-base py-3">
                <span className="font-semibold">
                  {t_game_mechanics("point_1_head")}
                </span>{" "}
                {t_game_mechanics("point_1_value")}
              </li>
              <li className="text-white text-base py-3">
                <span className="font-semibold">
                  {t_game_mechanics("point_2_head")}
                </span>{" "}
                {t_game_mechanics("point_2_value")}
              </li>
              <li className="text-white text-base py-3">
                <span className="font-semibold">
                  {t_game_mechanics("point_3_head")}
                </span>{" "}
                {t_game_mechanics("point_3_value")}
              </li>
              <li className="text-white text-base py-3">
                <span className="font-semibold">
                  {t_game_mechanics("point_4_head")}
                </span>{" "}
                {t_game_mechanics("point_4_value")}
              </li>
            </ul>
          </GradientBox>
        </Grid2>
        <Grid2
          data-aos="fade-left"
          className="sm:ps-3 pt-10 sm:pt-24"
          size={{ xs: 12, sm: 6 }}
        >
          <GradientBox
            height={
              "h-fit sm:h-[824px] lg:h-[583px] py-12 flex flex-col items-left justify-center relative top-0 hover:-top-4 transition-all"
            }
          >
            <Typography className="text-[#00FFFF] text-xl font-bold text-center">
              {t_benefits("heading")}
            </Typography>
            <ul className="list-disc ms-5">
              <li className="text-white text-base py-3">
                <span className="font-semibold">
                  {t_benefits("point_1_head")}
                </span>{" "}
                {t_benefits("point_1_value")}
              </li>
              <li className="text-white text-base py-3">
                <span className="font-semibold">
                  {t_benefits("point_2_head")}
                </span>{" "}
                {t_benefits("point_2_value")}
              </li>
            </ul>
            <Typography className="text-[#00FFFF] text-xl mt-6 font-bold text-center">
              {t_technical_integration("heading")}
            </Typography>
            <ul className="list-disc ms-5">
              <li className="text-white text-base py-3">
                <span className="font-semibold">
                  {t_technical_integration("point_1_head")}
                </span>{" "}
                {t_technical_integration("point_1_value")}
              </li>
              <li className="text-white text-base py-3">
                <span className="font-semibold">
                  {t_technical_integration("point_2_head")}
                </span>{" "}
                {t_technical_integration("point_2_value")}
              </li>
            </ul>
          </GradientBox>
        </Grid2>
      </Grid2>
    </Box>
  );
};

export default WhyInvest;
