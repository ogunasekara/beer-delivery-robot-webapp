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

function App() {
  return <Router>
    <NavBar />
    <Routes>
      <Route path="/connect" element={<ConnectPage />}/>
      <Route path="/deliver" element={<DeliverPage />}/>
      <Route path="/waypoints" element={<WaypointsPage />}/>
      <Route path="/state" element={<StatePage />}/>
      <Route path="*" element={<Navigate to="/connect" />}/>
    </Routes>
  </Router>;
}

export default App;
