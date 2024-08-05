import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import '../styling/AdminDashboard.css'; 

const Overview = () => <div>Overview Content</div>;
const ManageUsers = () => <div>Manage Users Content</div>;
const ManageRepairs = () => <div>Manage Repairs Content</div>;
const ManageContent = () => <div>Manage Content</div>;
const Settings = () => <div>Settings Content</div>;

const AdminDashboard = () => {
  return (
    <div className="admin-dashboard">
      <aside className="admin-sidebar">
        <h2>Admin Dashboard</h2>
        <nav>
          <ul>
            <li><Link to="/admin">Overview</Link></li>
            <li><Link to="/admin/users">Manage Users</Link></li>
            <li><Link to="/admin/repairs">Manage Repairs</Link></li>
            <li><Link to="/admin/content">Manage Content</Link></li>
            <li><Link to="/admin/settings">Settings</Link></li>
          </ul>
        </nav>
      </aside>
      <main className="admin-content">
        <Routes>
          <Route path="/" element={<Overview />} />
          <Route path="/users" element={<ManageUsers />} />
          <Route path="/repairs" element={<ManageRepairs />} />
          <Route path="/content" element={<ManageContent />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </main>
    </div>
  );
};

export default AdminDashboard;
