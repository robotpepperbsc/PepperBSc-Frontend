import React, { Fragment, useState } from "react";
import PropTypes from "prop-types";
import {
  GridListTile,
  Button,
  GridListTileBar,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  TextField,
  Grid
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import PlayArrow from "@material-ui/icons/PlayArrow";
import Popup from "reactjs-popup";

const ScenarioListItem = ({
  scenario,
  deleteScenario,
  setActiveScenario,
  runSCenario
}) => {
  const [values, setValues] = useState({
    open: false,
    from: 0,
    to: null
  });

  const handleDeleteScenario = () => {
    deleteScenario(scenario.name);
  };

  const handleEditScenario = () => {
    setActiveScenario(scenario);
  };

  const handleSetActiveScenario = () => {
    setActiveScenario(scenario);
  };

  const handleRunScenario = () => {
    runSCenario(scenario.name, values.from, values.to);
    handleClose();
  };

  const handleOpen = () => {
    setValues({ ...values, open: true });
  };

  const handleClose = () => {
    setValues({ ...values, open: false });
  };

  const handleChange = event => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  return (
    <Fragment>
      <ListItem onClick={handleSetActiveScenario}>
        <ListItemText
          primary={scenario.name}
          secondary={scenario.description}
        />
        <ListItemSecondaryAction>
          <IconButton aria-label="edit" onClick={handleEditScenario}>
            <EditIcon />
          </IconButton>
          <IconButton aria-label="delete" onClick={handleDeleteScenario}>
            <DeleteIcon />
          </IconButton>
          <IconButton aria-label="run" onClick={handleOpen}>
            <PlayArrow />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
      <Popup onClose={handleClose} open={values.open}>
        <Grid container justify={"center"}>
          <Grid container item xs={6}>
            <TextField
              autoComplete={"off"}
              name={"from"}
              id="standard-number"
              label="step from: "
              type="number"
              InputLabelProps={{
                shrink: true
              }}
              margin="normal"
            />
            <TextField
              autoComplete={"off"}
              name={"to"}
              id="standard-number"
              label="step to: "
              type="number"
              InputLabelProps={{
                shrink: true
              }}
              margin="normal"
            />
            <Button
              fullWidth
              variant={"contained"}
              aria-label="run"
              onClick={handleRunScenario}
            >
              Run scenario
            </Button>
          </Grid>
        </Grid>
      </Popup>
    </Fragment>
  );
};

ScenarioListItem.propTypes = {};

export default ScenarioListItem;
