import { useRef } from "react";

function NavbarExternal() {
  const collapse = useRef();
  const showCollapse = () => {
    collapse.current.classList.toggle("show-collapse");
  };
  return (
    <>
      <div ref={collapse} className="collapse external">
        <div className="bg-dark content-top-external">
          <h5 className="text-white">Collapsed content</h5>
          <span className="text-muted">Toggleable via the navbar brand.</span>
        </div>
      </div>
      <nav className="navbar navbar-dark bg-dark">
        <div className="container-fluid external">
          <button
            className="navbar-toggler"
            onClick={showCollapse}
            type="button"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
      </nav>
    </>
  );
}

export default NavbarExternal;
