function ButtonCp({
  status,
  children,
  margin,
  textColor,
  btnLink,
  type = "button",
  value,
  size,
  disabled = false,
  btnBlock,
  active = false,
  onClickBtn,
  idBtn,
}) {
  const toggleActive = (e) => {
    if (active) {
      e.target.classList.toggle("active");
    }
  };
  return (
    <button
      type={type}
      className={`btn btn-${status} ${margin} text-${textColor} ${btnLink} btn-${size} ${btnBlock} ${
        active ? "active" : ""
      }`}
      id={idBtn}
      value={value}
      disabled={disabled}
      onClick={onClickBtn ? onClickBtn : toggleActive}
    >
      {children}
    </button>
  );
}

export default ButtonCp;
