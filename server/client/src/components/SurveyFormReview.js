import React, { Component } from "react";
import { connect } from "react-redux";

import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const styles = (theme) => ({
  root: {
    flexGrow: 1,
  },
});

class SurveyFormReview extends Component {
  render() {
    return (
      <div>
        SurveyFormReview
        <Button
          onClick={() => this.props.onBack()}
          variant="contained"
          color="secondary"
          //   style={{ marginRight: 10 }}
        >
          Back
        </Button>
      </div>
    );
  }
}

const mapStateToProps = ({ form }) => ({
  formValues: form.surveyForm.values,
});

export default connect(
  mapStateToProps,
  null
)(withStyles(styles)(SurveyFormReview));
