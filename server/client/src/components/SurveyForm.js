import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";

import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import DoneIcon from "@material-ui/icons/Done";

import SurveyField from "../components/SurveyField";
import validateEmails from "../utils/validateEmails";
import { SurveyFormFields as fields } from "../constant/fields";

const styles = (theme) => ({
  root: {
    flexGrow: 1,
  },
});

class SurveyForm extends Component {
  renderFields = () => (
    <div>
      {fields.map((value, index) => (
        <Field
          key={index}
          label={value}
          name={value.replace(/[./" "]/g, "")}
          component={SurveyField}
          type="text"
        />
      ))}
    </div>
  );

  renderButtons = (history) => (
    <div style={{ textAlign: "right" }}>
      <Button
        onClick={() => history.push("/surveys")}
        variant="outlined"
        color="secondary"
        style={{ marginRight: 10 }}
      >
        Cancel
      </Button>
      <Button variant="contained" color="primary" type="submit">
        Next <DoneIcon fontSize="small" style={{ marginLeft: 10 }} />
      </Button>
    </div>
  );

  render() {
    const { classes, history } = this.props;
    return (
      <div className={classes.root}>
        <div style={{ margin: 50 }}>
          <form onSubmit={this.props.handleSubmit(this.props.onSurveySubmit)}>
            {this.renderFields()}
            {this.renderButtons(history)}
          </form>
        </div>
      </div>
    );
  }
}

const validate = (values) => {
  const errors = {};

  errors.RecipientList = validateEmails(values.RecipientList || "");

  fields.forEach((label) => {
    label = label.replace(/[./" "]/g, "");

    if (!values[label] || values[label] === " ") {
      errors[label] = "Required";
    }
  });

  return errors;
};

export default reduxForm({
  form: "surveyForm",
  validate,
  destroyOnUnmount: false,
})(withStyles(styles)(SurveyForm));
