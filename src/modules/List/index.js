import ListItem from "../../components/ListItem";

function List() {
  return (
    <>
      <h1>List group</h1>
      <h2>Basic example</h2>
      <div className="content">
        <ul className="list-group">
          <li className="list-group-item">An item</li>
          <li className="list-group-item">A second item</li>
          <li className="list-group-item">A third item</li>
          <li className="list-group-item">A fourth item</li>
          <li className="list-group-item">And a fifth one</li>
        </ul>
      </div>
      <h2>Active</h2>
      <div className="content">
        <ul className="list-group">
          <li className="list-group-item active">An Active item</li>
          <li className="list-group-item">A second item</li>
          <li className="list-group-item">A third item</li>
          <li className="list-group-item">A fourth item</li>
          <li className="list-group-item">And a fifth one</li>
        </ul>
      </div>
      <h2>Disabled items</h2>
      <div className="content">
        <ul className="list-group">
          <li className="list-group-item">An item</li>
          <li className="list-group-item disable">A disable item</li>
          <li className="list-group-item">A third item</li>
          <li className="list-group-item">A fourth item</li>
          <li className="list-group-item">And a fifth one</li>
        </ul>
      </div>
      <h2>Links and Buttons</h2>
      <div className="content">
        <div className="list-group">
          <a href="." className="list-group-item list-group-item-action active">
            The current link item
          </a>
          <a href="." className="list-group-item list-group-item-action">
            A second link item
          </a>
          <a href="." className="list-group-item list-group-item-action">
            A third link item
          </a>
          <a href="." className="list-group-item list-group-item-action">
            A fourth link item
          </a>
          <a
            href="."
            className="list-group-item list-group-item-action disable"
          >
            A disabled link item
          </a>
        </div>
      </div>
      <div className="content">
        <div className="list-group">
          <button
            type="button"
            className="list-group-item list-group-item-action active"
          >
            The current button
          </button>
          <button
            type="button"
            className="list-group-item list-group-item-action"
          >
            A second item
          </button>
          <button
            type="button"
            className="list-group-item list-group-item-action"
          >
            A third button item
          </button>
          <button
            type="button"
            className="list-group-item list-group-item-action"
          >
            A fourth button item
          </button>
          <button
            type="button"
            className="list-group-item list-group-item-action"
            disabled
          >
            A disabled button item
          </button>
        </div>
      </div>
      <h2>Flush</h2>
      <div className="content">
        <ul className="list-group list-group-flush">
          <li className="list-group-item">An item</li>
          <li className="list-group-item">A second item</li>
          <li className="list-group-item">A third item</li>
          <li className="list-group-item">A fourth item</li>
          <li className="list-group-item">And a fifth one</li>
        </ul>
      </div>
      <h2>Numbered</h2>
      <div className="content">
        <ol className="list-group list-group-numbered">
          <li className="list-group-item">An item</li>
          <li className="list-group-item">A second item</li>
          <li className="list-group-item">A third item</li>
          <li className="list-group-item">A fourth item</li>
        </ol>
      </div>
      <div className="content">
        <ol className="list-group list-group-numbered">
          <li className="list-group-item d-flex justify-content-between align-items-start">
            <div className="ml-1 mr-auto">
              <div className="text-bold">Subheading</div>
              Content for list item
            </div>
            <span className="badge bg-primary rounded-pill">14</span>
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-start">
            <div className="ml-1 mr-auto">
              <div className="text-bold">Subheading</div>
              Content for list item
            </div>
            <span className="badge bg-primary rounded-pill">14</span>
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-start">
            <div className="ml-1 mr-auto">
              <div className="text-bold">Subheading</div>
              Content for list item
            </div>
            <span className="badge bg-primary rounded-pill">14</span>
          </li>
        </ol>
      </div>
      <h2>Horizontal</h2>
      <div className="content">
        <ul className="list-group list-group-horizontal">
          <li className="list-group-item">An item</li>
          <li className="list-group-item">A second item</li>
          <li className="list-group-item">A third item</li>
        </ul>
        <ul className="list-group list-group-horizontal-sm">
          <li className="list-group-item">An item</li>
          <li className="list-group-item">A second item</li>
          <li className="list-group-item">A third item</li>
        </ul>
        <ul className="list-group list-group-horizontal-md">
          <li className="list-group-item">An item</li>
          <li className="list-group-item">A second item</li>
          <li className="list-group-item">A third item</li>
        </ul>
        <ul className="list-group list-group-horizontal-lg">
          <li className="list-group-item">An item</li>
          <li className="list-group-item">A second item</li>
          <li className="list-group-item">A third item</li>
        </ul>
        <ul className="list-group list-group-horizontal-xl">
          <li className="list-group-item">An item</li>
          <li className="list-group-item">A second item</li>
          <li className="list-group-item">A third item</li>
        </ul>
        <ul className="list-group list-group-horizontal-xxl">
          <li className="list-group-item">An item</li>
          <li className="list-group-item">A second item</li>
          <li className="list-group-item">A third item</li>
        </ul>
      </div>
      <h2>Contextual classes</h2>
      <div className="content">
        <ul className="list-group">
          <li className="list-group-item">A simple default list group item</li>

          <li className="list-group-item list-group-item-primary">
            A simple primary list group item
          </li>
          <li className="list-group-item list-group-item-secondary">
            A simple secondary list group item
          </li>
          <li className="list-group-item list-group-item-success">
            A simple success list group item
          </li>
          <li className="list-group-item list-group-item-danger">
            A simple danger list group item
          </li>
          <li className="list-group-item list-group-item-warning">
            A simple warning list group item
          </li>
          <li className="list-group-item list-group-item-info">
            A simple info list group item
          </li>
          <li className="list-group-item list-group-item-light">
            A simple light list group item
          </li>
          <li className="list-group-item list-group-item-dark">
            A simple dark list group item
          </li>
        </ul>
      </div>
      <h2>Contextual classes</h2>
      <div className="content">
        <ul className="list-group">
          <li className="list-group-item">A simple default list group item</li>

          <li className="list-group-item list-group-item-primary">
            A simple primary list group item
          </li>
          <li className="list-group-item list-group-item-secondary">
            A simple secondary list group item
          </li>
          <li className="list-group-item list-group-item-success">
            A simple success list group item
          </li>
          <li className="list-group-item list-group-item-danger">
            A simple danger list group item
          </li>
          <li className="list-group-item list-group-item-warning">
            A simple warning list group item
          </li>
          <li className="list-group-item list-group-item-info">
            A simple info list group item
          </li>
          <li className="list-group-item list-group-item-light">
            A simple light list group item
          </li>
          <li className="list-group-item list-group-item-dark">
            A simple dark list group item
          </li>
        </ul>
      </div>
      <h2>Action</h2>
      <div className="content">
        <div className="list-group">
          <ListItem>A simple default list group item</ListItem>
          <ListItem color="primary">A simple primary list group item</ListItem>
          <ListItem color="secondary">
            A simple secondary list group item
          </ListItem>
          <ListItem color="success">A simple success list group item</ListItem>
          <ListItem color="danger">A simple danger list group item</ListItem>
          <ListItem color="warning">A simple warning list group item</ListItem>
          <ListItem color="info">A simple info list group item</ListItem>
          <ListItem color="light">A simple light list group item</ListItem>
          <ListItem color="dark">A simple dark list group item</ListItem>
        </div>
      </div>
      <h2>With badges</h2>
      <div className="content">
        <ul className="list-group">
          <li className="list-group-item d-flex justify-content-between align-items-center">
            A list item
            <span className="badge bg-primary rounded-pill">14</span>
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-center">
            A second list item
            <span className="badge bg-primary rounded-pill">2</span>
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-center">
            A third list item
            <span className="badge bg-primary rounded-pill">1</span>
          </li>
        </ul>
      </div>
      <h2>Custom content</h2>
      <div className="content">
        <div className="list-group width-75">
          <a href="." className="list-group-item list-group-item-action active">
            <div className="d-flex justify-content-between">
              <h5 className="mb-1">List group item heading</h5>
              <span>3 days ago</span>
            </div>
            <p className="mb-1">Some placeholder content in a paragraph.</p>
            <span>And some span print.</span>
          </a>
          <a href="." className="list-group-item list-group-item-action">
            <div className="d-flex justify-content-between">
              <h5 className="mb-1">List group item heading</h5>
              <span className="text-muted">3 days ago</span>
            </div>
            <p className="mb-1">Some placeholder content in a paragraph.</p>
            <span className="text-muted">And some muted span print.</span>
          </a>
          <a href="." className="list-group-item list-group-item-action">
            <div className="d-flex justify-content-between">
              <h5 className="mb-1">List group item heading</h5>
              <span className="text-muted">3 days ago</span>
            </div>
            <p className="mb-1">Some placeholder content in a paragraph.</p>
            <span className="text-muted">And some muted span print.</span>
          </a>
        </div>
      </div>
      <h2>Checkboxes and radios</h2>
      <div className="content">
        <ul className="list-group">
          <li className="list-group-item">
            <input className="form-check-input mr-1" type="checkbox" />
            First checkbox
          </li>
          <li className="list-group-item">
            <input className="form-check-input mr-1" type="checkbox" />
            Second checkbox
          </li>
          <li className="list-group-item">
            <input className="form-check-input mr-1" type="checkbox" />
            Third checkbox
          </li>
          <li className="list-group-item">
            <input className="form-check-input mr-1" type="checkbox" />
            Fourth checkbox
          </li>
          <li className="list-group-item">
            <input className="form-check-input mr-1" type="checkbox" />
            Fifth checkbox
          </li>
        </ul>
      </div>
      <div className="content">
        <div className="list-group">
          <label className="list-group-item">
            <input className="form-check-input mr-1" type="checkbox" />
            First checkbox
          </label>
          <label className="list-group-item">
            <input className="form-check-input mr-1" type="checkbox" />
            Second checkbox
          </label>
          <label className="list-group-item">
            <input className="form-check-input mr-1" type="checkbox" />
            Third checkbox
          </label>
          <label className="list-group-item">
            <input className="form-check-input mr-1" type="checkbox" />
            Fourth checkbox
          </label>
          <label className="list-group-item">
            <input className="form-check-input mr-1" type="checkbox" />
            Fifth checkbox
          </label>
        </div>
      </div>
    </>
  );
}

export default List;
