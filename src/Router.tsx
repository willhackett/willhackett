import React from "react";
import { Route } from "react-router-dom";

import AsyncComponent from "./components/AsyncComponent";

const Home = AsyncComponent(() => import("./pages/Home"));

const Router = () => {
  <>
    <Route exact path="/" component={Home} />
  </>;
};

export default Router;
