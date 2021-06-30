import { useEffect, useRef } from "react";
import "./App.css";
import "./components/Home.css";
import { cursorMove } from "./utils/utils";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";

function App() {
  const cursor = useRef();

  const onMouseMove = (e) => cursorMove(e, cursor);

  useEffect(() => {
    window.addEventListener("mousemove", onMouseMove);
  });

  return (
    <div className="App">
      <Home />
      <About />
      <Projects />
      <div className="cursor" ref={cursor}></div>
    </div>
  );
}

export default App;
