import { useTranslationHook } from "../../hooks/useI18nTranslation";
import { useState } from "react";

import "./Equipo.css";

export const Equipo = () => {
  const { t } = useTranslationHook();

  return (
    <>
      <div
        className="features-cont w-full flex flex-col items-center pb-12 h-max lg:h-[100vh] overflow-visible relative"
        id="nosotros"
      >
        <div className="features-top flex flex-col justify-start content-center items-center pt-20 pb-4 overflow-visible">
          <h2
            className="info-title mb-8 font-extrabold text-2xl md:text-3xl overflow-visible z-[1] w-[100dvw] pb-4 pt-4 bg-black text-white text-center"
            data-aos="fade-left"
            data-aos-once="true"
          >
            C-Pocket Team
          </h2>

          <button className="rounded-xl bg-black text-white w-[10rem] h-[3rem]">Open Modal</button>

          <div>
            <p></p>
          </div>

          {/* <div className="team w-[95vw] md:w-[75vw] bg-white z-[5] flex flex-col mx-auto p-8 rounded-xl gap-4">
            <p className="text-3xl">Meet our Team</p>
            <p className="text-xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reiciendis quae voluptates eius neque accusamus assumenda
              inventore modi alias exercitationem totam?
            </p>
            <div className="flex gap-4 shadow-lg">
              <div className="h-[13rem] w-1/3 bg-black flex flex-col text-center">
                <div className="h-[85%] bg-white"></div>
                <p className="text-white">Lina Otalvaro</p>
              </div>
              <div className="h-[13rem] w-1/3 bg-black flex flex-col text-center">
                <div className="h-[85%] bg-white"></div>
                <p className="text-white">Alexis Aronategui</p>
              </div>
              <div className="h-[13rem] w-1/3 bg-black flex flex-col text-center">
                <div className="h-[85%] bg-white"></div>
                <p className="text-white">Walter Vanegas</p>
              </div>
            </div>
          </div> */}

        </div>
      </div>
    </>
  );
};
