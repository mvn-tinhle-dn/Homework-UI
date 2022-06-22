import ButtonCp from "../../components/Button";
function Collapse() {
  const showCollapse = (e) => {
    e.preventDefault();
    e.target.parentElement.nextElementSibling.classList.toggle("show-collapse");
  };
  const showCollapse1 = (e) => {
    e.preventDefault();
    e.target.parentElement.lastChild.firstChild.firstChild.classList.toggle(
      "show-collapse"
    );
  };
  const showCollapse2 = (e) => {
    e.preventDefault();
    e.target.parentElement.lastChild.lastChild.firstChild.classList.toggle(
      "show-collapse"
    );
  };
  const showCollapse12 = (e) => {
    e.preventDefault();
    e.target.parentElement.lastChild.firstChild.firstChild.classList.toggle(
      "show-collapse"
    );
    e.target.parentElement.lastChild.lastChild.firstChild.classList.toggle(
      "show-collapse"
    );
  };
  return (
    <>
      <h1>Collapse</h1>
      <h2>Example</h2>
      <div className="content">
        <div>
          <a className="btn btn-primary mr-4" onClick={showCollapse} href=".">
            Link with href
          </a>
          <ButtonCp status={"primary"} onClickBtn={showCollapse}>
            Button with data-bs-target
          </ButtonCp>
        </div>
        <div className="collapse mv-2">
          <div className="card card-body width-full">
            Some placeholder content for the collapse component. This panel is
            hidden by default but revealed when the user activates the relevant
            trigger.
          </div>
        </div>
      </div>
      <h1>Collapse</h1>
      <h2>Example</h2>
      <div className="content">
        <div>
          <ButtonCp status={"primary"} onClickBtn={showCollapse}>
            Button toggle
          </ButtonCp>
        </div>
        <div className="collapse-horizontal width-50 mv-2">
          <div className="card card-body ">
            Some placeholder content for the collapse component. This panel is
            hidden by default but revealed when the user activates the relevant
            trigger.
          </div>
        </div>
      </div>
      <h2>Multiple targets</h2>
      <div className="content">
        <a className="btn btn-primary" onClick={showCollapse1} href=".">
          Toggle first element
        </a>
        <ButtonCp status={"primary"} onClickBtn={showCollapse2} margin="mh-4">
          Toggle second element
        </ButtonCp>
        <ButtonCp status={"primary"} onClickBtn={showCollapse12}>
          Toggle both elements
        </ButtonCp>
        <div className="row mv-4">
          <div className="col-6">
            <div className="collapse width-full">
              <div className="card width-full card-body">
                Some placeholder content for the first collapse component of
                this multi-collapse example.
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="collapse width-full">
              <div className="card width-full card-body">
                Some placeholder content for the first collapse component of
                this multi-collapse example.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Collapse;
