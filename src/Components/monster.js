import React from "react";
import Beo from "../Assets/beoExample.png";
import Rathalos from "../Assets/rathalosExample.png";
import "./components.css";

export default function Monster() {
  return (
    <>
      <p className="example-p">
        This command will send info about the specific monster, monster name is
        not case sensative but does need the entire name of the monster. Also
        puncuation is necessary, ie:{" "}
        <span className="italics">tobi-kadachi</span> or{" "}
        <span className="italics">safi'jiiva</span>. The threat level of each
        monster is located next to their name, and the locales that they appear
        in are for the guiding lands, if they do not appear in the guiding lands
        then their respective expedition areas will be used.
      </p>
      <br />
      <div className="example-div">
        <div className="example">
          <code>*monster beotodus</code>
          <img src={Beo} alt="screenshot of Handler response" width="100%" />
        </div>
        <div className="example">
          <code>*monster rathalos</code>
          <img
            src={Rathalos}
            alt="screenshot of Handler response"
            width="100%"
          />
        </div>
      </div>
    </>
  );
}
