import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Reports from "./pages/Reports";
import MapView from "./pages/MapView";
import Analytics from "./pages/Analytics";
import Users from "./pages/Users";
import Settings from "./pages/Settings";
import Overview from "./pages/Overview";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ReportDetails from "./pages/ReportDetails";

// Layout wrapper
const AppLayout = ({ children }) => {
  const location = useLocation();
  // Only show sidebar if not on login or signup pages
  const showSidebar = location.pathname !== "/" && location.pathname !== "/signup";

  return (
    <div className={`flex min-h-screen ${!showSidebar ? "bg-gray-100" : ""}`}>
      {showSidebar && <Sidebar />}
      <div className="flex-1">
        {children}
      </div>
    </div>
  );
};

function App() {
  return (
    <Router>
      <AppLayout>
        <Routes>
          {/* Login and Signup */}
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />

          {/* Protected Pages */}
          <Route path="/overview" element={<Overview />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/report-details" element={<ReportDetails />} />
          <Route path="/map-view" element={<MapView />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/users" element={<Users />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </AppLayout>
    </Router>
  );
}

export default App;
