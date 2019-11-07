import React from "react";
import Header from "./components/Header/Header";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home/Home";
import Settings from "./components/Settings/Settings";
import Improvisation from "./components/Improvisation/Improvisation";
import { Provider } from "react-redux";
import configureStore from "./modules/configureStore";
import MediaContainer from "./components/ Media/MediaContainer";
import ScenariosContainer from "./components/Scenarios/ScenariosContainer";

const store = configureStore();

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Router>
            <Header />
            <div className="app-body">
              <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/settings" component={Settings} />
                <Route path="/improvisation" component={Improvisation} />
                <Route path="/scenarios" component={ScenariosContainer} />
                <Route path="/media" component={MediaContainer} />
              </Switch>
            </div>
          </Router>
        </div>
      </Provider>
    );
  }
}

export default App;
