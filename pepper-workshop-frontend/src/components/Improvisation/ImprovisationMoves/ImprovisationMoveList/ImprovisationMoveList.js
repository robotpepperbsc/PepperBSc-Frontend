import React, { Component, useState, useEffect } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import "./ImprovisationMoveList.scss";
import { List, Button, ListItem, ListItemText } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(theme => ({
  root: {
    width: "80%"
  }
}));

const ImprovisationMoveList = ({ action }) => {
  const [values, setValues] = useState({
    seletectedMove: { name: "test", description: "xddd" },
    moves: [
      { name: "test2", description: "111" },
      { name: "test3", description: "22" },
      { name: "test4", description: "333" },
      { name: "test5", description: "dddd" }
    ]
  });

  useEffect(() => {
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
    //post selectedMove
  };
  const classes = useStyles();
  const moves = values.moves;

  return (
    <div className={"improvisation-move-container"}>
      <div className={"improvisation header"}>Choose move</div>
      <div className={"moves-container"}>
        <List classes={classes}>
          {moves.map(move => {
            const className = classNames("move", {
              selected: move.name === values.seletectedMove.name
            });
            return (
              <ListItem
                button
                className={className}
                onClick={e => selectMove(move)}
              >
                <ListItemText
                  primary={move.name}
                  secondary={move.description}
                />
              </ListItem>
            );
          })}
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
