import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import {
  Header,
  Login,
  Main,
  MyPage,
  SignUp,
  GroupSearch,
  GroupDetail,
} from "../components/index";

const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/" component={Main} exact />
          <Route path="/login" component={Login} exact />
          <Route path="/sign-up" component={SignUp} exact />
          <Route path="/my-page" component={MyPage} exact />
          <Route path="/group-search" component={GroupSearch} exact />
          <Route path="/group-detail/:id" component={GroupDetail} exact />
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default Router;
