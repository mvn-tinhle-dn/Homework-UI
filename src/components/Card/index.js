function CardCP({
  contentHeader,
  contentFooter,
  transparent = false,
  children,
  textCenter,
  textRight,
  width = "width-full",
  styleWidth,
  backGround,
  backGroundOutline = "",
  colorHerder,
  colWidth,
  src,
}) {
  return (
    <div
      className={`card ${width} bg-${backGround} ${
        backGround ? "text-white" : ""
      } ${textCenter ? "text-center" : ""} ${
        textRight ? "text-right" : ""
      } ${colWidth} ${
        backGroundOutline ? `card-outline-${backGroundOutline}` : ""
      }`}
      style={{ width: styleWidth }}
    >
      <div
        className={`card-header ${
          contentHeader ? "" : "hide"
        } text-${colorHerder} ${transparent ? "bg-transparent" : ""}`}
      >
        {contentHeader}
      </div>
      <img src={`${src}`} className={`${src ? "" : "hide"}`} alt="..." />
      <div className="card-body">{children}</div>
      <div
        className={`card-footer ${contentFooter ? "" : "hide"} ${
          transparent ? "bg-transparent" : ""
        }`}
      >
        {contentFooter}
      </div>
    </div>
  );
}

export default CardCP;
