import AlertCP from "../../components/Alert";
import ShowLiveAL from "../../components/ShowLiveAL";

function Alerts() {
  return (
    <>
      <h1>Alert</h1>
      <h2>Examples</h2>
      <div className="content">
        <AlertCP status={"primary"} hide={"none"}>
          {" "}
          A simple primary alert—check it out!
        </AlertCP>
        <AlertCP status={"secondary"} hide={"none"}>
          {" "}
          A simple secondary alert—check it out!
        </AlertCP>
        <AlertCP status={"success"} hide={"none"}>
          {" "}
          A simple success alert—check it out!
        </AlertCP>
        <AlertCP status={"danger"} hide={"none"}>
          {" "}
          A simple danger alert—check it out!
        </AlertCP>
        <AlertCP status={"warning"} hide={"none"}>
          {" "}
          A simple warning alert—check it out!
        </AlertCP>
        <AlertCP status={"info"} hide={"none"}>
          {" "}
          A simple info alert—check it out!
        </AlertCP>
        <AlertCP status={"light"} hide={"none"}>
          {" "}
          A simple light alert—check it out!
        </AlertCP>
        <AlertCP status={"dark"} hide={"none"}>
          {" "}
          A simple dark alert—check it out!
        </AlertCP>
      </div>
      <div className="content">
        <ShowLiveAL></ShowLiveAL>
      </div>
      <h2>Link color</h2>
      <div className="content">
        <AlertCP status={"primary"} hide={" none"}>
          A simple primary alert with
          <a href="." className="alert-link">
            an example link
          </a>
          . Give it a click if you like.
        </AlertCP>
        <AlertCP status={"secondary"} hide={" none"}>
          A simple secondary alert with
          <a href="." className="alert-link">
            an example link
          </a>
          . Give it a click if you like.
        </AlertCP>
        <AlertCP status={"success"} hide={" none"}>
          A simple success alert with
          <a href="." className="alert-link">
            an example link
          </a>
          . Give it a click if you like.
        </AlertCP>
        <AlertCP status={"danger"} hide={" none"}>
          A simple danger alert with
          <a href="." className="alert-link">
            an example link
          </a>
          . Give it a click if you like.
        </AlertCP>
        <AlertCP status={"warning"} hide={" none"}>
          A simple warning alert with
          <a href="." className="alert-link">
            an example link
          </a>
          . Give it a click if you like.
        </AlertCP>
        <AlertCP status={"info"} hide={" none"}>
          A simple info alert with
          <a href="." className="alert-link">
            an example link
          </a>
          . Give it a click if you like.
        </AlertCP>
        <AlertCP status={"light"} hide={" none"}>
          A simple light light with
          <a href="." className="alert-link">
            an example link
          </a>
          . Give it a click if you like.
        </AlertCP>
        <AlertCP status={"dark"} hide={" none"}>
          A simple dark light with
          <a href="." className="alert-link">
            an example link
          </a>
          . Give it a click if you like.
        </AlertCP>
      </div>
      <h2>Additional content</h2>
      <div className="content">
        <div className="alert alert-success">
          <h4 className="alert-heading">Well done!</h4>
          <p>
            Aww yeah, you successfully read this important alert message. This
            example text is going to run a bit longer so that you can see how
            spacing within an alert works with this kind of content.
          </p>
          <hr />
          <p>
            Whenever you need to, be sure to use margin utilities to keep things
            nice and tidy.
          </p>
        </div>
      </div>
      <h2>Icons</h2>
      <div className="content">
        <div className="alert alert-success">
          <i className="fa-solid fa-circle-check mr-1"></i>A simple dark alert
          with
          <a href="." className="alert-link">
            an example link
          </a>
          . Give it a click if you like.
        </div>
        <div className="alert alert-warning">
          <i className="fa-solid fa-triangle-exclamation mr-1"></i>A simple dark
          alert with{" "}
          <a href="." className="alert-link">
            an example link
          </a>
          . Give it a click if you like.
        </div>
        <div className="alert alert-primary">
          <i className="fa-solid fa-circle-info mr-1"></i>A simple dark alert
          with
          <a href="." className="alert-link">
            an example link
          </a>
          . Give it a click if you like.
        </div>
        <div className="alert alert-danger">
          <i className="fa-solid fa-circle-check mr-1"></i>A simple dark alert
          with
          <a href="." className="alert-link">
            an example link
          </a>
          . Give it a click if you like.
        </div>
      </div>
      <h2>Dismissing</h2>
      <div className="content">
        <AlertCP status={"warning"}>
          <strong>Holy guacamole!</strong> You should check in on some of those
          fields below.
        </AlertCP>
      </div>
    </>
  );
}

export default Alerts;
