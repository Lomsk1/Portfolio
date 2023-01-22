import {
  faDiscord,
  faFacebook,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useNavigate } from "react-router-dom";
import { Link as LinkS } from "react-scroll";
import logo from "../../assets/images/Capture-removebg-preview.png";
import syncImg from '../../assets/images/sync_FILL0_wght400_GRAD0_opsz48.png'
import SyncImg from "../../assets/sync";

function Header({ normal }) {
  const navigate = useNavigate();

  const contactHandler = () => {
    navigate("/contact");
  };
  const projectHandler = () => {
    navigate("/projects");
  };
  return (
    <header>
      <nav>
        <div className="icon">
          {normal ? (
            <LinkS to="section_normal-1" smooth={true}>
              <img src={logo} alt="" />
            </LinkS>
          ) : (
            <Link to={"/normal_page"}>
              <img src={logo} alt="" />
            </Link>
          )}
        </div>

        <ul className="main_ul">
          <div className="div">
            <li className="txt" onClick={projectHandler}>
              Projects
            </li>
            <li className="txt" onClick={contactHandler}>
              Contact
            </li>
          </div>
          <div className="div s">
            <ul className="share-icons">
              <li className="share-icons__item">
                <Link to={""}>
                  <FontAwesomeIcon icon={faDiscord} color={"#5865F2"} />
                </Link>
              </li>
              <li className="share-icons__item">
                <a href="https://www.instagram.com/giorgi_.l/" target="_blank">
                  <FontAwesomeIcon icon={faInstagram} color={"#D300C5"} />
                </a>
              </li>
              <li className="share-icons__item">
                <a
                  href="https://www.facebook.com/giorgi.lomsianidze.9/"
                  target="_blank"
                >
                  <FontAwesomeIcon icon={faFacebook} color={"#097EEB"} />
                </a>
              </li>
              <li className="share-icons__item">
                <a
                  href="https://www.linkedin.com/in/giorgi-lomsianidze-bb2aba229/"
                  target="_blank"
                >
                  <FontAwesomeIcon icon={faLinkedin} color={"#0A66C2"} />
                </a>
              </li>
              <li className="share-icons__block">
                <div className="share-icons__block-left">
                  <FontAwesomeIcon icon={faCode} color={"#1571C7"} />
                </div>
                <div className="share-icons__block-right">
                  <FontAwesomeIcon icon={faCode} color={"#1571C7"} />
                </div>
              </li>
            </ul>
          </div>
        </ul>

        <div className="logo" title="Coming Soon">

          <SyncImg />
        </div>
      </nav>
    </header>
  );
}

export default Header;
