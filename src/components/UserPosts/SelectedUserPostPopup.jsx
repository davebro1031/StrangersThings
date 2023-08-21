import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import compareDates from "./compareDates";
import parseDate from "./parseDate";

function SelectedUserPostPopup({
  trigger,
  setTrigger,
  id,
  title,
  description,
  price,
  deliver,
  created,
  updated,
  location,
}) {
  const [currentGMT, setCurrentGMT] = useState(null);
  async function getCurrentGMT() {
    try {
      const response = await fetch(
        "http://api.timezonedb.com/v2.1/get-time-zone?key=Z1CROW4937CK&format=json&by=zone&zone=Africa/Abidjan"
      );
      const result = await response.json();
      setCurrentGMT(result.formatted);
    } catch (err) {
      console.error(err);
    }
  }

  useEffect(() => {
    if (trigger) {
      getCurrentGMT();
    }
  }, [trigger]);

  return trigger ? (
    <div className="popup" onClick={() => setTrigger(false)}>
      <Link to={id}>
        <div className="popup-inner popup-neutral post-popup">
          {currentGMT ? (
            <div className="time-stamp">
              Posted {compareDates(parseDate(created), parseDate(currentGMT))}{" "}
              ago {created === updated ? null : "(edited)"}
            </div>
          ) : (
            <div></div>
          )}
          <h2 className="post-title"> {title}</h2>
          <div className="post-description">{description}</div>
          <div className="post-body">
            <div>Price: ${price}</div>
            {deliver ? <div>Will Deliver</div> : null}
            <div>Location: {location}</div>
          </div>
        </div>
      </Link>
    </div>
  ) : null;
}

export default SelectedUserPostPopup;
