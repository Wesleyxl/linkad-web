import React from "react";
import { BrowserRouter, Routes as Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { PrivateRoute, UnPrivateRoute } from "./services/RoutesMiddleware";
import GlobalStyle from "./styles/GlobalStyle";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />

      <Switch>
        <Route path="/" element={<PrivateRoute />}>
          <Route path="/" element={<Home />} />
        </Route>
        <Route path="/" element={<UnPrivateRoute />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
