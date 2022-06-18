import { useEffect, useRef } from "react";
import ButtonCp from "../../components/Button";
import PopoverCP from "../../components/PopoverCp";

function Popovers() {
  const popoverAutoCl = useRef();
  const popover = useRef();
  useEffect(() => {
    const popoverPage = document.getElementById("popover-page");
    popoverPage.addEventListener("click", function (e) {
      const x = e.clientX;
      const y = e.clientY;
      let elementMouseIsOver = document.elementFromPoint(x, y);
      if (elementMouseIsOver.id !== "btn-popover") {
        popoverAutoCl.current.classList.remove("show");
      }
    });
  });
  const showPopover = (e) => {
    if (e.target.id === "btn-popover") {
      popoverAutoCl.current.classList.toggle("show");
    } else {
      popover.current.classList.toggle("show");
    }
  };
  return (
    <div id="popover-page">
      <h1>Popover</h1>
      <h2>Popover Top, Left, Right, Bottom</h2>
      <div className="content">
        <PopoverCP direction="top" contentBtn="Popover on top">
          Popover on top
        </PopoverCP>
        <PopoverCP direction="left" contentBtn="Popover on left">
          Popover on left
        </PopoverCP>
        <PopoverCP direction="bottom" contentBtn="Popover on bottom">
          Popover on bottom
        </PopoverCP>
        <PopoverCP direction="right" contentBtn="Popover on right">
          Popover on right
        </PopoverCP>
      </div>
      <h2>Example</h2>
      <div className="content">
        <div className=" popover position-relative">
          <ButtonCp status="danger" onClickBtn={showPopover}>
            Click to toggle popover
          </ButtonCp>
          <div ref={popover} className="content-popover right">
            <div className="popover-header">Popover title</div>
            <div className="popover-body">
              And here's some amazing content. It's very engaging. Right?
            </div>
          </div>
        </div>
      </div>
      <h2>Disable elements</h2>
      <div className="content">
        <div className="d-inline-block position-relative">
          <button className="btn btn-primary" type="button" disabled>
            Disabled button
          </button>
          <div className="content-popover bottom">
            <p className="popover-text">Disable button</p>
          </div>
        </div>
      </div>
      <h2>Close click outside</h2>
      <div className="content">
        <div className=" popover position-relative">
          <ButtonCp
            status="danger"
            onClickBtn={showPopover}
            idBtn="btn-popover"
          >
            Click to toggle popover
          </ButtonCp>
          <div ref={popoverAutoCl} className="content-popover right">
            <div className="popover-header">Popover title</div>
            <div className="popover-body">
              And here's some amazing content. It's very engaging. Right?
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Popovers;
