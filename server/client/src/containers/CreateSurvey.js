import React, { Component } from "react";

import { withStyles } from "@material-ui/core/styles";

import SurveyForm from "../components/SurveyForm";

const styles = (theme) => ({
  root: {
    flexGrow: 1,
  },
});

class CreateSurvey extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <SurveyForm />
      </div>
    );
  }
}

export default withStyles(styles)(CreateSurvey);
