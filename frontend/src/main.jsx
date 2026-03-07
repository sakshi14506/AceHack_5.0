import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import "leaflet/dist/leaflet.css";

ReactDOM.createRoot(document.getElementById("root")).render(

  <React.StrictMode>

    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">

      <App />

    </div>

  </React.StrictMode>

);