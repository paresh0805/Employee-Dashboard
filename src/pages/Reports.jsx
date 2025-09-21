import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Reports = () => {
  const navigate = useNavigate();
  const [status, setStatus] = useState("All");
  const [priority, setPriority] = useState("All");
  const [department, setDepartment] = useState("All");

  const handleQuickFilter = (type) => {
    alert(`Filtering by ${type}`);
  };

  // Added more report entries
  const reportsData = [
    { report: "Large pothole on Main Street", location: "123 Main Street", status: "In-Progress", priority: "High", department: "Public Works", assigned: "Mike Johnson", date: "1/20/2025" },
    { report: "Streetlight not working", location: "45 Elm Avenue", status: "Pending", priority: "Medium", department: "Electrical Services", assigned: "Sarah Lee", date: "1/19/2025" },
    { report: "Overflowing trash bin", location: "78 Pine Road", status: "Resolved", priority: "Low", department: "Sanitation", assigned: "John Doe", date: "1/18/2025" },
    { report: "Graffiti on building wall", location: "12 Maple Street", status: "Pending", priority: "Urgent", department: "Maintenance", assigned: "Emily Clark", date: "1/20/2025" },
    { report: "Illegal parking blocking fire hydrant", location: "56 Oak Lane", status: "In-Progress", priority: "High", department: "Parking Enforcement", assigned: "Robert Smith", date: "1/20/2025" },
    { report: "Broken park bench", location: "Central Park", status: "Resolved", priority: "Low", department: "Public Works", assigned: "Mike Johnson", date: "1/17/2025" },
    { report: "Leaking water pipe", location: "22 River Street", status: "In-Progress", priority: "Urgent", department: "Utilities", assigned: "Sarah Lee", date: "1/21/2025" },
    { report: "Overgrown tree blocking sidewalk", location: "34 Oak Avenue", status: "Pending", priority: "Medium", department: "Public Works", assigned: "John Doe", date: "1/19/2025" },
    { report: "Street sign missing", location: "88 Cedar Road", status: "Resolved", priority: "Low", department: "Maintenance", assigned: "Emily Clark", date: "1/16/2025" },
    { report: "Blocked storm drain", location: "102 Birch Street", status: "In-Progress", priority: "High", department: "Sanitation", assigned: "Robert Smith", date: "1/20/2025" },
  ];

  return (
    <div className="flex min-h-screen bg-gray-50">
      <div className="flex-1 p-6">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-bold">All Reports</h1>
          <button
            className="px-4 py-2 bg-blue-600 text-white rounded"
            onClick={() => navigate("/reports")}
          >
            View All
          </button>
        </div>

        {/* Quick Filters */}
        <div className="flex space-x-2 mb-4">
          {["Potholes", "StreetLights", "Trash", "Graffiti", "Parking"].map((item) => (
            <button
              key={item}
              className="px-3 py-1 bg-gray-200 hover:bg-gray-300 rounded"
              onClick={() => handleQuickFilter(item)}
            >
              {item}
            </button>
          ))}
        </div>

        {/* Dropdown Filters */}
        <div className="flex space-x-4 mb-4">
          <select value={status} onChange={(e) => setStatus(e.target.value)} className="border rounded px-2 py-1">
            <option>All Status</option>
            <option>Pending</option>
            <option>In-Progress</option>
            <option>Resolved</option>
          </select>

          <select value={priority} onChange={(e) => setPriority(e.target.value)} className="border rounded px-2 py-1">
            <option>All Priority</option>
            <option>Low</option>
            <option>Medium</option>
            <option>High</option>
            <option>Urgent</option>
          </select>

          <select value={department} onChange={(e) => setDepartment(e.target.value)} className="border rounded px-2 py-1">
            <option>All Departments</option>
            <option>Public Works</option>
            <option>Sanitation</option>
            <option>Maintenance</option>
            <option>Parking Enforcement</option>
            <option>Electrical Services</option>
            <option>Utilities</option>
          </select>
        </div>

        {/* Reports Table */}
        <div className="bg-white shadow rounded p-4 overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="text-left border-b">
                <th className="p-2">Report</th>
                <th className="p-2">Location</th>
                <th className="p-2">Status</th>
                <th className="p-2">Priority</th>
                <th className="p-2">Department</th>
                <th className="p-2">Assigned To</th>
                <th className="p-2">Date</th>
              </tr>
            </thead>
            <tbody>
              {reportsData.map((r, index) => (
                <tr key={index} className="border-b">
                  <td className="p-2">{r.report}</td>
                  <td className="p-2">{r.location}</td>
                  <td className="p-2">{r.status}</td>
                  <td className="p-2">{r.priority}</td>
                  <td className="p-2">{r.department}</td>
                  <td className="p-2">{r.assigned}</td>
                  <td className="p-2">{r.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Reports;
