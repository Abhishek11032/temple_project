import { Routes, Route } from "react-router-dom";

import Home from "../site-pages/Home";
import ExploreJourney from "../site-pages/ExploreJourney";
import AboutPage from "../site-pages/AboutPage";
import Gallery from "../site-pages/Gallery";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
       <Route path="/home/journey" element={<ExploreJourney />} />
       <Route path="/about" element={<AboutPage />} />

        <Route path="/gallery" element={<Gallery />} />
        <Route path="/gallery/:event" element={<Gallery />} />
        <Route
          path="/home/journey"
          element={<ExploreJourney />}
        />
    </Routes>
  );
}
