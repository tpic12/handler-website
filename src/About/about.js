import React, { Component } from "react";
import Divider from "@material-ui/core/Divider";
import "./about.css";

class About extends Component {
  render() {
    return (
      <section className="about">
        <h3>Why?</h3>
        <Divider variant="inlet" />
        <br />
        <p>
          I made The Handler as a summer project and to bridge two of my
          passions, programming and video games. Many times when playing Monster
          Hunter I found myself looking up monster's weakness time and time
          again, as easy as it is to go to the hunter's notes and scroll through
          the entire list of monsters in-game I figured there should be a better
          way with my phone, outside of just googling it everytime, so I made
          The Handler. The Handler is a bot to be used in Discord that will let
          you know all about a specific monster or locale, and help you set up
          an LFG for your squad in the server's channel.
        </p>
      </section>
    );
  }
}

export default About;
