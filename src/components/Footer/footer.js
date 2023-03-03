import React from "react";
import styles from "../../styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { MDBFooter } from "mdb-react-ui-kit";
import {
  faGithub,
  faLinkedin,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";

export const Footer = () => {
  return (
    <MDBFooter className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
      <div className="me-5 d-none d-lg-block overlay-fix">
        <span>Let's Connect!</span>
      </div>

      <div>
        <a
          href="https://facebook.com/gdjewell"
          className="me-4 overlay-fix text-reset"
        >
          <span>
            <FontAwesomeIcon icon={faFacebook} size="lg" />
          </span>
        </a>
        <a
          href="https://linkedin.com/gdjewell"
          className="me-4 overlay-fix text-reset"
        >
          <span>
            <FontAwesomeIcon icon={faLinkedin} size="lg" />
          </span>
        </a>
        <a
          href="https://github.com/gdjewell"
          className="me-4 overlay-fix text-reset"
        >
          <span>
            <FontAwesomeIcon icon={faGithub} size="lg" />
          </span>
        </a>
      </div>
    </MDBFooter>
  );
};
