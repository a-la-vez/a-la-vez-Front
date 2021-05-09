import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import { Login, Main } from "../components/index";

const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Main} exact />
          <Route path="/login" component={Login} exact />
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default Router;
