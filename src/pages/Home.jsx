import React from "react";
import { useState, useEffect } from "react";

const Home = () => {
    const allTyping = ["freelance", "graphic-design", "fullstack", "game-dev"];
    const [typing, setTyping] = useState(allTyping[0]);
    useEffect(() => {
        document.title = "havok";
        let currentIndex = allTyping.indexOf(typing);
        const timeoutId = setTimeout(() => {
            const intervalId = setInterval(() => {
                currentIndex = (currentIndex + 1) % allTyping.length;
                setTyping(allTyping[currentIndex]);
            }, 2000);

            return () => {
                clearInterval(intervalId);
            };
        }, 1000);

        return () => {
            clearTimeout(timeoutId);
        };
    }, [typing, allTyping]);

    return (
        <div id="Home" className="Home">
            <svg className="svgw welcome">
                <text className="welcomet" x="1" y="3.5rem">
                    Welcome.
                </text>
            </svg>
            <div className="container">
                <p id="typ" className="typ">
                    /{typing}
                </p>
            </div>
        </div>
    );
};

export default Home;
