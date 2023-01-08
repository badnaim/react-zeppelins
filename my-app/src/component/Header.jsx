import Twitter from "../icons/twitter";
import Linkedin from "../icons/linkedin";
import Medium from "../icons/medium";
import ManSittingImg from "../icons/manSittingImg";
import Sad1 from "../icons/sad1"
import Sad2 from "../icons/sad2"
import "../styles/header.css";

export default function header() {
  return (
    <header>
      <div className="one">
        <div className="logos">
          <Sad1 />
          <Sad2 />
        </div>
        <div className="navLinks">
          <ul>
            <li>PORTFOLIO</li>
            <li>BLOG</li>
            <li>CV</li>
            <li>STORE</li>
            <li>FREELANCE</li>
            <li>ABOUT ME</li>
            <li>CONTACT</li>
          </ul>
        </div>
      </div>
      <div className="description" id="margin">
        <div>
          <div id="descOne">Blog Post</div>
          <div id="descTwo">I think so, this is it.</div>
          <div id="descThree">
            Design begins after I begin to think about how to present an
            experience most successfully, whether a button I put in can solve a
            problem. The only point in design is not ui design, if the user does
            not have a good experience at the end of the product, the design
            will be considered unsuccessful in my opinion.
          </div>
          <div className="threeButton">
            <button id="twitter">
              <Twitter />
              TWITTER
            </button>
            <button id="linkedin">
              <Linkedin />
              LINKEDIN
            </button>
            <button id="medium">
              <Medium />
              MEDIUM
            </button>
          </div>
        </div>
        <div>
          <ManSittingImg />
        </div>
      </div>
    </header>
  );
}
