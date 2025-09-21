import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line,
} from "recharts";

const Analytics = () => {
  // Dummy data
  const monthlyData = [
    { name: "Jan", Issues: 30 },
    { name: "Feb", Issues: 45 },
    { name: "Mar", Issues: 28 },
    { name: "Apr", Issues: 60 },
    { name: "May", Issues: 50 },
  ];

  const categoryData = [
    { name: "Pothole", value: 40 },
    { name: "Streetlight", value: 20 },
    { name: "Garbage", value: 15 },
    { name: "Waterlogging", value: 10 },
    { name: "Traffic", value: 15 },
  ];

  const departmentResponseData = [
    { department: "Road", responseTime: 5 },
    { department: "Electric", responseTime: 8 },
    { department: "Sanitation", responseTime: 4 },
    { department: "Traffic", responseTime: 6 },
  ];

  const departmentWorkloadData = [
    { department: "Road", issues: 40 },
    { department: "Electric", issues: 20 },
    { department: "Sanitation", issues: 25 },
    { department: "Traffic", issues: 15 },
  ];

  const pieColors = ["#8884d8", "#82ca9d", "#ffc658", "#ff8042", "#8dd1e1"];

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* Header */}
      <header className="mb-6">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-2">📊 Analytics Dashboard</h1>
        <p className="text-gray-600">Detailed insights into city issues, response performance, and trends</p>
      </header>

      {/* Top Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
          <h2 className="text-lg font-semibold text-gray-700">Resolution Rate</h2>
          <p className="text-3xl font-bold text-green-500 mt-2">82%</p>
          <p className="text-gray-500 mt-1 text-sm">Percentage of issues resolved within SLA</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
          <h2 className="text-lg font-semibold text-gray-700">Avg Response Time</h2>
          <p className="text-3xl font-bold text-blue-500 mt-2">5h</p>
          <p className="text-gray-500 mt-1 text-sm">Average time taken to respond to reported issues</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
          <h2 className="text-lg font-semibold text-gray-700">Active Users</h2>
          <p className="text-3xl font-bold text-purple-500 mt-2">120</p>
          <p className="text-gray-500 mt-1 text-sm">Number of active users submitting reports</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
          <h2 className="text-lg font-semibold text-gray-700">Coverage Areas</h2>
          <p className="text-3xl font-bold text-orange-500 mt-2">15</p>
          <p className="text-gray-500 mt-1 text-sm">Total sectors and localities under monitoring</p>
        </div>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Monthly Report Trends */}
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">Monthly Report Trends</h2>
          <p className="text-gray-500 mb-2">Number of issues reported every month</p>
          <div style={{ width: "100%", height: 250 }}>
            <ResponsiveContainer>
              <BarChart data={monthlyData}>
                <XAxis dataKey="name" stroke="#8884d8" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="Issues" fill="#8884d8" barSize={30} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Report Category Distribution */}
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h2 className="text-xl font-semibold text-gray-700 mb-4">Report Category</h2>
            <p className="text-gray-500 mb-2">Distribution of issues by category</p>
            <ResponsiveContainer width="100%" height={250}>
              <PieChart>
                <Pie
                  data={categoryData}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  fill="#8884d8"
                  label={({ name, percent }) =>
                    `${name} (${(percent * 100).toFixed(0)}%)`
                  }
                >
                  {categoryData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={pieColors[index % pieColors.length]} />
                  ))}
                </Pie>
                <Tooltip formatter={(value) => `${value} issues`} />
              </PieChart>
            </ResponsiveContainer>
          </div>

        {/* Department Response Times */}
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">Department Response Times</h2>
          <p className="text-gray-500 mb-2">Average response time in hours by department</p>
          <div style={{ width: "100%", height: 250 }}>
            <ResponsiveContainer>
              <LineChart data={departmentResponseData}>
                <XAxis dataKey="department" stroke="#8884d8" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="responseTime" stroke="#82ca9d" strokeWidth={3} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Department Workload */}
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">Department Workload</h2>
          <p className="text-gray-500 mb-2">Number of issues assigned to each department</p>
          <div style={{ width: "100%", height: 250 }}>
            <ResponsiveContainer>
              <BarChart data={departmentWorkloadData}>
                <XAxis dataKey="department" stroke="#8884d8" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="issues" fill="#ffc658" barSize={30} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Performance Summary (Text-based) */}
        <div className="bg-white p-6 rounded-xl shadow-md col-span-2">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">Performance Summary</h2>
          <p className="text-gray-700 mb-2">
            The city administration has resolved <span className="font-bold text-green-600">82%</span> of reported issues within the expected SLA. The average response time across all departments is <span className="font-bold text-blue-600">5 hours</span>. 
          </p>
          <p className="text-gray-700 mb-2">
            Active users reporting issues: <span className="font-bold text-purple-600">120</span>. Coverage extends across <span className="font-bold text-orange-600">15</span> sectors. Departments with the fastest response are <span className="font-bold text-green-600">Sanitation (4h)</span> and <span className="font-bold text-green-600">Road (5h)</span>.
          </p>
          <p className="text-gray-700 mb-2">
            Departments handling the highest workload are <span className="font-bold text-purple-600">Road (40 issues)</span> and <span className="font-bold text-purple-600">Sanitation (25 issues)</span>.
          </p>
          <p className="text-gray-700">
            Overall, the city is performing efficiently with most issues resolved promptly, though attention is needed for <span className="font-bold text-red-600">Electric and Traffic departments</span> to improve response times.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
