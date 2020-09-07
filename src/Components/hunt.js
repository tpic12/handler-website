import React from "react";
import FirstResponse from "../Assets/huntExample1.png";
import SecondResponse from "../Assets/huntExample2.png";

export default function Hunt() {
  return (
    <>
      <p className="example-p">
        This command will set up an LFG response in the channel it is currently
        in. LFG responses will be shown until the hunt is completed and will
        then delete itself, they can be joined by other players in the server
        channel by reacting to the Handler's response with the provided
        reactions: + to join, - to remove yourself, ? to add yourself as an
        alternate, or a skull only to be used by the creator of the hunt to
        delete it. The Handler will also send a message to the hunters in the
        hunt ten minutes prior in order to make sure the hunters are ready. When
        the handler asks you when you would like to set up your hunt, please use
        this format for time and date:{" "}
        <span className="italics">h:mm am/pm tmz mm/dd/yyy</span>, although if
        the hunt is on the same date the format should be:{" "}
        <span className="italics">h:mm am/pm tmz</span>. When putting in
        timezones please be aware of daylight savings, if the time in the footer
        is off by 1-hour then you may have the wrong timezone, example for
        eastern timezone: est for fall/winter, edt for spring/summer.
      </p>
      <br />
      <div className="example-div hunt">
        <div className="example">
          <code>*hunt alatreon</code>
          <img
            src={FirstResponse}
            alt="screenshot of Handler response"
            width="100%"
          />
        </div>
        <div className="example">
          <code>3:00 pm cst 08/25/2020</code>
          <img
            src={SecondResponse}
            alt="screenshot of Handler response"
            width="100%"
          />
        </div>
      </div>
    </>
  );
}
