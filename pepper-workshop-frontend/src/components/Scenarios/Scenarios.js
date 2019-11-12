import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import ScenarioList from "./ScenarioList/ScenarioList";
import ScenarioPanel from "./ScenarioPanel/ScenarioPanel";
import ScenarioListContainer from "./ScenarioList/ScenarioListContainer";
import ScenarioPanelContainer from "./ScenarioPanel/ScenarioPanelContainer";
import { Container, Row } from "react-bootstrap";

export default class Scenarios extends Component {
  static propTypes = {
    prop: PropTypes
  };

  render() {
    return (
      <Fragment>
        <Container>
          <Row>
            <ScenarioListContainer />
            <ScenarioPanelContainer />
          </Row>
        </Container>
      </Fragment>
    );
  }
}
