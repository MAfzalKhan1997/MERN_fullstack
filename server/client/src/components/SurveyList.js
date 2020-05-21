import React, { Component } from "react";
import { connect } from "react-redux";

import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import classNames from "classnames";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelActions from "@material-ui/core/ExpansionPanelActions";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";

import * as actions from "../redux/actions/surveyListActions";

const styles = (theme) => ({
  root: {
    width: "100%",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
  icon: {
    verticalAlign: "bottom",
    height: 20,
    width: 20,
  },
  details: {
    alignItems: "center",
  },
  column: {
    flexBasis: "33.33%",
  },
  helper: {
    borderLeft: `2px solid ${theme.palette.divider}`,
    padding: `${theme.spacing(1)}px ${theme.spacing(2)}px`,
  },
  link: {
    color: theme.palette.primary.main,
    textDecoration: "none",
    "&:hover": {
      textDecoration: "underline",
    },
  },
});

class SurveyList extends Component {
  componentDidMount() {
    this.props.fetchSurveys();
  }

  renderSurveys = () => {
    const { classes, surveys } = this.props;

    return surveys.reverse().map((survey, index) => (
      <ExpansionPanel defaultExpanded key={index}>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <div className={classes.column}>
            <Typography className={classes.heading}>{survey.title}</Typography>
          </div>
          <div className={classes.column}>
            <Typography className={classes.secondaryHeading}>
              {survey.subject}
            </Typography>
          </div>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails className={classes.details}>
          <div className={classes.column}>
            <Typography variant="body2">{survey.body}</Typography>
          </div>
          <div className={classes.column} />
          <div className={classNames(classes.column, classes.helper)}>
            <Typography variant="subtitle2">
              Sent:{" "}
              <span style={{ color: "blue" }}>
                {new Date(survey.dateSent).toLocaleDateString()}
              </span>
              <br />
              Last Responded:{" "}
              <span style={{ color: "blue" }}>
                {survey.lastResponded
                  ? new Date(survey.lastResponded).toLocaleDateString()
                  : "No Response Yet"}
              </span>
            </Typography>
          </div>
        </ExpansionPanelDetails>
        <Divider />
        <ExpansionPanelActions>
          <Typography variant="button" style={{ marginRight: 20 }}>
            Yes: {survey.yes}
          </Typography>
          <Typography variant="button" style={{ marginRight: 20 }}>
            No: {survey.no}
          </Typography>
        </ExpansionPanelActions>
      </ExpansionPanel>
    ));
  };

  render() {
    console.log(this.props);
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <div style={{ margin: "20px 40px" }}>{this.renderSurveys()}</div>
      </div>
    );
  }
}

SurveyList.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = ({ surveyListReducer }) => ({
  surveys: surveyListReducer.surveys || [],
});

export default connect(
  mapStateToProps,
  actions
)(withStyles(styles)(SurveyList));
