import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Pages/Home";
import StudentDetails from "./Pages/StudentDetails";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/artists/:id" component={StudentDetails}></Route>
        <Route path="/" component={Home}></Route>
      </Switch>
    </Router>
  );
}

export default App;
