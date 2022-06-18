import BadgeCP from "../../components/Badge";

function Badge() {
  return (
    <>
      <h1>Badges</h1>
      <h2>Headings</h2>
      <div className="content">
        <h1 className="badge-heading">
          Example heading <span className="badge bg-secondary">New</span>
        </h1>
        <h2 className="badge-heading">
          Example heading <span className="badge bg-secondary">New</span>
        </h2>
        <h3 className="badge-heading">
          Example heading <span className="badge bg-secondary">New</span>
        </h3>
        <h4 className="badge-heading">
          Example heading <span className="badge bg-secondary">New</span>
        </h4>
        <h5 className="badge-heading">
          Example heading <span className="badge bg-secondary">New</span>
        </h5>
        <h6 className="badge-heading">
          Example heading <span className="badge bg-secondary">New</span>
        </h6>
      </div>
      <h2>Buttons</h2>
      <div className="content">
        <button type="button" className="btn btn-primary">
          Notifications <span className="badge bg-secondary">4</span>
        </button>
      </div>
      <h2>Positioned</h2>
      <div className="content">
        <button type="button" className="btn btn-primary position-relative">
          Inbox
          <span className="badge badge-notifi bg-danger position-absolute">
            99+
            <span className="visually-hidden">unread messages</span>
          </span>
        </button>
      </div>
      <div className="content">
        <button type="button" className="btn btn-primary position-relative">
          Profile
          <span className="badge badge-notifi bg-danger position-absolute">
            <span className="visually-hidden">New Alert</span>
          </span>
        </button>
      </div>
      <h2>Background colors</h2>
      <div className="content">
        <BadgeCP>Primary</BadgeCP>
        <BadgeCP status={"secondary"}>secondary</BadgeCP>
        <BadgeCP status={"success"}>success</BadgeCP>
        <BadgeCP status={"danger"}>danger</BadgeCP>
        <BadgeCP status={"warning"} textCL={"dark"}>
          danger
        </BadgeCP>
        <BadgeCP status={"info"} textCL={"dark"}>
          info
        </BadgeCP>
        <BadgeCP status={"light"} textCL={"dark"}>
          light
        </BadgeCP>
        <BadgeCP status={"dark"}>dark</BadgeCP>
      </div>
      <h2>Pill badges</h2>
      <div className="content">
        <BadgeCP roundedPill={true}>Primary</BadgeCP>
        <BadgeCP roundedPill={true} status={"secondary"}>
          secondary
        </BadgeCP>
        <BadgeCP roundedPill={true} status={"success"}>
          success
        </BadgeCP>
        <BadgeCP roundedPill={true} status={"danger"}>
          danger
        </BadgeCP>
        <BadgeCP roundedPill={true} status={"warning"} textCL={"dark"}>
          danger
        </BadgeCP>
        <BadgeCP roundedPill={true} status={"info"} textCL={"dark"}>
          info
        </BadgeCP>
        <BadgeCP roundedPill={true} status={"light"} textCL={"dark"}>
          light
        </BadgeCP>
        <BadgeCP roundedPill={true} status={"dark"}>
          dark
        </BadgeCP>
      </div>
    </>
  );
}

export default Badge;
