import { useEffect, useRef } from "react";
import DropdownCP from "../../components/Dropdowns";

function Scrollspy() {
  //Example in navbar
  const scrollspy = useRef();
  useEffect(() => {
    const linkNav = document.querySelectorAll(".nav-link");
    const headingScroll = document.querySelectorAll(".heading-scroll");
    function scrollActive() {
      let len = headingScroll.length;
      while (
        --len &&
        scrollspy.current.scrollTop < headingScroll[len].offsetTop - 50
      ) {}
      linkNav.forEach((linkItem) => linkItem.classList.remove("active"));
      linkNav[len].classList.add("active");
    }
    scrollActive();
    scrollspy.current.addEventListener("scroll", scrollActive);
  });

  //Example with nested nav
  const scrollspyVer = useRef();
  const item1 = useRef();
  const item3 = useRef();
  useEffect(() => {
    const linkNav = document.querySelectorAll(".nav-link2");
    const headingScroll2 = document.querySelectorAll(".heading-scroll2");
    function scrollVerActive() {
      let len = headingScroll2.length;
      while (
        --len &&
        scrollspyVer.current.scrollTop < headingScroll2[len].offsetTop - 114
      ) {}

      linkNav.forEach((linkItem) => {
        linkItem.classList.remove("active");
      });
      linkNav[len].classList.add("active");
      if (linkNav[len].textContent.includes("Item 1")) {
        item1.current.classList.add("active");
      } else if (linkNav[len].textContent.includes("Item 3")) {
        item3.current.classList.add("active");
      }
    }
    scrollVerActive();
    scrollspyVer.current.addEventListener("scroll", scrollVerActive);
  });
  // Scrollspy List Group
  const scrollspyListG = useRef();
  useEffect(() => {
    const listItem = document.querySelectorAll(".list-group-item-action");
    const headingScroll3 = document.querySelectorAll(".heading-scroll3");
    function scrollVerActive() {
      let len = headingScroll3.length;
      while (
        --len &&
        scrollspyListG.current.scrollTop < headingScroll3[len].offsetTop - 50
      ) {}

      listItem.forEach((Item) => {
        Item.classList.remove("active");
      });
      listItem[len].classList.add("active");
    }
    scrollVerActive();
    scrollspyListG.current.addEventListener("scroll", scrollVerActive);
  });
  return (
    <>
      <h1>Scrollspy</h1>
      <h2>Example in navbar</h2>
      <div className="content">
        <nav id="navbar-example2" className="navbar navbar-light bg-light px-3">
          <a className="navbar-brand" href="#scrollspy-heading1">
            Navbar
          </a>
          <ul className="nav nav-pills">
            <li className="nav-item">
              <a className="nav-link align-center" href="#scrollspy-heading1">
                First
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#scrollspy-heading2">
                Seconds
              </a>
            </li>
            <li className="nav-item">
              <div className="nav-link">
                <DropdownCP
                  contentDrop="Dropdown"
                  colorText="muted"
                  itemMore={
                    <>
                      <li className="dropdown-item">
                        <a href="#scrollspy-heading3">Third</a>
                      </li>
                      <li className="dropdown-item">
                        <a href="#scrollspy-heading4">Fourth</a>
                      </li>
                    </>
                  }
                ></DropdownCP>
              </div>
            </li>
          </ul>
        </nav>
        <div ref={scrollspy} className="scrollspy-example mt-2">
          <h4 className="heading-scroll" id="scrollspy-heading1">
            First heading
          </h4>
          <p>
            First heading This is some placeholder content for the scrollspy
            page. Note that as you scroll down the page, the appropriate
            navigation link is highlighted. It's repeated throughout the
            component example. We keep adding some more example copy here to
            emphasize the scrolling and highlighting.
          </p>
          <h4 className="heading-scroll" id="scrollspy-heading2">
            Second heading
          </h4>
          <p>
            This is some placeholder content for the scrollspy page. Note that
            as you scroll down the page, the appropriate navigation link is
            highlighted. Someone is here, lock your pc before leave plz . It's
            repeated throughout the component example. We keep adding some more
            example copy here to emphasize the scrolling and highlighting.
          </p>
          <h4 className="heading-scroll" id="scrollspy-heading3">
            Third heading
          </h4>
          <p>
            This is some placeholder content for the scrollspy page. Note that
            as you scroll down the page, the appropriate navigation link is
            highlighted. It's repeated throughout the component example. We keep
            adding some more example copy here to emphasize the scrolling and
            highlighting.
          </p>
          <h4 className="heading-scroll" id="scrollspy-heading4">
            Fourth heading
          </h4>
          <p>
            This is some placeholder content for the scrollspy page. Note that
            as you scroll down the page, the appropriate navigation link is
            highlighted. It's repeated throughout the component example. We keep
            adding some more example copy here to emphasize the scrolling and
            highlighting.
          </p>
        </div>
      </div>
      <h2>Example with nested nav</h2>
      <div className="content d-flex">
        <nav
          id="navbar-example3"
          className="navbar navbar-light bg-light flex-column col-12"
        >
          <a className="navbar-brand" href=".">
            Navbar
          </a>
          <nav className="nav nav-pills flex-column">
            <a ref={item1} className="nav-link2 active" href="#item-1">
              Item 1
            </a>
            <nav className="nav nav-pills flex-column">
              <a className="nav-link2" href="#item-1-1">
                Item 1-1
              </a>
              <a className="nav-link2" href="#item-1-2">
                Item 1-2
              </a>
            </nav>
            <a className="nav-link2" href="#item-2">
              Item 2
            </a>
            <a ref={item3} className="nav-link2" href="#item-3">
              Item 3
            </a>
            <nav className="nav nav-pills flex-column">
              <a className="nav-link2" href="#item-3-1">
                Item 3-1
              </a>
              <a className="nav-link2 " href="#item-3-2">
                Item 3-2
              </a>
            </nav>
          </nav>
        </nav>

        <div ref={scrollspyVer} className="scrollspy-example ex-2 ml-2 mt-2 ">
          <h3 className="heading-scroll2" id="item-1">
            Item 1
          </h3>
          <p>
            First heading This is some placeholder content for the scrollspy
            page. Note that as you scroll down the page, the appropriate
            navigation link is highlighted. It's repeated throughout the
            component example. We keep adding some more example copy here to
            emphasize the scrolling and highlighting.
          </p>
          <h3 className="heading-scroll2" id="item-1-1">
            Item 1-1
          </h3>
          <p>
            First heading This is some placeholder content for the scrollspy
            page. Note that as you scroll down the page, the appropriate
            navigation link is highlighted. It's repeated throughout the
            component example. We keep adding some more example copy here to
            emphasize the scrolling and highlighting.
          </p>
          <h3 className="heading-scroll2" id="item-1-2">
            Item 1-2
          </h3>
          <p>
            First heading This is some placeholder content for the scrollspy
            page. Note that as you scroll down the page, the appropriate
            navigation link is highlighted. It's repeated throughout the
            component example. We keep adding some more example copy here to
            emphasize the scrolling and highlighting.
          </p>
          <h3 className="heading-scroll2" id="item-2">
            Item 2
          </h3>
          <p>
            First heading This is some placeholder content for the scrollspy
            page. Note that as you scroll down the page, the appropriate
            navigation link is highlighted. It's repeated throughout the
            component example. We keep adding some more example copy here to
            emphasize the scrolling and highlighting.
          </p>
          <h3 className="heading-scroll2" id="item-3">
            Item 3
          </h3>
          <p>
            First heading This is some placeholder content for the scrollspy
            page. Note that as you scroll down the page, the appropriate
            navigation link is highlighted. It's repeated throughout the
            component example. We keep adding some more example copy here to
            emphasize the scrolling and highlighting.
          </p>
          <h3 className="heading-scroll2" id="item-3-1">
            Item 3-1
          </h3>
          <p>
            First heading This is some placeholder content for the scrollspy
            page. Note that as you scroll down the page, the appropriate
            navigation link is highlighted. It's repeated throughout the
            component example. We keep adding some more example copy here to
            emphasize the scrolling and highlighting.
          </p>
          <h3 className="heading-scroll2" id="item-3-2">
            Item 3-2
          </h3>
          <p>
            First heading This is some placeholder content for the scrollspy
            page. Note that as you scroll down the page, the appropriate
            navigation link is highlighted. It's repeated throughout the
            component example. We keep adding some more example copy here to
            emphasize the scrolling and highlighting.
          </p>
          <p style={{ height: "100px" }}></p>
        </div>
      </div>
      <h2> Example with list-group</h2>
      <div className="content d-flex">
        <div id="list-example" className="list-group col-3">
          <a
            className="list-group-item list-group-item-action"
            href="#list-item-1"
          >
            Item 1
          </a>
          <a
            className="list-group-item list-group-item-action"
            href="#list-item-2"
          >
            Item 2
          </a>
          <a
            className="list-group-item list-group-item-action"
            href="#list-item-3"
          >
            Item 3
          </a>
          <a
            className="list-group-item list-group-item-action"
            href="#list-item-4"
          >
            Item 4
          </a>
        </div>
        <div ref={scrollspyListG} className="scrollspy-example ml-2 col-8">
          <h5 className="heading-scroll3" id="list-item-1">
            Item 1
          </h5>
          <p>
            First heading This is some placeholder content for the scrollspy
            page. Note that as you scroll down the page, the appropriate
            navigation link is highlighted. It's repeated throughout the
            component example. We keep adding some more example copy here to
            emphasize the scrolling and highlighting.
          </p>
          <h5 className="heading-scroll3" id="list-item-2">
            Item 2
          </h5>
          <p>
            First heading This is some placeholder content for the scrollspy
            page. Note that as you scroll down the page, the appropriate
            navigation link is highlighted. It's repeated throughout the
            component example. We keep adding some more example copy here to
            emphasize the scrolling and highlighting.
          </p>
          <h5 className="heading-scroll3" id="list-item-3">
            Item 3
          </h5>
          <p>
            First heading This is some placeholder content for the scrollspy
            page. Note that as you scroll down the page, the appropriate
            navigation link is highlighted. It's repeated throughout the
            component example. We keep adding some more example copy here to
            emphasize the scrolling and highlighting.
          </p>
          <h5 className="heading-scroll3" id="list-item-4">
            Item 4
          </h5>
          <p style={{ height: "169px" }}>
            First heading This is some placeholder content for the scrollspy
            page. Note that as you scroll down the page, the appropriate
            navigation link is highlighted. It's repeated throughout the
            component example. We keep adding some more example copy here to
            emphasize the scrolling and highlighting.
          </p>
        </div>
      </div>
    </>
  );
}

export default Scrollspy;
