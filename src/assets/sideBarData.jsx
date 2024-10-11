import { 
  FaHome, FaUserCog, FaServicestack, FaBlog, FaBox, FaComments, 
  FaSlidersH, FaQuestionCircle, FaBuilding, FaHandsHelping, 
  FaEnvelope, FaUsers, FaUserFriends 
} from 'react-icons/fa';

export default [
  {
    label: "Dashboard",
    icon: <FaHome />,
    link: "/"
  },
  {
    label: "Staff",
    icon: <FaUserCog />,  // Represents staff or user settings
    link: "/user"
  },
  {
    label: "Service",
    icon: <FaServicestack />,  // Represents services offered
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
    icon: <FaComments />,  // Represents testimonials or feedback
    link: "/testimonial"
  },
  {
    label: "FAQ",
    icon: <FaQuestionCircle />,
    link: "/faq"
  },
  {
    label: "Slider",
    icon: <FaSlidersH />,  // Fits the "Slider" label
    link: "/slider"
  },
  {
    label: "About Company",
    icon: <FaBuilding />,
    link: "/aboutCompany"
  },
  {
    label: "Company Value",
    icon: <FaHandsHelping />,  // Represents values and teamwork
    link: "/company-value"
  },
  {
    label: "Contact",
    icon: <FaEnvelope />,
    link: "/contact"
  },
  {
    label: "Team Members",
    icon: <FaUserFriends />,  // Represents a group or team
    link: "/team-members"
  },
];
