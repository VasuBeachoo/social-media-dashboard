const SmallBlock = ({
  title,
  value,
  iconSrc,
  iconAlt,
  netIconSrc,
  netIconAlt,
  net,
  netSign,
  mode,
}) => {
  return (
    <div className={`small-blocks__block small-blocks__block--${mode}`}>
      <div className="small-blocks__column">
        <p className={`small-blocks__title small-blocks__title--${mode}`}>
          {title}
        </p>
        <p className={`small-blocks__value small-blocks__value--${mode}`}>
          {value}
        </p>
      </div>
      <div className="small-blocks__column small-blocks__column--right">
        <img src={iconSrc} alt={iconAlt} className="small-blocks__icon"></img>
        <div className="small-blocks__net-container">
          <img
            src={netIconSrc}
            alt={netIconAlt}
            className="small-blocks__net-icon"
          />
          <p
            className={`small-blocks__net-text small-blocks__net-text--${netSign}`}
          >
            {net}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SmallBlock;
