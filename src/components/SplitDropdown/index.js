function SplitDropdown({
  itemDrops = ["link"],
  itemMore,
  colorDrop,
  contentDrop,
  margin,
  size,
  dark = false,
  dropUp = false,
}) {
  const showDrop = (e) => {
    e.preventDefault();
    e.target.parentElement.nextElementSibling.classList.toggle("hide");
  };
  return (
    <>
      <div className={`dropdown ${margin}`}>
        <div className="btn-group">
          <button
            className={`btn btn-${colorDrop} dropdown-toggle ${size}`}
            type="button"
          >
            {contentDrop}
          </button>
          <button
            type="button"
            className={`btn btn-${colorDrop} dropdown-toggle dropdown-toggle-split ${
              dropUp ? dropUp : "down"
            } `}
            onClick={showDrop}
          ></button>
        </div>
        <ul
          className={`dropdown-split-menu${
            dropUp ? `-${dropUp}` : ""
          } hide dropdown-menu-${dark ? "dark" : ""}`}
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

export default SplitDropdown;
