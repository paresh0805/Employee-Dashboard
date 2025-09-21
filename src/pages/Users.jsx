import React, { useState } from "react";
import { Edit, Trash2, Search } from "lucide-react";

const Users = () => {
  const [search, setSearch] = useState("");

  const usersData = [
    { id: 1, name: "Jane Smith", email: "jane.smith@example.com", role: "Admin", status: "Active" },
    { id: 2, name: "John Doe", email: "john.doe@example.com", role: "Editor", status: "Inactive" },
    { id: 3, name: "Alice Johnson", email: "alice.johnson@example.com", role: "Moderator", status: "Active" },
    { id: 4, name: "Bob Williams", email: "bob.williams@example.com", role: "Viewer", status: "Active" },
    { id: 5, name: "Charlie Brown", email: "charlie.brown@example.com", role: "Editor", status: "Inactive" },
  ];

  const filteredUsers = usersData.filter(
    (user) =>
      user.name.toLowerCase().includes(search.toLowerCase()) ||
      user.email.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="flex flex-col min-h-screen bg-gray-100 p-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
        <h1 className="text-3xl font-bold mb-4 md:mb-0">👥 Users Management</h1>
        <div className="relative w-full md:w-64">
          <input
            type="text"
            placeholder="Search users..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <Search className="absolute right-3 top-2.5 text-gray-400" size={18} />
        </div>
      </div>

      {/* Users Table */}
      <div className="overflow-x-auto bg-white rounded-lg shadow-md">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-blue-50">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Name</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Email</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Role</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Status</th>
              <th className="px-6 py-3 text-right text-sm font-semibold text-gray-700">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {filteredUsers.length > 0 ? (
              filteredUsers.map((user) => (
                <tr key={user.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-800">{user.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-800">{user.email}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-800">{user.role}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        user.status === "Active"
                          ? "bg-green-100 text-green-800"
                          : "bg-red-100 text-red-800"
                      }`}
                    >
                      {user.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right flex justify-end gap-2">
                    <button className="text-blue-500 hover:text-blue-700">
                      <Edit size={18} />
                    </button>
                    <button className="text-red-500 hover:text-red-700">
                      <Trash2 size={18} />
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="px-6 py-4 text-center text-gray-500">
                  No users found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
