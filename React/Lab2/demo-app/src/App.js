import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import NotFound from "./Pages/NotFound";
import Profile from "./Pages/Profile";

function App() {
  return (
    <div>
      <Router>
        <Navbar></Navbar>
        <Switch>
          <Route path="/students/:id" component={Profile} exact />
          <Route path="/students" component={Profile} />
          <Route path="/" component={Home} exact />
          <Route path="*" component={NotFound} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
