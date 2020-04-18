import React, { Component } from "react";
// import { connect } from "react-redux";
// import * as actions from "../redux/actions/authActions";

class Home extends Component {
//   componentDidMount() {
//     this.props.fetchUser();
//   }

  render() {
    return (
      <div>
        <p>
          Edit <code>src/App.js</code> and save to reload
        </p>
        <a href="/auth/google">Sign in with Google</a>
      </div>
    );
  }
}

// const mapStateToProps = state => {
//     return {
//       language: state.dropDownReducer.language || 'English'
//     };
//   };

// const mapDispatchToProps = (dispatch) => ({
//   fetchUser: () => dispatch(fetchUser()),
// });

export default // connect(null, actions)
Home;
