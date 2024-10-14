import React, { useState } from 'react';
import SideBarList from './SideBarList';
import sideBarData from '../assets/sideBarData';
import profile from '../assets/profile';

const SideBar = () => {
  const [user] = useState(() => {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    return storedUser || { role: 'Role not available', fullname: 'Fullname not available' };
  });

  // Helper function to capitalize the first letter of a string
  const capitalize = (str) => {
    if (!str) return '';
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  };

  return (
    <div className="w-full h-screen overflow-x-hidden bg-secondary text-neutral scrollbar-none">
      <nav className="mt-4 box-border relative">
        <div className="flex flex-col items-center p-4">
          <div className="font-bold text-3xl">{capitalize(user.role)}</div>
          <h2 className="text-xl font-semibold text-center mt-2">
            {capitalize(user.fullname)}
          </h2>
        </div>
        <div className="mt-4 h-[calc(100vh-150px)] overflow-y-scroll scrollbar-thin scrollbar-thumb-secondary-V3 scrollbar-track-secondary">
          {sideBarData.length > 0 ? (
            sideBarData.map((data, index) => (
              <SideBarList
                key={index} 
                label={data.label}
                icon={data.icon}
                link={data.link}
              />
            ))
          ) : (
            <p className="text-center">No items available</p>
          )}
        </div>
      </nav>
    </div>
  );
};

export default SideBar;
