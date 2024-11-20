"use client";
import React from "react";
import { Grid2, IconButton } from "@mui/material";
import TwitterIcon from "@mui/icons-material/Twitter";
import TelegramIcon from "@mui/icons-material/Telegram";
import InstagramIcon from "@mui/icons-material/Instagram";
import TikTokIcon from "@mui/icons-material/MusicNote";
import PresaleBox from "./PresaleBox";

const HeroSection = () => {
  return (
    <section className="h-fit pb-16">
      <div className="container">
        <Grid2 container spacing={4}>
          {/* Left Section */}
          <Grid2
            data-aos="fade-right"
            size={{ xs: 12, lg: 6 }}
            className="flex px-6 flex-col justify-center h-fit pt-40 lg:pt-0 lg:h-screen"
          >
            <h2 className="text-5xl text-white font-bold mb-4">
              Ninja Turtles Coin
            </h2>
            <p className="text-[#00FFFF] text-xl mb-6">
              Ninja Turtles Coin was created by a team of blockchain experts and
              financial analysts to offer a unique, fun, and sustainable
              investment opportunity in the cryptocurrency market.
            </p>
            <button
              href="/whitepaper.pdf"
              download
              className="bg-black lg:hidden block px-3 py-2 rounded-2xl text-white text-center w-32"
            >
              Whitepaper
            </button>
            <div className="flex space-x-4 mt-4">
              <button
                href="/whitepaper.pdf"
                download
                className="bg-black lg:block hidden px-3 py-2 rounded-2xl text-white text-center w-32"
              >
                Whitepaper
              </button>
              <IconButton
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                color="primary"
                className="bg-black rounded-2xl text-white"
              >
                <TwitterIcon />
              </IconButton>
              <IconButton
                href="https://t.me"
                target="_blank"
                rel="noopener noreferrer"
                color="primary"
                className="bg-black rounded-2xl text-white"
              >
                <TelegramIcon />
              </IconButton>
              <IconButton
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                color="primary"
                className="bg-black rounded-2xl text-white"
              >
                <InstagramIcon />
              </IconButton>
              <IconButton
                href="https://tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
                color="primary"
                className="bg-black rounded-2xl text-white"
              >
                <TikTokIcon />
              </IconButton>
            </div>
          </Grid2>

          {/* Right Section */}
          <Grid2
            size={{ xs: 12, lg: 6 }}
            data-aos="fade-left"
            className="flex px-3 sm:px-6 flex-col justify-start items-center lg:items-end h-fit  pt-10 lg:pt-[20vh]"
          >
            <PresaleBox />
          </Grid2>
        </Grid2>
      </div>
    </section>
  );
};

export default HeroSection;
