const LargeBlock = ({ iconSrc, iconAlt, username, value, label, net }) => {
  return (
    <div className="large-blocks__block">
      <div className="large-blocks__heading-container">
        <img src={iconSrc} alt={iconAlt} className="large-blocks__icon" />
        <p className="large-blocks__username">{username}</p>
      </div>
      <p className="large-blocks__value">{value}</p>
      <p className="large-blocks__label">{label}</p>
      <p className="large-blocks__net">{net}</p>
    </div>
  );
};

export default LargeBlock;
