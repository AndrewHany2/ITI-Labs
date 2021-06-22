import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <Router>
        <Navbar></Navbar>
        <Switch>
          <Route path="/register" component={Register} />
          <Route exact path="/" component={Home} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
