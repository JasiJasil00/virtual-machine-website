import React from "react";
import Play from "./play";
export default function Card(props) {
  return (
    <div className="cardframe">
      <h1 className="heading">
        <span className="explore">{props.explore}</span>
        <span className="one-pixel">
          {props.onePixel}
          <span className="whitespace"> . . . </span>
        </span>
      </h1>
      <p className="para">{props.para}</p>
      <div className="ending">
        <button>
          <h3>Play Now</h3>
        </button>
        <Play/>
      </div>
    </div>
  );
}
