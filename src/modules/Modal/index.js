import ModalCP from "../../components/Modal";
import ToggleBetweenModal from "../../components/ToggleBetweenModal";
import VaryingModal from "../../components/VaryingModal";

function Modal() {
  return (
    <>
      <h1>Modal</h1>
      <h2>Modal components</h2>
      <div className="content">
        <div className="modal-example">
          <div className="modal show">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Modal title</h5>
                  <button type="button" className="btn-closed mr-4"></button>
                </div>
                <div className="modal-body">
                  <p>Modal body text goes here.</p>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary mr-4">
                    Close
                  </button>
                  <button type="button" className="btn btn-primary">
                    Save changes
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <h2>Live demo</h2>
      <div className="content">
        <ModalCP contentToggle=" Launch demo modal" contentTitle="Modal title">
          <p>....</p>
        </ModalCP>
      </div>
      <h2>Static Backdrop</h2>
      <div className="content">
        <ModalCP
          contentToggle=" Launch demo Static Backdrop modal"
          contentTitle="Modal title"
          staticBackdrop={true}
        >
          <p>....</p>
        </ModalCP>
      </div>
      <h2>Scrolling long content</h2>
      <div className="content">
        <ModalCP contentToggle=" Launch demo modal" contentTitle="Modal title">
          <div style={{ height: "1000px" }}>......</div>
        </ModalCP>
      </div>
      <div className="content">
        <ModalCP
          contentToggle=" Launch demo modal"
          contentTitle="Modal title"
          scroll={true}
        >
          <div style={{ height: "1000px" }}>.....</div>
        </ModalCP>
      </div>
      <h2>Vertically centered</h2>
      <div className="content">
        <ModalCP
          contentToggle=" Vertically centered modal "
          contentTitle="Modal title"
          centered={true}
        >
          ...
        </ModalCP>
        <ModalCP
          contentToggle=" Vertically centered scrollable modal "
          contentTitle="Modal title"
          margin="ml-2"
          scroll={true}
          centered={true}
        >
          <div style={{ height: "1000px" }}>.....</div>
        </ModalCP>
      </div>
      <h2>Tooltips and popovers</h2>
      <div className="content">
        <ModalCP
          contentToggle=" Vertically centered modal "
          contentTitle="Modal title"
          centered={true}
        >
          <h3>Popover in a modal</h3>
          <p>
            This{" "}
            <a href="." className="btn btn-secondary popover-test">
              button
            </a>{" "}
            triggers a popover on click.
          </p>
          <hr className="dropdown-divider" />
          <h3>Tooltips in a modal</h3>
          <p>
            <a href="." className="tooltip-test" title="Tooltip">
              This link
            </a>{" "}
            and{" "}
            <a href="." className="tooltip-test" title="Tooltip">
              that link
            </a>{" "}
            have tooltips on hover.
          </p>
        </ModalCP>
      </div>
      <h2>Using the grid</h2>
      <div className="content">
        <ModalCP
          contentToggle=" Vertically centered modal "
          contentTitle="Modal title"
          centered={true}
        >
          <div className="row">
            <div className="col-4">.col-4</div>
            <div className="col-4 ml-auto">.col-4 .ml-auto</div>
          </div>
          <div className="row">
            <div className="col-3 ml-auto">.col-3 .ml-auto</div>
            <div className="col-2 ml-auto">.col-2 .ml-auto</div>
          </div>
          <div className="row">
            <div className="col-6 ml-auto">.col-6 .ml-auto</div>
          </div>
          <div className="row">
            <div className="col-9">
              Level 1: .col-9
              <div className="row">
                <div className="col-8 ">Level 2: .col-8</div>
                <div className="col-4">Level 2: .col-4</div>
              </div>
            </div>
          </div>
        </ModalCP>
      </div>
      <h2>Varying modal content</h2>
      <div className="content">
        <VaryingModal></VaryingModal>
      </div>
      <h2>Toggle between modals</h2>
      <div className="content">
        <ToggleBetweenModal></ToggleBetweenModal>
      </div>
      <h2>Modal Size</h2>
      <div className="content">
        <ModalCP
          contentToggle="Modal Extra Large"
          contentTitle="Modal Extra Large"
          size="modal-xl"
        ></ModalCP>
        <ModalCP
          contentToggle="Modal Large"
          contentTitle="Modal Large"
          size="modal-lg"
          margin="mh-2"
        ></ModalCP>
        <ModalCP
          contentToggle="Modal Small"
          contentTitle="Modal Small"
          size="modal-sm"
        ></ModalCP>
      </div>
      <h2> FullScreen Modal</h2>
      <div className="content">
        <ModalCP
          contentToggle="Modal Full Screen"
          contentTitle="Modal Full Screen"
          size="modal-fullscreen"
          margin="ml-2"
        ></ModalCP>
        <ModalCP
          contentToggle="modal-fullscreen-xxl-down"
          contentTitle="Modal Full Screen"
          size="modal-fullscreen-xxl-down"
          margin="ml-2"
        ></ModalCP>
        <ModalCP
          contentToggle="modal-fullscreen-xl-down"
          contentTitle="Modal Full Screen"
          size="modal-fullscreen-xl-down"
          margin="ml-2"
        ></ModalCP>
        <ModalCP
          contentToggle="modal-fullscreen-lg-down"
          contentTitle="Modal Full Screen"
          size="modal-fullscreen-lg-down"
          margin="ml-2"
        ></ModalCP>
        <ModalCP
          contentToggle="modal-fullscreen-md-down"
          contentTitle="Modal Full Screen"
          size="modal-fullscreen-md-down"
          margin="ml-2"
        ></ModalCP>
        <ModalCP
          contentToggle="modal-fullscreen-sm-down"
          contentTitle="Modal Full Screen"
          size="modal-fullscreen-sm-down"
          margin="mt-2 ml-2"
        ></ModalCP>
      </div>
    </>
  );
}

export default Modal;
