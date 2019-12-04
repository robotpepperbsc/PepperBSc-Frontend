import React, { useEffect } from "react";
import PropTypes from "prop-types";
import {
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import PlayArrow from "@material-ui/icons/PlayArrow";

const Recordings = ({ recordings, playRecording, getRecordings }) => {
  useEffect(() => {
    getRecordings();
  }, []);

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
    <div>
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
    </div>
  );
};

Recordings.propTypes = {};

export default Recordings;
