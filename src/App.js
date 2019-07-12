import React, { Fragment, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "materialize-css/dist/css/materialize.min.css";
// eslint-disable-next-line import/extensions
import M from "materialize-css/dist/js/materialize.min.js";
import AppNavBar from "./component/AppNavBar";
import Home from "./component/Home";
import Report from "./component/Report";
import FilterBy from "./component/FilterBy";
import Users from "./component/Users";
import Notfound from "./component/notfound";

const App = () => {
  useEffect(() => {
    // Init Materialize JS
    M.AutoInit();
  });
  return (
    <Fragment>
      <AppNavBar />
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/users" component={Users} />
          {/* <Route exact path="/users/:id" component={Users} /> */}
          <Route exact path="/reports" component={Report} />
          <Route exact path="/filterBy" component={FilterBy} />
          <Route component={Notfound} />
        </Switch>
      </Router>
    </Fragment>
  );
};

export default App;
