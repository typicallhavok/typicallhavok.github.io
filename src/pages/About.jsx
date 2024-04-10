import React from 'react';

import { useEffect, useState } from "react";
import backImg from "../assets/img/back.svg";

const About = () => {
    const [info,setInfo] = useState(null);
    const info1 = "I'm a freelancer with a \
    versatile portfolio, delivering excellence in web \
    design, development of AI and games, cyber security and content creation. With a \
    proven track record of many projects across \
    industries, I bring innovative ideas to life through \
    collaborative approaches.";

    const tit="ABOUT";
    const [i, setI] = useState(0);
    const [incrementing, setIncrementing] = useState(true);

    const updateTitle = () => {
        let newI = i;
        if (incrementing) {
          newI++;
          if (newI == 5) {
            setIncrementing(false);
          }
        } else {
          newI--;
          if (newI == 1) {
            setIncrementing(true);
          }
        }
        setI(newI);
        
        document.title = tit.substring(0, newI);
      };
      useEffect(() => {
        const intervalId = setInterval(updateTitle, 500);
    
        return () => {
          clearInterval(intervalId);
        };
      }, [i]);

    useEffect(() => {
        let i = 0;
        const interval = setInterval(() => {
            setInfo(info1.substring(0, i));
            i++;
            if (i > info1.length) {
                clearInterval(interval);
            }
        }, 15);

        return () => clearInterval(interval);
    }, []);
    
    return (
        <>
            <div className="About" id="About">
                <p className="info">
                    {info}
                </p>
            </div>
            <div className="jusName back">
                AMOGH E M
            </div>
            <div className="summary back">
                <span className="sDarker">- Web Dev</span>
                <span className="sDark">- Game Dev</span>
                <span>- Cyber Sec</span>
            </div>
            <a href="/my-portfolio/resume.pdf" target="_blank">
            <div className="resume">
                resume        <img src={backImg} alt="" className="resumeIMG" />
            </div></a>
        </>
    )

}


export default About;
