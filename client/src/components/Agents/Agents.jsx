// Agent.js
import React from "react";

const agents = [
  { name: "John Doe", role: "Lead Agent", email: "john.doe@example.com" },
  { name: "Jane Smith", role: "Senior Agent", email: "jane.smith@example.com" },
];

const Agent = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="w-full max-w-4xl p-8 space-y-6 bg-white shadow-md rounded-lg">
        <h1 className="text-3xl font-bold text-center">Our Agents</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {agents.map((agent, index) => (
            <div
              key={index}
              className="p-4 bg-gray-50 border border-gray-300 rounded-lg shadow-sm"
            >
              <h2 className="text-xl font-semibold">{agent.name}</h2>
              <p className="text-sm text-gray-500">{agent.role}</p>
              <p className="text-sm text-gray-500">{agent.email}</p>
              <button className="mt-4 py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600">
                Contact
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Agent;
