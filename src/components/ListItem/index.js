function ListItem({ href = ".", color, children }) {
  const activeItem = (e) => {
    e.preventDefault();
    e.target.classList.toggle("active");
  };
  return (
    <a
      href={href}
      className={`list-group-item list-group-item-action list-group-item-${color}`}
      onClick={activeItem}
    >
      {children}
    </a>
  );
}

export default ListItem;
