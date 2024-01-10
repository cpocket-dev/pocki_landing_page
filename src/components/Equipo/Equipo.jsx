import { useTranslationHook } from "../../hooks/useI18nTranslation";
import { useState, useEffect } from "react";

import "./Equipo.css";

export function Equipo() {
  const { t } = useTranslationHook();
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    if (isOpen) {
      document.documentElement.style.overflow = "hidden";
    } else {
      document.documentElement.style.overflow = "unset";
    }
  }, [isOpen])
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

          <button
            className="rounded-xl bg-black text-white w-[10rem] h-[3rem] z-[2]"
            onClick={() => setIsOpen(true)}
          >
            Open Modal
          </button>
          {isOpen && (
            <div className="animate-fade animate-once animate-ease-in-out z-10 fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center">
              <div className="modal-animation rounded-xl shadow-2xl w-1/2 h-1/2 bg-white flex flex-col justify-center items-center content-center relative">
                <p>MODAL</p>
                <button
                  className="absolute top-4 right-4 close-button rounded-xl bg-black text-white w-[10rem] h-[3rem]"
                  onClick={() => setIsOpen(false)}
                >
                  Close Modal
                </button>
              </div>
            </div>
          )}

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
}
