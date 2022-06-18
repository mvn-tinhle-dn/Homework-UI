function Pagination() {
  return (
    <>
      <h1>Pagination</h1>
      <h2>Overview</h2>
      <div className="content">
        <nav>
          <ul className="pagination">
            <li className="page-item">
              <a className="page-link" href=".">
                Previous
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href=".">
                1
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href=".">
                2
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href=".">
                3
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href=".">
                Next
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <h2>Working with icons</h2>
      <div className="content">
        <nav>
          <ul className="pagination">
            <li className="page-item">
              <a className="page-link" href=".">
                <span>&laquo;</span>
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href=".">
                1
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href=".">
                2
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href=".">
                3
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href=".">
                <span>&raquo;</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <h2>Disabled and Active</h2>
      <div className="content">
        <nav>
          <ul className="pagination">
            <li className="page-item">
              <a className="page-link disabled" href=".">
                Previous
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href=".">
                1
              </a>
            </li>
            <li className="page-item">
              <a className="page-link active" href=".">
                2
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href=".">
                3
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href=".">
                Next
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <h3>span</h3>
      <div className="content">
        <nav>
          <ul className="pagination">
            <li className="page-item">
              <span className="page-link disabled">Previous</span>
            </li>
            <li className="page-item">
              <span className="page-link">1</span>
            </li>
            <li className="page-item">
              <span className="page-link active">2</span>
            </li>
            <li className="page-item">
              <span className="page-link">3</span>
            </li>
            <li className="page-item">
              <span className="page-link">Next</span>
            </li>
          </ul>
        </nav>
      </div>
      <h2>Sizing</h2>
      <h3>Large</h3>
      <div className="content">
        <nav>
          <ul className="pagination pagination-lg">
            <li className="page-item">
              <a className="page-link disabled" href=".">
                Previous
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href=".">
                1
              </a>
            </li>
            <li className="page-item">
              <a className="page-link active" href=".">
                2
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href=".">
                3
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href=".">
                Next
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <h3>Small</h3>
      <div className="content">
        <nav>
          <ul className="pagination pagination-sm">
            <li className="page-item">
              <a className="page-link disabled" href=".">
                Previous
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href=".">
                1
              </a>
            </li>
            <li className="page-item">
              <a className="page-link active" href=".">
                2
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href=".">
                3
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href=".">
                Next
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <h2>Alignment</h2>
      <div className="content">
        <nav>
          <ul className="pagination justify-content-center">
            <li className="page-item">
              <a className="page-link disabled" href=".">
                Previous
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href=".">
                1
              </a>
            </li>
            <li className="page-item">
              <a className="page-link active" href=".">
                2
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href=".">
                3
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href=".">
                Next
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="content">
        <nav>
          <ul className="pagination justify-content-end">
            <li className="page-item">
              <a className="page-link disabled" href=".">
                Previous
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href=".">
                1
              </a>
            </li>
            <li className="page-item">
              <a className="page-link active" href=".">
                2
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href=".">
                3
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href=".">
                Next
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default Pagination;
