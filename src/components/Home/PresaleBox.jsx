"use client";
import React, { useState } from "react";
import {
  Box,
  LinearProgress,
  linearProgressClasses,
  styled,
  Typography,
} from "@mui/material";
import dynamic from "next/dynamic";
const CountdownTimer = dynamic(() => import("./CountdownTimer"), {
  ssr: false,
});

import bnb from "@/assets/bnb.png";
import tether from "@/assets/tether.png";

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: theme.palette.grey[800],
    ...theme.applyStyles("dark", {
      backgroundColor: theme.palette.grey[800],
    }),
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: "aqua",
    ...theme.applyStyles("dark", {
      backgroundColor: "#308fe8",
    }),
  },
}));

const PresaleBox = () => {
  const [mode, setMode] = useState("");
  const [amount, setAmount] = useState(0);
  return (
    <Box className="w-full sm:w-[85%] h-fit p-6 rounded-xl bg-black border-2 border-[#a8a8a8]">
      <Typography className="text-white text-xl text-center">
        Buy RAIB IN PRESALE
      </Typography>
      <Box
        className="w-full h-fit p-3 sm:p-0 sm:h-20 mt-2 rounded-xl flex justify-center items-center"
        sx={{
          background: "linear-gradient(to bottom, #000000, #236fa0)",
        }}
      >
        <CountdownTimer />
      </Box>
      <Typography className="text-gray-400 text-base my-3 text-center">
        $6,598,643.08 / $7,404,811
      </Typography>
      <BorderLinearProgress variant="determinate" value={80} />
      <Typography className="text-white text-sm mt-3 text-center">
        Your purchased $RAIB = 0
      </Typography>
      <Typography className="text-white text-sm mt-3 text-center">
        1 $RAIB = $0.3
      </Typography>
      <Box className="flex justify-center items-center w-full my-3 gap-x-4">
        <Box
          onClick={() => setMode("Tether")}
          style={{
            background:
              mode === "Tether"
                ? "linear-gradient(to bottom, #000000, #236fa0)"
                : "black",
          }}
          className="py-3 w-24 border-2 rounded-xl border-[#a8a8a8] flex justify-center items-center text-white gap-x-2 cursor-pointer"
        >
          <img src={tether.src} alt="Tether" className="h-5 w-5" /> USDT
        </Box>
        <Box
          onClick={() => setMode("BNB")}
          style={{
            background:
              mode === "BNB"
                ? "linear-gradient(to bottom, #000000, #236fa0)"
                : "black",
          }}
          className="py-3 w-24 bg-black border-2 rounded-xl border-[#a8a8a8]  flex justify-center items-center text-white gap-x-2 cursor-pointer"
        >
          <img src={bnb.src} alt="BNB" className="h-5 w-5" /> BNB
        </Box>
      </Box>

      {mode === "Tether" || mode === "" ? (
        <>
          <Box className="w-full h-fit flex lg:flex-row flex-col items-center justify-center mt-2 gap-x-5">
            <Box className="w-full lg:w-[49%]">
              <Box className="flex justify-between w-full">
                <Typography className="text-sm text-white">
                  USDT you pay
                </Typography>
                <Typography className="text-sm text-[#00FFFF] cursor-pointer">
                  Max
                </Typography>
              </Box>
              <input
                type="number"
                min={0}
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="bg-black border border-[#a8a8a8] rounded-full py-3 px-4 text-white mt-2"
              />
            </Box>
            <Box className="w-full lg:w-[49%]">
              <Box className="flex justify-start w-full">
                <Typography className="text-sm text-white">
                  $RAIB you Recive
                </Typography>
              </Box>
              <input
                type="number"
                min={0}
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="bg-black border border-[#a8a8a8] rounded-full py-3 px-4 text-white mt-2"
              />
            </Box>
          </Box>
          <button
            type="button"
            style={{
              background: "linear-gradient(to bottom, #000000, #236fa0)",
            }}
            className="w-full h-12 rounded-full border border-[#a8a8a8] mt-5 text-white font-semibold"
          >
            Connect Wallet
          </button>
        </>
      ) : (
        <>
          <Box className="w-full h-fit flex flex-col sm:flex-row items-center justify-center mt-2 gap-x-5">
            <Box className="w-full lg:w-[49%]">
              <Box className="flex justify-between w-full">
                <Typography className="text-sm text-white">
                  BNB you pay
                </Typography>
                <Typography className="text-sm text-[#00FFFF] cursor-pointer">
                  Max
                </Typography>
              </Box>
              <input
                type="number"
                min={0}
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="bg-black border border-[#a8a8a8] rounded-full py-3 px-4 text-white mt-2"
              />
            </Box>
            <Box className="w-full lg:w-[49%]">
              <Box className="flex justify-start w-full">
                <Typography className="text-sm text-white">
                  $RAIB you Recive
                </Typography>
              </Box>
              <input
                type="number"
                min={0}
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="bg-black border border-[#a8a8a8] rounded-full py-3 px-4 text-white mt-2"
              />
            </Box>
          </Box>
          <Box className="flex flex-col sm:flex-row items-center justify-center w-full gap-x-4">
            <button
              type="button"
              style={{
                background: "linear-gradient(to bottom, #000000, #236fa0)",
              }}
              className="w-full h-12 rounded-full border border-[#a8a8a8] mt-5 text-white font-semibold"
            >
              Connect Wallet
            </button>
            <button
              type="button"
              style={{
                background: "linear-gradient(to bottom, #000000, #236fa0)",
              }}
              className="w-full h-12 rounded-full border border-[#a8a8a8] mt-5 text-white font-semibold"
            >
              Buy with BNB
            </button>
          </Box>
        </>
      )}
    </Box>
  );
};

export default PresaleBox;
