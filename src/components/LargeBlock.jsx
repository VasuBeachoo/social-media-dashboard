const LargeBlock = ({
  iconSrc,
  iconAlt,
  username,
  value,
  label,
  netIconSrc,
  netIconAlt,
  net,
  netSign,
  mode,
}) => {
  return (
    <div className={`large-blocks__block large-blocks__block--${mode}`}>
      <div className="large-blocks__heading-container">
        <img src={iconSrc} alt={iconAlt} className="large-blocks__icon" />
        <p className={`large-blocks__username large-blocks__username--${mode}`}>
          {username}
        </p>
      </div>
      <p className={`large-blocks__value large-blocks__value--${mode}`}>
        {value}
      </p>
      <p className={`large-blocks__label large-blocks__label--${mode}`}>
        {label}
      </p>
      <div className="large-blocks__net-container">
        <img
          src={netIconSrc}
          alt={netIconAlt}
          className="large-blocks__net-icon"
        />
        <p
          className={`large-blocks__net-text large-blocks__net-text--${netSign}`}
        >
          {net} Today
        </p>
      </div>
    </div>
  );
};

export default LargeBlock;
