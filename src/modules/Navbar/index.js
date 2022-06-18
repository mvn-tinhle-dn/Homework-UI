import DropdownCP from "../../components/Dropdowns";
import NavbarCP from "../../components/Navbar";
import NavbarExternal from "../../components/NavbarExternal";
import NavbarOffCanvas from "../../components/NavbarOffCanvas";

function Navbar() {
  return (
    <>
      <h1>Navbar</h1>
      <div className="content">
        <NavbarCP></NavbarCP>
      </div>
      <h2>Brand</h2>
      <div className="content">
        <nav className="navbar navbar-light bg-light mb-1">
          <div className="d-flex">
            <a className="navbar-brand" href=".">
              Navbar
            </a>
          </div>
        </nav>

        <nav className="navbar navbar-light bg-light">
          <div className="d-flex">
            <span className="navbar-brand">Navbar</span>
          </div>
        </nav>
      </div>
      <h2>Image</h2>
      <div className="content">
        <nav className="navbar navbar-light bg-light">
          <div className="d-flex">
            <a className="navbar-brand" href=".">
              <img
                src="https://getbootstrap.com/docs/5.1/assets/brand/bootstrap-logo.svg"
                alt=""
                width="30"
                height="24"
              />
            </a>
          </div>
        </nav>
      </div>
      <h2>Image and text</h2>
      <div className="content">
        <nav className="navbar navbar-light bg-light">
          <div className="d-flex">
            <a className="navbar-brand" href=".">
              <img
                src="https://getbootstrap.com/docs/5.1/assets/brand/bootstrap-logo.svg"
                alt=""
                width="30"
                height="24"
                className="mr-1"
              />
              Bootstrap
            </a>
          </div>
        </nav>
      </div>
      <h2> Nav</h2>
      <div className="content">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <a className="navbar-brand" href=".">
              Navbar
            </a>
            <button className="navbar-toggler" type="button">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link active" href=".">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href=".">
                    Features
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href=".">
                    Pricing
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link disabled" href=".">
                    Disabled
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
      <div className="content">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <a className="navbar-brand" href=".">
              Navbar
            </a>
            <button className="navbar-toggler" type="button">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse">
              <div className="navbar-nav">
                <a className="nav-link active" href=".">
                  Home
                </a>
                <a className="nav-link" href=".">
                  Features
                </a>
                <a className="nav-link" href=".">
                  Pricing
                </a>
                <a className="nav-link disabled" href=".">
                  Disabled
                </a>
              </div>
            </div>
          </div>
        </nav>
      </div>
      <h2>Using Dropdown</h2>
      <div className="content">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <a className="navbar-brand" href=".">
              Navbar
            </a>
            <button className="navbar-toggler" type="button">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link active" href=".">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href=".">
                    Features
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href=".">
                    Pricing
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
            </div>
          </div>
        </nav>
      </div>
      <h2>Forms</h2>
      <div className="content">
        <nav className="navbar navbar-light bg-light">
          <div className="container-fluid">
            <form className="d-flex">
              <input
                className="form-control mr-2"
                type="search"
                placeholder="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </nav>
      </div>
      <div className="content">
        <nav className="navbar navbar-light bg-light">
          <div className="container-fluid width-full justify-content-between">
            <a className="navbar-brand" href=".">
              {" "}
              Navbar
            </a>
            <form className="d-flex ">
              <input
                className="form-control mr-2"
                type="search"
                placeholder="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </nav>
      </div>
      <div className="content">
        <nav className="navbar navbar-light bg-light">
          <form className="d-flex width-full">
            <div className="input-group width-full d-flex">
              <span className="input-group-text">@</span>
              <input
                type="text"
                id="inputNav"
                className="form-control width-full"
                placeholder="Username"
              />
            </div>
          </form>
        </nav>
      </div>
      <h2>button</h2>
      <div className="content">
        <nav className="navbar navbar-light bg-light">
          <form className="container-fluid justify-content-start">
            <button className="btn btn-outline-success mr-2" type="button">
              Main button
            </button>
            <button className="btn btn-sm btn-outline-secondary" type="button">
              Smaller button
            </button>
          </form>
        </nav>
      </div>
      <h2>Text</h2>
      <div className="content">
        <nav className="navbar navbar-light bg-light">
          <div className="container-fluid">
            <span className="navbar-text">
              Navbar text with an inline element
            </span>
          </div>
        </nav>
      </div>
      <div className="content">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <a className="navbar-brand" href=".">
              Navbar w/ text
            </a>
            <button className="navbar-toggler" type="button">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link active" href=".">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href=".">
                    Features
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href=".">
                    Pricing
                  </a>
                </li>
              </ul>
              <span className="navbar-text">
                Navbar text with an inline element
              </span>
            </div>
          </div>
        </nav>
      </div>
      <h2>Color schemes</h2>
      <div className="content">
        <NavbarCP color="dark"></NavbarCP>
      </div>
      <h2>Placement</h2>
      <div className="content">
        <nav className="navbar navbar-light bg-light">
          <div className="container-fluid">
            <a className="navbar-brand" href=".">
              Default
            </a>
          </div>
        </nav>
      </div>
      <div className="content position-relative">
        <nav className="navbar fixed-top navbar-light bg-light">
          <div className="container-fluid">
            <a className="navbar-brand" href=".">
              Fixed top
            </a>
          </div>
        </nav>
      </div>
      <div className="content position-relative">
        <nav className="navbar fixed-bottom navbar-light bg-light">
          <div className="container-fluid">
            <a className="navbar-brand" href=".">
              Fixed top
            </a>
          </div>
        </nav>
      </div>
      <h2>Responsive</h2>
      <div className="content">
        <NavbarCP></NavbarCP>
      </div>
      <h2>External content</h2>
      <div className="content">
        <NavbarExternal></NavbarExternal>
      </div>
      <h2>Hide Brand</h2>
      <div className="content">
        <NavbarCP hideBrand={"hide"}></NavbarCP>
      </div>
      <h2>Open OffCanvas</h2>
      <div className="content">
        <NavbarOffCanvas></NavbarOffCanvas>
      </div>
    </>
  );
}

export default Navbar;
