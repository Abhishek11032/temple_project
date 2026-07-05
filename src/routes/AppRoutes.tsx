import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import ExploreJourney from "../pages/ExploreJourney";
import AboutPage from "../pages/AboutPage";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
       <Route path="/home/journey" element={<ExploreJourney />} />
       <Route path="/about" element={<AboutPage />} />
    </Routes>
  );
}