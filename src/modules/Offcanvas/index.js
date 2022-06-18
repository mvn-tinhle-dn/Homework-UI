import OffCanvasCp from "../../components/OffCanvas";

function Offcanvas() {
  return (
    <>
      <h1>Off Canvas</h1>

      <h2>Live Demo</h2>
      <div className="content">
        <OffCanvasCp>Live Demo</OffCanvasCp>
      </div>
      <h2>Placement</h2>
      <h2>Top</h2>
      <div className="content">
        <OffCanvasCp direction="top">Top OffCanvas</OffCanvasCp>
      </div>
      <h2>Right</h2>
      <div className="content">
        <OffCanvasCp direction="end">Right OffCanvas</OffCanvasCp>
      </div>
      <h2> Bottom</h2>
      <div className="content">
        <OffCanvasCp direction="bottom">Bottom OffCanvas</OffCanvasCp>
      </div>
    </>
  );
}

export default Offcanvas;
