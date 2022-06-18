function InputButton({
  status,
  children,
  margin,
  textColor = "light",
  btnLink,
  type = "checkbox",
  size,
  disabled = false,
  btnBlock,
  active = false,
  id,
}) {
  const toggleActive = (e) => {
    if (active) {
      e.target.classList.toggle("active");
    }
  };
  return (
    <>
      <label
        className={`btn btn-${status} ${margin} text-${textColor} ${btnLink} ${size} ${btnBlock} ${
          active ? "active" : ""
        }`}
        htmlFor={id}
        disabled={disabled}
        onClick={toggleActive}
      >
        {children}
      </label>
      <input type={type} id={id} />
    </>
  );
}

export default InputButton;
