import ButtonCp from "../../components/Button";

function Buttons() {
  return (
    <>
      <h1>Buttons</h1>
      <h2>Examples</h2>
      <div className="content">
        <ButtonCp status="primary" margin="mh-1">
          primary
        </ButtonCp>
        <ButtonCp status="secondary" margin="mh-1">
          secondary
        </ButtonCp>
        <ButtonCp status="success" margin="mh-1">
          success
        </ButtonCp>
        <ButtonCp status="danger" margin="mh-1">
          danger
        </ButtonCp>
        <ButtonCp status="warning" margin="mh-1">
          warning
        </ButtonCp>
        <ButtonCp status="info" margin="mh-1" textColor="dark">
          info
        </ButtonCp>
        <ButtonCp status="light" margin="mh-1" textColor="dark">
          light
        </ButtonCp>
        <ButtonCp status="dark" margin="mh-1">
          dark
        </ButtonCp>
        <ButtonCp status="null" margin="mh-1" btnLink="btn-link">
          Link
        </ButtonCp>
      </div>
      <h2>Button tags</h2>
      <div className="content">
        <a className="btn btn-primary" href=".">
          Link
        </a>
        <ButtonCp status="primary" margin="mh-1" type="submit">
          Button
        </ButtonCp>
        <input className="btn btn-primary mh-1" type="button" value="Input" />
        <input className="btn btn-primary mh-1" type="submit" value="Submit" />
        <input className="btn btn-primary mh-1" type="reset" value="Reset" />
      </div>
      <h2>Outline buttons</h2>
      <div className="content">
        <ButtonCp status="outline-primary" margin="mh-1">
          primary
        </ButtonCp>
        <ButtonCp status="outline-secondary" margin="mh-1">
          secondary
        </ButtonCp>
        <ButtonCp status="outline-success" margin="mh-1">
          success
        </ButtonCp>
        <ButtonCp status="outline-danger" margin="mh-1">
          danger
        </ButtonCp>
        <ButtonCp status="outline-warning" margin="mh-1">
          warning
        </ButtonCp>
        <ButtonCp status="outline-info" margin="mh-1" textColor="dark">
          info
        </ButtonCp>
        <ButtonCp status="outline-light" margin="mh-1" textColor="dark">
          light
        </ButtonCp>
        <ButtonCp status="outline-dark" margin="mh-1">
          dark
        </ButtonCp>
        <ButtonCp status="outline-null" margin="mh-1" btnLink="btn-link">
          Link
        </ButtonCp>
      </div>
      <h2>Sizes</h2>
      <div className="content">
        <ButtonCp status={"primary"} margin="mh-1" size="lg">
          {" "}
          Large button
        </ButtonCp>
        <ButtonCp status={"secondary"} margin="mh-1" size="lg">
          {" "}
          Large button
        </ButtonCp>
      </div>
      <div className="content">
        <ButtonCp status={"primary"} margin="mh-1" size="sm">
          {" "}
          Small button
        </ButtonCp>
        <ButtonCp status={"secondary"} margin="mh-1" size="sm">
          {" "}
          Small button
        </ButtonCp>
      </div>
      <h2>Disabled state</h2>
      <div className="content">
        <ButtonCp status={"primary"} margin="mh-1" size="lg" disabled={true}>
          {" "}
          Primary button
        </ButtonCp>
        <ButtonCp status={"secondary"} margin="mh-1" size="lg" disabled={true}>
          {" "}
          Button
        </ButtonCp>
        <a className="btn btn-primary lg mh-1 disabled" href=".">
          Primary link
        </a>
        <a className="btn btn-secondary lg mh-1 disabled" href=".">
          Link
        </a>
      </div>
      <h2>Block buttons</h2>
      <div className="content">
        <ButtonCp status={"primary"} btnBlock="btn-block" margin="mv-1">
          Button
        </ButtonCp>
        <ButtonCp
          status={"warning"}
          textColor="dark"
          btnBlock="btn-block"
          margin="mv-1"
        >
          Button
        </ButtonCp>
      </div>
      <div className="content">
        <div className="col-6 mx-auto">
          <ButtonCp status={"primary"} btnBlock="btn-block" margin="mv-1">
            Button
          </ButtonCp>
          <ButtonCp
            status={"warning"}
            textColor="dark"
            btnBlock="btn-block"
            margin="mv-1"
          >
            Button
          </ButtonCp>
        </div>
      </div>
      <div className="content">
        <div className="d-flex justify-content-end">
          <ButtonCp status={"primary"} margin="mh-1">
            Button
          </ButtonCp>
          <ButtonCp status={"warning"} textColor="dark">
            Button
          </ButtonCp>
        </div>
      </div>
      <h2>Toggle states</h2>
      <div className="content">
        <ButtonCp status={"primary"} margin="mh-1">
          Toggle Button
        </ButtonCp>
        <ButtonCp status={"primary"} margin="mh-1" active={true}>
          {" "}
          Active Toggle Button
        </ButtonCp>
        <ButtonCp status={"primary"} margin="mh-1" disabled={true}>
          Disabled Button
        </ButtonCp>
      </div>
    </>
  );
}

export default Buttons;
