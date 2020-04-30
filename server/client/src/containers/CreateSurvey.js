import React, { Component } from "react";
import { reduxForm } from "redux-form";

import { withStyles } from "@material-ui/core/styles";

import SurveyForm from "../components/SurveyForm";
import SurveyFormReview from "../components/SurveyFormReview";

const styles = (theme) => ({
  root: {
    flexGrow: 1,
  },
});

class CreateSurvey extends Component {
  state = {
    showFormReview: false,
  };

  renderContent = () => {
    const { showFormReview } = this.state;

    if (showFormReview) {
      return (
        <SurveyFormReview
          onBack={() => this.setState({ showFormReview: false })}
          {...this.props}
        />
      );
    }
    return (
      <SurveyForm
        onSurveySubmit={() => this.setState({ showFormReview: true })}
        {...this.props}
      />
    );
  };

  render() {
    const { classes } = this.props;
    return <div className={classes.root}>{this.renderContent()}</div>;
  }
}

// export default withStyles(styles)(CreateSurvey);
export default reduxForm({
  form: "surveyForm",
})(withStyles(styles)(CreateSurvey));
