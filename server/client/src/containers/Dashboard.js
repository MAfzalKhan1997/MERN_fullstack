import React, { Component } from "react";
import { Link } from "react-router-dom";

import { withStyles } from "@material-ui/core/styles";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";

import SurveyList from "../components/SurveyList";

const styles = (theme) => ({
  root: {
    flexGrow: 1,
  },
  fab: {
    position: "fixed",
    bottom: theme.spacing(6),
    right: theme.spacing(4),
  },
});

class Dashboard extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <SurveyList />
        <Link to="/surveys/new">
          <Fab color="secondary" aria-label="Add" className={classes.fab}>
            <AddIcon />
          </Fab>
        </Link>
      </div>
    );
  }
}

export default withStyles(styles)(Dashboard);
