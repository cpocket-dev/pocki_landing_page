const AsideCard = ({ id, url, title, text }) => {
  return (
    <div className="features flex flex-col justify-center content-center items-center w-[98%] lg:w-[48.5%] flex-wrap bg-zinc-300" style={{backgroundImage: `url(${url})`}}>
      <div>
        <p className="font-extrabold">{title}</p>
      </div>
      <p>{text}</p>
    </div>
  );
};

export default AsideCard;
