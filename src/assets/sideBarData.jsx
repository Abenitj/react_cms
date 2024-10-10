import { 
  FaHome, FaUser, FaCog, FaBlog, FaBox, FaQuoteRight, FaSlidersH, FaQuestionCircle, 
  FaBuilding, FaUsers, FaShieldAlt, FaKey, FaEnvelope, FaCommentDots, FaChartLine 
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
    label: "About Company",
    icon: <FaBuilding />,
    link: "/about-company"
  },
  {
    label: "Company Value",
    icon: <FaShieldAlt />,
    link: "/company-Value"
  },
  {
    label: "Contact",
    icon: <FaEnvelope />,
    link: "/contact-details"
  },
];
