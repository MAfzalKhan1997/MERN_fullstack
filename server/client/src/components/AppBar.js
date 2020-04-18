import React from "react";
import { connect } from "react-redux";

import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";

const styles = (theme) => ({
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  progress: {
    color: "white",
    marginRight: theme.spacing(1),
  },
});

class MenuAppBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  onLogout = () => {};

  render() {
    // console.log(this.props);
    const { classes, history, user } = this.props;
    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" color="inherit" className={classes.grow}>
              Emaily
            </Typography>
            {user === null ? (
              <CircularProgress size={30} className={classes.progress} />
            ) : (
              <div>
                {user ? (
                  <Button color="inherit" onClick={() => this.onLogout()}>
                    Logout
                  </Button>
                ) : (
                  <Button
                    color="inherit"
                    href="/auth/google"
                    // onClick={() => history.push("/auth/google")}
                  >
                    Login with Google
                  </Button>
                )}
              </div>
            )}
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

MenuAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = ({ authReducer }) => ({
  user: authReducer.user,
});

// const mapDispatchToProps = (dispatch) => ({
//   fetchUser: () => dispatch(fetchUser()),
// });

export default connect(mapStateToProps, null)(withStyles(styles)(MenuAppBar));
