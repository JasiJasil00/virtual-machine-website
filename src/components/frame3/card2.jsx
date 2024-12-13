import React from "react";
import Play from "./play";
export default function Card(props) {
    const cardStyle = props.customStyle ? props.customStyle : {};
  return (
    <div className="cardframe1" >
      <h1 className="heading1" >
        <span className="explore1">{props.explore}
        </span>
        <span className="one-pixel1">
          {props.onePixel}
          <span className="whitespace1"> . . . </span>
        </span>
      </h1>
      <p className="para1">{props.para}</p>
      <div className="ending1">
        <button>
          <h3>Play Now</h3>
        </button>
        <Play/>
      </div>
    </div>
  );
}
