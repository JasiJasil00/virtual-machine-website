import React from "react";
import Card from "./frame3/card";
export default function frame3 (){
    return(
        <section id="#Services">
            <div className="frame3">
                    <div className="first">
                        <img className="firstimposter" src="/images/first imposter.jpg"/>
                        
                        <img className="secondimposter" src="/images/second imposter.png"/>
                        
                        <img className="thirdimposter" src="/images/thirdimposter.jpg"/>
                        
                    </div> 
                    <Card class="firstcard"
                        explore="Explore in the metaverse"
                        onePixel="one pixel at a time"
                        para="The Future of Virtual Reality: Where Pixels Dream. In the not-so-distant future, pixels will transcend screens. They’ll escape their two-dimensional confines and leap into our reality, dancing with our senses."
                        
                    />
            </div>
        </section>
    )
}

