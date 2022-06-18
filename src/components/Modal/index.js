function ModalCP({
  staticBackdrop = false,
  centered = false,
  scroll = false,
  contentToggle,
  contentTitle,
  children,
  margin,
  size,
}) {
  const showModal = (e) => {
    e.target.nextElementSibling.classList.toggle("show");
  };
  const closeModalBtnClose = (e) => {
    e.target.parentElement.parentElement.parentElement.classList.remove("show");
  };
  const closeModal = (e) => {
    if (e.target.classList[1] === "static-backdrop") {
      e.target.children[0].classList.add("zoom");
      setTimeout(() => {
        e.target.children[0].classList.remove("zoom");
      }, 200);
    } else {
      e.target.classList.remove("show");
    }
  };
  return (
    <>
      <button
        type="button"
        className={`btn btn-primary ${margin}`}
        onClick={showModal}
      >
        {contentToggle}
      </button>
      <div
        className={`modal ${staticBackdrop ? "static-backdrop" : ""} ${
          scroll ? "scrollable" : ""
        }`}
        onClick={closeModal}
      >
        <div
          className={`modal-content ${
            centered ? "modal-centered" : ""
          } ${size}`}
        >
          <div className="modal-header">
            <h5 className="modal-title">{contentTitle}</h5>
            <button
              type="button"
              className="btn-closed mr-4"
              onClick={closeModalBtnClose}
            ></button>
          </div>
          <div className="modal-body">{children}</div>
          <div className="modal-footer">
            <button
              type="button"
              onClick={closeModalBtnClose}
              className="btn btn-secondary mr-3"
            >
              Close
            </button>
            <button type="button" className="btn btn-primary">
              Save changes
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ModalCP;
