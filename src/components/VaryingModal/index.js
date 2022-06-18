import { useRef } from "react";

function VaryingModal() {
  const input = useRef();
  const dataSetInput = (e) => {
    e.target.nextElementSibling.classList.add("show");
    const data = e.nativeEvent.path[0].dataset.bsWhatever;
    input.current.value = data;
  };
  const closeModalBtnClose = (e) => {
    e.target.parentElement.parentElement.parentElement.classList.remove("show");
  };
  return (
    <>
      <button
        type="button"
        className="btn btn-primary"
        data-bs-whatever="@mdo"
        onClick={dataSetInput}
      >
        Open modal htmlFor @mdo
      </button>
      <div className="modal">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Modal title</h5>
            <button
              type="button"
              className="btn-closed mr-4"
              onClick={closeModalBtnClose}
            ></button>
          </div>
          <div className="modal-body">
            <form>
              <div className="mb-3">
                <label htmlFor="recipient-name" className="col-form-label">
                  Recipient:
                </label>
                <input
                  ref={input}
                  type="text"
                  className="form-control"
                  id="recipient-name"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="message-text" className="col-form-label">
                  Message:
                </label>
                <textarea className="form-control" id="message-text"></textarea>
              </div>
            </form>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              onClick={closeModalBtnClose}
              className="btn btn-secondary mr-4"
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

export default VaryingModal;
