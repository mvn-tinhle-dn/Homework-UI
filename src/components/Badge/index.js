function BadgeCP({
  margin = "mh-1",
  status = "primary",
  roundedPill = false,
  textCL,
  children,
}) {
  return (
    <span
      className={`badge bg-${status} ${margin} text-${textCL} ${
        roundedPill ? "rounded-pill" : ""
      }`}
    >
      {children}
    </span>
  );
}

export default BadgeCP;
