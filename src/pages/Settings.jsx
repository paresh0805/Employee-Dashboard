import React, { useState } from "react";
import { Bell, Lock, FileText, Trash2, Shield } from "lucide-react";

const Settings = () => {
  const [name, setName] = useState("Jane Smith");
  const [email, setEmail] = useState("jane.smith@example.com");
  const [password, setPassword] = useState("");
  const [notifications, setNotifications] = useState(true);
  const [twoFactor, setTwoFactor] = useState(false);
  const [accountActive, setAccountActive] = useState(true);

  const handleSave = () => {
    alert("Settings saved successfully!");
  };

  const handleExportData = () => {
    alert("Data export started!");
  };

  const handleDeleteAccount = () => {
    if (window.confirm("Are you sure you want to delete the account?")) {
      alert("Account deleted!");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* Header */}
      <h1 className="text-3xl font-bold mb-6">⚙️ Settings</h1>

      <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-md space-y-6">
        {/* Profile Settings */}
        <section>
          <h2 className="text-xl font-semibold mb-4">Profile Settings</h2>
          <div className="grid gap-4">
            <div>
              <label className="block text-gray-700 mb-1">Full Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-1">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-1">Password</label>
              <input
                type="password"
                placeholder="Enter new password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
        </section>

        {/* Notifications */}
        <section>
          <h2 className="text-xl font-semibold mb-4">Notifications</h2>
          <div className="flex items-center gap-4">
            <Bell className="text-gray-500" />
            <span className="flex-1 text-gray-700">Enable notifications</span>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={notifications}
                onChange={() => setNotifications(!notifications)}
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:bg-blue-500 transition-all"></div>
              <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full peer-checked:translate-x-5 transition-transform"></div>
            </label>
          </div>
        </section>

        {/* Account Settings */}
        <section>
          <h2 className="text-xl font-semibold mb-4">Account Settings</h2>
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-4">
              <Lock className="text-gray-500" />
              <span className="flex-1 text-gray-700">Two-Factor Authentication</span>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={twoFactor}
                  onChange={() => setTwoFactor(!twoFactor)}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:bg-blue-500 transition-all"></div>
                <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full peer-checked:translate-x-5 transition-transform"></div>
              </label>
            </div>
            <div className="flex items-center gap-4">
              <Shield className="text-gray-500" />
              <span className="flex-1 text-gray-700">Account Active</span>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={accountActive}
                  onChange={() => setAccountActive(!accountActive)}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:bg-green-500 transition-all"></div>
                <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full peer-checked:translate-x-5 transition-transform"></div>
              </label>
            </div>
          </div>
        </section>

        {/* Data & Privacy */}
        <section>
          <h2 className="text-xl font-semibold mb-4">Data & Privacy</h2>
          <div className="flex flex-col gap-4">
            <button
              onClick={handleExportData}
              className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
            >
              <FileText size={18} /> Export Data
            </button>
            <button
              onClick={handleDeleteAccount}
              className="flex items-center gap-2 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
            >
              <Trash2 size={18} /> Delete Account
            </button>
          </div>
        </section>

        {/* Save Changes */}
        <div className="text-right">
          <button
            onClick={handleSave}
            className="px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 transition"
          >
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default Settings;
