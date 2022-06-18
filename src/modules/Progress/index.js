function Progress() {
  return (
    <>
      <h1>Progress</h1>
      <div className="content">
        <div className="progress">
          <div className="progress-bar"></div>
        </div>
        <div className="progress">
          <div className="progress-bar" style={{ width: "25%" }}></div>
        </div>
        <div className="progress">
          <div className="progress-bar" style={{ width: "50%" }}></div>
        </div>
        <div className="progress">
          <div className="progress-bar" style={{ width: "75%" }}></div>
        </div>
        <div className="progress">
          <div className="progress-bar" style={{ width: "100%" }}></div>
        </div>
      </div>
      <div className="content">
        <div className="progress">
          <div className="progress-bar width-75"></div>
        </div>
      </div>
      <h2>Labels</h2>
      <div className="content">
        <div className="progress">
          <div className="progress-bar width-50">50 %</div>
        </div>
      </div>
      <h2>Height</h2>
      <div className="content">
        <div className="progress" style={{ height: "1px" }}>
          <div className="progress-bar width-75"></div>
        </div>
        <div className="progress" style={{ height: "20px" }}>
          <div className="progress-bar width-50"></div>
        </div>
      </div>
      <h2>Color</h2>
      <div className="content">
        <div className="progress">
          <div
            className="progress-bar bg-success"
            style={{ width: "25%" }}
          ></div>
        </div>
        <div className="progress">
          <div
            className="progress-bar bg-warning"
            style={{ width: "50%" }}
          ></div>
        </div>
        <div className="progress">
          <div
            className="progress-bar bg-danger"
            style={{ width: "75%" }}
          ></div>
        </div>
        <div className="progress">
          <div className="progress-bar bg-info" style={{ width: "100%" }}></div>
        </div>
      </div>
      <h2>Multiple Bars</h2>
      <div className="content">
        <div className="progress">
          <div
            className="progress-bar bg-warning"
            style={{ width: "25%" }}
          ></div>
          <div
            className="progress-bar bg-success"
            style={{ width: "25%" }}
          ></div>
          <div
            className="progress-bar bg-danger"
            style={{ width: "25%" }}
          ></div>
        </div>
      </div>
      <h2>Stripes</h2>
      <div className="content">
        <div className="progress">
          <div
            className="progress-bar progress-bar-stripes bg-success"
            style={{ width: "25%" }}
          ></div>
        </div>
        <div className="progress">
          <div
            className="progress-bar progress-bar-stripes bg-warning"
            style={{ width: "50%" }}
          ></div>
        </div>
        <div className="progress">
          <div
            className="progress-bar progress-bar-stripes bg-danger"
            style={{ width: "75%" }}
          ></div>
        </div>
        <div className="progress">
          <div
            className="progress-bar progress-bar-stripes bg-info"
            style={{ width: "100%" }}
          ></div>
        </div>
      </div>
      <h2>Stripes</h2>
      <div className="content">
        <div className="progress">
          <div
            className="progress-bar progress-bar-stripes progress-bar-animated bg-success"
            style={{ width: "75%" }}
          ></div>
        </div>
      </div>
    </>
  );
}

export default Progress;
