import { useTranslationHook } from "../../hooks/useI18nTranslation";
import { getLeaders } from "../../data/teamMembers";
import "./Equipo.css";
export function Equipo() {
  const teamLeaders = getLeaders();

  const { t } = useTranslationHook();

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
            Equipo de C-Pocket
          </h2>
        </div>

        <div className="team w-[95vw] md:w-[70vw] xl:w-[60vw] bg-white z-[5] flex flex-col justify-center mx-auto p-4 sm:p-8 rounded-xl shadow-2xl gap-4 h-max my-auto">
          <div className=""></div>
          <p className="text-3xl font-bold text-center flex flex-col">
            Conoce a nuestro increíble equipo de<span className="text-green-500"> Líderes </span>
          </p>
          <p className="text-lg w-[50vw] mx-auto text-center leading-[1.5rem]">
            Son quienes hacen posible este proyecto, conoce a cada uno de ellos y su rol en el
            equipo.
          </p>
          <div className="flex gap-4 overflow-visible relative justify-center mt-10 pb-6">
            {teamLeaders.map((leader, index) => {
              return (
                <div
                  key={index}
                  className="hover:translate-y-2 hover:scale-105 member-card-cont rounded-xl w-[15rem] min-w-[15rem]"
                >
                  <div className="member-card shadow-2xl w-full flex flex-col justify-center items-center content-center pt-4">
                    <div
                      className={`leader${index} z-[${index}] leader bg-white bg-opacity-10 rounded-full bg-contain bg-center h-[13rem] mb-[1rem] mt-[1rem] min-h-max w-[95%] flex justify-center items-center bg-no-repeat`}
                    ></div>
                    <div className="leaders-text border-t-[1px] border-green-600 flex flex-col justify-center items-center content-center w-full backdrop-blur-sm py-2 rounded-t-md">
                      <p className="text-lg text-black font-bold">{leader.name}</p>
                      <p className="text-green-600 font-medium">{leader.role}</p>
                    </div>
                  </div>
                  <style>
                    {` .leader${index} { background-image: url(${leader.img}); } `}
                  </style>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
