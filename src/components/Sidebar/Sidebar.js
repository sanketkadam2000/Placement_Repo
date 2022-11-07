import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaHome, FaCertificate, FaUserTie, FaUser, FaUniversity } from "react-icons/fa";
import { AiTwotoneFileExclamation } from "react-icons/ai";
import { ImBook } from "react-icons/im";
import { RiAdminFill } from "react-icons/ri";
import { AnimatePresence, motion } from "framer-motion";

import "./sidebar.scss";

const sidebarNavItems = [
  {
    display: "Dashboard",
    icon: <FaHome color={"#fff"} />,
    to: "/Dashboard",
    section: "dashboard",
  },
  {
    display: "Student",
    icon: <FaUser color={"#fff"} />,
    to: "Student",
    section: "student",
  },
  {
    display: "Admin",
    icon: <RiAdminFill color={"#fff"} />,
    to: "Admin",
    section: "admin",
  },
  {
    display: "Certificate",
    icon: <FaCertificate color={"#fff"} />,
    to: "Certificate",
    section: "certificate",
  },
  {
    display: "Course",
    icon: <ImBook color={"#fff"} />,
    to: "Course",
    section: "course",
  },
  {
    display: "College",
    icon: <FaUniversity color={"#fff"} />,
    to: "College",
    section: "college",
  },
  {
    display: "Placement",
    icon: <AiTwotoneFileExclamation color={"#fff"} />,
    to: "Placement",
    section: "placement",
  },
  {
    display: "User",
    icon: <FaUserTie color={"#fff"} />,
    to: "User",
    section: "user",
  },
];

const Sidebar = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [stepHeight, setStepHeight] = useState(0);
  const sidebarRef = useRef();
  const indicatorRef = useRef();
  const location = useLocation();

  useEffect(() => {
    setTimeout(() => {
      const sidebarItem = sidebarRef.current.querySelector(".sidebar__menu__item");
      indicatorRef.current.style.height = `${sidebarItem.clientHeight}px`;
      setStepHeight(sidebarItem.clientHeight);
    }, 50);
  }, []);

  // change active index
  useEffect(() => {
    const curPath = window.location.pathname.split("/")[1];
    const activeItem = sidebarNavItems.findIndex((item) => item.section === curPath);
    setActiveIndex(curPath.length === 0 ? 0 : activeItem);
  }, [location]);

  const showAnimation = {
    hidden: {
      width: 0,
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    },
    show: {
      opacity: 1,
      width: "auto",
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div className="sidebar">
      <div className="sidebar__logo">
        <motion.h1 variants={showAnimation} initial="hidden" animate="show" exit="hidden" className="logo">
          Placement Cell
        </motion.h1>
      </div>
      <div ref={sidebarRef} className="sidebar__menu">
        {/* <div
          ref={indicatorRef}
          className="sidebar__menu__indicator"
          style={{
            transform: `translateX(-50%) translateY(${activeIndex * stepHeight}px)`,
          }}
        ></div> */}
        {sidebarNavItems.map((item, index) => (
          <Link to={item.to} key={index}>
            <div className={`sidebar__menu__item ${activeIndex === index ? "active" : ""}`}>
              <div className="sidebar__menu__item__icon">{item.icon}</div>
              <div className="sidebar__menu__item__text">{item.display}</div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
