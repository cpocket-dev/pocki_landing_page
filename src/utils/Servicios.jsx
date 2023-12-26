import * as Images from "../assets/services/Images";
import { GetCards } from "../data/dataCards";

const Servicios = () => {
  const services = GetCards();

  return (
    <>
      {services.map((s) => {
        const ServiceImage = Images[s.serviceImage]; // Access the correct component from the imported Images
        const ServiceBg = Images[s.serviceBg]; // Access the correct component from the imported bg Images
        return (
          <div
            key={s.id}
            className="w-full flex flex-col items-center text-center px-[1rem] h-full justify-center content-center gap-1"
          >
            <p className="overflow-hidden h-[3rem]">{s.title}</p>
            <div className="service-images relative h-[45%] min-w-full w-[13rem] z-[8] overflow-hidden hue-rotate-[326deg]">
              <div className="services-bg absolute w-full h-full z-[1] overflow-hidden">
                {ServiceBg && <ServiceBg />}
              </div>
              <div className="services-image z-[4] overflow-hidden">
                {ServiceImage && <ServiceImage />}
              </div>
            </div>
            <p className="overflow-visible h-[33%]">{s.text}</p>
          </div>
        );
      })}
    </>
  );
};

export default Servicios;
