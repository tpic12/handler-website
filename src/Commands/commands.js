import React from "react";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { makeStyles } from "@material-ui/core/styles";
import Monster from "../Components/monster.js";
import Locale from "../Components/locale.js";
import Hunt from "../Components/hunt";
import "./commands.css";

const useStyles = makeStyles((theme) => ({
  header: {
    fontFamily: "'EB Garamond', serif",
  },
  body: {
    fontFamily: "'EB Garamond', serif",
    [theme.breakpoints.up("sm")]: {
      fontSize: "20px",
    },
  },
}));

export default function Commands() {
  const classes = useStyles();
  return (
    <section className="cmnds-section">
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography variant="h5" className={classes.header}>
            *monster [name]
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <Monster />
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography variant="h5" className={classes.header}>
            *locale [area]
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <Locale />
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography variant="h5" className={classes.header}>
            *hunt [objective]
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <Hunt />
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography variant="h5" className={classes.header}>
            *help
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className={classes.body}>
            This command sends a direct message to the user with a full list of
            commands and examples included.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </section>
  );
}
