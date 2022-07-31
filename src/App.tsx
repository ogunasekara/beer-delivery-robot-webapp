import {
  BrowserRouter as Router,
  Navigate,
  Routes,
  Route,
} from "react-router-dom";
import './App.css';

import NavBar from './components/NavBar';

import { ConnectPage } from './components/ConnectPage';
import { DeliverPage } from "./components/DeliverPage";
import { WaypointsPage } from "./components/WaypointsPage";
import { StatePage } from "./components/StatePage";

const pathRoot = "/beer-delivery-robot-webapp/";

function constructPath(path: string) {
  return pathRoot + path;
}

function App() {
  return <Router>
    <NavBar />
    <Routes>
      <Route path={constructPath("connect")} element={<ConnectPage />}/>
      <Route path={constructPath("deliver")} element={<DeliverPage />}/>
      <Route path={constructPath("waypoints")} element={<WaypointsPage />}/>
      <Route path={constructPath("state")} element={<StatePage />}/>
      <Route path={constructPath("*")} element={<Navigate to={constructPath("connect")} />}/>
    </Routes>
  </Router>;
}

export default App;
