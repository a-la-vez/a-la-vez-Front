import { Switch, Route, BrowserRouter } from "react-router-dom";
import {
  Header,
  Login,
  MyPage,
  SignUp,
  GroupSearch,
  GroupDetail,
  PostMake,
  ApplyList,
  PostModify,
} from "../components/index";

const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/login" component={Login} exact />
          <Route path="/sign-up" component={SignUp} exact />
          <Route path="/my-page" component={MyPage} exact />
          <Route path="/" component={GroupSearch} exact />
          <Route path="/group-detail/:id" component={GroupDetail} exact />
          <Route path="/post" component={PostMake} exact />
          <Route path="/post/modify" component={PostModify} exact />
          <Route path="/apply-list" component={ApplyList} exact />
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default Router;
