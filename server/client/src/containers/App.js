import React, { useEffect } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

import * as actions from "../redux/actions/authActions";

import AppBar from "../components/AppBar";

const App = (props) => {
  useEffect(() => {
    props.fetchUser();
  }, [props]);

  return (
    <>
      <AppBar {...props} />
      <br />
      <br />
      <br />
      {props.children}
    </>
  );
};

export default connect(null, actions)(withRouter(App));
