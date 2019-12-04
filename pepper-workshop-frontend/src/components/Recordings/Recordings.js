import React, { useEffect } from "react";
import PropTypes from "prop-types";
import {
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  Grid,
  Button
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import PlayArrow from "@material-ui/icons/PlayArrow";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    margin: "2rem"
  },
  button: {
    margin: "0 20px"
  }
}));

const Recordings = ({
  recordings,
  handleStartRecording,
  handleStopRecording,
  playRecording,
  getRecordings
}) => {
  useEffect(() => {
    getRecordings();
  }, []);

  const classes = useStyles();

  const getRecordingDuration = duration => {
    const hrs = ~~(duration / 3600);
    const mins = ~~((duration % 3600) / 60);
    const secs = ~~duration % 60;
    let ret = "";

    if (hrs > 0) {
      ret += "" + hrs + ":" + (mins < 10 ? "0" : "");
    }

    ret += "" + mins + ":" + (secs < 10 ? "0" : "");
    ret += "" + secs;
    return ret;
  };

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid container xs={12} justify={"center"}>
          <Button
            onClick={handleStartRecording}
            className={classes.button}
            variant={"contained"}
          >
            {" "}
            start recording
          </Button>
          <Button
            onClick={handleStopRecording}
            className={classes.button}
            color={"secondary"}
            variant={"contained"}
          >
            stop recording
          </Button>
        </Grid>
        <Grid item xs={12}>
          <List>
            {recordings.map(recording => {
              return (
                <ListItem button onClick={e => playRecording(recording)}>
                  <ListItemText
                    primary={`${recording.name} ${recording.file_type}`}
                    secondary={`duration: ${getRecordingDuration(
                      recording.duration
                    )}`}
                  />
                  <ListItemSecondaryAction>
                    <IconButton
                      aria-label="run"
                      onClick={e => playRecording(recording)}
                    >
                      <PlayArrow />
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>
              );
            })}
          </List>
        </Grid>
      </Grid>
    </div>
  );
};

Recordings.propTypes = {};

export default Recordings;
