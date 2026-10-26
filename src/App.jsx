import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import SearchResults from "./pages/SearchResults";
import BoardingDetails from "./pages/BoardingDetails";
import MapPage from "./pages/MapPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<SearchResults />} />
        <Route path="/details" element={<BoardingDetails />} />
        <Route path="/map" element={<MapPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;