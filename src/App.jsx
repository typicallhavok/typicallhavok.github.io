import { useState } from "react";
import gitImg from "./assets/img/git.png";
import instaImg from "./assets/img/ig.png";
import mailImg from "./assets/img/mail.png";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Project from "./pages/Project.jsx";

import "./App.css";

const App = () => {
    const [display, setDisplay] = useState(0);

    return (
        <>
            <nav>
                <div className="hLogo">
                    {"<"}havok {"/>"}
                </div>
                <div className="abouzLi">
                    <div
                        className="button-wrapper"
                        onClick={() => {
                            (display != 1 && setDisplay(1)) ||
                                (display === 1 && setDisplay(0));
                        }}
                    >
                        <p className="ntext">About</p>
                    </div>
                </div>
                <div
                    className="projzLi"
                    onClick={() => {
                        (display != 2 && setDisplay(2)) ||
                            (display === 2 && setDisplay(0));
                    }}
                >
                    <div className="button-wrapper">
                        <p className="ntext">Projects</p>
                    </div>
                </div>
                <div className="cont">
                    <a href="https://github.com/typicallhavok">
                        <img src={gitImg} alt="Instagram" className="icon" />
                    </a>
                    <a href="https://www.instagram.com/typically_havok/">
                        <img src={instaImg} alt="Github" className="icon" />
                    </a>
                    <a href="mailto:your.email@gmail.com">
                        <img src={mailImg} alt="Gmail" className="icon" />
                    </a>
                </div>
            </nav>
            <div className="bor1" />
            <div className="bor2" />
            {display === 0 && <Home />}
            {display === 1 && <About />}
            {display === 2 && <Project />}
        </>
    );
};

export default App;
