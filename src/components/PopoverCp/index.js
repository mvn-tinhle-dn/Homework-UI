import { useRef } from "react";

function PopoverCP({ children, contentBtn, direction = "left" }) {
  const popover = useRef();
  const showPopover = () => {
    popover.current.classList.toggle("show");
  };
  return (
    <>
      <div className="popover position-relative">
        <button
          type="button"
          onClick={showPopover}
          className="btn btn-secondary mr-2 "
        >
          {contentBtn}
        </button>
        <div ref={popover} className={`content-popover ${direction}`}>
          <p className="popover-text">{children}</p>
        </div>
      </div>
    </>
  );
}

export default PopoverCP;
