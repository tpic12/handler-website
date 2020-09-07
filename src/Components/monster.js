import React from "react";
import Hazak from "../Assets/blackveilExample.png";
import Brachy from "../Assets/ragingExample.png";
import "./components.css";

export default function Monster() {
  return (
    <>
      <p className="example-p">
        This command will send info about the specific monster, monster name is
        not case sensative but does need the entire name of the monster. Also
        puncuation is necessary, ie:{" "}
        <span className="italics">tobi-kadachi</span> or{" "}
        <span className="italics">safi'jiiva</span>
      </p>
      <br />
      <div className="example-div">
        <div className="example">
          <code>*monster blackveil vaal hazak</code>
          <img src={Hazak} alt="screenshot of Handler response" width="100%" />
        </div>
        <div className="example">
          <code>*monster raging brachydios</code>
          <img src={Brachy} alt="screenshot of Handler response" width="100%" />
        </div>
      </div>
    </>
  );
}
