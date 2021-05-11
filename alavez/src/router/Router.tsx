import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import { Login, Main, MyPage, SignUp } from "../components/index";

const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Main} exact />
          <Route path="/login" component={Login} exact />
          <Route path="/sign-up" component={SignUp} exact />
          <Route path="/my-page" component={MyPage} exact />
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default Router;
