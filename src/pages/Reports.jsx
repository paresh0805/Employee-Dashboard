// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { motion, AnimatePresence } from "framer-motion";
// import { MapPin, Calendar, Users, Clipboard, DollarSign, Edit2, CheckCircle } from "lucide-react";

// const Reports = () => {
//   const navigate = useNavigate();
//   const [status, setStatus] = useState("All");
//   const [priority, setPriority] = useState("All");
//   const [department, setDepartment] = useState("All");
//   const [selectedReport, setSelectedReport] = useState(null);
//   const [internalNotes, setInternalNotes] = useState("");

//   const handleQuickFilter = (type) => alert(`Filtering by ${type}`);

//   const reportsData = [
//     {
//       report: "Large pothole on Main Street",
//       location: "123 Main Street",
//       status: "In-Progress",
//       priority: "High",
//       department: "Public Works",
//       assigned: "Mike Johnson",
//       date: "1/20/2025",
//       issue: "Road damaged, dangerous for vehicles",
//       shortInfo: "Pothole causing traffic slowdown",
//       reporter: "Alice Smith",
//       photo: "/assets/2.jpeg",
//       estimatedResolution: "3 days",
//       updatedStatus: "Repair crew notified",
//       estimatedCost: "$500",
//       internalNotes: "Urgent repair required",
//     },
//     {
//       report: "Streetlight not working",
//       location: "45 Elm Avenue",
//       status: "Pending",
//       priority: "Medium",
//       department: "Electrical Services",
//       assigned: "Sarah Lee",
//       date: "1/19/2025",
//       issue: "Streetlight completely out",
//       shortInfo: "Dark street at night",
//       reporter: "Bob Williams",
//       photo: "/assets/3.jpg",
//       estimatedResolution: "2 days",
//       updatedStatus: "Awaiting electrician",
//       estimatedCost: "$200",
//       internalNotes: "Check wiring and fuse",
//     },
//     {
//       report: "Overflowing trash bin",
//       location: "78 Pine Road",
//       status: "Resolved",
//       priority: "Low",
//       department: "Sanitation",
//       assigned: "John Doe",
//       date: "1/18/2025",
//       issue: "Trash not collected on time",
//       shortInfo: "Garbage spreading in the area",
//       reporter: "Clara Johnson",
//       photo: "/assets/trash.jpg",
//       estimatedResolution: "Completed",
//       updatedStatus: "Collected and cleaned",
//       estimatedCost: "$50",
//       internalNotes: "Ensure regular pickup schedule",
//     },
//     {
//       report: "Graffiti on building wall",
//       location: "12 Maple Street",
//       status: "Pending",
//       priority: "Urgent",
//       department: "Maintenance",
//       assigned: "Emily Clark",
//       date: "1/20/2025",
//       issue: "Unauthorized graffiti on public wall",
//       shortInfo: "Vandalism in public area",
//       reporter: "Daniel Brown",
//       photo: "/assets/graffiti.jpg",
//       estimatedResolution: "5 days",
//       updatedStatus: "Cleaning team not assigned",
//       estimatedCost: "$150",
//       internalNotes: "Monitor area for repeated incidents",
//     },
//   ];

//   const openReport = (report) => {
//     setSelectedReport(report);
//     setInternalNotes(report.internalNotes || "");
//   };

//   const handleSaveNotes = () => {
//     alert(`Internal notes saved:\n${internalNotes}`);
//     setSelectedReport({ ...selectedReport, internalNotes });
//   };

//   return (
//     <div className="flex min-h-screen bg-gray-50 relative">
//       <div className="flex-1 p-6">
//         {/* Header */}
//         <div className="flex justify-between items-center mb-4">
//           <h1 className="text-2xl font-bold">All Reports</h1>
//           <button
//             className="px-4 py-2 bg-blue-600 text-white rounded"
//             onClick={() => navigate("/reports")}
//           >
//             View All
//           </button>
//         </div>

//         {/* Quick Filters */}
//         <div className="flex space-x-2 mb-4">
//           {["Potholes", "StreetLights", "Trash", "Graffiti", "Parking"].map(
//             (item) => (
//               <button
//                 key={item}
//                 className="px-3 py-1 bg-gray-200 hover:bg-gray-300 rounded"
//                 onClick={() => handleQuickFilter(item)}
//               >
//                 {item}
//               </button>
//             )
//           )}
//         </div>

