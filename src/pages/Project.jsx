import React from "react";
import { useEffect, useState } from "react";
import proj1demo from "../assets/demos/project1.mp4";
import proj2demo from "../assets/demos/project2.mp4";
import proj3demo from "../assets/demos/project3.mp4";
import backImg from "../assets/img/back.svg";

const Project = () => {
    const [selectedClass, setSelectedClass] = useState("pessato");
    const tit = "PROJECTS";
    const [i, setI] = useState(0);
    const [incrementing, setIncrementing] = useState(true);
    const updateTitle = () => {
        let newI = i;
        if (incrementing) {
            newI++;
            if (newI == 8) {
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

    const project1 = (
        <>
            <video src={proj1demo} alt="pessato" className="projectImg" autoPlay controls/>
            <div className="dets">
                <div className="langs">
                    <span className="languages">Python</span>
                    <span className="languages">HTML</span>
                    <span className="languages">CSS</span>
                    <span className="languages">Javascript</span>
                </div>
                <div className="gitLink" onClick={()=>window.open("https://github.com/typicallhavok/Pessato")}>View in github <img src={backImg} alt="" className="projIMG" /></div>
            </div>
        </>
    );

    const project2 = (
        <>
            <video src={proj2demo} alt="task manager" className="projectImg" autoPlay controls/>
            <div className="dets">
                <div className="langs">
                    <span className="languages">Nodejs</span>
                    <span className="languages">MongoDB</span>
                    <span className="languages">React</span>
                </div>
                <div className="gitLink" onClick={()=>window.open("https://github.com/typicallhavok/task-manager")}>View in github <img src={backImg} alt="" className="projIMG" /></div>
                <div className="gitLink" onClick={()=>window.open("https://task-manager-lime-eta.vercel.app")}>Try it out <img src={backImg} alt="" className="projIMG" /></div>
            </div>
        </>
    );

    const project3 = (
        <>
            <video src={proj3demo} alt="bumperio" className="projectImg" autoPlay controls/>
            <div className="dets">
                <div className="langs">
                    <span className="languages">Threejs</span>
                    <span className="languages">React</span>
                    <span className="languages">Rapier</span>
                </div>
                <div className="gitLink" onClick={()=>window.open("https://github.com/typicallhavok/race")}>View in github <img src={backImg} alt="" className="projIMG" /></div>
                <div className="gitLink" onClick={()=>window.open("https://bumperio.vercel.app")}>Try it out <img src={backImg} alt="" className="projIMG" /></div>
            </div>
        </>
    );

    return (
        <>
            <div id="Projects" className="container Project">
                <div className="projCards">
                    <div
                        className={`proz ${
                            selectedClass === "pessato" ? "selectedProj" : null
                        }`}
                        onClick={() => {
                            selectedClass != "pessato" &&
                                setSelectedClass("pessato");
                        }}
                    >
                        <span
                            className={
                                selectedClass === "pessato"
                                    ? "selectedpTitle"
                                    : "pTitle"
                            }
                        >
                            Pessato
                        </span>
                        <span
                            className={
                                selectedClass === "pessato"
                                    ? "selectedpDesc"
                                    : "pDesc"
                            }
                        >
                            A web app designed to order food online from PESU
                            Cafeteria
                        </span>
                    </div>
                    <div
                        className={`proz ${
                            selectedClass === "gitView" ? "selectedProj" : null
                        }`}
                        onClick={() => {
                            selectedClass != "gitView" &&
                                setSelectedClass("gitView");
                        }}
                    >
                        <span
                            className={
                                selectedClass === "gitView"
                                    ? "selectedpTitle"
                                    : "pTitle"
                            }
                        >
                            Task Manager
                        </span>
                        <span
                            className={
                                selectedClass === "gitView"
                                    ? "selectedpDesc"
                                    : "pDesc"
                            }
                        >
                            An app to manage and organise tasks
                        </span>
                    </div>
                    <div
                        className={`proz ${
                            selectedClass === "crypTrace"
                                ? "selectedProj"
                                : null
                        }`}
                        onClick={() => {
                            selectedClass != "crypTrace" &&
                                setSelectedClass("crypTrace");
                        }}
                    >
                        <span
                            className={
                                selectedClass === "crypTrace"
                                    ? "selectedpTitle"
                                    : "pTitle"
                            }
                        >
                            BumberIO
                        </span>
                        <span
                            className={
                                selectedClass === "crypTrace"
                                    ? "selectedpDesc"
                                    : "pDesc"
                            }
                        >
                            A simple car game
                        </span>
                    </div>
                </div>
                <div className="projDesc">
                    {selectedClass === "pessato"
                        ? project1
                        : selectedClass === "gitView"
                        ? project2
                        : selectedClass === "crypTrace"
                        ? project3
                        : null}
                </div>
            </div>
        </>
    );
};

export default Project;
