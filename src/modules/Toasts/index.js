import { useRef } from "react";
import ToastCP from "../../components/Toast";
import ToastSelect from "../../components/ToastSelect";

function Toasts() {
  const liveToast = useRef();
  const closeToast = () => {
    liveToast.current.classList.remove("show");
  };
  const showToast = () => {
    liveToast.current.classList.add("show");
  };
  const closeToastCustom = (e) => {
    e.target.parentElement.parentElement.remove();
  };
  return (
    <>
      <h1>Toasts</h1>
      <h2> Examples </h2>
      <h3> Basic</h3>
      <div className="content">
        <ToastCP>Hello, world! This is a toast message.</ToastCP>
      </div>
      <h3>Live Examples</h3>
      <div className="content">
        <button type="button" onClick={showToast} className="btn btn-primary">
          Show live toast
        </button>
        <div
          className="position-fixed bottom-0 end-0 mr-2 mb-2"
          style={{ zIndex: 5 }}
        >
          <div ref={liveToast} id="live-toast" className="toast">
            <div className="toast-header">
              <img
                src="https://getbootstrap.com/docs/5.1/assets/brand/bootstrap-logo.svg"
                className="toast-header-img mr-1"
                alt="logo"
              />
              <strong className="me-auto">Bootstrap</strong>
              <span className="ml-auto toast-time">11 mins ago</span>
              <button
                type="button"
                onClick={closeToast}
                className="btn-closed ml-1"
              ></button>
            </div>
            <div className="toast-body">
              Hello, world! This is a toast message.
            </div>
          </div>
        </div>
      </div>
      <h3> Translucent</h3>
      <div className="content bg-dark">
        <ToastCP>Hello, world! This is a toast message.</ToastCP>
      </div>
      <h3> Stacking</h3>
      <div className="content">
        <ToastCP>Hello, world! This is a toast message.</ToastCP>
        <ToastCP margin="mt-1">Hello, world! This is a toast message.</ToastCP>
      </div>
      <h3>Custom content</h3>
      <div className="content">
        <div className="toast">
          <div className="d-flex align-items-center">
            <div className="toast-body">
              Hello, world! This is a toast message.
            </div>
            <button
              type="button"
              onClick={closeToastCustom}
              className="btn-closed ml-auto mr-1"
            ></button>
          </div>
        </div>
      </div>
      <div className="content">
        <div className="toast">
          <div className="toast-body">
            Hello, world! This is a toast message.
          </div>
          <div className="toast-footer d-flex justify-content-end">
            <button type="button" className="btn btn-primary btn-sm mr-1">
              Take action
            </button>
            <button
              type="button"
              onClick={closeToastCustom}
              className="btn btn-secondary btn-sm"
            >
              Close
            </button>
          </div>
        </div>
      </div>
      <h3>Color</h3>
      <div className="content">
        <div className="toast">
          <div className="d-flex align-items-center bg-primary text-white">
            <div className="toast-body">
              Hello, world! This is a toast message.
            </div>
            <button
              type="button"
              onClick={closeToastCustom}
              className="btn-closed ml-auto mr-1"
              style={{ filter: "invert(1)" }}
            ></button>
          </div>
        </div>
      </div>
      <h3>Placement</h3>
      <div className="content">
        <ToastSelect></ToastSelect>
      </div>
      <div className="content position-relative bg-dark" id="toast-select">
        <div
          className={`position-absolute top-50 end-0 translate-middle-y m-2 `}
          style={{ zIndex: 5 }}
        >
          <ToastCP>Hello, world! This is a toast message.</ToastCP>
          <ToastCP margin="mt-1">
            Hello, world! This is a toast message.
          </ToastCP>
        </div>
      </div>
      <div
        className="content bg-dark d-flex justify-content-center align-items-center"
        id="toast-select"
      >
        <ToastCP>Hello, world! This is a toast message.</ToastCP>
      </div>
    </>
  );
}

export default Toasts;
