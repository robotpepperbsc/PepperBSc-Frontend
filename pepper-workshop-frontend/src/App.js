import React from 'react';
import './css/App.css';
import ConnectionToRobot from './components/ConnectionToRobot'
import Container from "react-bootstrap/Container";

class App extends React.Component{

  render() {
    return (

        <Container className="container-fluid" fluid>
      <ConnectionToRobot />
        </Container>
  )
  }
}

export default App;