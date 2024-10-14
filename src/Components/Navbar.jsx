import React, { useState } from 'react';
import { FaMoon, FaSun, FaBars, FaUserCircle, FaSignOutAlt } from 'react-icons/fa'; // Icons for dark mode, light mode, profile, and logout

const Navbar = ({ onClose }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle('dark-mode', !isDarkMode);
  };

  const handleLogout = () => {
    // Logic for logout, e.g., clearing user data from localStorage
    localStorage.removeItem('user');
    // Redirect to login page or perform other logout actions
    window.location.reload(); // Example: reload the page
  };

  return (
    <div 
      className={`w-full h-[50px] flex items-center justify-between px-4 text-neutral shadow-md ${isDarkMode ? 'bg-dark text-light' : ''}`}
    >
      <div>
        <FaBars className='hover:cursor-pointer' onClick={onClose} size={20} />
      </div>
      {/* Name/Brand */}
      <div className="text-xl font-bold">
        Senariyo Trading PLC
      </div>
      
      {/* Right side: Dark mode toggle and profile */}
      <div className="flex items-center space-x-4">
        {/* Dark/Light Mode Toggle */}
        <button 
          onClick={toggleDarkMode} 
          className="focus:outline-none"
        >
          {isDarkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
        </button>

        {/* Logout Button */}
        <button 
          onClick={handleLogout} 
          className="flex items-center space-x-1 hover:text-red-500 focus:outline-none"
        >
          <FaSignOutAlt size={20} />
          <span className="hidden md:inline">Logout</span>
        </button>
        
        {/* Profile Icon (commented out) */}
        {/* <div className="flex items-center space-x-2">
          <FaUserCircle size={30} />
          <span className="hidden md:inline">Profile</span>
        </div> */}
      </div>
    </div>
  );
};

export default Navbar;
