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
              <Link to={""}>
                <FontAwesomeIcon icon={faFacebook} color={"#097EEB"} />
              </Link>
            </div>
          </div>
          <div className="button-block">
            <div className="social">
              <Link to={""}>
                <FontAwesomeIcon icon={faInstagram} color={"#D300C5"} />
              </Link>
            </div>
          </div>
          <div className="button-block">
            <div className="social">
              <Link to={""}>
                <FontAwesomeIcon icon={faDiscord} color={"#5865F2"} />
              </Link>
            </div>
          </div>
          <div className="button-block">
            <div className="social">
              <Link to={""}>
                <FontAwesomeIcon icon={faLinkedin} color={"#0A66C2"} />
              </Link>
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
