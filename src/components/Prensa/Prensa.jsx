import React from "react";
import "./Prensa.css";
import { GetArticles } from "../../data/articles";
import Lottie from "react-lottie";
import Arrow from "../../assets/animatedIcons/arrow.json";

export const Prensa = () => {
  const articles = GetArticles();

  const chartStyle = {
    width: "100%",
    height: "100%",
  };

  return (
    <div className="flex flex-col overflow-visible" id="prensa">
      <div className="information relative flex flex-col h-full justify-center items-center gap-8 pt-4 pb-12 xl:overflow-hidden">
        <h2
          className="services-title shadow-2xl font-extrabold text-2xl md:text-3xl py-4 text-white flex justify-center mt-16 items-center overflow-visible z-[1] w-[100dvw] bg-black"
          data-aos="fade-left"
          data-aos-once="true"
        >
          Prensa
        </h2>
        <div className="info overflow-visible gap-10 flex-col lg:flex-col my-auto flex items-center content-center justify-center pb-4 lg:w-[80vw]">
          <div className="md:min-w-[23rem] flex flex-col mx-auto items-center overflow-hidden justify-center content-center w-[full]">
            <h2
              className="font-extrabold text-green-500 w-full mb-4 text-2xl md:text-3xl md:px-8 text-center overflow-hidden"
              data-aos="fade-left"
              data-aos-once="true"
            >
              Articulos de prensa <br></br>
            </h2>
          </div>

          <div className="w-full relative justify-center overflow-visible items-center content-center h-max flex flex-wrap gap-4">
            {articles.map((article, index) => (
              <a
                className="article-cont w-[95vw] xs:w-[70vw] sm:w-[46vw] md:w-[40vw] lg:w-[30%] h-max text-center flex flex-col justify-center items-center content-center gap-2 p-4 rounded-xl shadow-2xl bg-white border-t-2 border-green-500 overflow-visible"
                key={index}
                href={`${article.link}`}
                target="_blank"
                rel="noopener noreferrer"
                data-aos="fade-left"
                data-aos-once="true"
              >
                <p className="article-text w-full h-[5rem] flex justify-center items-center content-center font-bold">{article.info}</p>

                <div
                  className={`image-article${index} mb-4 bg-center bg-cover w-full h-[15rem] rounded-lg border-b-2 border-green-500`}
                >
                  <style>
                    {`
                            .image-article${index} {
                                background-image: url(${article.imageLink});
                            }
                        `}
                  </style>
                </div>
                <div className="article-bottom w-full flex justify-between content-center items-center">
                  <div className="bottom-info text-left">
                    <p className="h-max text-green-500">{article.date}</p>
                    <p className="h-max font-semibold">{article.web}</p>
                  </div>
                  <div className="rotate-90 h-[3rem] w-[3rem] pointer-events-none">
                    <Lottie
                      options={{
                        loop: true,
                        autoplay: true,
                        animationData: Arrow,
                        rendererSettings: {
                          preserveAspectRatio: "xMidYMid slice",
                        },
                      }}
                      speed={0.8}
                      style={chartStyle}
                    />
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
