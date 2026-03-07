import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Landing from "./pages/Landing";
import Login from "./pages/Login";
import OTP from "./pages/OTP";
import Personalize from "./pages/Personalize";
import Home from "./pages/Home";
import Planner from "./pages/Planner";
import Results from "./pages/Results";
import Share from "./pages/Share";
import Profile from "./pages/Profile";
import Explore from "./pages/Explore";
import AIPlanner from "./pages/AIPlanner";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/otp" element={<OTP />} />
        <Route path="/personalize" element={<Personalize />} />
        <Route path="/home" element={<Home />} />
        <Route path="/planner" element={<Planner />} />
        <Route path="/results" element={<Results />} />
        <Route path="/share" element={<Share />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/explore" element={<Explore />} />

      </Routes>
    </Router>
  );
}

export default App;