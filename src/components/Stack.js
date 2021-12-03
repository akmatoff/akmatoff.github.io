import { useRef, useEffect } from "react";
import { bgMouseMove } from "../utils/utils";
import './About.css';

function Stack() {
    const stackContainer = useRef();
    const onMouseMove = (e) => bgMouseMove(e, stackContainer.current);

    useEffect(() => {
        window.addEventListener("mousemove", onMouseMove);
    }, []);
    return (
        <div className="main-container flex-column centered" id="stack" ref={stackContainer}>
            <h1 className="header-title">Stack</h1>
            <div className="text-container">
                I'm familiar with technologies like 

                <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>React</li>
                    <li>Redux</li>
                    <li>Redux-Saga</li>
                    <li>TypeScript</li>
                    <li>Node</li>
                    <li>P5js</li>
                    <li>ThreeJS</li>
                </ul>
            </div>

            <div className="text-container">
                You can download my resume <a className="link" href="../assets/AKMATOV AZIM.pdf" download>here</a>
            </div>
        </div>
    )
}

export default Stack;