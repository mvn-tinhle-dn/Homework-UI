function Close() {
  return (
    <>
      <h1>Close Button</h1>
      <h2>Example</h2>
      <div className="content">
        <button type="button" className="btn-closed"></button>
      </div>
      <h2>Disabled state</h2>
      <div className="content">
        <button type="button" className="btn-closed" disabled></button>
      </div>
      <h2>White variant</h2>
      <div className="content bg-dark">
        <button type="button" className="btn-closed btn-close-white"></button>
        <button
          type="button"
          className="btn-closed btn-close-white"
          disabled
        ></button>
      </div>
    </>
  );
}

export default Close;
