import { useRef, useEffect } from "react";
import { SiCodewars, SiSololearn } from "react-icons/si";
import { bgMouseMove } from "../utils/utils";
import "../App.css";
import "./Home.css";

function Home() {
  const homeTextContainer = useRef();

  const onMouseMove = (e) => bgMouseMove(e, homeTextContainer.current);

  useEffect(() => {
    window.addEventListener("mousemove", onMouseMove);
  }, []);

  return (
    <div className="main-container flex-column" id="home">
      <div
        className="home-text-container flex-column centered"
        ref={homeTextContainer}
      >
        <div className="flex-row centered">
          <img id="avatar" src="cactus-with-glasses.png" alt="avatar" />
          <h1 className="greeting" data-text="AZIM AKMATOV">
            <div className="first-name">AZIM</div>
            <div className="last-name">AKMATOV</div>
          </h1>
        </div>
        <p className="greeting-about">
          A JAVASCRIPT DEVELOPER BASED IN KYRGYZSTAN
        </p>

        <div className="social-links-container flex-row centered">
          <a
            href="https://github.com/akmatoff"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-github social-icon"></i>
          </a>
          <a href="https://t.me/akmatoffexe" target="_blank" rel="noreferrer">
            <i className="fab fa-telegram-plane social-icon"></i>
          </a>
          <a
            href="https://linkedin.com/in/akmatoff"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-linkedin social-icon" />
          </a>
          <a
            href="https://freecodecamp.org/akmatoff"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-free-code-camp social-icon" />
          </a>
          <a href="https://www.codewars.com/users/akmatoff">
            <SiCodewars className="social-icon" />
          </a>
          <a href="https://www.sololearn.com/profile/15963341">
            <SiSololearn className="social-icon" />
          </a>
          <a href="mailto: akmatoff.exe@gmail.com">
            <i className="fas fa-envelope social-icon"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;
