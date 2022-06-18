import Dropdown from "../../components/Dropdowns";
import NavBehavior from "../../components/NavBehavior";
function Navs() {
  return (
    <>
      <h1>Base Nav</h1>
      <div className="content">
        <ul className="nav">
          <li className="nav-item">
            <a className="nav-link active" href=".">
              Active
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link " href=".">
              Link
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link " href=".">
              Link
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link disabled" href=".">
              Disabled
            </a>
          </li>
        </ul>
      </div>
      <div className="content">
        <div className="nav">
          <a className="nav-link active" href=".">
            Active
          </a>
          <a className="nav-link" href=".">
            Link
          </a>
          <a className="nav-link" href=".">
            Link
          </a>
          <a className="nav-link disabled" href=".">
            Disabled
          </a>
        </div>
      </div>
      <h2>Horizontal alignment</h2>
      <h2>Center</h2>
      <div className="content">
        <div className="nav justify-content-center">
          <a className="nav-link active" href=".">
            Active
          </a>
          <a className="nav-link" href=".">
            Link
          </a>
          <a className="nav-link" href=".">
            Link
          </a>
          <a className="nav-link disabled" href=".">
            Disabled
          </a>
        </div>
      </div>
      <h2>End</h2>
      <div className="content">
        <div className="nav justify-content-end">
          <a className="nav-link active" href=".">
            Active
          </a>
          <a className="nav-link" href=".">
            Link
          </a>
          <a className="nav-link" href=".">
            Link
          </a>
          <a className="nav-link disabled" href=".">
            Disabled
          </a>
        </div>
      </div>
      <h2>Vertical</h2>
      <div className="content">
        <div className="nav flex-column">
          <a className="nav-link active" href=".">
            Active
          </a>
          <a className="nav-link" href=".">
            Link
          </a>
          <a className="nav-link" href=".">
            Link
          </a>
          <a className="nav-link disabled" href=".">
            Disabled
          </a>
        </div>
      </div>
      <div className="content">
        <ul className="nav flex-column">
          <li className="nav-item">
            <a className="nav-link active" href=".">
              Active
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link " href=".">
              Link
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link " href=".">
              Link
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link disabled" href=".">
              Disabled
            </a>
          </li>
        </ul>
      </div>
      <h2>Tabs</h2>
      <div className="content">
        <ul className="nav nav-tabs">
          <li className="nav-item">
            <a className="nav-link active" href=".">
              Active
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href=".">
              Link
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href=".">
              Link
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link disabled" href=".">
              Disabled
            </a>
          </li>
        </ul>
      </div>
      <h2>Pills</h2>
      <div className="content">
        <ul className="nav nav-pills">
          <li className="nav-item">
            <a className="nav-link active" href=".">
              Active
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href=".">
              Link
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href=".">
              Link
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link disabled" href=".">
              Disabled
            </a>
          </li>
        </ul>
      </div>
      <h2>Fill and justify</h2>
      <div className="content">
        <ul className="nav nav-pills nav-fill">
          <li className="nav-item">
            <a className="nav-link active" href=".">
              Active
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href=".">
              Much longer nav link
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href=".">
              Link
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link disabled" href=".">
              Disabled
            </a>
          </li>
        </ul>
      </div>
      <div className="content">
        <nav className="nav nav-pills nav-fill">
          <a className="nav-link active" href=".">
            Active
          </a>
          <a className="nav-link" href=".">
            Much longer nav link
          </a>
          <a className="nav-link" href=".">
            Link
          </a>
          <a className="nav-link disabled" href=".">
            Disabled
          </a>
        </nav>
      </div>
      <div className="content">
        <ul className="nav nav-pills nav-justified">
          <li className="nav-item">
            <a className="nav-link active" href=".">
              Active
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href=".">
              Much longer nav link
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href=".">
              Link
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link disabled" href=".">
              Disabled
            </a>
          </li>
        </ul>
      </div>
      <h2>Working with flex utilities</h2>
      <div className="content">
        <nav className="nav nav-pills flex-column flex-sm-row">
          <a className="nav-link active" href=".">
            Active
          </a>
          <a className="nav-link" href=".">
            Longer nav link
          </a>
          <a className="nav-link" href=".">
            Link
          </a>
          <a className="nav-link disabled" href=".">
            Disabled
          </a>
        </nav>
      </div>
      <h2>Tabs with dropdowns</h2>
      <div className="content">
        <ul className="nav nav-tabs">
          <li className="nav-item">
            <a className="nav-link active" href=".">
              Active
            </a>
          </li>
          <li className="nav-item">
            <Dropdown
              contentDrop="dropdown"
              colorDrop="link-default"
              dropUp="up"
              itemDrops={["link1", "Link2", "Link3"]}
              itemMore={
                <>
                  <hr className="dropdown-divider" />

                  <li className="dropdown-item">
                    <a href=".">Separated link</a>
                  </li>
                </>
              }
            ></Dropdown>
          </li>

          <li className="nav-item">
            <a className="nav-link disabled" href=".">
              Disabled
            </a>
          </li>
        </ul>
      </div>
      <h2>Pills with dropdowns</h2>
      <div className="content">
        <ul className="nav nav-pills">
          <li className="nav-item">
            <a className="nav-link active" href=".">
              Active
            </a>
          </li>
          <li className="nav-item">
            <Dropdown
              contentDrop="dropdown"
              colorDrop="link-default"
              dropUp="up"
              itemDrops={["link1", "Link2", "Link3"]}
              itemMore={
                <>
                  <hr className="dropdown-divider" />

                  <li className="dropdown-item">
                    <a href=".">Separated link</a>
                  </li>
                </>
              }
            ></Dropdown>
          </li>
          <li className="nav-item">
            <a className="nav-link disabled" href=".">
              Disabled
            </a>
          </li>
        </ul>
      </div>
      <h2>JavaScript behavior</h2>
      <h2>Tabs</h2>
      <div className="content">
        <NavBehavior typeNav="tabs"></NavBehavior>
      </div>
      <h2> Pills</h2>
      <div className="content">
        <NavBehavior typeNav="pills"></NavBehavior>
      </div>
      <h2> Vertical</h2>
      <div className="content d-flex">
        <NavBehavior
          typeNav="pills"
          vertical={true}
          size="col-3"
          sizeBtn="width-75"
        ></NavBehavior>
      </div>
    </>
  );
}

export default Navs;
