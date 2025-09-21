import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  Home,
  FileText,
  MapPin,
  BarChart2,
  Users,
  Settings,
  Menu,
} from "lucide-react";

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isCollapsed, setIsCollapsed] = useState(false);

  const navItems = [
    { label: "Overview", path: "/overview", icon: <Home size={18} /> },
    { label: "Reports", path: "/reports", icon: <FileText size={18} /> },
    { label: "Map View", path: "/map-view", icon: <MapPin size={18} /> },
    { label: "Analytics", path: "/analytics", icon: <BarChart2 size={18} /> },
    { label: "Users", path: "/users", icon: <Users size={18} /> },
    { label: "Settings", path: "/settings", icon: <Settings size={18} /> },
  ];

  return (
    <aside
      className={`bg-white border-r h-screen flex flex-col ${
        isCollapsed ? "w-20" : "w-64"
      } transition-width duration-300`}
    >
      {/* Top: Logo + Brand + Collapse button */}
      <div className="flex items-center justify-between p-4 border-b">
        <div
          className="flex items-center cursor-pointer"
          onClick={() => navigate("/overview")}
        >
          {/* Logo */}
          <img
            src="/assets/homelogo.png" // Replace with your logo path
            alt="Logo"
            className={`transition-all duration-300 ${
              isCollapsed ? "w-5 h-5" : "w-12 h-12 mr-2"
            }`}
          />
          {/* Brand name (hidden when collapsed) */}
          {!isCollapsed && <h1 className="text-lg font-bold">City Sync Admin</h1>}
        </div>

        {/* Collapse button */}
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="p-1 rounded hover:bg-gray-200"
        >
          <Menu size={20} />
        </button>
      </div>

      {/* Scrollable Menu */}
      <div className="flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200">
        <nav className="flex flex-col mt-4">
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => navigate(item.path)}
              className={`flex items-center gap-3 px-4 py-3 rounded-md hover:bg-gray-100 transition-colors font-medium w-full ${
                location.pathname === item.path ||
                (item.path === "/overview" && location.pathname === "/")
                  ? "bg-blue-100 text-blue-600"
                  : "text-gray-700"
              }`}
            >
              {item.icon}
              {!isCollapsed && <span>{item.label}</span>}
            </button>
          ))}
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
