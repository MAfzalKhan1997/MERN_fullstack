import React, { Component } from "react";
import StripeCheckout from "react-stripe-checkout";
import { connect } from "react-redux";

import Button from "@material-ui/core/Button";

import * as actions from "../redux/actions/authActions";

class Payments extends Component {
  render() {
    return (
      <StripeCheckout
        name="Emaily"
        description="$5 for 5 email credits"
        amount={500}
        token={(token) => this.props.handleToken(token)}
        stripeKey={process.env.REACT_APP_STRIPE_KEY}
      >
        <Button color="inherit">Add credits</Button>
      </StripeCheckout>
    );
  }
}

export default connect(null, actions)(Payments);
