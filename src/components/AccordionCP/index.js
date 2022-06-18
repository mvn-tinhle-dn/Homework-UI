function AccordionCP({ children, heading, active }) {
  const addActive = (e) => {
    e.target.parentElement.classList.toggle("active");
  };
  return (
    <div className={`accordion-item ${active}`}>
      <h2 onClick={addActive} className="accordion-header" id="heading-one">
        {heading}
      </h2>
      <div className="accordion-body">{children}</div>
    </div>
  );
}

export default AccordionCP;
