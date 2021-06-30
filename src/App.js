import { useEffect, useRef } from "react";
import "./App.css";
import "./components/Home.css";
import { cursorMove, scrollView } from "./utils/utils";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";

function App() {
  const cursor = useRef();
  const scrollViewRef = useRef();

  const onMouseMove = (e) => cursorMove(e, cursor);

  useEffect(() => {
    window.addEventListener("mousemove", onMouseMove);
    scrollView(scrollViewRef);
  });

  return (
    <div className="App">
      <div className="scroll-view" ref={scrollViewRef}>
        <Home />
        <About />
        <Projects />
      </div>
      <div className="cursor" ref={cursor}></div>
    </div>
  );
}

export default App;
