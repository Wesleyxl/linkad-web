import React from "react";
import { BrowserRouter, Routes as Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import GlobalStyle from "./styles/GlobalStyle";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />

      <Switch>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
