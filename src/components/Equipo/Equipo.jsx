import { useTranslationHook } from "../../hooks/useI18nTranslation";
import { useState, useEffect } from "react";
import { getLeaders } from "../../data/teamMembers";
import "./Equipo.css";
export function Equipo() {
  const teamLeaders = getLeaders();

  const { t } = useTranslationHook();

  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.documentElement.style.overflow = "hidden";
    } else {
      document.documentElement.style.overflow = "unset";
    }
  }, [isOpen]);
  return (
    <>
      <div
        className="team-cont w-full flex flex-col items-center pb-12 h-max lg:h-[100vh] overflow-visible relative"
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
        </div>

        <div className="team w-[95vw] md:w-[70vw] xl:w-[90vw] bg-white z-[5] flex flex-col justify-center mx-auto p-4 sm:p-8 rounded-xl shadow-2xl gap-4 h-max my-auto">
          <p className="text-3xl font-bold">Meet our Team Leaders</p>
          <p className="text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
            quae voluptates eius neque accusamus assumenda inventore modi alias
            exercitationem totam?
          </p>
          <div className="flex gap-4 h-75% overflow-visible relative flex-col justify-around md:flex-row">
            {teamLeaders.map((leader, index) => {
              return (
                <div
                  key={index}
                  className="h-125% w-full md:w-1/3 rounded-lg flex flex-col text-center relative overflow-visible"
                >
                  <div className="member-card shadow-2xl w-full h-[25rem] flex justify-center overflow-hidden relative rounded-xl">
                    <div className="member-info rounded-xl absolute w-full bottom-0 h-[15rem] pt-[5rem] bg-opacity-80 flex flex-col justify-center">
                      <p className="text-lg text-white">{leader.name}</p>
                      <p className="text-white">{leader.role}</p>
                    </div>
                    <div
                      className={`leader${index} rounded-full absolute bg-contain bg-no-repeat top-4 h-full w-[80%] aspect-square flex justify-center items-center `}
                    ></div>
                  </div>
                  <style>
                    {" "}
                    {` .leader${index} { background-image: url(${leader.img}); } `}{" "}
                  </style>

                  {/* <div className="h-[25rem] border-black border-b-[20rem]"></div> */}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="animate-fade animate-once animate-ease-in-out z-10 fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center">
          <div className="modal-animation rounded-xl shadow-2xl w-1/2 h-1/2 bg-white flex flex-col justify-center items-center content-center relative">
            <p className="text-2xl font-medium">Leader Information Modal</p>
            <button
              className="absolute top-4 right-4 close-button rounded-xl bg-black text-white w-[10rem] h-[3rem]"
              onClick={() => setIsOpen(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}
