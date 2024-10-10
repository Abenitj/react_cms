import {
  FaBlog,
  FaUser,
  FaBoxOpen,
  FaQuestionCircle,
  FaCommentDots,
  FaIndustry,
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
    label: "Total Testimonials",
    url: "http://localhost:3002/api/testimony",
    Icon: FaCommentDots,
  },
  {
    label: "Total Services",
    url: "http://localhost:3002/api/service",
    Icon: FaIndustry,
  },
];
