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
import RecordingsContainer from "./components/Recordings/RecordingsContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import SettingsContainer from "./components/Settings/SettingsContainer";

const store = configureStore();

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Router>
            <HeaderContainer />
            <div className="app-body">
              <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/settings" component={SettingsContainer} />
                <Route path="/improvisation" component={Improvisation} />
                <Route path="/scenarios" component={ScenariosContainer} />
                <Route path="/media" component={MediaContainer} />
                <Route path="/recordings" component={RecordingsContainer} />
              </Switch>
            </div>
          </Router>
        </div>
      </Provider>
    );
  }
}

export default App;
