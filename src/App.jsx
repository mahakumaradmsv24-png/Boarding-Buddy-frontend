import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import SearchResults from "./pages/SearchResults";
import BoardingDetails from "./pages/BoardingDetails";
import MapPage from "./pages/MapPage";
import OwnerDashboard from "./pages/OwnerDashboard";
import AddBoarding from "./pages/AddBoarding";
import ComparePage from "./pages/ComparePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Dashboard />} />

        <Route path="/home" element={<Home />} />

        <Route path="/search" element={<SearchResults />} />

        <Route path="/details" element={<BoardingDetails />} />

        <Route path="/map" element={<MapPage />} />

        <Route path="/owner" element={<OwnerDashboard />} />

        <Route path="/add" element={<AddBoarding />} />

        <Route path="/compare" element={<ComparePage />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;