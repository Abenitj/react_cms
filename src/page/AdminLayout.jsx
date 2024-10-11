// src/Components/AdminLayout.js
import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import Sidebar from '../Components/SideBar';

const AdminLayout = ({ onToggleSidebar }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSidebarToggle = () => {
    setIsOpen(!isOpen);
    onToggleSidebar();
  };

  return (
    <div className="flex w-screen h-screen bg-primary fixed">
      <div className={` ${isOpen ? 'w-[0px]' : 'w-[230px]'} transition-all duration-300 ease-in-out h-screen text-neutral`}>
        <Sidebar />
      </div>
      <div className="flex-1 w-6 flex flex-col bf-primary">
        <div className="w-full h-[50px] text-neutral bg-secondary">
          <Navbar onClose={handleSidebarToggle} />
        </div>
        <main className="flex-1 w-300 bg-primary pt-4 overflow-y-auto">
          <Outlet /> {/* Render child routes here */}
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
