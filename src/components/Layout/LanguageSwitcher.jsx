"use client";
import React, { useEffect, useState } from "react";
import { Button, Menu, MenuItem, Typography } from "@mui/material";
import { parse } from "cookie";
import { Link, useRouter } from "@/i18n/routing";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";

import usa from "@/assets/usa-flag.svg";
import france from "@/assets/france-flag.svg";
import germany from "@/assets/germany-flag.svg";
import spain from "@/assets/spain-flag.svg";

const languages = [
  {
    icon: usa.src,
    name: "English",
    locale: "en",
  },
  {
    icon: germany.src,
    name: "Dutch",
    locale: "de",
  },
  {
    icon: france.src,
    name: "French",
    locale: "fr",
  },
  {
    icon: spain.src,
    name: "Spain",
    locale: "es",
  },
];

const LanguageSwitcher = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [language, setLanguage] = useState(null);
  const router = useRouter();

  const handleOpen = (event) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);

  useEffect(() => {
    const getLocaleFromCookie = () => {
      if (typeof window !== "undefined") {
        const cookies = parse(document.cookie || "");
        return cookies.NEXT_LOCALE || router.defaultLocale;
      }
      return router.defaultLocale;
    };

    const currentLocale = getLocaleFromCookie();

    const currentLanguage = languages.find(
      (lang) => lang.locale === currentLocale
    );

    if (currentLanguage) {
      setLanguage(currentLanguage);
    }
  }, []);

  return (
    <div className="relative">
      <Button
        onClick={handleOpen}
        endIcon={anchorEl ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
        className="flex items-center space-x-2 bg-gray-100 hover:bg-gray-200"
      >
        {language ? (
          <Typography className="flex gap-x-2 items-center text-black">
            <img className="h-5 w-fit" src={language?.icon} />
            <span className="uppercase font-bold">{language.locale}</span>
          </Typography>
        ) : (
          <Typography className="flex gap-x-2 items-center text-black">
            <img className="h-5 w-fit" src={languages[0]?.icon} />
            <span className="uppercase font-bold">{languages[0].locale}</span>
          </Typography>
        )}
      </Button>
      <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
        {languages.map(({ locale, icon, name }, index) => (
          <MenuItem
            key={index}
            selected={locale === language?.locale}
            onClick={() => changeLanguage(code)}
          >
            <Link
              href="/"
              locale={locale}
              className="flex items-center space-x-2 text-black w-full h-full"
            >
              <img className="h-5 w-fit" src={icon} />
              <span className="uppercase font-bold">{name}</span>
            </Link>
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
};

export default LanguageSwitcher;
