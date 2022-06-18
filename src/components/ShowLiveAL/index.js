import { useState, useRef } from "react";
import AlertCP from "../Alert";
function ShowLiveAL() {
  const [alerts, setAlerts] = useState([]);
  const parentAlerts = useRef();
  const addAlerts = () => {
    setAlerts([
      ...alerts,
      <AlertCP status={"success"}>
        <strong>Holy guacamole!</strong> You should check in on some of those
        fields below.
      </AlertCP>,
    ]);
  };
  return (
    <>
      <div ref={parentAlerts}>
        {alerts.map((item, index) => (
          <div key={index}>{item}</div>
        ))}
      </div>
      <button type="button" onClick={addAlerts} className="btn btn-primary">
        Show live alert
      </button>
    </>
  );
}

export default ShowLiveAL;
