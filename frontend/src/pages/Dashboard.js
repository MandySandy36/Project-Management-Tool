import React from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../components/navigation/Navbar';
import Sidebar from '../components/navigation/Sidebar';
import Task from '../components/projects/Task';

function Dashboard() {
  const { projectId } = useParams(); // Extract projectId from the URL

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1">
        <Navbar />
        <Task projectId={projectId} /> {/* Pass projectId to Task component */}
      </div>
    </div>
  );
}

export default Dashboard;