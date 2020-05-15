import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";

import Payments from "./Payments";

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

  render() {
    const { classes, user } = this.props;
    return (
      <div className={classes.root}>
        <AppBar position="fixed">
          <Toolbar>
            <Typography variant="h6" color="inherit" className={classes.grow}>
              <Link
                style={{ textDecoration: "none", color: "white" }}
                to={user ? "/surveys" : "/"}
              >
                Emaily
              </Link>
            </Typography>
            {user === null ? (
              <CircularProgress size={30} className={classes.progress} />
            ) : (
              <div>
                {user ? (
                  <>
                    <Payments />
                    <Typography variant="button">
                      Credits : {user.credits}
                    </Typography>
                    <Button
                      style={{ marginLeft: 10 }}
                      color="inherit"
                      variant="outlined"
                      href="/api/logout"
                    >
                      Logout
                    </Button>
                  </>
                ) : (
                  <Button color="inherit" href="/auth/google">
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
