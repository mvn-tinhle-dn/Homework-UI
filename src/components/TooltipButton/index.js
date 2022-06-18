import { useEffect, useRef } from "react";

function TooltipButton({ direction = "right", children, contentBtn, margin }) {
  useEffect(() => {
    const tooltipPage = document.getElementById("tooltip-page");
    tooltipPage.addEventListener("click", function (e) {
      const x = e.clientX;
      const y = e.clientY;
      let elementMouseIsOver = document.elementFromPoint(x, y);
      if (elementMouseIsOver.id !== "btn-tooltip") {
        tooltip.current.classList.remove("show");
      }
    });
  });
  const tooltip = useRef();
  const showTooltip = (e) => {
    e.preventDefault();
    tooltip.current.classList.toggle("show");
  };
  return (
    <>
      <div className={`d-inline-block position-relative ${margin}`}>
        <button
          id="btn-tooltip"
          type="button"
          onClick={showTooltip}
          className="btn btn-secondary"
        >
          {contentBtn}
        </button>
        <div ref={tooltip} className={`content-tooltip ${direction}`}>
          {children}
        </div>
      </div>
    </>
  );
}

export default TooltipButton;
