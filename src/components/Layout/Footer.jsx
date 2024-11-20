import React from "react";
import TelegramIcon from "@mui/icons-material/Telegram";
import TwitterIcon from "@mui/icons-material/Twitter";

import logo from "@/assets/logo.png"

const Footer = () => {
    return (
        <footer className="bg-black text-white py-8">
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap">
                    {/* Left Section */}
                    <div className="w-full lg:w-3/12 flex flex-col items-center lg:items-start mb-6 lg:mb-0">
                        <img src={logo.src} alt="Logo" className="h-24 w-fit mb-4" />
                        <div className="flex space-x-4">
                            <a
                                href="https://t.me"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-gray-400"
                            >
                                <TelegramIcon fontSize="large" />
                            </a>
                            <a
                                href="https://x.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-gray-400"
                            >
                                <TwitterIcon fontSize="large" />
                            </a>
                        </div>
                    </div>

                    {/* Right Section */}
                    <div className="w-full lg:w-9/12">
                        <h3 className="text-3xl font-bold mb-4 text-center" style={{
                            textShadow: "2px 2px #9ACD32"
                        }}>Contact Us</h3>
                        <p className="text-white mb-6 leading-relaxed text-center">
                            Feel free to reach out! Whether you have questions or want to learn more about investment opportunities, our team is here to help. Let’s discuss how Ninja Turtles Coin can become part of your long-term investment strategy.
                        </p>
                    </div>
                </div>

                {/* Divider */}
                <div className="border-t border-gray-700 mt-6"></div>

                {/* Bottom Text */}
                <div className="text-center text-gray-400 mt-4">
                    Copyright © 2024 Ninja Turtles Coin. All rights reserved.
                </div>
            </div>
        </footer >
    );
};

export default Footer;
