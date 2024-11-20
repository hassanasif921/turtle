import React from "react";
import { Box, Grid2, Typography } from "@mui/material";
import p1 from "@/assets/p-1.jpg";
import p2 from "@/assets/p-2.jpg";
import p3 from "@/assets/p-3.jpg";
import GradientBox from "./GradientBox";

const Team = () => {
  const team = [
    {
      profile: p1.src,
      name: "Leon",
      designation: "CEO",
      qualification: "Master's degree in Economics",
      description: "Technical and business role in a blockchain startup",
    },
    {
      profile: p2.src,
      name: "Finn",
      designation: "Blockchain Developer",
      qualification: "BSc in CS & Software Dev",
      description:
        "Development and implementation of Play-to-Earn Smart Contracts",
    },
    {
      profile: p3.src,
      name: "Anna",
      designation: "Community Manager",
      qualification: "B.A. in Communication",
      description:
        "Lead community; strategy; marketing/product collaboration; crisis management.",
    },
    {
      profile: p3.src,
      name: "Katherina",
      designation: "Marketing Manager",
      qualification: "B.A. in Communication Studies",
      description:
        "Marketing strategies, A/B testing, segmentation, conversion rates, performance.",
    },
  ];
  return (
    <Box className="w-full pb-10 min-h-screen flex flex-col items-center">
      <Typography
        data-aos="zoom-in"
        className="text-white text-5xl font-bold mt-4 text-center bg-black/50 w-[95%] py-3"
        sx={{
          textShadow: "2px 2px #9ACD32",
        }}
      >
        Our Team
      </Typography>
      <Grid2 container className="w-full px-4 sm:px-8 pt-12">
        {team.map((te, index) => (
          <Grid2
            data-aos="zoom-in"
            className="py-3 sm:ps-3"
            key={index}
            size={{ xs: 12, sm: 6, md: 3 }}
          >
            <GradientBox
              height={
                "h-fit sm:h-[440px] py-8 flex flex-col items-center justify-start relative top-0 hover:-top-4 transition-all"
              }
            >
              <img
                src={te.profile}
                className="w-32 h-32 sm:w-24 sm:h-24 mb-5 object-cover object-center rounded-full"
                alt={te.designation}
              />
              <Typography className="text-white font-bold text-center text-3xl">
                {te.name}
              </Typography>
              <Typography className="text-white text-center text-lg mb-3">
                {te.designation}
              </Typography>
              <Typography className="text-white text-center text-lg mb-3">
                {te.qualification}
              </Typography>
              <Typography className="text-white text-center text-base">
                {te.description}
              </Typography>
            </GradientBox>
          </Grid2>
        ))}
      </Grid2>
    </Box>
  );
};

export default Team;
