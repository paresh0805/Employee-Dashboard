import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import { ChevronDown, Filter, AlertTriangle } from "lucide-react";

// Fix default marker icons
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png",
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png",
});

// Chandigarh issue points
const allPoints = [
  { id: 1, lat: 30.7333, lng: 76.7794, type: "Pothole", priority: "High", name: "Pothole near Sector 17" },
  { id: 2, lat: 30.7410, lng: 76.7680, type: "Streetlight", priority: "Medium", name: "Streetlight not working near Sector 22" },
  { id: 3, lat: 30.7268, lng: 76.7873, type: "Garbage", priority: "Low", name: "Garbage dump near Sector 35" },
  { id: 4, lat: 30.7450, lng: 76.7620, type: "Waterlogging", priority: "High", name: "Waterlogging near Sector 9" },
  { id: 5, lat: 30.7502, lng: 76.7801, type: "Traffic", priority: "Medium", name: "Traffic congestion near Sector 8" },
  { id: 6, lat: 30.7210, lng: 76.7880, type: "Pothole", priority: "Low", name: "Pothole near Sector 34" },
];

const issueTypes = ["All", "Pothole", "Streetlight", "Garbage", "Waterlogging", "Traffic"];
const priorities = ["All", "High", "Medium", "Low"];

const MapView = () => {
  const [selectedType, setSelectedType] = useState("All");
  const [selectedPriority, setSelectedPriority] = useState("All");

  const filteredPoints = allPoints.filter((point) => {
    const typeMatch = selectedType === "All" || point.type === selectedType;
    const priorityMatch = selectedPriority === "All" || point.priority === selectedPriority;
    return typeMatch && priorityMatch;
  });

  return (
    <div className="w-full h-screen flex flex-col">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white p-6 shadow-lg flex flex-col md:flex-row justify-between items-center">
        <div>
          <h1 className="text-3xl font-extrabold drop-shadow-md">City Issues Map</h1>
          <p className="text-sm md:text-base mt-1 drop-shadow-sm">Visualize and filter city issues in real-time</p>
        </div>
        <div className="flex gap-4 mt-4 md:mt-0">
          {/* Issue Type Dropdown */}
          <div className="relative">
            <select
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              className="appearance-none bg-white border border-gray-300 px-12 py-2 rounded-lg shadow-md hover:shadow-lg transition cursor-pointer font-medium text-gray-800"
            >
              <option value="All" disabled>Filter by Issue</option>
              {issueTypes.map((type) => (
                <option key={type} value={type} className="text-gray-800">{type}</option>
              ))}
            </select>
            <Filter className="absolute left-3 top-2.5 text-gray-500 pointer-events-none" size={18} />
            <ChevronDown className="absolute right-3 top-2.5 text-gray-500 pointer-events-none" size={18} />
          </div>

          {/* Priority Dropdown */}
          <div className="relative">
            <select
              value={selectedPriority}
              onChange={(e) => setSelectedPriority(e.target.value)}
              className="appearance-none bg-white border border-gray-300 px-12 py-2 rounded-lg shadow-md hover:shadow-lg transition cursor-pointer font-medium text-gray-800"
            >
              <option value="All" disabled>Filter by Priority</option>
              {priorities.map((priority) => (
                <option key={priority} value={priority} className="text-gray-800">{priority}</option>
              ))}
            </select>
            <AlertTriangle className="absolute left-3 top-2.5 text-gray-500 pointer-events-none" size={18} />
            <ChevronDown className="absolute right-3 top-2.5 text-gray-500 pointer-events-none" size={18} />
          </div>
        </div>
      </header>

      {/* Map */}
      <div className="flex-1">
        <MapContainer center={[30.7333, 76.7794]} zoom={13} className="w-full h-full">
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution="&copy; OpenStreetMap contributors"
          />
          {filteredPoints.map((point) => (
            <Marker key={point.id} position={[point.lat, point.lng]}>
              <Popup>
                <span className="font-bold">{point.type} ({point.priority}):</span> {point.name}
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
  );
};

export default MapView;
