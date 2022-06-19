import AccordionCP from "../../components/AccordionCP";

function Accordion() {
  return (
    <>
      <h1>Accordion</h1>
      <h2>Example</h2>
      <div className="content">
        <div className="accordion" id="accordion-example">
          <AccordionCP heading={"Accordion Item #1"}>
            <strong>This is the first item's accordion body.</strong> It is
            shown by default, until the collapse plugin adds the appropriate
            classes that we use to style each element. These classes control the
            overall appearance, as well as the showing and hiding via CSS
            transitions. You can modify any of this with custom CSS or
            overriding our default variables. It's also worth noting that just
            about any HTML can go within the <span>.accordion-body</span>,
            though the transition does limit overflow.
          </AccordionCP>
          <AccordionCP heading={"Accordion Item #2"}>
            <strong>This is the first item's accordion body.</strong> It is
            shown by default, until the collapse plugin adds the appropriate
            classes that we use to style each element. These classes control the
            overall appearance, as well as the showing and hiding via CSS
            transitions. You can modify any of this with custom CSS or
            overriding our default variables. It's also worth noting that just
            about any HTML can go within the <span>.accordion-body</span>,
            though the transition does limit overflow.
          </AccordionCP>
          <AccordionCP heading={"Accordion Item #3"}>
            <strong>This is the first item's accordion body.</strong> It is
            shown by default, until the collapse plugin adds the appropriate
            classes that we use to style each element. These classes control the
            overall appearance, as well as the showing and hiding via CSS
            transitions. You can modify any of this with custom CSS or
            overriding our default variables. It's also worth noting that just
            about any HTML can go within the <span>.accordion-body</span>,
            though the transition does limit overflow.
          </AccordionCP>
        </div>
      </div>
      <h2>Flush</h2>
      <div className="content">
        <div className="accordion accordion-flush" id="accordion-example">
          <AccordionCP heading={"Accordion Item #1"}>
            <strong>This is the first item's accordion body.</strong> It is
            shown by default, until the collapse plugin adds the appropriate
            classes that we use to style each element. These classes control the
            overall appearance, as well as the showing and hiding via CSS
            transitions. You can modify any of this with custom CSS or
            overriding our default variables. It's also worth noting that just
            about any HTML can go within the <span>.accordion-body</span>,
            though the transition does limit overflow.
          </AccordionCP>
          <AccordionCP heading={"Accordion Item #2"}>
            <strong>This is the first item's accordion body.</strong> It is
            shown by default, until the collapse plugin adds the appropriate
            classes that we use to style each element. These classes control the
            overall appearance, as well as the showing and hiding via CSS
            transitions. You can modify any of this with custom CSS or
            overriding our default variables. It's also worth noting that just
            about any HTML can go within the <span>.accordion-body</span>,
            though the transition does limit overflow.
          </AccordionCP>
          <AccordionCP heading={"Accordion Item #3"}>
            <strong>This is the first item's accordion body.</strong> It is
            shown by default, until the collapse plugin adds the appropriate
            classes that we use to style each element. These classes control the
            overall appearance, as well as the showing and hiding via CSS
            transitions. You can modify any of this with custom CSS or
            overriding our default variables. It's also worth noting that just
            about any HTML can go within the <span>.accordion-body</span>,
            though the transition does limit overflow.
          </AccordionCP>
        </div>
      </div>
      <h2>Always open</h2>
      <div className="content">
        <div className="accordion" id="accordion-example">
          <AccordionCP heading={"Accordion Item #1"} active={"active"}>
            <strong>This is the first item's accordion body.</strong> It is
            shown by default, until the collapse plugin adds the appropriate
            classes that we use to style each element. These classes control the
            overall appearance, as well as the showing and hiding via CSS
            transitions. You can modify any of this with custom CSS or
            overriding our default variables. It's also worth noting that just
            about any HTML can go within the <span>.accordion-body</span>,
            though the transition does limit overflow.
          </AccordionCP>
          <AccordionCP heading={"Accordion Item #2"}>
            <strong>This is the first item's accordion body.</strong> It is
            shown by default, until the collapse plugin adds the appropriate
            classes that we use to style each element. These classes control the
            overall appearance, as well as the showing and hiding via CSS
            transitions. You can modify any of this with custom CSS or
            overriding our default variables. It's also worth noting that just
            about any HTML can go within the <span>.accordion-body</span>,
            though the transition does limit overflow.
          </AccordionCP>
          <AccordionCP heading={"Accordion Item #3"}>
            <strong>This is the first item's accordion body.</strong> It is
            shown by default, until the collapse plugin adds the appropriate
            classes that we use to style each element. These classes control the
            overall appearance, as well as the showing and hiding via CSS
            transitions. You can modify any of this with custom CSS or
            overriding our default variables. It's also worth noting that just
            about any HTML can go within the <span>.accordion-body</span>,
            though the transition does limit overflow.
          </AccordionCP>
        </div>
      </div>
    </>
  );
}

export default Accordion;
