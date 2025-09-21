import React, { useState } from "react";
import { Bell, Search, Filter, Download } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Overview = () => {
  const navigate = useNavigate();
  const [showFilters, setShowFilters] = useState(false);

  // Dummy data
  const summaryData = [
    { title: "Total Reports", value: 247, subtitle: "+12% from last month" },
    { title: "Pending", value: 24, subtitle: "Awaiting assignment" },
    { title: "In Progress", value: 18, subtitle: "Being worked on" },
    { title: "Resolved", value: 205, subtitle: "Avg: 2.3 days" },
  ];

  const reports = [
    { id: 1, title: "Large pothole on Main Street", dept: "Public Works", date: "1/20/2025", priority: "high", status: "in-progress" },
    { id: 2, title: "Streetlight not working", dept: "Electrical Services", date: "1/20/2025", priority: "medium", status: "pending" },
    { id: 3, title: "Overflowing trash bin", dept: "Sanitation", date: "1/18/2025", priority: "low", status: "resolved" },
    { id: 4, title: "Graffiti on building wall", dept: "Maintenance", date: "1/20/2025", priority: "urgent", status: "pending" },
    { id: 5, title: "Illegal parking blocking fire hydrant", dept: "Parking Enforcement", date: "1/20/2025", priority: "high", status: "in-progress" },
  ];

  const workload = [
    { dept: "Public Works", count: 89 },
    { dept: "Sanitation", count: 67 },
    { dept: "Electrical Services", count: 45 },
    { dept: "Maintenance", count: 32 },
    { dept: "Parking Enforcement", count: 14 },
  ];

  const issueCategories = [
    { label: "Potholes", count: 78, change: "+5%" },
    { label: "Streetlights", count: 45, change: "-2%" },
    { label: "Trash", count: 67, change: "+12%" },
    { label: "Graffiti", count: 23, change: "-8%" },
    { label: "Parking", count: 34, change: "+3%" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Topbar */}
      <div className="flex items-center justify-between mb-6 relative">
        <div className="flex items-center gap-2 bg-white px-3 py-2 rounded-md border">
          <Search size={18} />
          <input
            type="text"
            placeholder="Search reports..."
            className="outline-none text-sm w-64"
          />
        </div>
        <div className="flex items-center gap-3">
          {/* Filter Dropdown */}
          <div className="relative">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center gap-1 border px-3 py-1 rounded-md text-sm"
            >
              <Filter size={16} /> Filters
            </button>
            {showFilters && (
              <div className="absolute right-0 mt-2 w-40 bg-white border rounded-md shadow-md">
                <button
                  onClick={() => navigate("/reports?priority=high")}
                  className="block w-full text-left px-3 py-2 hover:bg-gray-100"
                >
                  High Priority
                </button>
                <button
                  onClick={() => navigate("/reports?status=pending")}
                  className="block w-full text-left px-3 py-2 hover:bg-gray-100"
                >
                  Pending
                </button>
                <button
                  onClick={() => navigate("/reports?status=resolved")}
                  className="block w-full text-left px-3 py-2 hover:bg-gray-100"
                >
                  Resolved
                </button>
              </div>
            )}
          </div>

          <button className="flex items-center gap-1 border px-3 py-1 rounded-md text-sm">
            <Download size={16} /> Export
          </button>
          <button className="relative">
            <Bell size={20} />
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs px-1 rounded-full">9+</span>
          </button>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-4 gap-4 mb-6">
        {summaryData.map((item, i) => (
          <div key={i} className="bg-white p-4 rounded-md shadow-sm border">
            <h3 className="text-gray-500 text-sm">{item.title}</h3>
            <p className="text-2xl font-bold">{item.value}</p>
            <p className="text-xs text-gray-500">{item.subtitle}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-3 gap-6">
        {/* Recent Reports */}
        <div className="col-span-2 bg-white p-4 rounded-md shadow-sm border">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-semibold">Recent Reports</h3>
            <button
              onClick={() => navigate("/reports")}
              className="px-3 py-1 text-sm bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
            >
              View All
            </button>
          </div>
          <div className="space-y-3">
            {reports.map((r) => (
              <div key={r.id} className="p-3 border rounded-md flex justify-between items-center">
                <div>
                  <p className="font-medium">
                    {r.title}{" "}
                    <span className="ml-2 text-xs uppercase px-2 py-0.5 rounded bg-gray-100">
                      {r.priority}
                    </span>
                  </p>
                  <p className="text-xs text-gray-500">
                    {r.dept} • {r.date}
                  </p>
                </div>
                <span
                  className={`text-xs px-2 py-1 rounded ${
                    r.status === "in-progress"
                      ? "bg-blue-100 text-blue-600"
                      : r.status === "pending"
                      ? "bg-yellow-100 text-yellow-600"
                      : r.status === "resolved"
                      ? "bg-green-100 text-green-600"
                      : "bg-gray-100"
                  }`}
                >
                  {r.status}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Workload */}
        <div className="bg-white p-4 rounded-md shadow-sm border">
          <h3 className="font-semibold mb-4">Department Workload</h3>
          <div className="space-y-3">
            {workload.map((w, i) => (
              <div key={i}>
                <div className="flex justify-between text-sm">
                  <span>{w.dept}</span>
                  <span>{w.count}</span>
                </div>
                <div className="w-full bg-gray-100 rounded-full h-2">
                  <div
                    className="bg-blue-500 h-2 rounded-full"
                    style={{ width: `${w.count}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Issue Categories */}
      <div className="grid grid-cols-5 gap-4 mt-6">
        {issueCategories.map((cat, i) => (
          <button
            key={i}
            onClick={() => navigate(`/reports?category=${cat.label.toLowerCase()}`)}
            className="bg-white p-4 rounded-md shadow-sm border text-center hover:bg-gray-50"
          >
            <p className="text-2xl font-bold">{cat.count}</p>
            <p className="text-sm text-gray-500">{cat.label}</p>
            <p
              className={`text-xs ${
                cat.change.startsWith("+") ? "text-green-600" : "text-red-600"
              }`}
            >
              {cat.change}
            </p>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Overview;
