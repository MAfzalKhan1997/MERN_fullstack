import React, { Component } from "react";
import Typography from "@material-ui/core/Typography";

class Home extends Component {
  render() {
    return (
      <div style={{ textAlign: "center", marginTop: 50 }}>
        <Typography variant="h1">Emaily!</Typography>
        <Typography variant="h5">Collect feedback from users</Typography>
      </div>
    );
  }
}

export default Home;
