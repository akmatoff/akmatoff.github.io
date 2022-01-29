import { useEffect, useRef } from "react";
import "./App.css";
import "./components/Home.css";
import { cursorMove } from "./utils/utils";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Stack from "./components/Stack";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Scene from "./three";

function App() {
  const cursor = useRef();
  const canvasRef = useRef();
  const onMouseMove = (e) => cursorMove(e, cursor.current);

  useEffect(() => {
    Scene(canvasRef.current);
    window.addEventListener("mousemove", onMouseMove);
  }, []);

  return (
    <div className="App flex-row">
      <Header />
      <div className="scroll-view">
        <Home />
        <About />
        <Stack />
        <Projects />
        <Contact />
        <canvas id="cactus-3d" ref={canvasRef} />
      </div>
      <div className="cursor" ref={cursor}></div>
    </div>
  );
}

export default App;
