import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, useSearchParams, Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Sidebar from "../Components/SideBar";
const Layout = () => {
const [isopen, setisopen] = useState(false)
  return (
      <div className="flex w-screen h-screen bg-primary fixed">
        {/* Sidebar: Fixed on the left side */}
        <div className={` ${isopen? 'w-[0px]':'w-[230px]' } transition-all duration-300 ease-in-out h-screen text-nuetral`}>
          <Sidebar />
        </div>
        {/* Main content area: occupies the rest of the screen */}
        <div className="flex-1 w-6 flex flex-col bf-primary">
          {/* Navbar: Fixed at the top of the main content area */}
          <div className="w-full h-[50px] text-neutral bg-secondary">
            <Navbar onClose={()=>setisopen(!isopen)} />
          </div>
          {/* Main content: the dashboard's main content area */}
          <main className=" flex-1 w-300 bg-primary pt-4 overflow-y-auto">
          <Outlet/>
          </main>
        </div>
      </div>
  );
};

export default Layout;
