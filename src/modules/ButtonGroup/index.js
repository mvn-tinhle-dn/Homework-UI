import ButtonCp from "../../components/Button";
import DropdownCP from "../../components/Dropdowns";
import InputButton from "../../components/InputButton";

function ButtonGroup() {
  return (
    <>
      <h1>Button group</h1>
      <h2>Basic example</h2>
      <div className="content">
        <div className="btn-group">
          <ButtonCp status="primary">Left</ButtonCp>
          <ButtonCp status="primary">Middle</ButtonCp>
          <ButtonCp status="primary">Right</ButtonCp>
        </div>
      </div>
      <div className="content">
        <div className="btn-group">
          <a href="." className="btn btn-primary active">
            Active link
          </a>
          <a href="." className="btn btn-primary">
            Link
          </a>
          <a href="." className="btn btn-primary">
            Link
          </a>
        </div>
      </div>
      <h2>Mixed styles</h2>
      <div className="content">
        <div className="btn-group">
          <ButtonCp status="danger">Left</ButtonCp>
          <ButtonCp status="warning" textColor="dark">
            Middle
          </ButtonCp>
          <ButtonCp status="success">Right</ButtonCp>
        </div>
      </div>
      <h2>Outlined styles</h2>
      <div className="content">
        <div className="btn-group">
          <ButtonCp status="outline-primary">Left</ButtonCp>
          <ButtonCp status="outline-primary">Middle</ButtonCp>
          <ButtonCp status="outline-primary">Right</ButtonCp>
        </div>
      </div>
      <h2>Checkbox and radio button groups</h2>
      <div className="content">
        <div className="btn-group">
          <InputButton status="outline-primary" active={true} id="btn-check1">
            Checkbox 1
          </InputButton>
          <InputButton status="outline-primary" active={true} id="btn-check2">
            Checkbox 2
          </InputButton>
          <InputButton status="outline-primary" active={true} id="btn-check3">
            Checkbox 3
          </InputButton>
        </div>
      </div>
      <div className="content">
        <div className="btn-group">
          <InputButton
            status="outline-primary"
            active={true}
            type="radio"
            id="btn-check1"
          >
            Checkbox 1
          </InputButton>
          <InputButton
            status="outline-primary"
            active={true}
            type="radio"
            id="btn-check2"
          >
            Checkbox 2
          </InputButton>
          <InputButton
            status="outline-primary"
            active={true}
            type="radio"
            id="btn-check3"
          >
            Checkbox 3
          </InputButton>
        </div>
      </div>
      <h2>Button toolbar</h2>
      <div className="content">
        <div className="btn-group">
          <ButtonCp status="primary">1</ButtonCp>
          <ButtonCp status="primary">2</ButtonCp>
          <ButtonCp status="primary">3</ButtonCp>
          <ButtonCp status="primary">4</ButtonCp>
        </div>
        <div className="btn-group mh-2">
          <ButtonCp status="secondary">5</ButtonCp>
          <ButtonCp status="secondary">6</ButtonCp>
          <ButtonCp status="secondary">7</ButtonCp>
          <ButtonCp status="secondary">8</ButtonCp>
        </div>
        <div className="btn-group">
          <ButtonCp status="info">9</ButtonCp>
        </div>
      </div>
      <div className="content">
        <div className="btn-toolbar d-flex">
          <div className="btn-group mr-4">
            <ButtonCp status="outline-secondary">1</ButtonCp>
            <ButtonCp status="outline-secondary">2</ButtonCp>
            <ButtonCp status="outline-secondary">3</ButtonCp>
            <ButtonCp status="outline-secondary">4</ButtonCp>
          </div>
          <div className="input-group d-flex">
            <div className="input-group-text">@</div>
            <input
              type="text"
              className="form-control"
              placeholder="Input group example"
            />
          </div>
        </div>
        <div className="btn-toolbar justify-content-between mv-4 d-flex">
          <div className="btn-group mr-4">
            <ButtonCp status="outline-secondary">1</ButtonCp>
            <ButtonCp status="outline-secondary">2</ButtonCp>
            <ButtonCp status="outline-secondary">3</ButtonCp>
            <ButtonCp status="outline-secondary">4</ButtonCp>
          </div>
          <div className="input-group d-flex">
            <div className="input-group-text">@</div>
            <input
              type="text"
              className="form-control"
              placeholder="Input group example"
            />
          </div>
        </div>
      </div>
      <h2>Sizing</h2>
      <div className="content">
        <div className="btn-group block mv-3">
          <ButtonCp status="outline-secondary" size="lg">
            Left
          </ButtonCp>
          <ButtonCp status="outline-secondary" size="lg">
            Middle
          </ButtonCp>
          <ButtonCp status="outline-secondary" size="lg">
            Right
          </ButtonCp>
        </div>
        <div className="btn-group block mv-3">
          <ButtonCp status="outline-secondary">Left</ButtonCp>
          <ButtonCp status="outline-secondary">Middle</ButtonCp>
          <ButtonCp status="outline-secondary">Right</ButtonCp>
        </div>
        <div className=" btn-group">
          <ButtonCp status="outline-secondary" size="sm">
            Left
          </ButtonCp>
          <ButtonCp status="outline-secondary" size="sm">
            Middle
          </ButtonCp>
          <ButtonCp status="outline-secondary" size="sm">
            Right
          </ButtonCp>
        </div>
      </div>
      <h2>Vertical variation</h2>
      <div className="content">
        <div className="btn-group-vertical">
          <InputButton status="outline-danger" active={true} id="btn-check1">
            Checkbox 1
          </InputButton>
          <InputButton status="outline-danger" active={true} id="btn-check2">
            Checkbox 2
          </InputButton>
          <InputButton status="outline-danger" active={true} id="btn-check3">
            Checkbox 3
          </InputButton>
        </div>
      </div>
      <div className="content">
        <div className="btn-group-vertical">
          <ButtonCp status="dark">button</ButtonCp>
          <ButtonCp status="dark">button</ButtonCp>
          <ButtonCp status="dark">button</ButtonCp>
          <ButtonCp status="dark">button</ButtonCp>
          <ButtonCp status="dark">button</ButtonCp>
          <ButtonCp status="dark">button</ButtonCp>
        </div>
      </div>
      <h2>Nesting</h2>
      <div className="content">
        <div className="btn-group">
          <ButtonCp status="primary">1</ButtonCp>
          <ButtonCp status="primary">2</ButtonCp>
          <DropdownCP
            contentDrop=" Dropdown"
            colorDrop="primary"
            itemDrops={["Action", "Another action", "Something else here"]}
          />
        </div>
      </div>
      <div className="content">
        <div className="btn-group-vertical">
          <ButtonCp status="primary">Button</ButtonCp>
          <ButtonCp status="primary">Button</ButtonCp>
          <DropdownCP
            contentDrop=" Dropdown"
            colorDrop="primary"
            itemDrops={["Action", "Another action", "Something else here"]}
            dropUp="right"
          />
        </div>
      </div>
    </>
  );
}

export default ButtonGroup;
