import DropdownAutoCl from "../../components/DropdownAutoCl";
import DropdownCP from "../../components/Dropdowns";
import SplitDropdown from "../../components/SplitDropdown";

function Dropdowns() {
  const showDrop = (e) => {
    e.preventDefault();
    e.target.nextElementSibling.classList.toggle("hide");
  };
  return (
    <div id="dropdown-page">
      <h1>Dropdowns</h1>
      <h2>Single button</h2>
      <div className="content">
        <DropdownCP
          contentDrop="Dropdown button"
          colorDrop="secondary"
          itemDrops={["Action", "Another action", "Something else here"]}
        />
      </div>
      <div className="content">
        <div className="dropdown">
          <a
            className="btn btn-secondary dropdown-toggle down"
            onClick={showDrop}
            href="."
          >
            Dropdown link
          </a>

          <ul className="dropdown-menu hide">
            <li className="dropdown-item">
              <a href=".">Action</a>
            </li>
            <li className="dropdown-item">
              <a href=".">Another action</a>
            </li>
            <li className="dropdown-item">
              <a href=".">Something else here</a>
            </li>
          </ul>
        </div>
      </div>
      <h2>Colors</h2>
      <div className="content">
        <DropdownCP
          contentDrop="Dropdown primary"
          colorDrop="primary"
          itemDrops={["Action", "Another action", "Something else here"]}
        />
        <DropdownCP
          contentDrop="Dropdown secondary"
          colorDrop="secondary"
          itemDrops={["Action", "Another action", "Something else here"]}
          margin="mh-2"
        />
        <DropdownCP
          contentDrop="Dropdown success"
          colorDrop="success"
          itemDrops={["Action", "Another action", "Something else here"]}
          margin="mh-2"
        />
        <DropdownCP
          contentDrop="Dropdown warning"
          colorDrop="warning"
          itemDrops={["Action", "Another action", "Something else here"]}
        />
        <DropdownCP
          contentDrop="Dropdown danger"
          colorDrop="danger"
          itemDrops={["Action", "Another action", "Something else here"]}
          margin="mh-2"
        />
        <DropdownCP
          contentDrop="Dropdown info"
          colorDrop="info"
          itemDrops={["Action", "Another action", "Something else here"]}
          margin="mv-2"
        />
      </div>
      <h2>Split</h2>
      <div className="content">
        <SplitDropdown
          contentDrop="Dropdown primary"
          colorDrop="primary"
          itemDrops={["Action", "Another action", "Something else here"]}
        />
        <SplitDropdown
          contentDrop="Dropdown secondary"
          colorDrop="secondary"
          itemDrops={["Action", "Another action", "Something else here"]}
          margin="mh-2"
        />
        <SplitDropdown
          contentDrop="Dropdown success"
          colorDrop="success"
          itemDrops={["Action", "Another action", "Something else here"]}
        />
        <SplitDropdown
          contentDrop="Dropdown warning"
          colorDrop="warning"
          itemDrops={["Action", "Another action", "Something else here"]}
          margin="mh-2"
        />
        <SplitDropdown
          contentDrop="Dropdown danger"
          colorDrop="danger"
          itemDrops={["Action", "Another action", "Something else here"]}
        />
      </div>
      <h2> Dropdown Large</h2>
      <div className="content">
        <DropdownCP
          contentDrop="Dropdown Large"
          colorDrop="success"
          itemDrops={["Action", "Another action", "Something else here"]}
          size="large"
          margin="mr-2"
        />
        <SplitDropdown
          contentDrop="Dropdown Large"
          colorDrop="success"
          itemDrops={["Action", "Another action", "Something else here"]}
          size="large"
        />
      </div>
      <h2>Dropdown Small</h2>
      <div className="content">
        <DropdownCP
          contentDrop="Dropdown Large"
          colorDrop="success"
          itemDrops={["Action", "Another action", "Something else here"]}
          size="small"
          margin="mr-2"
          itemMore={
            <>
              <hr />
              <li className="dropdown-item">
                <a href=".">More</a>
              </li>
            </>
          }
        />
        <SplitDropdown
          contentDrop="Dropdown Large"
          colorDrop="success"
          itemDrops={["Action", "Another action", "Something else here"]}
          size="small"
          itemMore={
            <>
              <hr />
              <li className="dropdown-item">
                <a href=".">More</a>
              </li>
            </>
          }
        />
      </div>
      <h2>DropUp</h2>
      <div className="content">
        <SplitDropdown
          contentDrop="Dropdown warning"
          dark="dark"
          colorDrop="warning"
          itemDrops={["Action", "Another action", "Something else here"]}
          dropUp="up"
        />
        <DropdownCP
          contentDrop="Dropdown warning"
          dark="dark"
          colorDrop="warning"
          itemDrops={["Action", "Another action", "Something else here"]}
          dropUp="up"
          margin="mh-4"
        />
      </div>
      <h2>Drop Right</h2>
      <div className="content">
        <SplitDropdown
          contentDrop="Dropdown warning"
          dark="dark"
          colorDrop="warning"
          itemDrops={["Action", "Another action", "Something else here"]}
          dropUp="right"
        />
        <DropdownCP
          contentDrop="Dropdown warning"
          dark="dark"
          colorDrop="warning"
          itemDrops={["Action", "Another action", "Something else here"]}
          margin="mh-4"
          dropUp="right"
        />
      </div>
      <h2>Drop Left</h2>
      <div className="content">
        <DropdownCP
          contentDrop="Dropdown warning"
          dark="dark"
          colorDrop="warning"
          itemDrops={["Action", "Another action", "Something else here"]}
          margin="mh-4"
          dropUp="left"
        />
      </div>
      <h2>Dark Dropdown</h2>
      <div className="content">
        <SplitDropdown
          contentDrop="Dropdown Dark"
          dark="dark"
          colorDrop="secondary"
          itemDrops={["Action", "Another action", "Something else here"]}
          dropUp="right"
        />
        <DropdownCP
          contentDrop="Dropdown Dark"
          dark="dark"
          colorDrop="secondary"
          itemDrops={["Action", "Another action", "Something else here"]}
          margin="mh-4"
          dropUp="right"
        />
      </div>
      <h2> Menu item</h2>
      <div className="content">
        <DropdownCP
          contentDrop="Dropdown Dark"
          colorDrop="secondary"
          itemMore={
            <>
              <li className="dropdown-item">
                <button type="button">Action</button>
              </li>
              <li className="dropdown-item">
                <button type="button">Another action</button>
              </li>
              <li className="dropdown-item">
                <button type="button">Something else here</button>
              </li>
            </>
          }
        />
      </div>
      <div className="content">
        <ul className="dropdown-menu un-position">
          <li>
            <span className="dropdown-item-text">Dropdown item text</span>
          </li>
          <li>
            <a className="dropdown-item" href=".">
              Action
            </a>
          </li>
          <li>
            <a className="dropdown-item" href=".">
              Another action
            </a>
          </li>
          <li>
            <a className="dropdown-item" href=".">
              Something else here
            </a>
          </li>
        </ul>
      </div>
      <h2>Active</h2>
      <div className="content">
        <ul className="dropdown-menu un-position">
          <li>
            <a className="dropdown-item" href=".">
              Action
            </a>
          </li>
          <li>
            <a className="dropdown-item active" href=".">
              Another action
            </a>
          </li>
          <li>
            <a className="dropdown-item" href=".">
              Something else here
            </a>
          </li>
        </ul>
      </div>
      <h2>Disable</h2>
      <div>
        <div className="content">
          <ul className="dropdown-menu un-position">
            <li>
              <a className="dropdown-item" href=".">
                Action
              </a>
            </li>
            <li>
              <a className="dropdown-item disable" href=".">
                Another action
              </a>
            </li>
            <li>
              <a className="dropdown-item" href=".">
                Something else here
              </a>
            </li>
          </ul>
        </div>
      </div>
      <h2>Menu alignment</h2>
      <div className="content">
        <DropdownCP
          contentDrop="Right-aligned menu example"
          dark="dark"
          colorDrop="secondary"
          itemDrops={["Action", "Another action", "Something else here"]}
          widthMenu="width-75"
          end={true}
        />
      </div>
      <h2>Menu Size</h2>
      <div className="content">
        <DropdownCP
          contentDrop="Right-aligned menu 75%"
          dark="dark"
          colorDrop="secondary"
          itemDrops={["Action", "Another action", "Something else here"]}
          widthMenu="width-75"
          end={true}
        />
        <DropdownCP
          contentDrop="Right-aligned menu 50%"
          margin="mh-4"
          dark="dark"
          colorDrop="secondary"
          itemDrops={["Action", "Another action", "Something else here"]}
          widthMenu="width-50"
          end={true}
        />
      </div>
      <h2>Alignment options</h2>
      <div className="content ">
        <div className="width-full">
          <DropdownCP
            contentDrop="Dropdown"
            colorDrop="secondary"
            itemDrops={["Action", "Another action", "Something else here"]}
          />
          <DropdownCP
            contentDrop=" Dropdown right menu"
            margin="mh-4"
            colorDrop="secondary"
            itemDrops={["Action", "Another action", "Something else here"]}
            end={true}
            widthMenu="width-75"
          />
        </div>
        <div className="width-full mv-2">
          <DropdownCP
            contentDrop=" Left-aligned, right-aligned lg"
            colorDrop="secondary"
            itemDrops={["Action", "Another action", "Something else here"]}
            end={true}
            widthMenu="width-75 "
          />
          <DropdownCP
            contentDrop=" Left-aligned, right-aligned lg"
            margin="mh-4"
            colorDrop="secondary"
            itemDrops={["Action", "Another action", "Something else here"]}
            widthMenu="width-75 "
          />
          <div className=" width-full mv-2">
            <DropdownCP
              contentDrop=" DropStart"
              colorDrop="secondary"
              itemDrops={["Action", "Another action", "Something else here"]}
              dropUp="left"
            />
            <DropdownCP
              contentDrop=" DropEnd"
              colorDrop="secondary"
              itemDrops={["Action", "Another action", "Something else here"]}
              dropUp="right"
              margin="mh-2"
            />
            <DropdownCP
              contentDrop=" DropDown"
              colorDrop="secondary"
              itemDrops={["Action", "Another action", "Something else here"]}
            />
            <DropdownCP
              contentDrop=" DropUp"
              colorDrop="secondary"
              itemDrops={["Action", "Another action", "Something else here"]}
              dropUp="up"
              margin="mh-2"
            />
          </div>
        </div>
      </div>
      <h2>Headers</h2>
      <div className="content">
        <ul className="dropdown-menu un-position">
          <li>
            <h3 className="dropdown-header">Dropdown header</h3>
          </li>
          <li>
            <a className="dropdown-item" href=".">
              Action
            </a>
          </li>
          <li>
            <a className="dropdown-item" href=".">
              Another action
            </a>
          </li>
        </ul>
      </div>
      <h2>Dividers</h2>
      <div className="content">
        <ul className="dropdown-menu un-position">
          <li>
            <h3 className="dropdown-header">Dropdown header</h3>
          </li>
          <li>
            <a className="dropdown-item" href=".">
              Action
            </a>
          </li>
          <li>
            <a className="dropdown-item" href=".">
              Something else here
            </a>
          </li>
          <li>
            <hr />
          </li>
          <li>
            <a className="dropdown-item" href=".">
              Another action
            </a>
          </li>
        </ul>
      </div>
      <h2>Text</h2>
      <div className="content">
        <ul className="dropdown-menu text-muted un-position width-50 p-4">
          <p>Some example text that's free-flowing within the dropdown menu.</p>
          <p className="mt-2">And this is more example text.</p>
        </ul>
      </div>
      <h2>Form</h2>
      <div className="content">
        <div className="dropdown-menu un-position">
          <form className="p-4">
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="email@example.com"
              />
            </div>
            <div className="mb-2">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Password"
              />
            </div>
            <div className="mb-3">
              <div className="form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="dropdown-check1"
                />
                <label className="form-check-label" htmlFor="dropdown-check1">
                  Remember me
                </label>
              </div>
            </div>
            <button type="submit" className="btn btn-primary">
              Sign in
            </button>
          </form>
          <div className="dropdown-divider"></div>
          <a className="dropdown-item f-size-16" href=".">
            New around here? Sign up
          </a>
          <a className="dropdown-item f-size-16" href=".">
            Forgot password?
          </a>
        </div>
      </div>
      <div className="content">
        <div className="dropdown-menu un-position">
          <form className="p-4">
            <div className="mb-3">
              <label htmlFor="email2" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="email2"
                placeholder="email@example.com"
              />
            </div>
            <div className="mb-2">
              <label htmlFor="password2" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="password2"
                placeholder="Password"
              />
            </div>
            <div className="mb-3">
              <div className="form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="dropdown-check2"
                />
                <label className="form-check-label" htmlFor="dropdown-check2">
                  Remember me
                </label>
              </div>
            </div>
            <button type="submit" className="btn btn-primary">
              Sign in
            </button>
          </form>
        </div>
      </div>
      <h2>Auto close behavior</h2>
      <div className="content">
        <DropdownAutoCl />
      </div>
    </div>
  );
}

export default Dropdowns;
