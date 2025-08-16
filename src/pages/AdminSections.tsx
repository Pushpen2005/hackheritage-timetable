import React from "react";

const AdminSection: React.FC = () => (
  <div className="p-8">
    <h1 className="text-3xl font-bold mb-4">Admin Section</h1>
    <p>Welcome to the Admin Section. Manage campus resources, users, and settings here.</p>
    <div className="mt-6">
      <a href="/admin-features">
        <button className="bg-primary text-white px-4 py-2 rounded shadow hover:bg-primary/80 transition-colors">
          Explore Admin Feature
        </button>
      </a>
    </div>
  </div>
);

export default AdminSection;
