"use client";
import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  IconButton,
  Drawer,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

import logo from "@/assets/logo.png";
import { Link } from "@/i18n/routing";
import LanguageSwitcher from "./LanguageSwitcher";

const Header = () => {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box
      className="bg-black h-screen p-5"
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(false)}
    >
      <Box className="w-full flex justify-end">
        <IconButton onClick={() => toggleDrawer(false)}>
          <CloseIcon className="text-white" />
        </IconButton>
      </Box>
      <Box className="flex flex-col gap-6">
        {[
          "Home",
          "Our Vision",
          "Tokenomics",
          "Presale",
          "Roadmap",
          "Whitelist",
        ].map((link, index) => (
          <Link
            key={index}
            href={`#${link.toLowerCase().replace(/\s+/g, "-")}`}
            className={`text-white ${
              link === "Home" && "text-[#9ACD32]"
            } font-bold uppercase hover:text-gray-300 transition duration-300 text-base`}
          >
            {link}
          </Link>
        ))}
      </Box>
    </Box>
  );
  return (
    <AppBar
      position="absolute"
      sx={{
        backgroundColor: "transparent",
        boxShadow: "none",
        top: 0,
        left: 0,
        zIndex: 10,
      }}
      className="py-4"
    >
      <Toolbar className="flex justify-between items-center w-full">
        <Typography variant="h6" className="text-white font-bold">
          <img src={logo.src} alt="logo" className="h-20 w-fit" />
        </Typography>

        {/* Navigation Links */}
        <Box className="hidden lg:flex gap-6">
          {[
            "Home",
            "Our Vision",
            "Tokenomics",
            "Presale",
            "Roadmap",
            "Whitelist",
          ].map((link, index) => (
            <Link
              key={index}
              href={`#${link.toLowerCase().replace(/\s+/g, "-")}`}
              className={`text-white ${
                link === "Home" && "text-[#9ACD32]"
              } font-bold uppercase hover:text-gray-300 transition duration-300 text-base`}
            >
              {link}
            </Link>
          ))}
        </Box>
        <Box className="flex items-center space-x-2 me-5">
          <LanguageSwitcher />
          <IconButton
            onClick={toggleDrawer(true)}
            aria-label="open-drawer"
            className="bg-[#9ACD32] flex lg:hidden"
          >
            <MenuIcon className="text-white" />
          </IconButton>
        </Box>
        <Drawer
          className="block lg:hidden"
          open={open}
          onClose={toggleDrawer(false)}
        >
          {DrawerList}
        </Drawer>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
