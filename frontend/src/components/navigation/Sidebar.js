import React from 'react';

const Sidebar = () => {
  return (
    <div className="w-64 bg-gray-900 text-white p-4">
      <h2 className="text-xl font-bold mb-6">Projects</h2>
      <ul>
        <li className="mb-2">
          <a href="#" className="hover:text-gray-300">Project 1</a>
        </li>
        <li className="mb-2">
          <a href="#" className="hover:text-gray-300">Project 2</a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;