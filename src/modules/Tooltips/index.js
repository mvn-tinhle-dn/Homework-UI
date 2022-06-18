import TooltipButton from "../../components/TooltipButton";

function Tooltips() {
  return (
    <div id="tooltip-page">
      <h1>Tooltips</h1>
      <h2>Tooltips Top, Right, Bottom, Left</h2>
      <div className="content">
        <div className="d-inline-block position-relative">
          <button type="button" className="btn btn-secondary">
            Tooltip on top
          </button>
          <div className="content-tooltip top">
            <p>Tooltip on top</p>
          </div>
        </div>
        <div className="d-inline-block position-relative mh-2">
          <button type="button" className="btn btn-secondary">
            Tooltip on right
          </button>
          <div className="content-tooltip right">
            <p>Tooltip on right</p>
          </div>
        </div>
        <div className="d-inline-block position-relative">
          <button type="button" className="btn btn-secondary">
            Tooltip on bottom
          </button>
          <div className="content-tooltip bottom">
            <p>Tooltip on bottom</p>
          </div>
        </div>
        <div className="d-inline-block position-relative ml-2">
          <button type="button" className="btn btn-secondary">
            Tooltip on left
          </button>
          <div className="content-tooltip left">
            <p>Tooltip on left</p>
          </div>
        </div>
      </div>
      <h2>Auto click outside close</h2>
      <div className="content">
        <TooltipButton contentBtn="Tooltip click outside close">
          {" "}
          <p>Tooltip click outside close</p>
        </TooltipButton>
      </div>
      <h2>Disabled Tooltip</h2>
      <div className="content">
        <div className="d-inline-block position-relative">
          <button type="button" disabled className="btn btn-secondary">
            Tooltip Disabled
          </button>
          <div className="content-tooltip right">
            <p>Tooltip Disabled</p>
          </div>
        </div>
      </div>
      <h2>SGV</h2>
      <div className="content">
        <div className="d-inline-block position-relative">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="50"
            height="50"
            viewBox="0 0 100 100"
          >
            <rect width="100%" height="100%" fill="#563d7c"></rect>
            <circle cx="50" cy="50" r="30" fill="#007bff"></circle>
          </svg>
          <div className="content-tooltip right">
            <p>Tooltip on top</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tooltips;
