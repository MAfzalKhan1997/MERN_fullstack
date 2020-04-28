import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";

import SurveyField from "../components/SurveyField";

class SurveyForm extends Component {
  renderFields = () => (
    <div>
      <Field name="surveyTitle" component={SurveyField} type="text" />
    </div>
  );
  render() {
    return (
      <div>
        <form
          onSubmit={this.props.handleSubmit((values) => console.log(values))}
        >
          {this.renderFields()}
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default reduxForm({
  form: "surveyForm",
})(SurveyForm);
