import React, { Component, useEffect } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import SpeechSlider from "../SpeechSlider/SpeechSlider";
import "./Settings.scss";
import axios from "axios";
import { Grid } from "@material-ui/core";

const Settings = ({ getStatus, battery, isRecording, isQueueEmpty }) => {
  useEffect(() => {
    getStatus();
  }, []);
  return (
    <Grid alignItems={"justify"}>
      <Grid item>battery level - {battery}</Grid>
      <Grid item>isRecording - {isRecording ? `yes` : `no`}</Grid>
      <Grid item>isQueueEmpty - {isQueueEmpty ? `yes` : `no`}</Grid>
    </Grid>
  );
};

export default Settings;
