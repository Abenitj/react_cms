import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, useSearchParams } from "react-router-dom";
import User from "./page/User";
import Faq from "./page/Faq";
import Testimonial from "./page/Testimonial";
import SectionTitle from "./page/SectionTitle";
import SiteConfiguration from "./page/SiteConfiguratin";
import Blog from "./page/Blog";
import Slider from "./page/Slider";
import Social from "./page/Social";
import Dashboard from "./page/Dashboard";
import Navbar from "./Components/Navbar";
import Sidebar from "./Components/SideBar";
import Service from "./page/service";
import Product from "./page/product";
import AboutCompany from "./page/aboutCompany";
import CompanyValue from "./page/companyValue";
import Contact from "./page/contact";
import TeamMember from "./page/teamMembers";
const App = () => {
const [isopen, setisopen] = useState(false)
  return (
    <Router>
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
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/user" element={<User />} />
              <Route path="/faq" element={<Faq />} />
              <Route path="/testimonial" element={<Testimonial />} />
              <Route path="/section-title" element={<SectionTitle />} />
              <Route path="/team-members" element={<TeamMember />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/AboutCompany" element={<AboutCompany />} />
              <Route path="/product" element={<Product />} />
              <Route path="/service" element={<Service/>}/>
              <Route path="/contact" element={<Contact/>}/>
              <Route path="/slider" element={<Slider/>}/>
              <Route path="/company-value" element={<CompanyValue/>}/>
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
};

export default App;
