import React, { Fragment } from "react";
import PropTypes from "prop-types";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}));

const ScenarioHeader = ({
  name,
  description,
  handleNameChange,
  handleDescriptionChange
}) => {
  const classes = useStyles();

  return (
    <Fragment>
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5"></Typography>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              fullWidth
              id="email"
              label="name"
              name="name"
              autoComplete="off"
              onChange={handleNameChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              fullWidth
              name="description"
              label="description"
              id="description"
              autoComplete="off"
              onChange={handleDescriptionChange}
            />
          </Grid>
        </Grid>
      </div>
    </Fragment>
  );
};

ScenarioHeader.propTypes = {};

export default ScenarioHeader;
