const SmallBlock = ({ title, value, iconSrc, iconAlt, net }) => {
  return (
    <div className="small-blocks__block">
      <div className="small-blocks__container">
        <p className="small-blocks__title">{title}</p>
        <p className="small-blocks__value">{value}</p>
      </div>
      <div className="small-blocks__container">
        <img className="small-blocks__title" src={iconSrc} alt={iconAlt}></img>
        <p className="small-blocks__net">{net}</p>
      </div>
    </div>
  );
};

export default SmallBlock;
