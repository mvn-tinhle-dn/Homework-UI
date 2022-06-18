import { useRef } from "react";

function DropdownCP({
  itemDrops = [],
  itemMore,
  colorDrop,
  colorText,
  contentDrop,
  margin,
  size,
  dark,
  dropUp = false,
  end = false,
  widthMenu,
}) {
  const menu = useRef();
  const showDrop = (e) => {
    e.preventDefault();
    e.target.nextElementSibling.classList.toggle("hide");
  };
  return (
    <>
      <div className={`dropdown ${margin}`}>
        <button
          className={`btn btn-${colorDrop} dropdown-toggle ${size} ${
            dropUp ? dropUp : "down"
          } text-${colorText}`}
          onClick={showDrop}
          type="button"
        >
          {contentDrop}
        </button>
        <ul
          ref={menu}
          className={`dropdown-menu${
            dropUp ? `-${dropUp}` : ""
          } hide dropdown-menu-${dark ? "dark" : ""} ${
            end ? "dropdown-menu-end" : ""
          } ${widthMenu}`}
        >
          {itemDrops.map((item, index) => {
            return (
              <li className="dropdown-item" key={index}>
                <a href=".">{item}</a>
              </li>
            );
          })}
          {itemMore}
        </ul>
      </div>
    </>
  );
}

export default DropdownCP;
