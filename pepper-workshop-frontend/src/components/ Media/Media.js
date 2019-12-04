import React, { Component, useState, useEffect } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
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
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    margin: "2rem 20%"
  },
  button: {
    margin: "0 20px"
  }
}));

const Media = ({
  media,
  getMedia,
  handleEditMedia,
  handleDeleteMedia,
  handleRunMedia
}) => {
  const [values, setValues] = useState({
    selectedMedia: {}
  });

  const selectMedia = media => {
    setValues({ ...values, selectedMedia: media });
  };

  useEffect(() => {
    getMedia();
  }, []);
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <List>
        {media.map(media => {
          const className = classNames("media", {
            selected: media.name === values.selectedMedia.name
          });
          return (
            <ListItem
              button
              className={className}
              onClick={e => selectMedia(media)}
            >
              <ListItemText primary={media.name} />
              <ListItemSecondaryAction>
                <IconButton aria-label="edit" onClick={handleEditMedia}>
                  <EditIcon />
                </IconButton>
                <IconButton aria-label="delete" onClick={handleDeleteMedia}>
                  <DeleteIcon />
                </IconButton>
                <IconButton aria-label="run" onClick={handleRunMedia}>
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

Media.propTypes = {};

export default Media;
