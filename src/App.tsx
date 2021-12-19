import "./App.css";
import React from "react";
import { Switch, Route } from "react-router-dom";
import SecondLevel from "pages/SecondLevel";
import FirstLevel from "pages/FirstLevel";
import BreadcrumbOutlet from "components/BreadcrumbOutlet";
import Breadcrumb from "components/Breadcrumb";

function App() {
  return (
    <div>
      <BreadcrumbOutlet />
      <Breadcrumb>Breadcrumb 1</Breadcrumb>
      <Switch>
        <Route path="/second" component={SecondLevel} />
        <Route path="/" component={FirstLevel} />
      </Switch>
    </div>
  );
}

export default App;
