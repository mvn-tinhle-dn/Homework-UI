function Breadcrumb() {
  return (
    <>
      <h1>Breadcrumb</h1>
      <h2>Example</h2>
      <div className="content">
        <nav aria-label="breadcrumb">
          <ul className="breadcrumb">
            <li className="breadcrumb-item active">Home</li>
          </ul>
        </nav>

        <nav aria-label="breadcrumb">
          <ul className="breadcrumb">
            <li className="breadcrumb-item">
              <a href=".">Home</a>
            </li>
            <li className="breadcrumb-item active">Library</li>
          </ul>
        </nav>

        <nav aria-label="breadcrumb">
          <ul className="breadcrumb">
            <li className="breadcrumb-item">
              <a href=".">Home</a>
            </li>
            <li className="breadcrumb-item">
              <a href=".">Library</a>
            </li>
            <li className="breadcrumb-item active">Data</li>
          </ul>
        </nav>
      </div>
      <h2>Dividers</h2>
      <div className="content">
        <nav
          style={{ "--bs-breadcrumb-divider": "'>'" }}
          aria-label="breadcrumb"
        >
          <ul className="breadcrumb">
            <li className="breadcrumb-item">
              <a href=".">Home</a>
            </li>
            <li className="breadcrumb-item active">Library</li>
          </ul>
        </nav>
      </div>
      <div className="content">
        <nav
          style={{
            "--bs-breadcrumb-divider":
              "url('data:image/svg+xml;utf8;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDI0djI0SDBWMHoiLz48cGF0aCBkPSJNOS4zMSA2LjcxYy0uMzkuMzktLjM5IDEuMDIgMCAxLjQxTDEzLjE5IDEybC0zLjg4IDMuODhjLS4zOS4zOS0uMzkgMS4wMiAwIDEuNDEuMzkuMzkgMS4wMi4zOSAxLjQxIDBsNC41OS00LjU5Yy4zOS0uMzkuMzktMS4wMiAwLTEuNDFMMTAuNzIgNi43Yy0uMzgtLjM4LTEuMDItLjM4LTEuNDEuMDF6Ii8+PC9zdmc+')",
          }}
          aria-label="breadcrumb"
        >
          <ul className="breadcrumb">
            <li className="breadcrumb-item ">
              <a href=".">Home</a>
            </li>
            <li className="breadcrumb-item active">Library</li>
          </ul>
        </nav>
      </div>
      <div className="content">
        <nav
          style={{ "--bs-breadcrumb-divider": "''" }}
          aria-label="breadcrumb"
        >
          <ul className="breadcrumb">
            <li className="breadcrumb-item">
              <a href=".">Home</a>
            </li>
            <li className="breadcrumb-item active">Library</li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default Breadcrumb;