//         {/* Dropdown Filters */}
//         <div className="flex space-x-4 mb-4">
//           <select
//             value={status}
//             onChange={(e) => setStatus(e.target.value)}
//             className="border rounded px-2 py-1"
//           >
//             <option>All Status</option>
//             <option>Pending</option>
//             <option>In-Progress</option>
//             <option>Resolved</option>
//           </select>

//           <select
//             value={priority}
//             onChange={(e) => setPriority(e.target.value)}
//             className="border rounded px-2 py-1"
//           >
//             <option>All Priority</option>
//             <option>Low</option>
//             <option>Medium</option>
//             <option>High</option>
//             <option>Urgent</option>
//           </select>

//           <select
//             value={department}
//             onChange={(e) => setDepartment(e.target.value)}
//             className="border rounded px-2 py-1"
//           >
//             <option>All Departments</option>
//             <option>Public Works</option>
//             <option>Sanitation</option>
//             <option>Maintenance</option>
//             <option>Parking Enforcement</option>
//             <option>Electrical Services</option>
//             <option>Utilities</option>
//           </select>
//         </div>

//         {/* Reports Table */}
//         <div className="bg-white shadow rounded p-4 overflow-x-auto relative z-10">
//           <table className="w-full">
//             <thead>
//               <tr className="text-left border-b">
//                 <th className="p-2">Report</th>
//                 <th className="p-2">Location</th>
//                 <th className="p-2">Status</th>
//                 <th className="p-2">Priority</th>
//                 <th className="p-2">Department</th>
//                 <th className="p-2">Assigned To</th>
//                 <th className="p-2">Date</th>
//               </tr>
//             </thead>
//             <tbody>
//               {reportsData.map((r, index) => (
//                 <tr
//                   key={index}
//                   className="border-b cursor-pointer hover:bg-gray-100"
//                   onClick={() => openReport(r)}
//                 >
//                   <td className="p-2">{r.report}</td>
//                   <td className="p-2">{r.location}</td>
//                   <td className="p-2">{r.status}</td>
//                   <td className="p-2">{r.priority}</td>
//                   <td className="p-2">{r.department}</td>
//                   <td className="p-2">{r.assigned}</td>
//                   <td className="p-2">{r.date}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>

//       {/* Floating Card with Icons */}
//       <AnimatePresence>
//         {selectedReport && (
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: 20 }}
//             transition={{ duration: 0.3 }}
//             className="absolute top-20 right-10 bg-white shadow-xl rounded-lg p-6 w-full max-w-lg z-20"
//           >
//             <button
//               className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 font-bold"
//               onClick={() => setSelectedReport(null)}
//             >
//               ✕
//             </button>

//             {/* Section 1: Issue Details */}
//             <h2 className="text-xl font-bold mb-2 flex items-center">
//               <Clipboard className="mr-2" /> {selectedReport.report}
//             </h2>
//             <p className="text-gray-600 mb-4">{selectedReport.shortInfo}</p>
//             <div className="mb-4 border-b pb-2">
//               <h3 className="font-semibold mb-1 flex items-center">
//                 <CheckCircle className="mr-2" /> Issue Details
//               </h3>
//               <p>
//                 <span className="font-semibold">Issue:</span> {selectedReport.issue}
//               </p>
//               <p>
//                 <span className="font-semibold">Progress:</span> {selectedReport.status}
//               </p>
//               <p>
//                 <span className="font-semibold">Priority:</span> {selectedReport.priority}
//               </p>
//               <p className="flex items-center">
//                 <MapPin className="mr-1" /> {selectedReport.location}
//               </p>
//               <p>
//                 <span className="font-semibold">Reported by:</span> {selectedReport.reporter}
//               </p>
//               <p className="flex items-center">
//                 <Calendar className="mr-1" /> {selectedReport.date}
//               </p>
//               {selectedReport.photo && (
//                 <img
//                   src={selectedReport.photo}
//                   alt="Evidence"
//                   className="w-full rounded mt-2"
//                 />
//               )}
//             </div>

//             {/* Section 2: Assignment Details */}
//             <div className="mb-4 border-b pb-2">
//               <h3 className="font-semibold mb-1 flex items-center">
//                 <Users className="mr-2" /> Assignment Details
//               </h3>
//               <p>
//                 <span className="font-semibold">Department:</span> {selectedReport.department}
//               </p>
//               <p>
//                 <span className="font-semibold">Assigned to:</span> {selectedReport.assigned}
//               </p>
//               <p>
//                 <span className="font-semibold">Estimated resolution:</span> {selectedReport.estimatedResolution}
//               </p>
//             </div>

