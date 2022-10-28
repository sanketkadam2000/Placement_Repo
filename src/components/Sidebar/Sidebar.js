import { NavLink } from "react-router-dom";
import { FaBars, FaHome,FaCertificate ,FaUserTie, FaUser,FaUniversity } from "react-icons/fa";
import {  AiTwotoneFileExclamation } from "react-icons/ai";
import {  ImBook } from "react-icons/im";
import { RiAdminFill } from "react-icons/ri";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
const routes = [
  {
    path: "/Dashboard",
    name: "Dashboard",
    icon: <FaHome color={"#fff"} />,
  },
  {
    path: "/Student",
    name: "Student",
    icon: <FaUser color={"#fff"} />,
  },
  {
    path: "/Admin",
    name: "Admin",
    icon: <RiAdminFill color={"#fff"}/>,
  },
  {
    path: "/Certificate",
    name: "Certificate",
    icon: <FaCertificate color={"#fff"}/>,
  },
  {
    path: "/Courses",
    name: "COurses",
    icon: <ImBook color={"#fff"} />,
  },
  {
    path: "/College",
    name: "Colleges ",
    icon: <FaUniversity color={"#fff"}/>,
    
  },
  {
    path: "/Placement",
    name: "Placements ",
    icon: <AiTwotoneFileExclamation color={"#fff"}/>,
    
  },
  {
    path: "/User",
    name: "User ",
    icon: <FaUserTie color={"#fff"}/>,
    
  },
];

const SideBar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const inputAnimation = {
    hidden: {
      width: 0,
      padding: 0,
      transition: {
        duration: 0.2,
      },
    },
    show: {
      width: "140px",
      padding: "5px 15px",
      transition: {
        duration: 0.2,
      },
    },
  };

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
    <>
      <div className="main-container">
        <motion.div
          animate={{
            width: isOpen ? "200px" : "45px",

            transition: {
              duration: 0.5,
              type: "spring",
              damping: 10,
            },
          }}
          className={`sidebar `}
        >
          <div className="top_section">
            <AnimatePresence>
              {isOpen && (
                <motion.h1
                  variants={showAnimation}
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                  className="logo"
                >
                  Menu
                </motion.h1>
              )}
            </AnimatePresence>

            <div className="bars">
              <FaBars onClick={toggle} />
            </div>
          </div>
          
            
          <section className="routes">
            {routes.map((route, index) => {
             

              return (
                <NavLink
                  to={route.path}
                  key={index}
                  className="link"
                  activeClassName="active"
                >
                  <div className="icon">{route.icon}</div>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        variants={showAnimation}
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                        className="link_text"
                      >
                        {route.name}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </NavLink>
              );
            })}
          </section>
        </motion.div>
        <main className="maintag">{children}</main>
      
      </div>
    </>
  );
};

export default SideBar;