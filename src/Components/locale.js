import React from "react";
import Coral from "../Assets/coralExample.png";
import Volcanic from "../Assets/volcanicExample.png";

export default function Locale() {
  return (
    <>
      <p className="example-p">
        This command will send info about the specific guiding lands locale
        entered, with a list of monsters organized by threat level. For the area
        argument you need the first part of the area name to be entered without
        the word region, again it is not case sensative but does not need to be
        the entire area name. The bold names on the list pertain to area
        specific tempered monsters, that's not to say they won't appear
        elsewhere, but are only available tempered in that locale. Regions
        included are: Forest, Wildspire, Coral, Rotted, Volcanic & Tundra.
      </p>
      <br />
      <div className="example-div">
        <div className="example">
          <code>*locale coral</code>
          <img src={Coral} alt="screenshot of Handler response" width="100%" />
        </div>
        <div className="example">
          <code>*locale volcanic</code>
          <img
            src={Volcanic}
            alt="screenshot of Handler response"
            width="100%"
          />
        </div>
      </div>
    </>
  );
}
