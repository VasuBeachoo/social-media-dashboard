const SmallBlock = ({
  title,
  value,
  iconSrc,
  iconAlt,
  netIconSrc,
  netIconAlt,
  net,
}) => {
  return (
    <div className="small-blocks__block">
      <div className="small-blocks__column">
        <p className="small-blocks__title">{title}</p>
        <p className="small-blocks__value">{value}</p>
      </div>
      <div className="small-blocks__column small-blocks__column--right">
        <img src={iconSrc} alt={iconAlt} className="small-blocks__icon"></img>
        <div className="small-blocks__net-container">
          <img
            src={netIconSrc}
            alt={netIconAlt}
            className="small-blocks__net-icon"
          />
          <p className="small-blocks__net-text">{net}</p>
        </div>
      </div>
    </div>
  );
};

export default SmallBlock;
