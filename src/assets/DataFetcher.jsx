import {
  FaBlog,
  FaBoxOpen,
  FaQuestionCircle,
  FaCommentDots,
  FaIndustry,
  FaUserFriends,
} from "react-icons/fa";

export default [
  {
    label: "Total Blogs",
    url: "http://localhost:3002/api/blogs",
    Icon: FaBlog,
  },
  {
    label: "Total Products",
    url: "http://localhost:3002/api/product",
    Icon: FaBoxOpen,
  },
  {
    label: "Total FAQs",
    url: "http://localhost:3002/api/faq",
    Icon: FaQuestionCircle,
  },
  {
    label: "Total Sliders",
    url: "http://localhost:3002/api/slider",
    Icon: FaIndustry,  // Changed label to "Total Sliders"
  },
  {
    label: "Total Testimonials",
    url: "http://localhost:3002/api/testimony",
    Icon: FaCommentDots,
  },
  {
    label: "Total Services",
    url: "http://localhost:3002/api/service",
    Icon: FaIndustry,
  },
  {
    label: "Total Team-Member",
    url: "http://localhost:3002/api/team-member",
    Icon: FaUserFriends,
  },
];
