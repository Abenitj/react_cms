import React, { useState } from "react";
import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import User from "./page/User";
import Faq from "./page/Faq";
import Testimonial from "./page/Testimonial";
import SectionTitle from "./page/SectionTitle";
import Blog from "./page/Blog";
import Slider from "./page/Slider";
import Social from "./page/Social";
import Dashboard from "./page/Dashboard";
import Service from "./page/service";
import Product from "./page/product";
import AboutCompany from "./page/aboutCompany";
import CompanyValue from "./page/companyValue";
import Contact from "./page/contact";
import TeamMember from "./page/teamMembers";
import Layout from "./page/Layout";
import Login from "./page/Login";
import ProtectedRoute from "./Components/ProtectedRoute";
const App = () => {
  // State to track if the user is authenticated
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Example function to simulate user login and set authentication
  const login = () => {
    // Your login logic to set authentication status
    setIsAuthenticated(true);
  };

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login login={login} />} />

        {/* Protect the Layout and nested routes */}
        <Route
          path="/"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <Layout />
            </ProtectedRoute>
          }
        >
          <Route index element={<Dashboard />} />
          <Route path="user" element={<User />} />
          <Route path="faq" element={<Faq />} />
          <Route path="testimonial" element={<Testimonial />} />
          <Route path="section-title" element={<SectionTitle />} />
          <Route path="team-members" element={<TeamMember />} />
          <Route path="blog" element={<Blog />} />
          <Route path="about-company" element={<AboutCompany />} />
          <Route path="product" element={<Product />} />
          <Route path="service" element={<Service />} />
          <Route path="contact" element={<Contact />} />
          <Route path="slider" element={<Slider />} />
          <Route path="company-value" element={<CompanyValue />} />
        </Route>
        {/* Optional: You can add a route for 404 not found */}
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
};

export default App;
