import "./App.css";
import React from "react";
import PlantSearchPage from "./components/PlantSearchPage";
import HomePage from "./components/HomePage";
import Menu from "./components/Menu";
import MailingListPage from "./components/MailingListPage";
import WhyGrowNativePage from "./components/WhyGrowNativePage";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Menu />
        <Routes>
          <Route path="/home" element={<HomePage />} />
          <Route path="/why" element={<WhyGrowNativePage />} />
          <Route path="/search" element={<PlantSearchPage />} />
          <Route path="/mailinglist" element={<MailingListPage />} />
          <Route path="*" element={<Navigate to="/home" />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
