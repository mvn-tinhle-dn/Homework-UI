import { useState } from "react";

function ToastSelect() {
  const [classToast, setClassToast] = useState("");
  const getLocation = (e) => {
    setClassToast(e.target.value);
  };
  return (
    <>
      <div className="mb-3">
        <label htmlFor="select-toast-placement">Toast placement</label>
        <select
          className="form-select mt-2"
          id="select-toast-placement"
          onChange={getLocation}
        >
          <option value="">Select a position...</option>
          <option value="top-0 start-0">Top left</option>
          <option value="top-0 start-50 translate-middle-x">Top center</option>
          <option value="top-0 end-0">Top right</option>
          <option value="top-50 start-0 translate-middle-y">Middle left</option>
          <option value="top-50 start-50 translate-middle">
            Middle center
          </option>
          <option value="top-50 end-0 translate-middle-y">Middle right</option>
          <option value="bottom-0 start-0">Bottom left</option>
          <option value="bottom-0 start-50 translate-middle-x">
            Bottom center
          </option>
          <option value="bottom-0 end-0">Bottom right</option>
        </select>
      </div>
      <div className="content position-relative bg-dark " id="toast-select">
        <div
          className={`position-absolute ${classToast} m-2 `}
          style={{ zIndex: 5 }}
        >
          <div id="live-toast" className="toast show">
            <div className="toast-header">
              <img
                src="https://getbootstrap.com/docs/5.1/assets/brand/bootstrap-logo.svg"
                className="toast-header-img mr-1"
                alt="logo"
              />
              <strong className="me-auto">Bootstrap</strong>
              <span className="ml-auto toast-time">11 mins ago</span>
              <button type="button" className="btn-closed ml-1"></button>
            </div>
            <div className="toast-body">
              Hello, world! This is a toast message.
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ToastSelect;
