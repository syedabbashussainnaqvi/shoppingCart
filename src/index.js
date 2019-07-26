import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import CheckOut from "./components/Check-out/CheckOut";
import { BrowserRouter, Route } from "react-router-dom";
import Test from "./components/Semantic/Test.js";

const Root = () => {
  return (
    <BrowserRouter>
      <Route exact path="/" component={App} />
      {/*<Route
        path="/HomePage/:orders"
        render={props => <CheckOut {...props} />}
      />*/}
      <Route
        path="/homePage" component={Test}/>
    </BrowserRouter>
  );
};

ReactDOM.render(<Root />, document.getElementById("root"));
