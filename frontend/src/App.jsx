import { BrowserRouter, Routes, Route } from "react-router-dom";

import Landing from "./pages/Landing";
import Login from "./pages/Login";
import OTP from "./pages/OTP";
import Personalize from "./pages/Personalize";

import Home from "./pages/Home";
import Planner from "./pages/Planner";
import AIPlanner from "./pages/AIPlanner";
import Results from "./pages/Results";
import Explore from "./pages/Explore";

import DestinationPage from "./pages/DestinationPage";
import LuxuryTrips from "./pages/LuxuryTrips";
import PackageDetails from "./pages/PackageDetails";
import TravelStories from "./pages/TravelStories";
import TrendPage from "./pages/TrendPage";

import Profile from "./pages/Profile";
import Share from "./pages/Share";

function App() {
return ( <BrowserRouter> <Routes>

```
    {/* AUTH FLOW */}
    <Route path="/" element={<Landing />} />
    <Route path="/login" element={<Login />} />
    <Route path="/otp" element={<OTP />} />
    <Route path="/personalize" element={<Personalize />} />

    {/* MAIN APP */}
    <Route path="/home" element={<Home />} />
    <Route path="/planner" element={<Planner />} />
    <Route path="/ai-planner" element={<AIPlanner />} />
    <Route path="/results" element={<Results />} />
    <Route path="/explore" element={<Explore />} />

    {/* DESTINATION PAGES */}
    <Route path="/destination" element={<DestinationPage />} />
    <Route path="/luxury" element={<LuxuryTrips />} />
    <Route path="/package" element={<PackageDetails />} />
    <Route path="/story" element={<TravelStories />} />
    <Route path="/trend" element={<TrendPage />} />

    {/* USER */}
    <Route path="/profile" element={<Profile />} />
    <Route path="/share" element={<Share />} />

    {/* FALLBACK (important for navigation errors) */}
    <Route path="*" element={<Landing />} />

  </Routes>
</BrowserRouter>

);
}

export default App;
