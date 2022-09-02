import TopBar from "./components/topbar/TopBar";
import { BrowserRouter as Router, Routes, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <TopBar/>
    </Router>
  );
}

export default App;
