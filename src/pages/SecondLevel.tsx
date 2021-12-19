import React from "react";
import { Switch, Route, useRouteMatch, Link } from "react-router-dom";
import ThirdLevel from "./ThirdLevel";
import Breadcrumb from "components/Breadcrumb";

export default () => {
  const match = useRouteMatch();
  return (
    <section>
      <Breadcrumb>Breadcrumb 2</Breadcrumb>
      <Switch>
        <Route exact path={match.url}>
          <Link to={`/second/third`}>Link to third level</Link>
        </Route>
        <Route exact path={`/second/third`} component={ThirdLevel} />
      </Switch>
    </section>
  );
};
