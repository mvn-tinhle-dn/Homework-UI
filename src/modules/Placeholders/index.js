function Placeholders() {
  return (
    <>
      <h1>Placeholders</h1>
      <h2>Example</h2>
      <div className="content ">
        <div className="d-flex justify-content-around width-75">
          <div className="card">
            <img
              src="https://img.poki.com/cdn-cgi/image/quality=78,widt…cover,f=auto/4206da66a0e5deca9115d19a4bc0c63f.png"
              className="card-img-top"
              alt="..."
            />

            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="." className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
          <div className="card">
            <img
              src="https://img.poki.com/cdn-cgi/image/quality=78,widt…cover,f=auto/4206da66a0e5deca9115d19a4bc0c63f.png"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title placeholder-glow">
                <span className="placeholder col-6"></span>
              </h5>
              <p className="card-text placeholder-glow ">
                <span className="placeholder col-8 mr-1"></span>
                <span className="placeholder col-3"></span>
                <span className="placeholder col-4 mr-1"></span>
                <span className="placeholder col-6"></span>
                <span className="placeholder col-8"></span>
              </p>
              <a href="." className="btn btn-primary disabled  col-6">
                &nbsp;
              </a>
            </div>
          </div>
        </div>
      </div>
      <h2> How it works</h2>
      <div className="content">
        <p>
          <span className="placeholder col-6 bg-secondary"></span>
        </p>
        <a href="." className="btn btn-primary disabled  col-4">
          &nbsp;
        </a>
      </div>
      <h2>Width</h2>
      <div className="content">
        <span className="placeholder col-6"></span>
        <span className="placeholder width-75"></span>
        <span className="placeholder" style={{ width: "26%" }}></span>
      </div>
      <h2>Color</h2>
      <div className="content">
        <span className="placeholder col-12"></span>
        <span className="placeholder col-12 bg-primary"></span>
        <span className="placeholder col-12 bg-secondary"></span>
        <span className="placeholder col-12 bg-success"></span>
        <span className="placeholder col-12 bg-danger"></span>
        <span className="placeholder col-12 bg-warning"></span>
        <span className="placeholder col-12 bg-info"></span>
        <span className="placeholder col-12 bg-light"></span>
        <span className="placeholder col-12 bg-dark"></span>
      </div>
      <h2> Sizing</h2>
      <div className="content">
        <span className="placeholder col-12 placeholder-lg"></span>
        <span className="placeholder col-12"></span>
        <span className="placeholder col-12 placeholder-sm"></span>
        <span className="placeholder col-12 placeholder-xs"></span>
      </div>
      <h2>Animation</h2>
      <div className="content">
        <p className="placeholder-glow">
          <span className="placeholder col-12"></span>
        </p>
        <p className="placeholder-wave">
          <span className="placeholder col-12"></span>
        </p>
      </div>
    </>
  );
}

export default Placeholders;
