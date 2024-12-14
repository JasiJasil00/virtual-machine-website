import React from "react";
import Navbar1 from "./frame6/navabar1";
import Card3 from "./frame6/card3";
export default function frame6(){
    return(
        <section>
            <div className="frame6">
                <Navbar1/>
                <Card3/>
                <div className="line"></div>
                    <ul className="navbar2">
                        <li>Terms</li>
                        <li>Privacy</li>
                        <li>Conditions</li>
                    </ul>
                    <img className="ellipse3"src="/images/Ellipse 3.png"/>
                    <img className="ellipse4"src="/images/Ellipse 4.png"/>
                    <h1 className="ellipsecontent">2024 VR ZONE Ltd. All Rights Reserved</h1>
                    <div className="navbar3">
                        <img className="twitter" src="/images/Twitter.png"/>
                        <img className="youtube" src="/images/YouTube.png"/>
                        <img className="facebook" src="/images/Facebook F.png"/>
                        <img className="instagram" src="/images/Instagram.png"/>
                    </div>
            </div>
        </section>
    );
}