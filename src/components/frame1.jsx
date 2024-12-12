import React from "react";
import Navbar from "./frame1/navbar";
import Group from "./frame1/group";
import Photo from "./frame1/photo"
export default function frame1(){
    return(
    <section id="Home">
        <div className="frame1">
        <div className="topimg"> 
            <img  src="/images/vr.png" alt="vr"/>
        </div>
        <div className="box1">
           <Navbar/>
           <Group/>
           <Photo/>
        </div>
        <div className="ellipse"></div>
        </div>
    </section>
    );
}