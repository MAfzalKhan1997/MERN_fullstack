import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";

// import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import DoneIcon from "@material-ui/icons/Done";

import SurveyField from "../components/SurveyField";
import validateEmails from "../utils/validateEmails";

const styles = (theme) => ({
  root: {
    flexGrow: 1,
  },
});

const fields = ["Survey Title", "Subject Line", "Email Body", "Recipient List"];

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
  render() {
    const { classes, history } = this.props;
    return (
      <div className={classes.root}>
        <div style={{ margin: 50 }}>
          <form onSubmit={this.props.handleSubmit(this.props.onSurveySubmit)}>
            {this.renderFields()}
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
    let labelNew = label.replace(/[./" "]/g, "");

    if (!values[labelNew] || values[labelNew] === " ") {
      errors[labelNew] = `You must provide ${label.toLowerCase()}`;
    }
  });

  return errors;
};

export default reduxForm({
  validate,
  form: "surveyForm",
  destroyOnUnmount: false,
})(withStyles(styles)(SurveyForm));