//             {/* Section 3: Status & Cost */}
//             <div className="mb-4 border-b pb-2">
//               <h3 className="font-semibold mb-1 flex items-center">
//                 <DollarSign className="mr-2" /> Status & Cost
//               </h3>
//               <p>
//                 <span className="font-semibold">Updated status:</span> {selectedReport.updatedStatus}
//               </p>
//               <p>
//                 <span className="font-semibold">Estimated cost:</span> {selectedReport.estimatedCost}
//               </p>
//             </div>

//             {/* Section 4: Internal Notes */}
//             <div className="mb-4">
//               <h3 className="font-semibold mb-1 flex items-center">
//                 <Edit2 className="mr-2" /> Internal Notes
//               </h3>
//               <textarea
//                 className="w-full border rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
//                 rows={4}
//                 value={internalNotes}
//                 onChange={(e) => setInternalNotes(e.target.value)}
//                 placeholder="Add or update internal notes..."
//               />
//             </div>

//             {/* Actions */}
//             <div className="flex justify-end mt-4 space-x-2">
//               <button
//                 onClick={() => navigate("/report-details", { state: { report: selectedReport } })}
//                 className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 flex items-center"
//               >
//                 <CheckCircle className="mr-2" /> Update Report
//               </button>
//               <button className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 flex items-center">
//                 <Users className="mr-2" /> Contact Reporter
//               </button>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// };

// export default Reports;
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  MapPin,
  Calendar,
  Users,
  Clipboard,
  DollarSign,
  Edit2,
  CheckCircle,
} from "lucide-react";

