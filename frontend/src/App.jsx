import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Planner from "./pages/Planner";
import AIPlanner from "./pages/AIPlanner";
import Results from "./pages/Results";

function App() {
  return (
    <Router>
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/planner" element={<Planner />} />
        <Route path="/ai-planner" element={<AIPlanner />} />
        <Route path="/results" element={<Results />} />

      </Routes>
    </Router>
  );
}

export default App;