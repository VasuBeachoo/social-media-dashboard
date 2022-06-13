const LargeBlock = ({
  iconSrc,
  iconAlt,
  username,
  value,
  label,
  netIconSrc,
  netIconAlt,
  net,
}) => {
  return (
    <div className="large-blocks__block">
      <div className="large-blocks__heading-container">
        <img src={iconSrc} alt={iconAlt} className="large-blocks__icon" />
        <p className="large-blocks__username">{username}</p>
      </div>
      <p className="large-blocks__value">{value}</p>
      <p className="large-blocks__label">{label}</p>
      <div className="large-blocks__net-container">
        <img
          src={netIconSrc}
          alt={netIconAlt}
          className="large-blocks__net-icon"
        />
        <p className="large-blocks__net-text">{net}</p>
      </div>
    </div>
  );
};

export default LargeBlock;
