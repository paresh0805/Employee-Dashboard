import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { MapContainer, TileLayer, Marker, useMapEvents } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { Camera, MapPin, ListTodo, FileText, MessageSquare, Calendar } from "lucide-react";

// Fix for Leaflet markers in React
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});

const LocationSelector = ({ setLocation }) => {
  useMapEvents({
    click(e) {
      setLocation([e.latlng.lat, e.latlng.lng]);
    },
  });
  return null;
};

const ReportDetails = () => {
  const location = useLocation();
  const report = location.state?.report;

  // State
  const [status, setStatus] = useState(report?.status || "Pending");
  const [priority, setPriority] = useState(report?.priority || "Low");
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [photos, setPhotos] = useState([]);
  const [notes, setNotes] = useState(report?.internalNotes || "");
  const [mapLocation, setMapLocation] = useState([40.7128, -74.006]); // Default NYC
  const [socialPost] = useState({
    caption: "City of Urbanville: Ongoing work at Main Street 🚧",
    image: report?.photo || "/assets/2.jpeg",
    comments: [
      { user: "Alice", text: "Thanks for the quick response!" },
      { user: "Bob", text: "Please finish this before Monday rush hour." },
    ],
  });

  // To-do list handlers
  const addTask = () => {
    if (newTask.trim()) {
      setTasks([...tasks, { text: newTask, completed: false }]);
      setNewTask("");
    }
  };
  const toggleTask = (index) => {
    const updated = [...tasks];
    updated[index].completed = !updated[index].completed;
    setTasks(updated);
  };
  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  // Photo upload handler
  const handlePhotoUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPhotos([
        ...photos,
        { file, caption: "", date: new Date().toLocaleDateString() },
      ]);
    }
  };
  const updatePhotoCaption = (index, caption) => {
    const updated = [...photos];
    updated[index].caption = caption;
    setPhotos(updated);
  };

  if (!report) return <p>No report data found.</p>;

  return (
    <div className="p-8 bg-gray-100 min-h-screen space-y-8">
      {/* Header Form */}
      <div className="bg-white rounded-xl shadow p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="col-span-2">
          <label className="font-semibold block mb-1">Issue</label>
          <textarea
            className="w-full border rounded-lg p-2 shadow-sm focus:ring-2 focus:ring-blue-400 bg-white"
            defaultValue={report.report}
          />
        </div>
        <div>
          <label className="font-semibold block mb-1">Status</label>
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="w-full border rounded-lg p-2 shadow-sm focus:ring-2 focus:ring-blue-400 bg-white"
          >
            <option>Pending</option>
            <option>In-Progress</option>
            <option>Resolved</option>
          </select>
        </div>
        <div>
          <label className="font-semibold block mb-1">Priority</label>
          <select
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
            className="w-full border rounded-lg p-2 shadow-sm focus:ring-2 focus:ring-blue-400 bg-white"
          >
            <option>Low</option>
            <option>Medium</option>
            <option>High</option>
            <option>Urgent</option>
          </select>
        </div>
        <div>
          <label className="font-semibold block mb-1 flex items-center gap-1">
            <Calendar size={16} /> Reported Date
          </label>
          <input
            type="date"
            defaultValue={report.date ? new Date(report.date).toISOString().split("T")[0] : ""}
            className="w-full border rounded-lg p-2 shadow-sm focus:ring-2 focus:ring-blue-400 bg-white"
          />
        </div>
      </div>

      {/* Report Details */}
      <div className="bg-white rounded-xl shadow p-6 space-y-2">
        <h2 className="text-xl font-bold">Report Details</h2>
        <p><strong>Problem ID:</strong> {report.problemId || "CTV-2024-0158"}</p>
        <p><strong>Department:</strong> {report.department}</p>
        <p><strong>Assigned To:</strong> {report.assigned}</p>
        <p><strong>Estimated Cost:</strong> {report.estimatedCost}</p>
        <p><strong>Updated Status:</strong> {report.updatedStatus}</p>
      </div>

      {/* Location */}
      <div className="bg-white rounded-xl shadow p-6">
        <h2 className="text-xl font-bold mb-3 flex items-center gap-2">
          <MapPin size={18} /> Issue Location
        </h2>
        <MapContainer
          center={mapLocation}
          zoom={13}
          style={{ height: "300px", width: "100%" }}
          className="rounded-lg overflow-hidden"
        >
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          <LocationSelector setLocation={setMapLocation} />
          <Marker position={mapLocation}></Marker>
        </MapContainer>
        <p className="mt-2 text-gray-600">
          Coordinates: {mapLocation[0].toFixed(4)}, {mapLocation[1].toFixed(4)}
        </p>
      </div>

      {/* To-Do List */}
      <div className="bg-white rounded-xl shadow p-6">
        <h2 className="text-xl font-bold mb-3 flex items-center gap-2">
          <ListTodo size={18} /> Action Items
        </h2>
        <div className="flex space-x-2 mb-3">
          <input
            type="text"
            placeholder="Enter task..."
            className="flex-1 border rounded-lg p-2 shadow-sm focus:ring-2 focus:ring-blue-400"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
          />
          <button
            onClick={addTask}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700"
          >
            Add
          </button>
        </div>
        <ul className="space-y-2">
          {tasks.map((task, index) => (
            <li
              key={index}
              className={`flex justify-between items-center p-2 border rounded-lg shadow-sm ${
                task.completed ? "bg-green-50" : ""
              }`}
            >
              <span
                className={`flex-1 cursor-pointer ${
                  task.completed ? "line-through text-gray-500" : ""
                }`}
                onClick={() => toggleTask(index)}
              >
                {task.text}
              </span>
              <button
                onClick={() => deleteTask(index)}
                className="text-red-500 ml-2"
              >
                ✕
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Progress Photos */}
      <div className="bg-white rounded-xl shadow p-6">
        <h2 className="text-xl font-bold mb-3 flex items-center gap-2">
          <Camera size={18} /> Progress Photos
        </h2>

        {/* Styled Upload Button */}
        <label className="inline-block cursor-pointer px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700">
          📷 Upload Photo
          <input
            type="file"
            accept="image/*"
            onChange={handlePhotoUpload}
            className="hidden"
          />
        </label>

        {/* Photos Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
          {photos.map((photo, index) => (
            <div key={index} className="border rounded-lg p-2 shadow">
              <img
                src={URL.createObjectURL(photo.file)}
                alt="Progress"
                className="w-full h-32 object-cover rounded-lg"
              />
              <textarea
                className="w-full mt-2 border rounded-lg p-2 focus:ring-2 focus:ring-blue-400"
                placeholder="Enter caption..."
                value={photo.caption}
                onChange={(e) => updatePhotoCaption(index, e.target.value)}
              />
              <p className="text-sm text-gray-500 mt-1">📅 {photo.date}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Notes */}
      <div className="bg-white rounded-xl shadow p-6">
        <h2 className="text-xl font-bold mb-3 flex items-center gap-2">
          <FileText size={18} /> Notes
        </h2>
        <textarea
          className="w-full border rounded-lg p-2 shadow-sm focus:ring-2 focus:ring-blue-400"
          rows={3}
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
        />
      </div>

      {/* Social Media Post */}
      <div className="bg-white rounded-xl shadow p-6">
        <h2 className="text-xl font-bold mb-3 flex items-center gap-2">
          <MessageSquare size={18} /> Social Media Post
        </h2>
        <div className="border rounded-xl p-4 shadow-sm bg-gray-50">
          <p className="font-semibold">{socialPost.caption}</p>
          <img
            src={socialPost.image}
            alt="Social"
            className="w-full h-48 object-cover rounded-lg mt-2"
          />
          <div className="mt-3">
            <h3 className="font-semibold mb-2">Comments</h3>
            {socialPost.comments.map((c, i) => (
              <p key={i} className="border-b py-1">
                <strong>{c.user}:</strong> {c.text}
              </p>
            ))}
          </div>
        </div>
      </div>

      {/* Post Update */}
      <div className="flex justify-end">
        <button className="px-6 py-2 bg-green-600 text-white rounded-lg shadow hover:bg-green-700">
          Post Update
        </button>
      </div>
    </div>
  );
};

export default ReportDetails;
