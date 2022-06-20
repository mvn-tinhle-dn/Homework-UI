import { useRef } from "react";
import DropdownCp from "../Dropdowns";

function NavbarOffCanvas() {
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
      <nav className="navbar navbar-dark bg-dark">
        <div className="container-fluid external">
          <a className={`navbar-brand`} href=".">
            Navbar
          </a>
          <button className="navbar-toggler" type="button">
            <span
              className="navbar-toggler-icon"
              onClick={showOffCanvas}
            ></span>
          </button>
        </div>
      </nav>

      <div ref={offcanvas} className={`offcanvas offcanvas-end`}>
        <div className="offcanvas-header">
          <h5 className="offcanvas-title">Offcanvas</h5>
          <button
            type="button"
            className="btn-closed text-reset"
            onClick={closeOffCanvas}
          ></button>
        </div>
        <div className="offcanvas-body">
          <div className="collapse navbar-collapse external">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" href=".">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href=".">
                  Link
                </a>
              </li>
              <li className="nav-item">
                <DropdownCp
                  contentDrop="Dropdown"
                  colorDrop="link-default"
                  itemDrops={["link1", "Link2", "Link3"]}
                  colorText="muted"
                ></DropdownCp>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled" href=".">
                  Disabled
                </a>
              </li>
            </ul>
            <form className="d-flex">
              <input
                className="form-control mr-2"
                type="search"
                placeholder="search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </div>
      <div
        ref={backdrop}
        onClick={closeOffCanvas}
        className="offcanvas-backdrop"
      ></div>
    </>
  );
}

export default NavbarOffCanvas;
