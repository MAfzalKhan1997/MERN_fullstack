import React from "react";

import TextField from "@material-ui/core/TextField";

const SurveyField = ({ input, label, meta: { error, touched } }) => {
  return (
    <div>
      <TextField
        {...input}
        label={label}
        required
        error={touched && error ? true : false}
        helperText={touched && error}
        multiline={label === "Recipient List" && true}
        rowsMax="5"
        fullWidth
        margin="normal"
        variant="outlined"
      />
    </div>
  );
};
export default SurveyField;
