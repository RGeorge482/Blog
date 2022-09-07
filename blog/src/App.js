import TopBar from "./components/topbar/TopBar";
import Home from "./pages/home/Home";
import Register from "./pages/register/Register";
import { BrowserRouter as Router, Routes, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <TopBar/>
      <Switch>
      <Route exact path="/">
          <Home />
        </Route>
      <Route path="/posts">
          <Home />
        </Route>
      <Route path="/register">
          {currentUser ? <Home /> : <Register />}
        </Route>  
      </Switch>
    </Router>
  );
}

export default App;
