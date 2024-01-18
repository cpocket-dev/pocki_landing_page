import { FaInstagram, FaLinkedin, FaPhone } from "react-icons/fa";
import "./Footer.css";
import React from "react";
import { Modal } from "../../utils/Modal";
import { ContactForm } from "./ContactForm";

export const Footer = () => {
  return (
    <div className="footer-cont w-screen h-max  bg-black text-white relative" id="contacto">

      <div className="flex gap-4 flex-col items-center mx-auto">
        <div className="footer-top py-4 bg-zinc-950 shadow-2xl w-full h-[33%] sm:h-[20%] flex justify-center items-center relative">
          <div className="w-full md:px-[5rem] h-full flex flex-col sm:flex-row justify-center overflow-visible items-center gap-2 sm:gap-8">
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

        <div className="footer-information shadow-2xl md:px-[5rem] bg-black flex flex-col sm:flex-row justify-center items-center w-full gap-4 h-[60%] m-auto rounded-xl">
          <div className="flex flex-col w-1/2 gap-2">
            <p className="w-full text-center text-2xl font-bold">
              C-Pocket - Pocki
            </p>
            <p className="w-full text-center">
              7D Street, #43A-40, Office 5-107
            </p>
            <p className="w-full text-center">Medellín, Colombia, 050021</p>
          </div>
          <div className="divider h-[1px] w-[65%] sm:h-[6rem] sm:w-[1px] bg-zinc-400"></div>
          <div className="flex flex-col w-1/2 gap-2">
            <p className="w-full text-center">
              Contact Email: atencionalcliente@cpocket.global
            </p>
            <p className="w-full text-center">Phone: +57 320-583-2189</p>
          </div>
        </div>

        <div className="sm:hidden w-[80%] h-[1px] bg-zinc-500"></div>

        <div className="footer-bottom py-4 md:px-[5rem] bg-zinc-950 shadow-2xl w-full h-[15%] flex flex-col sm:flex-row-reverse justify-center items-center gap-2 sm:gap-8 border-t-[3px] border-black relative">
          <div className="flex gap-2 sm:w-1/2 sm:justify-center sm:content-center font-bold">
            <a href="http://" target="_blank" rel="noopener noreferrer">
              T&C
            </a>
            <div className="w-[1px] bg-white" />
            <a href="http://" target="_blank" rel="noopener noreferrer">
              Privacy Politics
            </a>
            <div className="w-[1px] bg-white" />
            <Modal title={'Contactanos'} body={'Contact Us'} >
              <ContactForm />
            </Modal>
          </div>
          <p className="sm:w-1/2 sm:text-center">© 2024 All Rights Reserved</p>
        </div>

      </div>
    </div>
  );
};
