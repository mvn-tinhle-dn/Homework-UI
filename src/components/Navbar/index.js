import { useRef } from "react";
import DropdownCP from "../Dropdowns";

function NavbarCP({ color = "light", hideBrand }) {
  const collapse = useRef();
  const showCollapse = () => {
    collapse.current.classList.toggle("show-collapse");
  };
  return (
    <>
      <nav className={`navbar navbar-expand-lg navbar-${color} bg-${color}`}>
        <div className="container-fluid">
          <a className={`navbar-brand ${hideBrand}`} href=".">
            Navbar
          </a>
          <button
            className="navbar-toggler"
            onClick={showCollapse}
            type="button"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div ref={collapse} className="collapse navbar-collapse ">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href=".">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href=".">
                  Link
                </a>
              </li>
              <li className="nav-item">
                <DropdownCP
                  contentDrop="Dropdown"
                  colorDrop="link-default"
                  itemDrops={["link1", "Link2", "Link3"]}
                  colorText="muted"
                ></DropdownCP>
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
      </nav>
    </>
  );
}

export default NavbarCP;
