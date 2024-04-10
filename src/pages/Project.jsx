import React from 'react';
import { useEffect, useState } from "react";
import pessatoGIF from "../assets/img/pessato-demo.gif"
import gitviewGIF from "../assets/img/gitview-demo.gif"
import crypTracer from "../assets/img/crypTrace-demo.png"

const Project = () => {

    const [selectedClass,setSelectedClass] = useState("pessato");
    const tit="PROJECTS";
    const [i, setI] = useState(0);
    const [incrementing, setIncrementing] = useState(true);
    const updateTitle = () => {
        let newI = i;
        console.log("newI before update:", newI);
        console.log("incrementing:", incrementing);
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


    const pessatoData = (
        <>
            <img src={pessatoGIF} alt="" className="projectImg"/>
            <div className="langs">
                <span className="languages">Python</span>
                <span className="languages">HTML</span>
                <span className="languages">CSS</span>
                <span className="languages">Javascript</span>
            </div>
        </>
    )

    const gitviewData = (
        <>
            <img src={gitviewGIF} alt="" className="projectImg"/>
            <div className="langs">
                <span className="languages">React</span>
                <span className="languages">HTMl</span>
                <span className="languages">CSS</span>
            </div>
        </>
    )

    const crypTraceData = (
        <>
            <img src={crypTracer} alt="" className="projectImg"/>
            <div className="langs">
                <span className="languages">React</span>
                <span className="languages">HTMl</span>
                <span className="languages">CSS</span>
                <span className="languages">Blockchain</span>
            </div>
        </>
    )

    return (
        <>
            <div id="Projects" className="container Project">
                <div className="projCards">
                    <div className={`proz ${selectedClass==="pessato"?"selectedProj":null}`} onClick={()=>{selectedClass!="pessato"&&setSelectedClass("pessato")}}>
                        <span className={selectedClass==="pessato"?"selectedpTitle":"pTitle"}>Pessato</span>
                        <span className={selectedClass==="pessato"?"selectedpDesc":"pDesc"}>A web app designed to order food online from PESU Cafeteria</span>
                    </div>
                    <div className={`proz ${selectedClass==="gitView"?"selectedProj":null}`} onClick={()=>{selectedClass!="gitView"&&setSelectedClass("gitView")}}>
                        <span className={selectedClass==="gitView"?"selectedpTitle":"pTitle"}>Gitview</span>
                        <span className={selectedClass==="gitView"?"selectedpDesc":"pDesc"}>A web app designed to display GitHub profiles and repositories</span>
                    </div>
                    <div className={`proz ${selectedClass==="crypTrace"?"selectedProj":null}`} onClick={()=>{selectedClass!="crypTrace"&&setSelectedClass("crypTrace")}}>
                        <span className={selectedClass==="crypTrace"?"selectedpTitle":"pTitle"}>Crypto Transaction tracer</span>
                        <span className={selectedClass==="crypTrace"?"selectedpDesc":"pDesc"}>A web app designed to trace crypto transactions in the bitcoin blockchain</span>
                    </div>
                </div>
                <div className="projDesc">
                    {selectedClass==="pessato"?pessatoData:selectedClass==="gitView"?gitviewData:selectedClass==="crypTrace"?crypTraceData:null}
                </div>
                

            </div>
        </>
    )
}


export default Project;