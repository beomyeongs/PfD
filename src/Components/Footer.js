import React from "react";
import "Css/Footer.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPerson,
  faEnvelope,
  faPhone,
  faThumbsUp,
} from "@fortawesome/free-solid-svg-icons";

function Footer() {
  return (
    <body>
      <section class="footer">
        <div class="content">
          <h1>
            Contact Me
            <FontAwesomeIcon icon={faThumbsUp} />
          </h1>
          <p>저에 대해 더 궁금하시면 아래 내용을 보고 연락주세요.</p>
        </div>
        <div class="container">
          <div class="contactInfo">
            <div class="box">
              <div class="icon">
                <FontAwesomeIcon icon={faPerson} />
              </div>
              <div class="text">
                <h3>Info.</h3>
                <p>김기범, 24</p>
              </div>
            </div>
            <div class="box">
              <div class="icon">
                <FontAwesomeIcon icon={faEnvelope} />
              </div>
              <div class="text">
                <h3>Email.</h3>
                <p>example@gmail.com</p>
              </div>
            </div>
            <div class="box">
              <div class="icon">
                <FontAwesomeIcon icon={faPhone} />
              </div>
              <div class="text">
                <h3>Phone.</h3>
                <p>010-XXXX-XXXX</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </body>
  );
}

export default Footer;
