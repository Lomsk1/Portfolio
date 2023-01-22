import {
  faDiscord,
  faFacebook,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/images/Capture-removebg-preview.png";

function Footer() {
    const navigate = useNavigate()

    const contactButtonHandler = ()=> {
        navigate('/contact')
    }
  return (
    <footer>
        <hr />
      <div className="upper">
        <div className="left">
          <div className="logo">
            <img src={logo} alt="" />
          </div>
          <div className="info">
            <fieldset>
              <legend>Contact Information</legend>
              <address>
                <p>
                  <span>Mail</span>:
                  <a href="mailto:lomsianidzegiorgi123@gmail.com">
                    lomsianidzegiorgi123@gmail.com
                  </a>
                </p>
                <p>
                  <span>Tel</span>: +995 599391080
                </p>
                <p>Georgia, Tbilisi</p>
              </address>
            </fieldset>
          </div>
        </div>

        <hr className="one" />

        <div className="right">
          <div className="button-block">
            <div className="social">
              <a href="https://www.facebook.com/giorgi.lomsianidze.9/" target="_blank">
                <FontAwesomeIcon icon={faFacebook} color={"#097EEB"} />
              </a>
            </div>
          </div>
          <div className="button-block">
            <div className="social">
              <a href="https://www.instagram.com/giorgi_.l/" target="_blank">
                <FontAwesomeIcon icon={faInstagram} color={"#D300C5"} />
              </a>
            </div>
          </div>
          <div className="button-block">
            <div className="social">
              <a href="" target="_blank">
                <FontAwesomeIcon icon={faDiscord} color={"#5865F2"} />
              </a>
            </div>
          </div>
          <div className="button-block">
            <div className="social">
              <a href="https://www.linkedin.com/in/giorgi-lomsianidze-bb2aba229/" target="_blank">
                <FontAwesomeIcon icon={faLinkedin} color={"#0A66C2"} />
              </a>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="down">
        <p>©2022 By Giorgi Lomsianidze</p>

        <div id="container">
          <button className="learn-more" onClick={contactButtonHandler}>
            <span className="circle" aria-hidden="true">
              <span className="icon arrow"></span>
            </span>
            <span className="button-text">Contact Me</span>
          </button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
