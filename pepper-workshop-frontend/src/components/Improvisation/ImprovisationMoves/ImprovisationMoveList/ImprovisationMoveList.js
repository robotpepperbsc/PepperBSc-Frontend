import React, { useEffect, useState } from "react";
import classNames from "classnames";
import "./ImprovisationMoveList.scss";
import { Button, List, ListItem, ListItemText } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { getSequences } from "../../../../modules/Sequences/actions";
import { createMoveAction } from "../../pepperActionService";

const useStyles = makeStyles(theme => ({
  root: {
    width: "80%"
  }
}));

const ImprovisationMoveList = ({
  sequences,
  action,
  getSequences,
  postSequence
}) => {
  const [values, setValues] = useState({
    selectedSequence: {}
  });

  useEffect(() => {
    getSequences();
    if (action) {
      setValues({ ...values, seletectedMove: action });
      return;
    }
  }, [action]);
  //fetch moves
  const selectMove = move => {
    setValues({ ...values, seletectedMove: move });
  };

  const handlePostMove = e => {
    e.stopPropagation();
    console.log(values.selectedSequence);
    const sequenceAction = createMoveAction(values.selectedSequence);
    postSequence(sequenceAction);
  };
  const classes = useStyles();

  return (
    <div className={"improvisation-move-container"}>
      <div className={"improvisation header"}>Choose move</div>
      <div className={"moves-container"}>
        <List classes={classes}>
          {sequences
            ? sequences.map(sequence => {
                const className = classNames("move", {
                  selected: sequence.name === values.selectedSequence.name
                });
                return (
                  <ListItem
                    button
                    className={className}
                    onClick={e => selectMove(sequence)}
                  >
                    <ListItemText primary={sequence.name} />
                  </ListItem>
                );
              })
            : null}
        </List>
      </div>
      <Button
        variant="contained"
        className={"improvisation"}
        onClick={handlePostMove}
      >
        Post move
      </Button>
    </div>
  );
};

export default ImprovisationMoveList;
