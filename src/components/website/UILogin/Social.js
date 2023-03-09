import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; //
import {
  faAmbulance,
  faAnchor,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";

const Social = () => {
  return (
    <div className="social-container">
      <a href="#" className="social">
        <FontAwesomeIcon
          icon={faSearch}
          style={{ fontSize: 20, color: "blue" }}
        />
      </a>
      <a href="#" className="social">
        <FontAwesomeIcon
          icon={faAmbulance}
          style={{ fontSize: 20, color: "orange" }}
        />
      </a>
      <a href="#" className="social">
        <FontAwesomeIcon
          icon={faAnchor}
          style={{ fontSize: 20, color: "green" }}
        />
      </a>
    </div>
  );
};

export default Social;
