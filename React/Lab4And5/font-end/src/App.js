import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Register from "./pages/Register";
import MyNavbar from "./components/Navbar";
import UserDetails from "./pages/UserDetails";
import EditUser from "./pages/EditUser";

function App() {
  return (
    <div>
      <Router>
        <MyNavbar></MyNavbar>
        <Switch>
          <Route path="/register" component={Register} />
          <Route path="/profile/:id" component={UserDetails} />
          <Route path="/edit/:id" component={EditUser} />
          <Route exact path="/" component={Home} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
