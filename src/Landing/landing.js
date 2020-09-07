import React, { Component } from "react";
import Logo from "../Assets/handler_logo.png";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import { makeStyles } from "@material-ui/core/styles";
import "./landing.css";

const useStyles = makeStyles((theme) => ({
  button: {
    [theme.breakpoints.up("sm")]: {
      width: "400px",
      height: "50px",
      fontSize: "20px",
    },
  },
}));

export default function Landing() {
  const classes = useStyles();

  return (
    <section className="landing">
      <div className="logo">
        <img src={Logo} alt="Handler bot logo" />
      </div>
      <section className="landing-description">
        <h1>The Handler</h1>
        <Divider variant="middle" />
        <h2>Your monster hunting discord partner</h2>
        <div className="about-box">
          <p>
            The Handler is a Discord bot that gives you access to Monster Hunter
            World: Iceborne’s monster information, locale's information and LFG
            for hunts within your server.
          </p>
        </div>
      </section>
      <Button
        variant="contained"
        color="primary"
        href="https://discord.com/oauth2/authorize?client_id=734825300667531294&scope=bot"
        target="_blank"
        rel="noopener noreferrer"
        className={classes.button}
      >
        Add me to your server
      </Button>
    </section>
  );
}
