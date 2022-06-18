import CardCP from "../../components/Card";

function Card() {
  return (
    <div>
      <h1>Cards</h1>
      <h2>Example</h2>
      <div className="content">
        <div className="card">
          <img
            src="https://img.poki.com/cdn-cgi/image/quality=78,widt…cover,f=auto/4206da66a0e5deca9115d19a4bc0c63f.png"
            className="card-img-top"
            alt="."
          />
          <div className="card-body">
            <h3 className="card-title">Card title</h3>
            <p className="card-text">
              {" "}
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="." className="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
      </div>
      <h2>Body</h2>
      <div className="content">
        <div className="card width-full">
          <div className="card-body">This is some text within a card body.</div>
        </div>
      </div>
      <h2>Titles, text, and links</h2>
      <div className="content">
        <div className="card">
          <div className="card-body">
            <h2 className="card-title">Card title</h2>
            <h4 className="card-subtitle text-muted">Card subtitle</h4>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="." className="card-link mr-4">
              Card link
            </a>
            <a href="." className="card-link">
              Another link
            </a>
          </div>
        </div>
      </div>
      <h2>Image</h2>
      <div className="content">
        <div className="card">
          <img
            src="https://img.poki.com/cdn-cgi/image/quality=78,widt…cover,f=auto/4206da66a0e5deca9115d19a4bc0c63f.png"
            className="card-img-top"
            alt="."
          />
          <div className="card-body">
            <p className="card-text">
              {" "}
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>
      </div>
      <h2>List Groups</h2>
      <div className="content">
        <div className="card">
          <ul className="list-group">
            <li className="list-group-item">An item</li>
            <li className="list-group-item">A second item</li>
            <li className="list-group-item">A third item</li>
          </ul>
        </div>
      </div>
      <div className="content">
        <div className="card">
          <div className="card-header">Featured</div>
          <ul className="list-group">
            <li className="list-group-item">An item</li>
            <li className="list-group-item">A second item</li>
            <li className="list-group-item">A third item</li>
          </ul>
        </div>
      </div>
      <div className="content">
        <div className="card">
          <ul className="list-group">
            <li className="list-group-item">An item</li>
            <li className="list-group-item">A second item</li>
            <li className="list-group-item">A third item</li>
          </ul>
          <div className="card-footer">Card footer</div>
        </div>
      </div>
      <h2>Kitchen sink</h2>
      <div className="content">
        <div className="card">
          <img
            src="https://img.poki.com/cdn-cgi/image/quality=78,widt…cover,f=auto/4206da66a0e5deca9115d19a4bc0c63f.png"
            className="card-img-top"
            alt="."
          />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">An item</li>
            <li className="list-group-item">A second item</li>
            <li className="list-group-item">A third item</li>
          </ul>
          <div className="card-body">
            <a href="." className="card-link mr-6">
              Card link
            </a>
            <a href="." className="card-link">
              Another link
            </a>
          </div>
        </div>
      </div>
      <h2>Header and footer</h2>
      <div className="content">
        <CardCP contentHeader={"Featured"}>
          <h5 className="card-title">Special title treatment</h5>
          <p className="card-text">
            With supporting text below as a natural lead-in to additional
            content.
          </p>
          <a href="." className="btn btn-primary">
            Go somewhere
          </a>
        </CardCP>
      </div>
      <div className="content">
        <CardCP
          contentHeader={"Featured Header"}
          textCenter={true}
          contentFooter="2 days ago"
        >
          <h5 className="card-title">Special title treatment</h5>
          <p className="card-text">
            With supporting text below as a natural lead-in to additional
            content.
          </p>
          <a href="." className="btn btn-primary">
            Go somewhere
          </a>
        </CardCP>
      </div>
      <div className="content">
        <CardCP contentHeader={"Quote"}>
          {" "}
          <blockquote className="blockquote">
            <p>A well-known quote, contained in a blockquote element.</p>
            <footer className="blockquote-footer">
              Someone famous in <cite title="Source Title">Source Title</cite>
            </footer>
          </blockquote>
        </CardCP>
      </div>
      <h2>Using grid markup</h2>
      <div className="content row">
        <div className="col-6">
          <CardCP>
            <h3 className="card-title">Special title treatment</h3>
            <p className="card-text">
              With supporting text below as a natural lead-in to additional
              content.
            </p>
            <a href="." className="btn btn-primary">
              Go somewhere
            </a>
          </CardCP>
        </div>
        <div className="col-6">
          <CardCP>
            <h3 className="card-title">Special title treatment</h3>
            <p className="card-text">
              With supporting text below as a natural lead-in to additional
              content.
            </p>
            <a href="." className="btn btn-primary">
              Go somewhere
            </a>
          </CardCP>
        </div>
      </div>
      <h2>Using utilities</h2>
      <div className="content">
        <CardCP width="width-75">
          <h3 className="card-title">Card title</h3>
          <p className="card-text">
            With supporting text below as a natural lead-in to additional
            content.
          </p>
          <a href="." className="btn btn-primary">
            Button
          </a>
        </CardCP>
        <CardCP width="width-50">
          <h3 className="card-title">Card title</h3>
          <p className="card-text">
            With supporting text below as a natural lead-in to additional
            content.
          </p>
          <a href="." className="btn btn-primary">
            Button
          </a>
        </CardCP>
      </div>
      <h2>Using custom css</h2>
      <div className="content">
        <CardCP styleWidth="300px">
          <h3 className="card-title">Card title</h3>
          <p className="card-text">
            With supporting text below as a natural lead-in to additional
            content.
          </p>
          <a href="." className="btn btn-primary">
            Button
          </a>
        </CardCP>
      </div>
      <h2>Text Alignment</h2>
      <div className="content">
        <CardCP width="width-50">
          <h3 className="card-title">Special title treatment</h3>
          <p className="card-text">
            With supporting text below as a natural lead-in to additional
            content.
          </p>
          <a href="." className="btn btn-primary">
            Go somewhere
          </a>
        </CardCP>
        <CardCP width="width-50" textCenter={true}>
          <h3 className="card-title">Special title treatment</h3>
          <p className="card-text">
            With supporting text below as a natural lead-in to additional
            content.
          </p>
          <a href="." className="btn btn-primary">
            Go somewhere
          </a>
        </CardCP>
        <CardCP width="width-50" textRight={true}>
          <h3 className="card-title">Special title treatment</h3>
          <p className="card-text">
            With supporting text below as a natural lead-in to additional
            content.
          </p>
          <a href="." className="btn btn-primary">
            Go somewhere
          </a>
        </CardCP>
      </div>
      <h2>Navigation</h2>
      <div className="content">
        <div className="card text-center width-full">
          <div className="card-header">
            <ul className="nav">
              <li className="nav-item">
                <a className="nav-link active" href=".">
                  Active
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href=".">
                  Link
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled" href=".">
                  Disabled
                </a>
              </li>
            </ul>
          </div>
          <div className="card-body">
            <h3 className="card-title">Special title treatment</h3>
            <p className="card-text">
              With supporting text below as a natural lead-in to additional
              content.
            </p>
            <a href="." className="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
      </div>
      <div className="content">
        <div className="card text-center width-full">
          <div className="card-header">
            <ul className="nav nav-pill">
              <li className="nav-item">
                <a className="nav-link active" href=".">
                  Active
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href=".">
                  Link
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled" href=".">
                  Disabled
                </a>
              </li>
            </ul>
          </div>
          <div className="card-body">
            <h3 className="card-title">Special title treatment</h3>
            <p className="card-text">
              With supporting text below as a natural lead-in to additional
              content.
            </p>
            <a href="." className="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
      </div>
      <h2>Images</h2>
      <h2>Image caps</h2>
      <div className="content">
        <h3> Image header</h3>
        <div className="card width-full">
          <img
            src="https://imgs.mongabay.com/wp-content/uploads/sites/20/2022/03/11184718/FISHCirrhilabrus-finifenmaa_4%C2%A9-Yi-Kai-Tea-scaled.jpeg"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h3 className="card-title">Card title</h3>
            <p className="card-text">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
            <p className="card-text">
              <span className="text-muted">Last updated 3 mins ago</span>
            </p>
          </div>
        </div>

        <h3>Image footer</h3>
        <div className="card width-full">
          <div className="card-body">
            <h3 className="card-title">Card title</h3>
            <p className="card-text">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
            <p className="card-text">
              <span className="text-muted">Last updated 3 mins ago</span>
            </p>
          </div>
          <img
            src="https://imgs.mongabay.com/wp-content/uploads/sites/20/2022/03/11184718/FISHCirrhilabrus-finifenmaa_4%C2%A9-Yi-Kai-Tea-scaled.jpeg"
            className="card-img-bottom"
            alt="..."
          />
        </div>
      </div>
      <h3>Image Overlays</h3>
      <div className="content">
        <div className="card width-full text-white">
          <img
            src="https://i.pinimg.com/originals/b6/29/81/b629815128b07857b937fd6e4a86b468.jpg"
            className="card-img"
            alt="..."
          />
          <div className="card-img-overlay">
            <h3 className="card-title text-white">Card title</h3>
            <p className="card-text">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
            <p className="card-text">Last updated 3 mins ago</p>
          </div>
        </div>
      </div>
      <h3> Horizontal</h3>
      <div className="content">
        <div className="card width-75 horizontal">
          <div className="row">
            <div className="col-4">
              <img
                src="https://img.poki.com/cdn-cgi/image/quality=78,widt…cover,f=auto/4206da66a0e5deca9115d19a4bc0c63f.png"
                className="img-fluid rounded-start"
                alt="..."
              />
            </div>
            <div className="col-8">
              <div className="card-body">
                <h3 className="card-title">Card title</h3>
                <p className="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
                <p className="card-text">
                  <span className="text-muted">Last updated 3 mins ago</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <h2>Card styles</h2>
      <h2>Background and Color</h2>
      <div className="content">
        <CardCP
          contentHeader="Style and Color"
          width="width-50"
          backGround="secondary"
        >
          <h3 className="card-title text-white">secondary card title</h3>
          <p className="card-text">
            Some quick example text to build on the card title and
          </p>
        </CardCP>
        <CardCP
          contentHeader="Style and Color"
          width="width-50"
          backGround="success"
        >
          <h3 className="card-title text-white">success card title</h3>
          <p className="card-text">
            Some quick example text to build on the card title and
          </p>
        </CardCP>
        <CardCP
          contentHeader="Style and Color"
          width="width-50"
          backGround="danger"
        >
          <h3 className="card-title text-white">danger card title</h3>
          <p className="card-text">
            Some quick example text to build on the card title and
          </p>
        </CardCP>
        <CardCP
          contentHeader="Style and Color"
          width="width-50"
          backGround="warning"
          colorHerder="dark"
        >
          <h3 className="card-title text-dark">warning card title</h3>
          <p className="card-text text-dark">
            Some quick example text to build on the card title and
          </p>
        </CardCP>
        <CardCP
          contentHeader="Style and Color"
          width="width-50"
          backGround="dark"
        >
          <h3 className="card-title text-white">dark card title</h3>
          <p className="card-text">
            Some quick example text to build on the card title and
          </p>
        </CardCP>
      </div>
      <h2>Outline</h2>
      <div className="content">
        <CardCP
          contentHeader="Style and Color"
          width="width-50"
          backGroundOutline="primary"
        >
          <h3 className="card-title">secondary card title</h3>
          <p className="card-text">
            Some quick example text to build on the card title and
          </p>
        </CardCP>
        <CardCP
          contentHeader="Style and Color"
          width="width-50"
          backGroundOutline="secondary"
        >
          <h3 className="card-title">secondary card title</h3>
          <p className="card-text">
            Some quick example text to build on the card title and
          </p>
        </CardCP>
        <CardCP
          contentHeader="Style and Color"
          width="width-50"
          backGroundOutline="success"
        >
          <h3 className="card-title">secondary card title</h3>
          <p className="card-text">
            Some quick example text to build on the card title and
          </p>
        </CardCP>
        <CardCP
          contentHeader="Style and Color"
          width="width-50"
          backGroundOutline="warning"
        >
          <h3 className="card-title">secondary card title</h3>
          <p className="card-text">
            Some quick example text to build on the card title and
          </p>
        </CardCP>
        <CardCP
          contentHeader="Style and Color"
          width="width-50"
          backGroundOutline="danger"
        >
          <h3 className="card-title">secondary card title</h3>
          <p className="card-text">
            Some quick example text to build on the card title and
          </p>
        </CardCP>
        <CardCP
          contentHeader="Style and Color"
          width="width-50"
          backGroundOutline="info"
        >
          <h3 className="card-title">secondary card title</h3>
          <p className="card-text">
            Some quick example text to build on the card title and
          </p>
        </CardCP>
        <CardCP
          contentHeader="Style and Color"
          width="width-50"
          backGroundOutline="light"
        >
          <h3 className="card-title">secondary card title</h3>
          <p className="card-text">
            Some quick example text to build on the card title and
          </p>
        </CardCP>
        <CardCP
          contentHeader="Style and Color"
          width="width-50"
          backGroundOutline="dark"
        >
          <h3 className="card-title">secondary card title</h3>
          <p className="card-text">
            Some quick example text to build on the card title and
          </p>
        </CardCP>
      </div>
      <h2> Transparent</h2>
      <div className="content">
        <CardCP
          contentHeader="Style and Color"
          contentFooter="Footer"
          width="width-50"
          transparent={true}
          backGroundOutline="danger"
        >
          <h3 className="card-title">secondary card title</h3>
          <p className="card-text">
            Some quick example text to build on the card title and
          </p>
        </CardCP>
      </div>
      <h2>Card layout</h2>
      <h2>Card groups</h2>
      <div className="content">
        <div className="card-group row">
          <div className="card col-4">
            <img
              src="https://img.poki.com/cdn-cgi/image/quality=78,widt…cover,f=auto/4206da66a0e5deca9115d19a4bc0c63f.png"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
              <p className="card-text">
                <span className="text-muted">Last updated 3 mins ago</span>
              </p>
            </div>
          </div>
          <div className="card col-4">
            <img
              src="https://img.poki.com/cdn-cgi/image/quality=78,widt…cover,f=auto/4206da66a0e5deca9115d19a4bc0c63f.png"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                This card has supporting text below as a natural lead-in to
                additional content.
              </p>
              <p className="card-text">
                <span className="text-muted">Last updated 3 mins ago</span>
              </p>
            </div>
          </div>
          <div className="card col-4">
            <img
              src="https://img.poki.com/cdn-cgi/image/quality=78,widt…cover,f=auto/4206da66a0e5deca9115d19a4bc0c63f.png"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This card has even longer content
                than the first to show that equal height action.
              </p>
              <p className="card-text">
                <span className="text-muted">Last updated 3 mins ago</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="content">
        <div className="card-group row">
          <CardCP
            width="col-4"
            src="https://img.poki.com/cdn-cgi/image/quality=78,widt…cover,f=auto/4206da66a0e5deca9115d19a4bc0c63f.png"
            contentFooter={
              <span className="text-muted">Last updated 3 mins ago</span>
            }
          >
            <h3 className="card-title">Card title</h3>
            <p className="card-text">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
          </CardCP>
          <CardCP
            width="col-4"
            src="https://img.poki.com/cdn-cgi/image/quality=78,widt…cover,f=auto/4206da66a0e5deca9115d19a4bc0c63f.png"
            contentFooter={
              <span className="text-muted">Last updated 3 mins ago</span>
            }
          >
            <h3 className="card-title">Card title</h3>
            <p className="card-text">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
          </CardCP>
          <CardCP
            width="col-4"
            src="https://img.poki.com/cdn-cgi/image/quality=78,widt…cover,f=auto/4206da66a0e5deca9115d19a4bc0c63f.png"
            contentFooter={
              <span className="text-muted">Last updated 3 mins ago</span>
            }
          >
            <h3 className="card-title">Card title</h3>
            <p className="card-text">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
          </CardCP>
        </div>
      </div>
      <h2>Grid cards</h2>
      <div className="content row">
        <div className="col-4">
          <CardCP src="https://img.poki.com/cdn-cgi/image/quality=78,widt…cover,f=auto/4206da66a0e5deca9115d19a4bc0c63f.png">
            <h3 className="card-title">Card title</h3>
            <p className="card-text">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
          </CardCP>
        </div>
        <div className="col-4">
          <CardCP src="https://img.poki.com/cdn-cgi/image/quality=78,widt…cover,f=auto/4206da66a0e5deca9115d19a4bc0c63f.png">
            <h3 className="card-title">Card title</h3>
            <p className="card-text">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
          </CardCP>
        </div>
        <div className="col-4">
          <CardCP src="https://img.poki.com/cdn-cgi/image/quality=78,widt…cover,f=auto/4206da66a0e5deca9115d19a4bc0c63f.png">
            <h3 className="card-title">Card title</h3>
            <p className="card-text">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
          </CardCP>
        </div>
        <div className="col-4 mv-4">
          <CardCP src="https://img.poki.com/cdn-cgi/image/quality=78,widt…cover,f=auto/4206da66a0e5deca9115d19a4bc0c63f.png">
            <h3 className="card-title">Card title</h3>
            <p className="card-text">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
          </CardCP>
        </div>
      </div>
    </div>
  );
}

export default Card;
