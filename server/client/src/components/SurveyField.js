import React from "react";

import TextField from "@material-ui/core/TextField";

const SurveyField = ({ input }) => {
  return (
    <div>
      <TextField
        {...input}
        id="outlined-name"
        label="Title"
        // value={this.state.name}
        margin="dense"
        variant="outlined"
      />
    </div>
  );
};
export default SurveyField;
