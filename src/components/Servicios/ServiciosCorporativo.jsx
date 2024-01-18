import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { GetCommercial } from "../../data/services/commercial";

export const ServiciosCorporativo = () => {
    const commercial = GetCommercial();
  return (
    <>
      <p
        className="text-xl mt-8 md:mt-0 font-bold text-black shadow-xl z-[4] py-4 px-8 bg-white flex justify-center items-center rounded-xl mb-[-3.5rem]"
        data-aos="fade-right"
        data-aos-once="true"
        data-aos-delay="200"
      >
        Servicios Corporativos
      </p>

      <Swiper
        slidesPerView={1}
        cssMode={true}
        loop={true}
        direction="horizontal"
        spaceBetween={20}
        modules={[Autoplay]}
        autoplay={{
          delay: 3600,
          disableOnInteraction: false,
        }}
        className="swiper-cont flex justify-center w-full md:w-[100%] md:min-w-[18rem] border-t-2 border-black rounded-xl shadow-2xl h-[27rem]"
        data-aos="fade-right"
        data-aos-once="true"
        data-aos-delay="300"
      >
        {commercial.map((card, index) => (
          <SwiperSlide className="card overflow-hidden" key={index}>
            <div className="absolute bottom-6 w-full overflow-visible bg-white border-solid ">
              <div className="swiper-image-cont flex content-center items-center">
                <div
                  className={`swiper-image-bg image${card.id}`}
                  alt={card.title}
                />
              </div>
              <style>
                {`
                                    .swiper-button-next,
                                    .swiper-button-prev {
                                        color: #fff;
                                        transform: translateY(-4rem);
                                        opacity: 0.5;
                                    }

                                    .swiper-button-next:hover,
                                    .swiper-button-prev:hover {
                                        opacity: 1;
                                    }

                                    .image${card.id} {
                                        background-image: url(${card.background});
                                        width: 100%;
                                        margin-left: auto;
                                        margin-right: auto;
                                        background-size: cover;
                                        background-position: center;
                                    }
                                  
                                    .swiper-image-char {
                                      width: 100%;
                                      height: 15rem;
                                      background-color: rgb(0 255 210 / 17%);
                                      opacity: 0.9;
                                      border-radius: 50%;
                                    }
                                  
                                    .card${card.id} {
                                      background-image: url(${card.img});
                                      background-size: contain;
                                      background-repeat: no-repeat;
                                      background-position: center;
                                    }
                                  
                                    .information-cont {
                                        width: 100dvw;
                                        height: 100vh;
                                        display: flex;
                                        justify-content: center;
                                        align-items: center;
                                        background-color: white;
                                    }
                                `}
              </style>
              <div className="card-information flex flex-col items-center">
                <h3 className="px-5 pt-5 text-xl font-bold text-center pb-1">
                  {card.title}
                </h3>
                <p className="px-5 pb-5 leading-4 text-center">{card.text}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};
