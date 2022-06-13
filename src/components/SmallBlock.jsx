const SmallBlock = ({ title, value, iconSrc, iconAlt, net }) => {
  return (
    <div className="small-blocks__block">
      <div className="small-blocks__container">
        <p className="small-blocks__title">{title}</p>
        <p className="small-blocks__value">{value}</p>
      </div>
      <div className="small-blocks__container">
        <img src={iconSrc} alt={iconAlt} className="small-blocks__icon"></img>
        <p className="small-blocks__net">{net}</p>
      </div>
    </div>
  );
};

export default SmallBlock;