const Reports = () => {
  const navigate = useNavigate();

  const [category, setReports] = useState([]);
  const [loading, setLoading] = useState(true);
  const [status, setStatus] = useState("All");
  const [priority, setPriority] = useState("All");
  const [department, setDepartment] = useState("All");
  const [selectedReport, setSelectedReport] = useState(null);
  const [internalNotes, setInternalNotes] = useState("");

  useEffect(() => {
    const fetchReports = async () => {
      try {
        const res = await axios.get("https://backendnewserver-production.up.railway.app/issues", {
          withCredentials: true,
        });
        console.log(res);
        setReports(res.data);
      } catch (error) {
        console.error("Failed to fetch reports", error);
      } finally {
        setLoading(false);
      }
    };

    fetchReports();
  }, []);

  const openReport = (report) => {
    setSelectedReport(report);
    setInternalNotes(report.internalNotes || "");
  };

  const handleSaveNotes = async () => {
    try {
      await axios.put(
        `https://backendnewserver-production.up.railway.app/issues/${selectedReport._id}`,
        { internalNotes },
        { withCredentials: true }
      );
      setSelectedReport({ ...selectedReport, internalNotes });
      alert("Notes updated!");
    } catch (err) {
      console.error("Failed to update notes", err);
    }
  };

  const handleQuickFilter = (type) => {
    alert(`Filtering by ${type}`);
  };

  const filteredReports = reports.filter((r) => {
    const statusMatch = status === "All" || r.status === status;
    const priorityMatch = priority === "All" || r.priority === priority;
    const departmentMatch = department === "All" || r.department === department;
    return statusMatch && priorityMatch && departmentMatch;
  });

  return (
    <div className="flex min-h-screen bg-gray-50 relative">
      <div className="flex-1 p-6">
        {/* Header */}
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
          {["Potholes", "StreetLights", "Trash", "Graffiti", "Parking"].map(
            (item) => (
              <button
                key={item}
                className="px-3 py-1 bg-gray-200 hover:bg-gray-300 rounded"
                onClick={() => handleQuickFilter(item)}
              >
                {item}
              </button>
            )
          )}
        </div>

        {/* Dropdown Filters */}
        <div className="flex space-x-4 mb-4">
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="border rounded px-2 py-1"
          >
            <option>All</option>
            <option>Pending</option>
            <option>In-Progress</option>
            <option>Resolved</option>
          </select>

          <select
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
            className="border rounded px-2 py-1"
          >
            <option>All</option>
            <option>Low</option>
            <option>Medium</option>
            <option>High</option>
            <option>Urgent</option>
          </select>

          <select
            value={department}
            onChange={(e) => setDepartment(e.target.value)}
            className="border rounded px-2 py-1"
          >
            <option>All</option>
            <option>Public Works</option>
            <option>Sanitation</option>
            <option>Maintenance</option>
            <option>Parking Enforcement</option>
            <option>Electrical Services</option>
            <option>Utilities</option>
          </select>
        </div>

        {/* Reports Table */}
        <div className="bg-white shadow rounded p-4 overflow-x-auto relative z-10">
          {loading ? (
            <p>Loading reports...</p>
          ) : (
            <table className="w-full">
              <thead>
                <tr className="text-left border-b">
                  <th className="p-2">Category</th>
                  <th className="p-2">Location</th>
                  <th className="p-2">Status</th>
                  <th className="p-2">Priority</th>
                  <th className="p-2">Department</th>
                  <th className="p-2">Assigned To</th>
                  <th className="p-2">Date</th>
                </tr>
              </thead>
              <tbody>
                {filteredReports.map((r, index) => (
                  <tr
                    key={index}
                    className="border-b cursor-pointer hover:bg-gray-100"
                    onClick={() => openReport(r)}
                  >
                    <td className="p-2">{r.category}</td>
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
          )}
        </div>
      </div>

      {/* Floating Detail Panel */}
      <AnimatePresence>
        {selectedReport && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
            className="absolute top-20 right-10 bg-white shadow-xl rounded-lg p-6 w-full max-w-lg z-20"
          >
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 font-bold"
              onClick={() => setSelectedReport(null)}
            >
              ✕
            </button>

            {/* Issue Details */}
            <h2 className="text-xl font-bold mb-2 flex items-center">
              <Clipboard className="mr-2" /> {selectedReport.category}
            </h2>
            <p className="text-gray-600 mb-4">{selectedReport.shortInfo}</p>
            <div className="mb-4 border-b pb-2">
              <h3 className="font-semibold mb-1 flex items-center">
                <CheckCircle className="mr-2" /> Issue Details
              </h3>
              <p>
                <span className="font-semibold">Issue:</span>{" "}
                {selectedReport.issue}
              </p>
              <p>
                <span className="font-semibold">Progress:</span>{" "}
                {selectedReport.status}
              </p>
              <p>
                <span className="font-semibold">Priority:</span>{" "}
                {selectedReport.priority}
              </p>
              <p className="flex items-center">
                <MapPin className="mr-1" /> {selectedReport.location}
              </p>
              <p>
                <span className="font-semibold">Reported by:</span>{" "}
                {selectedReport.reporter}
              </p>
              <p className="flex items-center">
                <Calendar className="mr-1" /> {selectedReport.date}
              </p>
              {selectedReport.photo && (
                <img
                  src={selectedReport.photo}
                  alt="Evidence"
                  className="w-full rounded mt-2"
                />
              )}
            </div>

            {/* Assignment */}
            <div className="mb-4 border-b pb-2">
              <h3 className="font-semibold mb-1 flex items-center">
                <Users className="mr-2" /> Assignment Details
              </h3>
              <p>
                <span className="font-semibold">Department:</span>{" "}
                {selectedReport.department}
              </p>
              <p>
                <span className="font-semibold">Assigned to:</span>{" "}
                {selectedReport.assigned}
              </p>
              <p>
                <span className="font-semibold">Estimated resolution:</span>{" "}
                {selectedReport.estimatedResolution}
              </p>
            </div>

            {/* Status & Cost */}
            <div className="mb-4 border-b pb-2">
              <h3 className="font-semibold mb-1 flex items-center">
                <DollarSign className="mr-2" /> Status & Cost
              </h3>
              <p>
                <span className="font-semibold">Updated status:</span>{" "}
                {selectedReport.updatedStatus}
              </p>
              <p>
                <span className="font-semibold">Estimated cost:</span>{" "}
                {selectedReport.estimatedCost}
              </p>
            </div>

            {/* Notes */}
            <div className="mb-4">
              <h3 className="font-semibold mb-1 flex items-center">
                <Edit2 className="mr-2" /> Internal Notes
              </h3>
              <textarea
                className="w-full border rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                rows={4}
                value={internalNotes}
                onChange={(e) => setInternalNotes(e.target.value)}
                placeholder="Add or update internal notes..."
              />
            </div>

            {/* Buttons */}
            <div className="flex justify-end mt-4 space-x-2">
              <button
                onClick={handleSaveNotes}
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 flex items-center"
              >
                <CheckCircle className="mr-2" /> Save Notes
              </button>
              <button className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 flex items-center">
                <Users className="mr-2" /> Contact Reporter
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Reports;

