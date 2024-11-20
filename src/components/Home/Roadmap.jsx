"use client";
import React from "react";
import { Box, Typography } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useTranslations } from "next-intl";
import { Autoplay, Navigation } from "swiper/modules";

const Roadmap = () => {
  const t = useTranslations("roadmap");

  const roadmapKeys = [
    { name: "q4_2024", q: [1, 2, 3, 4] },
    { name: "q1_2025", q: [1, 2, 3] },
    { name: "q2_2025", q: [1, 2, 3] },
    { name: "q3_2025", q: [1, 2] },
  ];

  const roadmapData = roadmapKeys.map((key) => {
    const question = t(`${key.name}_question`);
    const answers = key.q.map((num) => ({
      text: t(`${key.name}_answers_${num}`),
    }));

    return { question, answers };
  });

  return (
    <Box className="w-full py-10 min-h-screen">
      <Box className="w-full flex flex-col items-center">
        <Typography
          data-aos="zoom-in"
          className="text-white text-5xl font-bold mt-4 text-center bg-black/50 w-[95%] py-3"
          sx={{
            textShadow: "2px 2px #9ACD32",
          }}
        >
          {t("heading")}
        </Typography>
      </Box>
      <Box className="overflow-x-hidden mt-8">
        <Swiper
          slidesPerView={3}
          breakpoints={{
            0: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
          }}
          navigation={true}
          modules={[Autoplay, Navigation]}
          roundLengths={true}
          loop={true}
          spaceBetween={30}
          centeredSlides={true}
          initialSlide={1}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          className="test-swiper"
        >
          {roadmapData.map((data, i) => (
            <SwiperSlide className="h-fit sm:h-72" key={i}>
              <Box className="w-full slide-box bg-black flex flex-col items-center justify-center px-3 sm:px-6 relative">
                {/* Render question */}
                <Typography className="text-white mb-6 font-semibold text-left text-lg">
                  {data.question}
                </Typography>
                {/* Render answers */}
                {data.answers.map((answer, index) => (
                  <Box
                    className="flex w-full h-fit items-center gap-x-3 my-1.5"
                    key={index}
                  >
                    <Box className="w-6 h-6 rounded-full bg-gray-600 flex justify-center items-center">
                      <Box
                        className="h-3 w-3 rounded-full"
                        sx={{
                          background:
                            "linear-gradient(0deg, #9ACD32 0%, #010314 47.60%, #010314 98.23%)",
                        }}
                      />
                    </Box>
                    <Typography className="text-gray-400 text-base w-[95%]">
                      {answer.text}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </Box>
  );
};

export default Roadmap;
