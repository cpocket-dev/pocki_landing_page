const AsideCard = ({ id, url, title, text }) => {
  return (
    <div
      data-aos="fade-left"
      data-aos-delay={id * 100}
      data-aos-once="true"
      data-aos-duration="1000"
      className="aside-card rounded-xl h-max md:h-[17rem] p-4 w-[95dvw] max-w-[20rem]  gap-4 overflow-visible flex content-center justify-center flex-col items-center "
    >
      <div className="flex overflow-visible flex-col items-center content-center gap-4 h-[30%]">
        <h2 className="font-bold text-black text-center px-2 text-md w-[100%] overflow-visible">
          {title}
        </h2>
      </div>
      <p className="px-2 text-gray-500 text-center text-sm h-2/4 overflow-visible flex justify-center items-center">{text}</p>
        <img
          src={url}
          alt={title}
          className="w-[100%] max-w-[4rem] h-[5rem] bg-content overflow-visible"
        />
    </div>
  );
};

export default AsideCard;
