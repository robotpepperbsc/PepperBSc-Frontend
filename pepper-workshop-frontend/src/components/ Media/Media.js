import React, { useEffect, useState } from "react";
import classNames from "classnames";
import {
  IconButton,
  List,
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
  Grid
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import PlayArrow from "@material-ui/icons/PlayArrow";
import { makeStyles } from "@material-ui/core/styles";
import { createMediaAction } from "../Improvisation/pepperActionService";
import "./Media.scss";

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
  photos,
  videos,
  getMedia,
  handleEditMedia,
  handleDeleteMedia,
  runMedia
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

  const handleRunMedia = (name, fileType) => {
    const mediaAction = createMediaAction(name, fileType);
    runMedia(mediaAction);
  };

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container direction={"row"}>
        <Grid sm={6} xs={12}>
          <List className={"media-list"}>
            {photos.map(media => {
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
                    <IconButton
                      aria-label="run"
                      onClick={e => handleRunMedia(media.name, "jpg")}
                    >
                      <PlayArrow />
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>
              );
            })}
          </List>
        </Grid>
        <Grid sm={6} xs={12}>
          <List className={"media-list"}>
            {videos.map(media => {
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
                    <IconButton
                      aria-label="run"
                      onClick={e => handleRunMedia(media.name, "mp4")}
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

Media.propTypes = {};

export default Media;
