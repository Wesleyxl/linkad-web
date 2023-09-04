import React from "react";
import { Routes as Switch, Route, useLocation } from "react-router-dom";

import Header from "./layout/Header";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { PrivateRoute, UnPrivateRoute } from "./services/RoutesMiddleware";
import GlobalStyle from "./styles/GlobalStyle";

const excludedUrls = ["login", "register"];

const App: React.FC = () => {
  const currentLocation = useLocation();
  const shouldRenderHeaderAndFooter = !excludedUrls.includes(
    currentLocation.pathname.split("/")[1]
  );
  return (
    <>
      <GlobalStyle />
      {shouldRenderHeaderAndFooter && <Header />}
      <Switch>
        <Route path="/" element={<PrivateRoute />}>
          <Route path="/" element={<Home />} />
        </Route>

        <Route path="/" element={<UnPrivateRoute />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>
      </Switch>
    </>
  );
};

export default App;
