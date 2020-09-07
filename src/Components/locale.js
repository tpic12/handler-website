import React from "react";
import Forest from "../Assets/forestExample.png";
import Reach from "../Assets/hoarfrostExample.png";

export default function Locale() {
  return (
    <>
      <p className="example-p">
        This command will send info about the specific locale entered, with a
        list of monsters organized by species. For the area argument you just
        need a portion of the area name to be entered, again it is not case
        sensative but does not need to be the entire area name.
      </p>
      <br />
      <div className="example-div">
        <div className="example">
          <code>*locale forest</code>
          <img src={Forest} alt="screenshot of Handler response" width="100%" />
        </div>
        <div className="example">
          <code>*locale reach</code>
          <img src={Reach} alt="screenshot of Handler response" width="100%" />
        </div>
      </div>
    </>
  );
}
