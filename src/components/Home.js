import { useRef, useEffect } from "react";
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
        <h1 className="greeting" data-text="HI, I'M AZIM AKMATOV">
          HI, I'M AZIM AKMATOV
        </h1>
        <p className="greeting-about">
          A FULL STACK DEVELOPER BASED IN KYRGYZSTAN
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
          <a href="mailto: akmatoff.exe@gmail.com">
            <i className="fas fa-envelope social-icon"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;
