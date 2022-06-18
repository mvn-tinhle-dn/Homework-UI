import { useRef } from "react";

function ToastCP({ children, hideHeader = false, margin }) {
  const toast = useRef();
  const closeToast = () => {
    toast.current.remove();
  };
  return (
    <>
      <div ref={toast} className={`toast ${margin}`}>
        <div className={`toast-header ${hideHeader ? "hide" : ""}`}>
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
        <div className="toast-body">{children}</div>
      </div>
    </>
  );
}

export default ToastCP;
