import { 
  FaHome, FaCog, FaBlog, FaBox, FaQuoteRight, FaSlidersH, FaQuestionCircle, 
  FaBuilding, FaShieldAlt, FaEnvelope, FaUsers 
} from 'react-icons/fa';

export default [
  {
    label: "Dashboard",
    icon: <FaHome />,
    link: "/"
  },
  {
    label: "Service",
    icon: <FaCog />,
    link: "/service"
  },
  {
    label: "Blog",
    icon: <FaBlog />,
    link: "/blog"
  },
  {
    label: "Product",
    icon: <FaBox />,
    link: "/product"
  },
  {
    label: "Testimony",
    icon: <FaQuoteRight />,
    link: "/Testimonial"
  },
  {
    label: "FAQ",
    icon: <FaQuestionCircle />,
    link: "/faq"
  },
  {
    label: "Slider",
    icon: <FaSlidersH />,  // Changed to better fit the "Slider" label
    link: "/slider"
  },
  {
    label: "About Company",
    icon: <FaBuilding />,
    link: "/aboutCompany"
  },
  {
    label: "Company Value",
    icon: <FaUsers />,  // Changed to represent people, fitting "Company Value"
    link: "/company-Value"
  },
  {
    label: "Contact",
    icon: <FaEnvelope />,
    link: "/contact"
  },
];
