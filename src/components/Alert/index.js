function AlertCP({ status, children, hide = "unset" }) {
  const removeAlert = (e) => {
    e.target.parentElement.remove();
  };
  return (
    <div className={`alert alert-${status}`}>
      {children}
      <button
        type="button"
        style={{ display: hide }}
        onClick={removeAlert}
        className="btn-close"
      >
        X
      </button>
    </div>
  );
}

export default AlertCP;
