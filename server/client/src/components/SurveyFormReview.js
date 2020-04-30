import React, { Component } from "react";
import { connect } from "react-redux";

import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import * as actions from "../redux/actions/surveyReviewActions";

import { SurveyFormFields as fields } from "../constant/fields";

const styles = (theme) => ({
  root: {
    flexGrow: 1,
  },
});

class SurveyFormReview extends Component {
  reviewFields = () => {
    const { formValues } = this.props;
    return fields.map((label, index) => {
      let newlabel = label.replace(/[./" "]/g, "");
      return (
        <div key={label} style={{ margin: 10 }}>
          <Typography variant="subtitle2">{label}</Typography>
          <Typography variant="subtitle1">{formValues[newlabel]}</Typography>
        </div>
      );
    });
  };

  renderButtons = () => {
    const { submitSurvey, formValues, history } = this.props;
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Button
          onClick={() => this.props.onBack()}
          variant="contained"
          color="secondary"
        >
          Back
        </Button>
        <Button
          onClick={() => submitSurvey(formValues, history)}
          variant="contained"
          color="primary"
        >
          Submit Survey
        </Button>
      </div>
    );
  };

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <div style={{ margin: 50 }}>
          <Typography variant="h5">Please review your entries</Typography>
          <br />
          {this.reviewFields()}
          {this.renderButtons()}
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ form }) => ({
  formValues: form.surveyForm.values,
});

export default connect(
  mapStateToProps,
  actions
)(withStyles(styles)(SurveyFormReview));
