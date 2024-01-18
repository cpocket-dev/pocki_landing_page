import React from "react";
import { GetAssistencial } from "../../data/services/assistencial";
import Lottie from "react-lottie";
import { getAnimationData } from "../../data/servicesIconData";
import { getVideoData } from "../../data/ServicesvideoData";
import { Modal } from "../../utils/Modal";

export const ServiciosAsistencial = () => {
  const assistencial = GetAssistencial();
  return (
    <>
      <p
        className="text-xl mt-8 md:mt-0 font-bold text-black shadow-xl z-[4] py-4 px-8 bg-white flex justify-center items-center rounded-xl"
        data-aos="fade-left"
        data-aos-once="true"
        data-aos-delay="200"
      >
        Servicios Asistenciales
      </p>

      <div className="w-full flex justify-center flex-wrap overflow-visible content-center items-center gap-14">
        {assistencial.map((card, index) => (
          <Modal
            key={index}
            title="Servicio Asistencial"
            body={
              <div className="flex cursor-pointer flex-col lg:flex-row justify-center content-center items-center p-2 gap-2 rounded-xl py-2 px-4">
                <div className="bg-white pointer-events-none border-4 border-green-500 rounded-full  p-2 h-[6rem] w-[6rem]">
                  <Lottie
                    options={{ animationData: getAnimationData(card.icon) }}
                    speed={0.85}
                  />
                </div>
                <p className="w-[10rem] font-bold text-center text-zinc-600">
                  {card.title}
                </p>
              </div>
            }
          >
            <div className="w-[90vw] md:max-w-[50rem] overflow-hidden">
              {card.text}
              <div className="overflow-hidden h-[28rem] mx-auto w-max">
              <video src={getVideoData(card.link)} className="overflow-hidden" autoPlay loop muted />
              </div>
            </div>
          </Modal>
        ))}
      </div>
    </>
  );
};
