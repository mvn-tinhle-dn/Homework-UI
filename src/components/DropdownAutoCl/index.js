import { useEffect, useRef } from "react";

function DropdownAutoCl() {
  const menu = useRef();
  useEffect(() => {
    const dropPage = document.getElementById("dropdown-page");
    dropPage.addEventListener("click", function (e) {
      const x = e.clientX;
      const y = e.clientY;
      let elementMouseIsOver = document.elementFromPoint(x, y);
      if (elementMouseIsOver.id !== "btn-dropdown") {
        menu.current.classList.add("hide");
      }
    });
  });
  const showDrop = (e) => {
    e.preventDefault();
    e.target.nextElementSibling.classList.toggle("hide");
  };
  return (
    <>
      <div className="dropdown">
        <a
          id="btn-dropdown"
          className="btn btn-secondary dropdown-toggle right"
          onClick={showDrop}
          href="."
        >
          Dropdown link
        </a>

        <ul ref={menu} className="dropdown-menu-right hide">
          <li className="dropdown-item">
            <a href=".">Action</a>
          </li>
          <li className="dropdown-item">
            <a href=".">Another action</a>
          </li>
          <li className="dropdown-item">
            <a href=".">Something else here</a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default DropdownAutoCl;
