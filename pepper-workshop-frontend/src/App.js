import React from "react";
import "./css/App.sass";
import Header from "./components/Header/Header";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home/Home";
import Settings from "./components/Settings/Settings";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Header />
          <div className="app-body">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/settings" component={Settings} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
