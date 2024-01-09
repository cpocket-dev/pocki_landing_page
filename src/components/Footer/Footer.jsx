import { FaInstagram, FaLinkedin, FaPhone } from "react-icons/fa";
import "./Footer.css";
import React from "react";

export const Footer = () => {
  return (
    <div className="footer-cont py-4 w-screen h-max  bg-black text-white relative">
      <div className="lg:max-w-[75vw] flex gap-4 flex-col items-center mx-auto">
        <div className="footer-top p-4 bg-black shadow-2xl w-full h-[33%] sm:h-[20%] flex justify-center items-center border-t-[3px] border-black relative">
          <div className="w-full h-full flex flex-col sm:flex-row justify-center overflow-visible items-center gap-2 sm:gap-8">
            <p className="font-semibold text-lg w-1/2 text-center z-[2] overflow-visible text-white">
              Get connected with us!
            </p>
            <div className="footer-icons w-1/2 flex justify-center items-center gap-8 overflow-visible">
              <a href="http://" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="text-2xl" />
              </a>
              <a href="http://" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="text-2xl" />
              </a>
              <a href="http://" target="_blank" rel="noopener noreferrer">
                <FaPhone className="text-2xl" />
              </a>
            </div>
          </div>
        </div>

        <div className="sm:hidden w-[80%] h-[1px] bg-zinc-500"></div>

        <div className="footer-information shadow-2xl bg-black flex flex-col sm:flex-row justify-center items-center w-full gap-4 h-[60%] m-auto rounded-xl">
          <div className="flex flex-col w-1/2 gap-2">
            <p className="w-full text-center text-2xl font-bold">
              C-Pocket - Pocky
            </p>
            <p className="w-full text-center">
              7D Street, #43A-40, Office 5-107
            </p>
            <p className="w-full text-center">El Poblado, Antioquia, 050021</p>
          </div>
          <div className="divider h-[1px] w-[65%] sm:h-[6rem] sm:w-[1px] bg-zinc-400"></div>
          <div className="flex flex-col w-1/2 gap-2">
            <p className="w-full text-center">
              Contact Email: info@example.com
            </p>
            <p className="w-full text-center">Phone: +57 320-583-2189</p>
          </div>
        </div>

        <div className="sm:hidden w-[80%] h-[1px] bg-zinc-500"></div>

        <div className="footer-bottom p-4 bg-black shadow-2xl w-full h-[15%] flex flex-col sm:flex-row justify-center items-center gap-8 border-t-[3px] border-black relative">
          <p className="sm:w-1/2 sm:text-center">2023 All Rights Reserved</p>
          <div className="flex gap-2 sm:w-1/2 sm:justify-center sm:content-center font-bold">
            <p>T&C</p>
            <div className="w-[1px] bg-white" />
            <p>Privacy Politics</p>
            <div className="w-[1px] bg-white" />
            <p>Contact Us</p>
          </div>
        </div>
      </div>
    </div>
  );
};
