import { useRef } from "react";

function OffCanvasCp({ direction = "start", children }) {
  const offcanvas = useRef();
  const backdrop = useRef();
  const showOffCanvas = (e) => {
    e.preventDefault();
    offcanvas.current.classList.add("show");
    backdrop.current.classList.add("show");
  };
  const closeOffCanvas = () => {
    offcanvas.current.classList.remove("show");
    backdrop.current.classList.remove("show");
  };
  return (
    <>
      <a className="btn btn-primary mr-2" onClick={showOffCanvas} href=".">
        Link with href
      </a>
      <button className="btn btn-primary" onClick={showOffCanvas} type="button">
        Button with data-bs-target
      </button>

      <div ref={offcanvas} className={`offcanvas offcanvas-${direction}`}>
        <div className="offcanvas-header">
          <h5 className="offcanvas-title">Offcanvas</h5>
          <button
            type="button"
            className="btn-closed text-reset"
            onClick={closeOffCanvas}
          ></button>
        </div>
        <div className="offcanvas-body">{children}</div>
      </div>
      <div
        ref={backdrop}
        onClick={closeOffCanvas}
        className="offcanvas-backdrop"
      ></div>
    </>
  );
}

export default OffCanvasCp;
