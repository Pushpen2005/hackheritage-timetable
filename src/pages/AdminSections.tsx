import { FC } from "react";


import CreateTimetableForm from '../components/CreateTimetableForm';

const AdminSection: FC = () => (
  <div className="p-8">
    <h1 className="text-3xl font-bold mb-4">Admin Section</h1>
    <p>Welcome to the Admin Section. Manage campus resources, users, and settings here.</p>
    <div className="mt-6 mb-8">
      <a href="/admin-features">
        <button className="bg-primary text-white px-4 py-2 rounded shadow hover:bg-primary/80 transition-colors">
          Explore Admin Feature
        </button>
      </a>
    </div>
    <CreateTimetableForm />
  </div>
);

export default AdminSection;
