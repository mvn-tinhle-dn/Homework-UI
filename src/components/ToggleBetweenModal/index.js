import { useRef } from "react";

function ToggleBetweenModal() {
  const modal1 = useRef();
  const modal2 = useRef();
  const openModal1 = () => {
    modal2.current.classList.remove("show");
    modal1.current.classList.add("show");
  };
  const openModal2 = () => {
    modal1.current.classList.remove("show");
    modal2.current.classList.add("show");
  };
  const closeModalBtnClose = (e) => {
    e.target.parentElement.parentElement.parentElement.classList.remove("show");
  };
  return (
    <>
      <button type="button" className="btn btn-primary" onClick={openModal1}>
        Open modal 1
      </button>
      <div ref={modal1} className="modal">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Modal 1</h5>
            <button
              type="button"
              className="btn-closed mr-4"
              onClick={closeModalBtnClose}
            ></button>
          </div>
          <div className="modal-body">Modal 1</div>
          <div className="modal-footer">
            <button
              type="button"
              onClick={closeModalBtnClose}
              className="btn btn-secondary mr-2"
            >
              Close
            </button>
            <button
              type="button"
              onClick={openModal2}
              className="btn btn-primary"
            >
              Modal 2
            </button>
          </div>
        </div>
      </div>
      {/* Modal 2 */}
      <div ref={modal2} className="modal">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Modal 2</h5>
            <button
              type="button"
              className="btn-closed mr-4"
              onClick={closeModalBtnClose}
            ></button>
          </div>
          <div className="modal-body">Modal 2</div>
          <div className="modal-footer">
            <button
              type="button"
              onClick={closeModalBtnClose}
              className="btn btn-secondary mr-2"
            >
              Close
            </button>
            <button
              type="button"
              onClick={openModal1}
              className="btn btn-primary"
            >
              Back
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ToggleBetweenModal;
