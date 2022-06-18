import { useRef } from "react";

function NavBehavior({ typeNav, vertical = false, size, sizeBtn }) {
  const home = useRef();
  const profile = useRef();
  const contact = useRef();
  const btnHome = useRef();
  const btnContact = useRef();
  const btnProfile = useRef();
  const showHome = (e) => {
    e.target.classList.add("active");
    home.current.classList.add("show");
    profile.current.classList.remove("show");
    contact.current.classList.remove("show");
    btnProfile.current.classList.remove("active");
    btnContact.current.classList.remove("active");
  };
  const showProfile = (e) => {
    e.target.classList.add("active");
    profile.current.classList.add("show");
    home.current.classList.remove("show");
    contact.current.classList.remove("show");
    btnHome.current.classList.remove("active");
    btnContact.current.classList.remove("active");
  };
  const showContact = (e) => {
    e.target.classList.add("active");
    contact.current.classList.add("show");
    home.current.classList.remove("show");
    profile.current.classList.remove("show");
    btnProfile.current.classList.remove("active");
    btnHome.current.classList.remove("active");
  };
  return (
    <>
      <ul
        className={`nav nav-${typeNav} ${
          vertical ? "flex-column" : ""
        } ${size}`}
      >
        <li className="nav-item">
          <button
            ref={btnHome}
            className={`nav-link active ${sizeBtn}`}
            onClick={showHome}
            id="home-tab"
            type="button"
          >
            Home
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            ref={btnProfile}
            className={`nav-link ${sizeBtn}`}
            id="profile-tab"
            onClick={showProfile}
            type="button"
          >
            Profile
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            ref={btnContact}
            className={`nav-link ${sizeBtn}`}
            id="contact-tab"
            onClick={showContact}
            type="button"
          >
            Contact
          </button>
        </li>
      </ul>
      <div className="tab-content">
        <div ref={home} className="tab-pane show" id="home">
          Home
        </div>
        <div ref={profile} className="tab-pane" id="profile">
          Profile
        </div>
        <div ref={contact} className="tab-pane" id="contact">
          Contact
        </div>
      </div>
    </>
  );
}

export default NavBehavior;
